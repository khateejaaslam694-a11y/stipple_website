// ============================================
// STIPPLE - Color Blindness Simulator
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const uploadContent = document.getElementById('uploadContent');
    const imagePreview = document.getElementById('imagePreview');
    const previewImg = document.getElementById('previewImg');
    const removeImage = document.getElementById('removeImage');
    const simulateBtn = document.getElementById('simulateBtn');
    const simulationSection = document.getElementById('simulationSection');
    const originalCanvas = document.getElementById('originalCanvas');
    const simulatedCanvas = document.getElementById('simulatedCanvas');
    const simulationTitle = document.getElementById('simulationTitle');
    const typeInfoTitle = document.getElementById('typeInfoTitle');
    const typeInfoDesc = document.getElementById('typeInfoDesc');
    const typePrevalence = document.getElementById('typePrevalence');
    const typeAffected = document.getElementById('typeAffected');
    const typeConfusion = document.getElementById('typeConfusion');
    const toggleGridView = document.getElementById('toggleGridView');
    const simulationGrid = document.getElementById('simulationGrid');
    const toast = document.getElementById('toast');
    const galleryCountEl = document.getElementById('galleryCount');

    let currentImage = null;
    let originalImageData = null;
    let gridVisible = false;

    // Color blindness type information
    const typeInfo = {
        normal: {
            title: 'Normal Vision (Trichromacy)',
            desc: 'Full color vision with all three types of cone cells (red, green, blue) functioning normally. This is how approximately 92% of the population sees the world.',
            prevalence: '~92% of population',
            affected: 'None — all cones functional',
            confusion: 'None'
        },
        protanopia: {
            title: 'Protanopia (Red-Blind)',
            desc: 'Complete absence of red cone photoreceptors. Red appears as dark, and it is difficult to distinguish between red/green and red/orange. Colors shift toward yellow and blue.',
            prevalence: '~1.3% of males, 0.02% of females',
            affected: 'L-cones (long wavelength / red)',
            confusion: 'Red ↔ Green, Red ↔ Brown, Green ↔ Yellow'
        },
        deuteranopia: {
            title: 'Deuteranopia (Green-Blind)',
            desc: 'Complete absence of green cone photoreceptors. This is the most common form of color blindness. Green and red appear very similar, shifted toward brown/yellow tones.',
            prevalence: '~1.2% of males, 0.01% of females',
            affected: 'M-cones (medium wavelength / green)',
            confusion: 'Red ↔ Green, Green ↔ Orange, Blue ↔ Purple'
        },
        tritanopia: {
            title: 'Tritanopia (Blue-Blind)',
            desc: 'Complete absence of blue cone photoreceptors. This is very rare. Blues appear greenish, yellows and oranges appear pinkish. Difficulty distinguishing blue from green and yellow from violet.',
            prevalence: '~0.001% of population',
            affected: 'S-cones (short wavelength / blue)',
            confusion: 'Blue ↔ Green, Yellow ↔ Violet, Red ↔ Pink'
        },
        achromatopsia: {
            title: 'Achromatopsia (Total Color Blindness)',
            desc: 'Complete inability to perceive any colors. The world appears entirely in shades of gray. This condition is extremely rare and often accompanied by light sensitivity and reduced visual acuity.',
            prevalence: '~0.003% of population',
            affected: 'All cone types — rod vision only',
            confusion: 'All colors appear as gray tones'
        },
        protanomaly: {
            title: 'Protanomaly (Red-Weak)',
            desc: 'Reduced sensitivity of red cone photoreceptors. Red, orange, and yellow appear shifted toward green and are less vivid. This is the mildest and most common form of red-green deficiency.',
            prevalence: '~1.3% of males, 0.02% of females',
            affected: 'L-cones (shifted sensitivity)',
            confusion: 'Red ↔ Orange, some Red ↔ Green'
        },
        deuteranomaly: {
            title: 'Deuteranomaly (Green-Weak)',
            desc: 'Reduced sensitivity of green cone photoreceptors. This is the single most common type of color vision deficiency. Green and yellow-green appear more red, and it can be hard to tell violet from blue.',
            prevalence: '~5% of males, 0.35% of females',
            affected: 'M-cones (shifted sensitivity)',
            confusion: 'Green ↔ Yellow, some Red ↔ Green'
        },
        tritanomaly: {
            title: 'Tritanomaly (Blue-Weak)',
            desc: 'Reduced sensitivity of blue cone photoreceptors. Blues appear greener and yellows/reds appear pinkish. This is extremely rare and affects males and females equally.',
            prevalence: '~0.01% of population',
            affected: 'S-cones (shifted sensitivity)',
            confusion: 'Blue ↔ Green, some Yellow ↔ Red'
        }
    };

    // Color blindness transformation matrices
    // Based on Brettel, Viénot & Mollon (1997) and Machado, Oliveira & Fernandes (2009)
    const matrices = {
        normal: [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1
        ],
        protanopia: [
            0.56667, 0.43333, 0.00000,
            0.55833, 0.44167, 0.00000,
            0.00000, 0.24167, 0.75833
        ],
        deuteranopia: [
            0.62500, 0.37500, 0.00000,
            0.70000, 0.30000, 0.00000,
            0.00000, 0.30000, 0.70000
        ],
        tritanopia: [
            0.95000, 0.05000, 0.00000,
            0.00000, 0.43333, 0.56667,
            0.00000, 0.47500, 0.52500
        ],
        achromatopsia: [
            0.2126, 0.7152, 0.0722,
            0.2126, 0.7152, 0.0722,
            0.2126, 0.7152, 0.0722
        ],
        protanomaly: [
            0.81667, 0.18333, 0.00000,
            0.33333, 0.66667, 0.00000,
            0.00000, 0.12500, 0.87500
        ],
        deuteranomaly: [
            0.80000, 0.20000, 0.00000,
            0.25833, 0.74167, 0.00000,
            0.00000, 0.14167, 0.85833
        ],
        tritanomaly: [
            0.96667, 0.03333, 0.00000,
            0.00000, 0.73333, 0.26667,
            0.00000, 0.18333, 0.81667
        ]
    };

    // Update gallery count
    updateGalleryCount();

    // Upload events
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
            handleUpload(file);
        }
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files[0]) handleUpload(e.target.files[0]);
    });

    removeImage.addEventListener('click', (e) => {
        e.stopPropagation();
        resetUpload();
    });

    simulateBtn.addEventListener('click', runSimulation);

    function handleUpload(file) {
        if (file.size > 10 * 1024 * 1024) {
            showToast('File too large. Max 10MB.');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            currentImage = new Image();
            currentImage.onload = () => {
                previewImg.src = e.target.result;
                uploadContent.hidden = true;
                imagePreview.hidden = false;
                simulateBtn.disabled = false;
            };
            currentImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    function resetUpload() {
        currentImage = null;
        originalImageData = null;
        fileInput.value = '';
        previewImg.src = '';
        uploadContent.hidden = false;
        imagePreview.hidden = true;
        simulateBtn.disabled = true;
        simulationSection.hidden = true;
    }

    // Apply color blindness matrix to image data
    function applyMatrix(sourceData, matrix) {
        const data = new Uint8ClampedArray(sourceData.data);

        for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];

            // Linearize (approximate gamma correction)
            const lr = Math.pow(r / 255, 2.2);
            const lg = Math.pow(g / 255, 2.2);
            const lb = Math.pow(b / 255, 2.2);

            // Apply transformation
            const nr = matrix[0] * lr + matrix[1] * lg + matrix[2] * lb;
            const ng = matrix[3] * lr + matrix[4] * lg + matrix[5] * lb;
            const nb = matrix[6] * lr + matrix[7] * lg + matrix[8] * lb;

            // De-linearize
            data[i] = Math.round(Math.pow(Math.max(0, Math.min(1, nr)), 1 / 2.2) * 255);
            data[i + 1] = Math.round(Math.pow(Math.max(0, Math.min(1, ng)), 1 / 2.2) * 255);
            data[i + 2] = Math.round(Math.pow(Math.max(0, Math.min(1, nb)), 1 / 2.2) * 255);
            // Alpha unchanged
        }

        return new ImageData(data, sourceData.width, sourceData.height);
    }

    function runSimulation() {
        if (!currentImage) return;

        // Scale image for performance
        const maxWidth = 600;
        let width = currentImage.width;
        let height = currentImage.height;

        if (width > maxWidth) {
            height = (height / width) * maxWidth;
            width = maxWidth;
        }

        // Draw original
        const origCtx = originalCanvas.getContext('2d');
        originalCanvas.width = width;
        originalCanvas.height = height;
        origCtx.drawImage(currentImage, 0, 0, width, height);

        originalImageData = origCtx.getImageData(0, 0, width, height);

        // Draw simulated (default normal)
        const simCtx = simulatedCanvas.getContext('2d');
        simulatedCanvas.width = width;
        simulatedCanvas.height = height;
        simCtx.drawImage(currentImage, 0, 0, width, height);

        simulationSection.hidden = false;
        simulationSection.scrollIntoView({ behavior: 'smooth' });

        showToast('Simulation ready! Click any type to compare.');
    }

    // Type selector buttons
    document.querySelectorAll('.type-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const type = btn.dataset.type;
            applySimulation(type);
        });
    });

    function applySimulation(type) {
        if (!originalImageData) return;

        const info = typeInfo[type];
        const matrix = matrices[type];

        // Update info panel
        simulationTitle.textContent = info.title;
        typeInfoTitle.textContent = info.title;
        typeInfoDesc.textContent = info.desc;
        typePrevalence.textContent = info.prevalence;
        typeAffected.textContent = info.affected;
        typeConfusion.textContent = info.confusion;

        // Apply transformation
        const simCtx = simulatedCanvas.getContext('2d');
        const transformedData = applyMatrix(originalImageData, matrix);
        simulatedCanvas.width = originalImageData.width;
        simulatedCanvas.height = originalImageData.height;
        simCtx.putImageData(transformedData, 0, 0);

        // Update grid if visible
        if (gridVisible) {
            renderGrid();
        }
    }

    // Grid view toggle
    toggleGridView.addEventListener('click', () => {
        gridVisible = !gridVisible;

        if (gridVisible) {
            simulationGrid.hidden = false;
            toggleGridView.querySelector('span:last-child') || 
            (toggleGridView.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="7" height="7"/>
                    <rect x="14" y="3" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/>
                </svg>
                Hide Grid View
            `);
            renderGrid();
        } else {
            simulationGrid.hidden = true;
            toggleGridView.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="7" height="7"/>
                    <rect x="14" y="3" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/>
                </svg>
                View All Types at Once
            `;
        }
    });

    function renderGrid() {
        if (!originalImageData) return;

        simulationGrid.innerHTML = '';

        const types = ['normal', 'protanopia', 'deuteranopia', 'tritanopia',
                       'achromatopsia', 'protanomaly', 'deuteranomaly', 'tritanomaly'];

        types.forEach(type => {
            const item = document.createElement('div');
            item.className = 'simulation-item';

            const title = document.createElement('h5');
            title.textContent = typeInfo[type].title.split('(')[0].trim();

            const canvas = document.createElement('canvas');
            canvas.width = originalImageData.width;
            canvas.height = originalImageData.height;

            const ctx = canvas.getContext('2d');
            const transformed = applyMatrix(originalImageData, matrices[type]);
            ctx.putImageData(transformed, 0, 0);

            item.appendChild(title);
            item.appendChild(canvas);
            simulationGrid.appendChild(item);
        });
    }

    // Toast
    function showToast(message) {
        const toastMsg = toast.querySelector('.toast-message');
        toastMsg.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }

    // Gallery count
    function updateGalleryCount() {
        try {
            const gallery = JSON.parse(localStorage.getItem('stipple_gallery') || '[]');
            if (galleryCountEl) galleryCountEl.textContent = gallery.length;
        } catch (e) {
            if (galleryCountEl) galleryCountEl.textContent = '0';
        }
    }
});
