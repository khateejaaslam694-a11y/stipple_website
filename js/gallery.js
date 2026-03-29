// ============================================
// STIPPLE - Gallery (Saved Artworks)
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
}
    const galleryCountEl = document.getElementById('galleryCount');
    const totalArtworks = document.getElementById('totalArtworks');
    const exportBtn = document.getElementById('exportBtn');
    const clearAllBtn = document.getElementById('clearAllBtn');
    const emptyState = document.getElementById('emptyState');
    const gallerySection = document.getElementById('gallerySection');
    const galleryGrid = document.getElementById('galleryGrid');
    const artworkModal = document.getElementById('artworkModal');
    const modalClose = document.getElementById('modalClose');
    const artworkModalBody = document.getElementById('artworkModalBody');
    const toast = document.getElementById('toast');

    const STORAGE_KEY = 'stipple_gallery';

    // Load & render
    loadGallery();

    // Export
    exportBtn.addEventListener('click', exportCollection);

    // Clear all
    clearAllBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete all saved artworks? This cannot be undone.')) {
            localStorage.removeItem(STORAGE_KEY);
            loadGallery();
            showToast('Gallery cleared');
        }
    });

    // Modal close
    modalClose.addEventListener('click', closeModal);
    artworkModal.querySelector('.modal-backdrop').addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    function getGallery() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        } catch {
            return [];
        }
    }

    function saveGallery(gallery) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(gallery));
    }

    function loadGallery() {
        const gallery = getGallery();

        // Update counts
        if (galleryCountEl) galleryCountEl.textContent = gallery.length;
        if (totalArtworks) totalArtworks.textContent = gallery.length;

        if (gallery.length === 0) {
            emptyState.hidden = false;
            gallerySection.hidden = true;
            return;
        }

        emptyState.hidden = true;
        gallerySection.hidden = false;
        renderGallery(gallery);
    }

    function renderGallery(gallery) {
        galleryGrid.innerHTML = '';

        gallery.forEach((artwork, index) => {
            const card = createArtworkCard(artwork, index);
            galleryGrid.appendChild(card);
        });
    }

    function createArtworkCard(artwork, index) {
        const card = document.createElement('div');
        card.className = 'artwork-card';

        const date = new Date(artwork.savedAt);
        const dateStr = date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });

        // Build palette strip
        let paletteHtml = '';
        if (artwork.colors && artwork.colors.length > 0) {
            artwork.colors.forEach(color => {
                paletteHtml += `<div class="palette-color" style="background-color: ${color.hex}"></div>`;
            });
        }

        const colorsCount = artwork.colors ? artwork.colors.length : 0;
        const customCount = artwork.customColors ? artwork.customColors.length : 0;
        const totalColors = colorsCount + customCount;

        card.innerHTML = `
            <div class="artwork-image">
                <img src="${artwork.image}" alt="Saved artwork">
                <div class="artwork-overlay">
                    <span class="artwork-date">${dateStr}</span>
                </div>
            </div>
            <div class="artwork-palette">
                ${paletteHtml}
            </div>
            <div class="artwork-content">
                <h4 class="artwork-title">${artwork.title || 'Untitled Artwork'}</h4>
                <p class="artwork-colors-count">${totalColors} color${totalColors !== 1 ? 's' : ''} extracted</p>
                <div class="artwork-actions">
                    <button class="artwork-btn view" data-index="${index}">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                        </svg>
                        View
                    </button>
                    <button class="artwork-btn delete" data-index="${index}">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"/>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                        </svg>
                        Delete
                    </button>
                </div>
            </div>
        `;

        // View button
        card.querySelector('.view').addEventListener('click', () => {
            openArtworkModal(artwork);
        });

        // Delete button
        card.querySelector('.delete').addEventListener('click', () => {
            if (confirm('Delete this artwork from your gallery?')) {
                deleteArtwork(index);
            }
        });

        return card;
    }

    function deleteArtwork(index) {
        const gallery = getGallery();
        gallery.splice(index, 1);
        saveGallery(gallery);
        loadGallery();
        showToast('Artwork removed from gallery');
    }

    function openArtworkModal(artwork) {
        const date = new Date(artwork.savedAt);
        const dateStr = date.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });

        let colorsHtml = '';

        // Dominant colors
        if (artwork.colors && artwork.colors.length > 0) {
            colorsHtml += `<h4 style="margin: 1.5rem 0 1rem; font-family: var(--font-display);">Dominant Colors</h4>`;
            colorsHtml += `<div class="modal-colors-grid">`;
            artwork.colors.forEach(color => {
                const hsl = color.hsl || { h: 0, s: 0, l: 0 };
                const cmyk = color.cmyk || { c: 0, m: 0, y: 0, k: 0 };
                colorsHtml += `
                    <div class="modal-color-item" onclick="navigator.clipboard.writeText('${color.hex}')">
                        <div class="modal-color-swatch" style="background-color: ${color.hex}"></div>
                        <div class="modal-color-details">
                            <span class="modal-color-name">${color.name}</span>
                            <span class="modal-color-hex">${color.hex}</span>
                            <span class="modal-color-values">
                                RGB: ${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}<br>
                                HSL: ${hsl.h}°, ${hsl.s}%, ${hsl.l}%<br>
                                CMYK: ${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%
                            </span>
                        </div>
                    </div>
                `;
            });
            colorsHtml += `</div>`;
        }

        // Custom picked colors
        if (artwork.customColors && artwork.customColors.length > 0) {
            colorsHtml += `<h4 style="margin: 1.5rem 0 1rem; font-family: var(--font-display);">Your Picked Colors</h4>`;
            colorsHtml += `<div class="modal-colors-grid">`;
            artwork.customColors.forEach(color => {
                const hsl = color.hsl || { h: 0, s: 0, l: 0 };
                colorsHtml += `
                    <div class="modal-color-item" onclick="navigator.clipboard.writeText('${color.hex}')">
                        <div class="modal-color-swatch" style="background-color: ${color.hex}"></div>
                        <div class="modal-color-details">
                            <span class="modal-color-name">${color.name}</span>
                            <span class="modal-color-hex">${color.hex}</span>
                        </div>
                    </div>
                `;
            });
            colorsHtml += `</div>`;
        }

        artworkModalBody.innerHTML = `
            <div class="artwork-detail">
                <img src="${artwork.image}" alt="Artwork" class="artwork-detail-image">
                <p class="artwork-detail-date">Saved on ${dateStr}</p>
                ${colorsHtml}
            </div>
        `;

        // Add modal-specific styles
        const style = document.createElement('style');
        style.textContent = `
            .artwork-detail-image {
                width: 100%;
                max-height: 400px;
                object-fit: contain;
                border-radius: var(--radius-lg);
                margin-bottom: var(--space-md);
            }
            .artwork-detail-date {
                text-align: center;
                font-size: 0.9rem;
                color: var(--gray-400);
                margin-bottom: var(--space-lg);
            }
            .modal-colors-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                gap: var(--space-md);
            }
            .modal-color-item {
                display: flex;
                gap: var(--space-md);
                padding: var(--space-md);
                background: var(--gray-50);
                border-radius: var(--radius-md);
                cursor: pointer;
                transition: all var(--transition-base);
            }
            .modal-color-item:hover {
                background: var(--gray-100);
                transform: translateY(-2px);
            }
            .modal-color-swatch {
                width: 48px;
                height: 48px;
                border-radius: var(--radius-md);
                flex-shrink: 0;
                border: 1px solid var(--gray-200);
            }
            .modal-color-details {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }
            .modal-color-name {
                font-weight: 600;
                font-size: 0.85rem;
                color: var(--gray-800);
            }
            .modal-color-hex {
                font-family: var(--font-mono);
                font-size: 0.8rem;
                color: var(--gray-500);
            }
            .modal-color-values {
                font-family: var(--font-mono);
                font-size: 0.7rem;
                color: var(--gray-400);
                line-height: 1.4;
            }
        `;
        artworkModalBody.appendChild(style);

        artworkModal.classList.add('active');
    }

    function closeModal() {
        artworkModal.classList.remove('active');
    }

    function exportCollection() {
        const gallery = getGallery();

        if (gallery.length === 0) {
            showToast('No artworks to export');
            return;
        }

        // Build export data (without base64 images to keep file small)
        const exportData = {
            app: 'Stipple',
            version: '1.0',
            exportedAt: new Date().toISOString(),
            totalArtworks: gallery.length,
            artworks: gallery.map(artwork => ({
                title: artwork.title || 'Untitled',
                savedAt: artwork.savedAt,
                colors: artwork.colors ? artwork.colors.map(c => ({
                    name: c.name,
                    hex: c.hex,
                    rgb: c.rgb,
                    hsl: c.hsl,
                    cmyk: c.cmyk,
                    temperature: c.temperature,
                    type: c.type
                })) : [],
                customColors: artwork.customColors ? artwork.customColors.map(c => ({
                    name: c.name,
                    hex: c.hex,
                    rgb: c.rgb,
                    hsl: c.hsl
                })) : []
            }))
        };

        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `stipple-collection-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);

        showToast('Collection exported!');
    }

    // Toast
    function showToast(message) {
        const toastMsg = toast.querySelector('.toast-message');
        toastMsg.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }
});
