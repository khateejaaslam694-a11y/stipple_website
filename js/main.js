// ============================================
// STIPPLE - Main Application
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const uploadContent = document.getElementById('uploadContent');
    const imagePreview = document.getElementById('imagePreview');
    const previewImg = document.getElementById('previewImg');
    const removeImage = document.getElementById('removeImage');
    const extractBtn = document.getElementById('extractBtn');
    const pickerSection = document.getElementById('pickerSection');
    const pickerCanvas = document.getElementById('pickerCanvas');
    const magnifier = document.getElementById('magnifier');
    const magnifierCanvas = document.getElementById('magnifierCanvas');
    const colorTooltip = document.getElementById('colorTooltip');
    const tooltipSwatch = document.getElementById('tooltipSwatch');
    const tooltipHex = document.getElementById('tooltipHex');
    const liveSwatch = document.getElementById('liveSwatch');
    const liveColorName = document.getElementById('liveColorName');
    const liveHex = document.getElementById('liveHex');
    const liveRgb = document.getElementById('liveRgb');
    const liveHsl = document.getElementById('liveHsl');
    const addPickedColor = document.getElementById('addPickedColor');
    const colorsSection = document.getElementById('colorsSection');
    const colorsGrid = document.getElementById('colorsGrid');
    const saveArtworkBtn = document.getElementById('saveArtworkBtn');
    const customPaletteSection = document.getElementById('customPaletteSection');
    const customPalette = document.getElementById('customPalette');
    const colorModal = document.getElementById('colorModal');
    const modalClose = document.getElementById('modalClose');
    const modalBody = document.getElementById('modalBody');
    const toast = document.getElementById('toast');
    const galleryCountEl = document.getElementById('galleryCount');
    
    // State
    let currentImage = null;
    let currentImageData = null;
    let extractedColors = [];
    let customColors = [];
    let currentPickedColor = null;
    
    // Update gallery count
    updateGalleryCount();
    
    // Upload Area Events
    uploadArea.addEventListener('click', (e) => {
        if (!e.target.closest('.remove-btn')) {
            fileInput.click();
        }
    });
    
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            handleImageUpload(file);
        }
    });
    
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            handleImageUpload(file);
        }
    });
    
    removeImage.addEventListener('click', (e) => {
        e.stopPropagation();
        resetUpload();
    });
    
    extractBtn.addEventListener('click', extractColors);
    
    // Handle image upload
    function handleImageUpload(file) {
        if (file.size > 10 * 1024 * 1024) {
            showToast('File too large. Maximum size is 10MB.');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = (e) => {
            currentImage = new Image();
            currentImage.onload = () => {
                previewImg.src = e.target.result;
                uploadContent.hidden = true;
                imagePreview.hidden = false;
                extractBtn.disabled = false;
            };
            currentImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
    
    function resetUpload() {
        currentImage = null;
        currentImageData = null;
        extractedColors = [];
        customColors = [];
        fileInput.value = '';
        previewImg.src = '';
        uploadContent.hidden = false;
        imagePreview.hidden = true;
        extractBtn.disabled = true;
        pickerSection.hidden = true;
        colorsSection.hidden = true;
        customPaletteSection.hidden = true;
    }
    
    // Extract colors
    function extractColors() {
        if (!currentImage) return;
        
        // Create canvas for color extraction
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Scale down for performance
        const maxSize = 300;
        let width = currentImage.width;
        let height = currentImage.height;
        
        if (width > height) {
            if (width > maxSize) {
                height = (height / width) * maxSize;
                width = maxSize;
            }
        } else {
            if (height > maxSize) {
                width = (width / height) * maxSize;
                height = maxSize;
            }
        }
        
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(currentImage, 0, 0, width, height);
        
        currentImageData = ctx.getImageData(0, 0, width, height);
        extractedColors = ColorUtils.extractDominantColors(currentImageData, 8);
        
        renderExtractedColors();
        setupColorPicker();
        
        colorsSection.hidden = false;
        pickerSection.hidden = false;
        
        // Scroll to picker section
        pickerSection.scrollIntoView({ behavior: 'smooth' });
        
        showToast('Colors extracted successfully!');
    }
    
    // Render extracted colors
    function renderExtractedColors() {
        colorsGrid.innerHTML = '';
        
        extractedColors.forEach((color, index) => {
            const card = createColorCard(color, index);
            colorsGrid.appendChild(card);
        });
    }
    
    function createColorCard(color, index) {
        const card = document.createElement('div');
        card.className = 'color-card';
        card.innerHTML = `
            <div class="color-swatch" style="background-color: ${color.hex}"></div>
            <div class="color-info">
                <h4 class="color-name">${color.name}</h4>
                <p class="color-hex">${color.hex}</p>
                <div class="color-meta">
                    <span class="color-tag ${color.temperature.toLowerCase()}">${color.temperature}</span>
                    <span class="color-tag ${color.type.toLowerCase()}">${color.type}</span>
                </div>
            </div>
            <div class="color-actions">
                <button class="color-action-btn details" data-index="${index}">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 16v-4"/>
                        <path d="M12 8h.01"/>
                    </svg>
                    Details
                </button>
            </div>
        `;
        
        // Click swatch to copy
        card.querySelector('.color-swatch').addEventListener('click', () => {
            copyToClipboard(color.hex);
            showToast(`Copied ${color.hex}`);
        });
        
        // Details button
        card.querySelector('.details').addEventListener('click', () => {
            openColorModal(color);
        });
        
        return card;
    }
    
    // Setup color picker
    function setupColorPicker() {
        const ctx = pickerCanvas.getContext('2d');
        const magCtx = magnifierCanvas.getContext('2d');
        
        // Draw image on picker canvas
        const maxWidth = Math.min(currentImage.width, 800);
        const scale = maxWidth / currentImage.width;
        
        pickerCanvas.width = currentImage.width * scale;
        pickerCanvas.height = currentImage.height * scale;
        ctx.drawImage(currentImage, 0, 0, pickerCanvas.width, pickerCanvas.height);
        
        const pickerWrapper = document.querySelector('.picker-canvas-wrapper');
        
        pickerWrapper.addEventListener('mousemove', (e) => {
            const rect = pickerCanvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Get pixel color
            const scaleX = pickerCanvas.width / rect.width;
            const scaleY = pickerCanvas.height / rect.height;
            const pixel = ctx.getImageData(x * scaleX, y * scaleY, 1, 1).data;
            
            const r = pixel[0];
            const g = pixel[1];
            const b = pixel[2];
            const hex = ColorUtils.rgbToHex(r, g, b);
            const hsl = ColorUtils.rgbToHsl(r, g, b);
            const colorName = ColorUtils.findColorName(r, g, b);
            
            // Update tooltip
            colorTooltip.style.display = 'flex';
            colorTooltip.style.left = `${x}px`;
            colorTooltip.style.top = `${y}px`;
            tooltipSwatch.style.backgroundColor = hex;
            tooltipHex.textContent = hex;
            
            // Update magnifier
            magnifier.style.display = 'block';
            magnifier.style.left = `${x - 60}px`;
            magnifier.style.top = `${y - 140}px`;
            
            // Draw magnified area
            const magSize = 50;
            magCtx.imageSmoothingEnabled = false;
            magCtx.clearRect(0, 0, 100, 100);
            magCtx.drawImage(
                pickerCanvas,
                (x * scaleX) - magSize / 2,
                (y * scaleY) - magSize / 2,
                magSize,
                magSize,
                0,
                0,
                100,
                100
            );
            
            // Update live color info
            liveSwatch.style.backgroundColor = hex;
            liveColorName.textContent = colorName.name;
            liveHex.textContent = hex;
            liveRgb.textContent = `${r}, ${g}, ${b}`;
            liveHsl.textContent = `${hsl.h}°, ${hsl.s}%, ${hsl.l}%`;
            
            currentPickedColor = {
                rgb: { r, g, b },
                hex,
                hsl,
                name: colorName.name
            };
            
            addPickedColor.disabled = false;
        });
        
        pickerWrapper.addEventListener('mouseleave', () => {
            colorTooltip.style.display = 'none';
            magnifier.style.display = 'none';
        });
        
        pickerWrapper.addEventListener('click', () => {
            if (currentPickedColor) {
                addColorToPalette(currentPickedColor);
            }
        });
    }
    
    // Add color to custom palette
    addPickedColor.addEventListener('click', () => {
        if (currentPickedColor) {
            addColorToPalette(currentPickedColor);
        }
    });
    
    function addColorToPalette(color) {
        // Check if already exists
        if (customColors.some(c => c.hex === color.hex)) {
            showToast('Color already in palette');
            return;
        }
        
        customColors.push({
            ...color,
            id: Date.now()
              // Save artwork to gallery
    saveArtworkBtn.addEventListener('click', () => {
        if (!currentImage || extractedColors.length === 0) {
            showToast('Extract colors first');
            return;
        }

        // Compress image for storage
        const saveCanvas = document.createElement('canvas');
        const saveCtx = saveCanvas.getContext('2d');
        const maxSave = 400;
        let sw = currentImage.width;
        let sh = currentImage.height;

        if (sw > sh) {
            if (sw > maxSave) { sh = (sh / sw) * maxSave; sw = maxSave; }
        } else {
            if (sh > maxSave) { sw = (sw / sh) * maxSave; sh = maxSave; }
        }

        saveCanvas.width = sw;
        saveCanvas.height = sh;
        saveCtx.drawImage(currentImage, 0, 0, sw, sh);

        const imageDataUrl = saveCanvas.toDataURL('image/jpeg', 0.7);

        const artwork = {
            id: Date.now(),
            image: imageDataUrl,
            colors: extractedColors,
            customColors: customColors,
            savedAt: new Date().toISOString(),
            title: 'Artwork ' + (getGallery().length + 1)
        };

        const gallery = getGallery();
        gallery.unshift(artwork);

        try {
            localStorage.setItem('stipple_gallery', JSON.stringify(gallery));
            updateGalleryCount();
            showToast('Artwork saved to gallery!');
        } catch (e) {
            showToast('Storage full. Try clearing old artworks.');
        }
    });

    function getGallery() {
        try {
            return JSON.parse(localStorage.getItem('stipple_gallery') || '[]');
        } catch {
            return [];
        }
    }

    // Color detail modal
    function openColorModal(color) {
        const hsv = ColorUtils.rgbToHsv(color.rgb.r, color.rgb.g, color.rgb.b);
        const cmyk = ColorUtils.rgbToCmyk(color.rgb.r, color.rgb.g, color.rgb.b);
        const luminance = ColorUtils.getLuminance(color.rgb.r, color.rgb.g, color.rgb.b);
        const contrastWhite = ColorUtils.getContrastRatio(color.rgb, { r: 255, g: 255, b: 255 });
        const contrastBlack = ColorUtils.getContrastRatio(color.rgb, { r: 0, g: 0, b: 0 });
        const wcagWhite = ColorUtils.getWcagCompliance(contrastWhite);
        const wcagBlack = ColorUtils.getWcagCompliance(contrastBlack);

        // Complementary
        const comp = ColorUtils.getComplementary(color.hsl.h, color.hsl.s, color.hsl.l);
        const compRgb = ColorUtils.hslToRgb(comp.h, comp.s, comp.l);
        const compHex = ColorUtils.rgbToHex(compRgb.r, compRgb.g, compRgb.b);

        // Analogous
        const analogous = ColorUtils.getAnalogous(color.hsl.h, color.hsl.s, color.hsl.l);
        const ana1 = ColorUtils.hslToRgb(analogous[0].h, analogous[0].s, analogous[0].l);
        const ana2 = ColorUtils.hslToRgb(analogous[1].h, analogous[1].s, analogous[1].l);

        // Triadic
        const triadic = ColorUtils.getTriadic(color.hsl.h, color.hsl.s, color.hsl.l);
        const tri1 = ColorUtils.hslToRgb(triadic[0].h, triadic[0].s, triadic[0].l);
        const tri2 = ColorUtils.hslToRgb(triadic[1].h, triadic[1].s, triadic[1].l);

        modalBody.innerHTML = `
            <div class="color-detail">
                <div class="detail-swatch" style="background-color: ${color.hex}"></div>
                <h3 class="detail-name">${color.name}</h3>
                <p class="detail-hex">${color.hex}</p>
                
                <div class="detail-tags">
                    <span class="color-tag ${color.temperature.toLowerCase()}">${color.temperature}</span>
                    <span class="color-tag ${color.type.toLowerCase()}">${color.type}</span>
                </div>
                
                <div class="detail-grid">
                    <div class="detail-item">
                        <span class="detail-label">RGB</span>
                        <span class="detail-value">${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">HSL</span>
                        <span class="detail-value">${color.hsl.h}°, ${color.hsl.s}%, ${color.hsl.l}%</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">HSV</span>
                        <span class="detail-value">${hsv.h}°, ${hsv.s}%, ${hsv.v}%</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">CMYK</span>
                        <span class="detail-value">${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Luminance</span>
                        <span class="detail-value">${luminance.toFixed(4)}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">CSS</span>
                        <span class="detail-value">rgb(${color.rgb.r},${color.rgb.g},${color.rgb.b})</span>
                    </div>
                </div>

                <h4 style="margin: 1.5rem 0 0.75rem; font-family: var(--font-display); font-size: 1rem;">Contrast & Accessibility</h4>
                <div class="detail-grid">
                    <div class="detail-item">
                        <span class="detail-label">vs White</span>
                        <span class="detail-value">${contrastWhite.toFixed(2)}:1 (${wcagWhite.level})</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">vs Black</span>
                        <span class="detail-value">${contrastBlack.toFixed(2)}:1 (${wcagBlack.level})</span>
                    </div>
                </div>

                <h4 style="margin: 1.5rem 0 0.75rem; font-family: var(--font-display); font-size: 1rem;">Color Harmonies</h4>
                <div style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; margin-bottom: 1.5rem;">
                    <div style="text-align: center;">
                        <div style="width:40px;height:40px;border-radius:8px;background:${compHex};margin:0 auto 4px;border:1px solid #e5e5e5;"></div>
                        <span style="font-size:0.65rem;color:#737373;">Complement</span>
                    </div>
                    <div style="text-align: center;">
                        <div style="width:40px;height:40px;border-radius:8px;background:${ColorUtils.rgbToHex(ana1.r,ana1.g,ana1.b)};margin:0 auto 4px;border:1px solid #e5e5e5;"></div>
                        <span style="font-size:0.65rem;color:#737373;">Analogous</span>
                    </div>
                    <div style="text-align: center;">
                        <div style="width:40px;height:40px;border-radius:8px;background:${ColorUtils.rgbToHex(ana2.r,ana2.g,ana2.b)};margin:0 auto 4px;border:1px solid #e5e5e5;"></div>
                        <span style="font-size:0.65rem;color:#737373;">Analogous</span>
                    </div>
                    <div style="text-align: center;">
                        <div style="width:40px;height:40px;border-radius:8px;background:${ColorUtils.rgbToHex(tri1.r,tri1.g,tri1.b)};margin:0 auto 4px;border:1px solid #e5e5e5;"></div>
                        <span style="font-size:0.65rem;color:#737373;">Triadic</span>
                    </div>
                    <div style="text-align: center;">
                        <div style="width:40px;height:40px;border-radius:8px;background:${ColorUtils.rgbToHex(tri2.r,tri2.g,tri2.b)};margin:0 auto 4px;border:1px solid #e5e5e5;"></div>
                        <span style="font-size:0.65rem;color:#737373;">Triadic</span>
                    </div>
                </div>

                <button class="detail-copy-btn" onclick="navigator.clipboard.writeText('${color.hex}')">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                    </svg>
                    Copy HEX
                </button>
            </div>
        `;

        colorModal.classList.add('active');
    }

    // Modal close
    modalClose.addEventListener('click', () => colorModal.classList.remove('active'));
    colorModal.querySelector('.modal-backdrop').addEventListener('click', () => colorModal.classList.remove('active'));
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') colorModal.classList.remove('active');
    });

    // Toast
    function showToast(message) {
        const toastMsg = toast.querySelector('.toast-message');
        toastMsg.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }

    // Copy to clipboard
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).catch(() => {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        });
    }

    function updateGalleryCount() {
        const gallery = getGallery();
        if (galleryCountEl) galleryCountEl.textContent = gallery.length;
    }
        });
        
        renderCustomPalette();
        customPaletteSection.hidden = false;
        showToast(`Added ${color.name} to palette`);
    }
    
    function renderCustomPalette() {
        customPalette.innerHTML = '';
        
        customColors.forEach((color) => {
            const div = document.createElement('div');
            div.className = 'custom-color';
            div.innerHTML = `
                <div class="custom-color-swatch" style="background-color: ${color.hex}"></div>
                <div class="custom-color-info">
                    <span class="custom-color-name">${color.name}</span>
                    <span class="custom-color-hex">${color.hex}</span>
                </div>
                <button>
