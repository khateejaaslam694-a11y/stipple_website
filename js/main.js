document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
}
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

    let currentImage = null;
    let currentImageData = null;
    let extractedColors = [];
    let customColors = [];
    let currentPickedColor = null;

    updateGalleryCount();

    // ===== UPLOAD EVENTS =====
    uploadArea.addEventListener('click', function(e) {
        if (e.target.closest('.remove-btn')) return;
        fileInput.click();
    });

    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        e.stopPropagation();
        uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', function(e) {
        e.preventDefault();
        e.stopPropagation();
        uploadArea.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        e.stopPropagation();
        uploadArea.classList.remove('dragover');
        var file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            handleImageUpload(file);
        }
    });

    fileInput.addEventListener('change', function(e) {
        var file = e.target.files[0];
        if (file) {
            handleImageUpload(file);
        }
    });

    removeImage.addEventListener('click', function(e) {
        e.stopPropagation();
        resetUpload();
    });

    extractBtn.addEventListener('click', extractColors);

    // ===== HANDLE IMAGE UPLOAD =====
    function handleImageUpload(file) {
        if (file.size > 10 * 1024 * 1024) {
            showToast('File too large. Maximum size is 10MB.');
            return;
        }

        var reader = new FileReader();
        reader.onload = function(e) {
            currentImage = new Image();
            currentImage.onload = function() {
                previewImg.src = currentImage.src;
                uploadContent.hidden = true;
                imagePreview.hidden = false;
                extractBtn.disabled = false;
                showToast('Image loaded! Click Extract Colors.');
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

    // ===== EXTRACT COLORS =====
    function extractColors() {
        if (!currentImage) return;

        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');

        var maxSize = 300;
        var width = currentImage.width;
        var height = currentImage.height;

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

        pickerSection.scrollIntoView({ behavior: 'smooth' });
        showToast('Colors extracted successfully!');
    }

    // ===== RENDER EXTRACTED COLORS =====
    function renderExtractedColors() {
        colorsGrid.innerHTML = '';
        extractedColors.forEach(function(color, index) {
            var card = createColorCard(color, index);
            colorsGrid.appendChild(card);
        });
    }

    function createColorCard(color, index) {
        var card = document.createElement('div');
        card.className = 'color-card';
        card.innerHTML =
            '<div class="color-swatch" style="background-color: ' + color.hex + '"></div>' +
            '<div class="color-info">' +
                '<h4 class="color-name">' + color.name + '</h4>' +
                '<p class="color-hex">' + color.hex + '</p>' +
                '<div class="color-meta">' +
                    '<span class="color-tag ' + color.temperature.toLowerCase() + '">' + color.temperature + '</span>' +
                    '<span class="color-tag ' + color.type.toLowerCase() + '">' + color.type + '</span>' +
                '</div>' +
            '</div>' +
            '<div class="color-actions">' +
                '<button class="color-action-btn details" data-index="' + index + '">' +
                    'Details' +
                '</button>' +
            '</div>';

        card.querySelector('.color-swatch').addEventListener('click', function() {
            copyToClipboard(color.hex);
            showToast('Copied ' + color.hex);
        });

        card.querySelector('.details').addEventListener('click', function() {
            openColorModal(color);
        });

        return card;
    }

    // ===== COLOR PICKER =====
    function setupColorPicker() {
        var ctx = pickerCanvas.getContext('2d');
        var magCtx = magnifierCanvas.getContext('2d');

        var maxWidth = Math.min(currentImage.width, 800);
        var scale = maxWidth / currentImage.width;

        pickerCanvas.width = currentImage.width * scale;
        pickerCanvas.height = currentImage.height * scale;
        ctx.drawImage(currentImage, 0, 0, pickerCanvas.width, pickerCanvas.height);

        var pickerWrapper = document.querySelector('.picker-canvas-wrapper');

        pickerWrapper.addEventListener('mousemove', function(e) {
            var rect = pickerCanvas.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;

            var scaleX = pickerCanvas.width / rect.width;
            var scaleY = pickerCanvas.height / rect.height;
            var pixel = ctx.getImageData(x * scaleX, y * scaleY, 1, 1).data;

            var r = pixel[0];
            var g = pixel[1];
            var b = pixel[2];
            var hex = ColorUtils.rgbToHex(r, g, b);
            var hsl = ColorUtils.rgbToHsl(r, g, b);
            var colorName = ColorUtils.findColorName(r, g, b);

            colorTooltip.style.display = 'flex';
            colorTooltip.style.left = x + 'px';
            colorTooltip.style.top = y + 'px';
            tooltipSwatch.style.backgroundColor = hex;
            tooltipHex.textContent = hex;

            magnifier.style.display = 'block';
            magnifier.style.left = (x - 60) + 'px';
            magnifier.style.top = (y - 140) + 'px';

            var magSize = 50;
            magCtx.imageSmoothingEnabled = false;
            magCtx.clearRect(0, 0, 100, 100);
            magCtx.drawImage(
                pickerCanvas,
                (x * scaleX) - magSize / 2,
                (y * scaleY) - magSize / 2,
                magSize, magSize,
                0, 0, 100, 100
            );

            liveSwatch.style.backgroundColor = hex;
            liveColorName.textContent = colorName.name;
            liveHex.textContent = hex;
            liveRgb.textContent = r + ', ' + g + ', ' + b;
            liveHsl.textContent = hsl.h + '°, ' + hsl.s + '%, ' + hsl.l + '%';

            currentPickedColor = {
                rgb: { r: r, g: g, b: b },
                hex: hex,
                hsl: hsl,
                name: colorName.name
            };

            addPickedColor.disabled = false;
        });

        pickerWrapper.addEventListener('mouseleave', function() {
            colorTooltip.style.display = 'none';
            magnifier.style.display = 'none';
        });

        pickerWrapper.addEventListener('click', function() {
            if (currentPickedColor) {
                addColorToPalette(currentPickedColor);
            }
        });
    }

    // ===== CUSTOM PALETTE =====
    addPickedColor.addEventListener('click', function() {
        if (currentPickedColor) {
            addColorToPalette(currentPickedColor);
        }
    });

    function addColorToPalette(color) {
        var exists = false;
        for (var i = 0; i < customColors.length; i++) {
            if (customColors[i].hex === color.hex) {
                exists = true;
                break;
            }
        }
        if (exists) {
            showToast('Color already in palette');
            return;
        }

        customColors.push({
            rgb: color.rgb,
            hex: color.hex,
            hsl: color.hsl,
            name: color.name,
            id: Date.now()
        });

        renderCustomPalette();
        customPaletteSection.hidden = false;
        showToast('Added ' + color.name + ' to palette');
    }

    function renderCustomPalette() {
        customPalette.innerHTML = '';

        customColors.forEach(function(color, index) {
            var div = document.createElement('div');
            div.className = 'custom-color';
            div.innerHTML =
                '<div class="custom-color-swatch" style="background-color: ' + color.hex + '"></div>' +
                '<div class="custom-color-info">' +
                    '<span class="custom-color-name">' + color.name + '</span>' +
                    '<span class="custom-color-hex">' + color.hex + '</span>' +
                '</div>' +
                '<button class="custom-color-remove" data-index="' + index + '">✕</button>';

            div.querySelector('.custom-color-remove').addEventListener('click', function() {
                customColors.splice(index, 1);
                renderCustomPalette();
                if (customColors.length === 0) customPaletteSection.hidden = true;
                showToast('Color removed');
            });

            customPalette.appendChild(div);
        });
    }

    // ===== SAVE ARTWORK =====
    saveArtworkBtn.addEventListener('click', function() {
        if (!currentImage || extractedColors.length === 0) {
            showToast('Extract colors first');
            return;
        }

        var saveCanvas = document.createElement('canvas');
        var saveCtx = saveCanvas.getContext('2d');
        var maxSave = 400;
        var sw = currentImage.width;
        var sh = currentImage.height;

        if (sw > sh) {
            if (sw > maxSave) { sh = (sh / sw) * maxSave; sw = maxSave; }
        } else {
            if (sh > maxSave) { sw = (sw / sh) * maxSave; sh = maxSave; }
        }

        saveCanvas.width = sw;
        saveCanvas.height = sh;
        saveCtx.drawImage(currentImage, 0, 0, sw, sh);

        var imageDataUrl = saveCanvas.toDataURL('image/jpeg', 0.7);

        var artwork = {
            id: Date.now(),
            image: imageDataUrl,
            colors: extractedColors,
            customColors: customColors,
            savedAt: new Date().toISOString(),
            title: 'Artwork ' + (getGallery().length + 1)
        };

        var gallery = getGallery();
        gallery.unshift(artwork);

        try {
            localStorage.setItem('stipple_gallery', JSON.stringify(gallery));
            updateGalleryCount();
            showToast('Artwork saved to gallery!');
        } catch (e) {
            showToast('Storage full. Try clearing old artworks.');
        }
    });

    // ===== COLOR DETAIL MODAL =====
    function openColorModal(color) {
        var hsv = ColorUtils.rgbToHsv(color.rgb.r, color.rgb.g, color.rgb.b);
        var cmyk = ColorUtils.rgbToCmyk(color.rgb.r, color.rgb.g, color.rgb.b);
        var luminance = ColorUtils.getLuminance(color.rgb.r, color.rgb.g, color.rgb.b);
        var contrastWhite = ColorUtils.getContrastRatio(color.rgb, { r: 255, g: 255, b: 255 });
        var contrastBlack = ColorUtils.getContrastRatio(color.rgb, { r: 0, g: 0, b: 0 });
        var wcagWhite = ColorUtils.getWcagCompliance(contrastWhite);
        var wcagBlack = ColorUtils.getWcagCompliance(contrastBlack);

        var comp = ColorUtils.getComplementary(color.hsl.h, color.hsl.s, color.hsl.l);
        var compRgb = ColorUtils.hslToRgb(comp.h, comp.s, comp.l);
        var compHex = ColorUtils.rgbToHex(compRgb.r, compRgb.g, compRgb.b);

        var analogous = ColorUtils.getAnalogous(color.hsl.h, color.hsl.s, color.hsl.l);
        var ana1 = ColorUtils.hslToRgb(analogous[0].h, analogous[0].s, analogous[0].l);
        var ana2 = ColorUtils.hslToRgb(analogous[1].h, analogous[1].s, analogous[1].l);

        var triadic = ColorUtils.getTriadic(color.hsl.h, color.hsl.s, color.hsl.l);
        var tri1 = ColorUtils.hslToRgb(triadic[0].h, triadic[0].s, triadic[0].l);
        var tri2 = ColorUtils.hslToRgb(triadic[1].h, triadic[1].s, triadic[1].l);

        modalBody.innerHTML =
            '<div class="color-detail">' +
                '<div class="detail-swatch" style="background-color: ' + color.hex + '"></div>' +
                '<h3 class="detail-name">' + color.name + '</h3>' +
                '<p class="detail-hex">' + color.hex + '</p>' +
                '<div class="detail-tags">' +
                    '<span class="color-tag ' + color.temperature.toLowerCase() + '">' + color.temperature + '</span>' +
                    '<span class="color-tag ' + color.type.toLowerCase() + '">' + color.type + '</span>' +
                '</div>' +
                '<div class="detail-grid">' +
                    '<div class="detail-item"><span class="detail-label">RGB</span><span class="detail-value">' + color.rgb.r + ', ' + color.rgb.g + ', ' + color.rgb.b + '</span></div>' +
                    '<div class="detail-item"><span class="detail-label">HSL</span><span class="detail-value">' + color.hsl.h + '°, ' + color.hsl.s + '%, ' + color.hsl.l + '%</span></div>' +
                    '<div class="detail-item"><span class="detail-label">HSV</span><span class="detail-value">' + hsv.h + '°, ' + hsv.s + '%, ' + hsv.v + '%</span></div>' +
                    '<div class="detail-item"><span class="detail-label">CMYK</span><span class="detail-value">' + cmyk.c + '%, ' + cmyk.m + '%, ' + cmyk.y + '%, ' + cmyk.k + '%</span></div>' +
                    '<div class="detail-item"><span class="detail-label">Luminance</span><span class="detail-value">' + luminance.toFixed(4) + '</span></div>' +
                    '<div class="detail-item"><span class="detail-label">CSS</span><span class="detail-value">rgb(' + color.rgb.r + ',' + color.rgb.g + ',' + color.rgb.b + ')</span></div>' +
                '</div>' +
                '<h4 style="margin:1.5rem 0 .75rem;font-family:var(--font-display);font-size:1rem;">Contrast</h4>' +
                '<div class="detail-grid">' +
                    '<div class="detail-item"><span class="detail-label">vs White</span><span class="detail-value">' + contrastWhite.toFixed(2) + ':1 (' + wcagWhite.level + ')</span></div>' +
                    '<div class="detail-item"><span class="detail-label">vs Black</span><span class="detail-value">' + contrastBlack.toFixed(2) + ':1 (' + wcagBlack.level + ')</span></div>' +
                '</div>' +
                '<h4 style="margin:1.5rem 0 .75rem;font-family:var(--font-display);font-size:1rem;">Harmonies</h4>' +
                '<div style="display:flex;gap:.5rem;justify-content:center;flex-wrap:wrap;margin-bottom:1.5rem;">' +
                    '<div style="text-align:center"><div style="width:40px;height:40px;border-radius:8px;background:' + compHex + ';margin:0 auto 4px;border:1px solid #e5e5e5"></div><span style="font-size:.65rem;color:#737373">Complement</span></div>' +
                    '<div style="text-align:center"><div style="width:40px;height:40px;border-radius:8px;background:' + ColorUtils.rgbToHex(ana1.r,ana1.g,ana1.b) + ';margin:0 auto 4px;border:1px solid #e5e5e5"></div><span style="font-size:.65rem;color:#737373">Analogous</span></div>' +
                    '<div style="text-align:center"><div style="width:40px;height:40px;border-radius:8px;background:' + ColorUtils.rgbToHex(ana2.r,ana2.g,ana2.b) + ';margin:0 auto 4px;border:1px solid #e5e5e5"></div><span style="font-size:.65rem;color:#737373">Analogous</span></div>' +
                    '<div style="text-align:center"><div style="width:40px;height:40px;border-radius:8px;background:' + ColorUtils.rgbToHex(tri1.r,tri1.g,tri1.b) + ';margin:0 auto 4px;border:1px solid #e5e5e5"></div><span style="font-size:.65rem;color:#737373">Triadic</span></div>' +
                    '<div style="text-align:center"><div style="width:40px;height:40px;border-radius:8px;background:' + ColorUtils.rgbToHex(tri2.r,tri2.g,tri2.b) + ';margin:0 auto 4px;border:1px solid #e5e5e5"></div><span style="font-size:.65rem;color:#737373">Triadic</span></div>' +
                '</div>' +
                '<button class="detail-copy-btn" id="modalCopyBtn">Copy HEX</button>' +
            '</div>';

        document.getElementById('modalCopyBtn').addEventListener('click', function() {
            copyToClipboard(color.hex);
            showToast('Copied ' + color.hex);
        });

        colorModal.classList.add('active');
    }

    // ===== MODAL CLOSE =====
    modalClose.addEventListener('click', function() {
        colorModal.classList.remove('active');
    });

    colorModal.querySelector('.modal-backdrop').addEventListener('click', function() {
        colorModal.classList.remove('active');
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') colorModal.classList.remove('active');
    });

    // ===== UTILITIES =====
    function showToast(message) {
        var toastMsg = toast.querySelector('.toast-message');
        toastMsg.textContent = message;
        toast.classList.add('show');
        setTimeout(function() { toast.classList.remove('show'); }, 3000);
    }

    function copyToClipboard(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text);
        } else {
            var ta = document.createElement('textarea');
            ta.value = text;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
        }
    }

    function getGallery() {
        try {
            return JSON.parse(localStorage.getItem('stipple_gallery') || '[]');
        } catch (e) {
            return [];
        }
    }

    function updateGalleryCount() {
        var gallery = getGallery();
        if (galleryCountEl) galleryCountEl.textContent = gallery.length;
    }
});
