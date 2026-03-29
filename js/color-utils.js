// ============================================
// STIPPLE - Color Utilities
// ============================================

// Color Database - 120+ named colors
const COLOR_DATABASE = [
    // Reds
    { name: "Crimson", hex: "#DC143C", rgb: [220, 20, 60] },
    { name: "Scarlet", hex: "#FF2400", rgb: [255, 36, 0] },
    { name: "Ruby", hex: "#E0115F", rgb: [224, 17, 95] },
    { name: "Cherry", hex: "#DE3163", rgb: [222, 49, 99] },
    { name: "Burgundy", hex: "#800020", rgb: [128, 0, 32] },
    { name: "Maroon", hex: "#800000", rgb: [128, 0, 0] },
    { name: "Rose", hex: "#FF007F", rgb: [255, 0, 127] },
    { name: "Coral", hex: "#FF7F50", rgb: [255, 127, 80] },
    { name: "Salmon", hex: "#FA8072", rgb: [250, 128, 114] },
    { name: "Vermillion", hex: "#E34234", rgb: [227, 66, 52] },
    
    // Oranges
    { name: "Tangerine", hex: "#FF9966", rgb: [255, 153, 102] },
    { name: "Peach", hex: "#FFCBA4", rgb: [255, 203, 164] },
    { name: "Apricot", hex: "#FBCEB1", rgb: [251, 206, 177] },
    { name: "Amber", hex: "#FFBF00", rgb: [255, 191, 0] },
    { name: "Burnt Orange", hex: "#CC5500", rgb: [204, 85, 0] },
    { name: "Rust", hex: "#B7410E", rgb: [183, 65, 14] },
    { name: "Copper", hex: "#B87333", rgb: [184, 115, 51] },
    { name: "Pumpkin", hex: "#FF7518", rgb: [255, 117, 24] },
    { name: "Marigold", hex: "#EAA221", rgb: [234, 162, 33] },
    
    // Yellows
    { name: "Canary", hex: "#FFEF00", rgb: [255, 239, 0] },
    { name: "Lemon", hex: "#FFF44F", rgb: [255, 244, 79] },
    { name: "Buttercup", hex: "#F9E915", rgb: [249, 233, 21] },
    { name: "Gold", hex: "#FFD700", rgb: [255, 215, 0] },
    { name: "Honey", hex: "#EB9605", rgb: [235, 150, 5] },
    { name: "Mustard", hex: "#FFDB58", rgb: [255, 219, 88] },
    { name: "Saffron", hex: "#F4C430", rgb: [244, 196, 48] },
    { name: "Cream", hex: "#FFFDD0", rgb: [255, 253, 208] },
    { name: "Champagne", hex: "#F7E7CE", rgb: [247, 231, 206] },
    
    // Greens
    { name: "Emerald", hex: "#50C878", rgb: [80, 200, 120] },
    { name: "Jade", hex: "#00A86B", rgb: [0, 168, 107] },
    { name: "Forest", hex: "#228B22", rgb: [34, 139, 34] },
    { name: "Olive", hex: "#808000", rgb: [128, 128, 0] },
    { name: "Sage", hex: "#9DC183", rgb: [157, 193, 131] },
    { name: "Mint", hex: "#98FF98", rgb: [152, 255, 152] },
    { name: "Lime", hex: "#32CD32", rgb: [50, 205, 50] },
    { name: "Chartreuse", hex: "#7FFF00", rgb: [127, 255, 0] },
    { name: "Fern", hex: "#4F7942", rgb: [79, 121, 66] },
    { name: "Moss", hex: "#8A9A5B", rgb: [138, 154, 91] },
    { name: "Pine", hex: "#01796F", rgb: [1, 121, 111] },
    { name: "Hunter Green", hex: "#355E3B", rgb: [53, 94, 59] },
    { name: "Spruce", hex: "#1B3907", rgb: [27, 57, 7] },
    
    // Teals & Cyans
    { name: "Teal", hex: "#008080", rgb: [0, 128, 128] },
    { name: "Turquoise", hex: "#40E0D0", rgb: [64, 224, 208] },
    { name: "Aqua", hex: "#00FFFF", rgb: [0, 255, 255] },
    { name: "Cyan", hex: "#00FFFF", rgb: [0, 255, 255] },
    { name: "Seafoam", hex: "#71EEB8", rgb: [113, 238, 184] },
    { name: "Cerulean", hex: "#007BA7", rgb: [0, 123, 167] },
    
    // Blues
    { name: "Azure", hex: "#007FFF", rgb: [0, 127, 255] },
    { name: "Sapphire", hex: "#0F52BA", rgb: [15, 82, 186] },
    { name: "Cobalt", hex: "#0047AB", rgb: [0, 71, 171] },
    { name: "Navy", hex: "#000080", rgb: [0, 0, 128] },
    { name: "Midnight", hex: "#191970", rgb: [25, 25, 112] },
    { name: "Sky Blue", hex: "#87CEEB", rgb: [135, 206, 235] },
    { name: "Powder Blue", hex: "#B0E0E6", rgb: [176, 224, 230] },
    { name: "Ocean", hex: "#015F7E", rgb: [1, 95, 126] },
    { name: "Steel Blue", hex: "#4682B4", rgb: [70, 130, 180] },
    { name: "Denim", hex: "#1560BD", rgb: [21, 96, 189] },
    { name: "Indigo", hex: "#4B0082", rgb: [75, 0, 130] },
    { name: "Periwinkle", hex: "#CCCCFF", rgb: [204, 204, 255] },
    
    // Purples
    { name: "Lavender", hex: "#E6E6FA", rgb: [230, 230, 250] },
    { name: "Lilac", hex: "#C8A2C8", rgb: [200, 162, 200] },
    { name: "Mauve", hex: "#E0B0FF", rgb: [224, 176, 255] },
    { name: "Orchid", hex: "#DA70D6", rgb: [218, 112, 214] },
    { name: "Plum", hex: "#8E4585", rgb: [142, 69, 133] },
    { name: "Violet", hex: "#8F00FF", rgb: [143, 0, 255] },
    { name: "Amethyst", hex: "#9966CC", rgb: [153, 102, 204] },
    { name: "Grape", hex: "#6F2DA8", rgb: [111, 45, 168] },
    { name: "Eggplant", hex: "#614051", rgb: [97, 64, 81] },
    { name: "Wine", hex: "#722F37", rgb: [114, 47, 55] },
    
    // Pinks
    { name: "Tulip", hex: "#BC475F", rgb: [188, 71, 95] },
    { name: "Magenta", hex: "#FF00FF", rgb: [255, 0, 255] },
    { name: "Fuchsia", hex: "#FF00FF", rgb: [255, 0, 255] },
    { name: "Hot Pink", hex: "#FF69B4", rgb: [255, 105, 180] },
    { name: "Blush", hex: "#DE5D83", rgb: [222, 93, 131] },
    { name: "Carnation", hex: "#FFA6C9", rgb: [255, 166, 201] },
    { name: "Flamingo", hex: "#FC8EAC", rgb: [252, 142, 172] },
    { name: "Watermelon", hex: "#FD4659", rgb: [253, 70, 89] },
    { name: "Raspberry", hex: "#E30B5D", rgb: [227, 11, 93] },
    
    // Browns
    { name: "Chocolate", hex: "#7B3F00", rgb: [123, 63, 0] },
    { name: "Coffee", hex: "#6F4E37", rgb: [111, 78, 55] },
    { name: "Mocha", hex: "#967969", rgb: [150, 121, 105] },
    { name: "Caramel", hex: "#FFD59A", rgb: [255, 213, 154] },
    { name: "Sienna", hex: "#A0522D", rgb: [160, 82, 45] },
    { name: "Umber", hex: "#635147", rgb: [99, 81, 71] },
    { name: "Tan", hex: "#D2B48C", rgb: [210, 180, 140] },
    { name: "Beige", hex: "#F5F5DC", rgb: [245, 245, 220] },
    { name: "Sand", hex: "#C2B280", rgb: [194, 178, 128] },
    { name: "Khaki", hex: "#C3B091", rgb: [195, 176, 145] },
    { name: "Taupe", hex: "#483C32", rgb: [72, 60, 50] },
    { name: "Chestnut", hex: "#954535", rgb: [149, 69, 53] },
    { name: "Mahogany", hex: "#C04000", rgb: [192, 64, 0] },
    
    // Neutrals
    { name: "White", hex: "#FFFFFF", rgb: [255, 255, 255] },
    { name: "Ivory", hex: "#FFFFF0", rgb: [255, 255, 240] },
    { name: "Snow", hex: "#FFFAFA", rgb: [255, 250, 250] },
    { name: "Pearl", hex: "#F0EAD6", rgb: [240, 234, 214] },
    { name: "Silver", hex: "#C0C0C0", rgb: [192, 192, 192] },
    { name: "Platinum", hex: "#E5E4E2", rgb: [229, 228, 226] },
    { name: "Ash", hex: "#B2BEB5", rgb: [178, 190, 181] },
    { name: "Stone", hex: "#928E85", rgb: [146, 142, 133] },
    { name: "Slate", hex: "#708090", rgb: [112, 128, 144] },
    { name: "Charcoal", hex: "#36454F", rgb: [54, 69, 79] },
    { name: "Onyx", hex: "#353839", rgb: [53, 56, 57] },
    { name: "Obsidian", hex: "#1C1C1C", rgb: [28, 28, 28] },
    { name: "Jet", hex: "#343434", rgb: [52, 52, 52] },
    { name: "Black", hex: "#000000", rgb: [0, 0, 0] },
];

// Convert RGB to HEX
function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(x => {
        const hex = Math.round(x).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('').toUpperCase();
}

// Convert HEX to RGB
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// Convert RGB to HSL
function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    
    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r - g) / d + 4) / 6; break;
        }
    }
    
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100)
    };
}

// Convert RGB to HSV
function rgbToHsv(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, v = max;
    
    const d = max - min;
    s = max === 0 ? 0 : d / max;
    
    if (max === min) {
        h = 0;
    } else {
        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r - g) / d + 4) / 6; break;
        }
    }
    
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        v: Math.round(v * 100)
    };
}

// Convert RGB to CMYK
function rgbToCmyk(r, g, b) {
    if (r === 0 && g === 0 && b === 0) {
        return { c: 0, m: 0, y: 0, k: 100 };
    }
    
    let c = 1 - (r / 255);
    let m = 1 - (g / 255);
    let y = 1 - (b / 255);
    
    const k = Math.min(c, m, y);
    c = Math.round(((c - k) / (1 - k)) * 100);
    m = Math.round(((m - k) / (1 - k)) * 100);
    y = Math.round(((y - k) / (1 - k)) * 100);
    
    return { c, m, y, k: Math.round(k * 100) };
}

// Calculate color distance (Delta E approximation)
function colorDistance(rgb1, rgb2) {
    const rmean = (rgb1[0] + rgb2[0]) / 2;
    const r = rgb1[0] - rgb2[0];
    const g = rgb1[1] - rgb2[1];
    const b = rgb1[2] - rgb2[2];
    return Math.sqrt(
        (2 + rmean / 256) * r * r +
        4 * g * g +
        (2 + (255 - rmean) / 256) * b * b
    );
}

// Find closest color name from database
function findColorName(r, g, b) {
    let minDistance = Infinity;
    let closestColor = COLOR_DATABASE[0];
    
    for (const color of COLOR_DATABASE) {
        const distance = colorDistance([r, g, b], color.rgb);
        if (distance < minDistance) {
            minDistance = distance;
            closestColor = color;
        }
    }
    
    return {
        name: closestColor.name,
        distance: minDistance,
        matchedHex: closestColor.hex
    };
}

// Get color temperature (Warm, Cool, Neutral)
function getColorTemperature(h, s, l) {
    if (s < 15) return 'Neutral';
    if (h >= 0 && h < 60) return 'Warm';
    if (h >= 60 && h < 150) return 'Neutral';
    if (h >= 150 && h < 270) return 'Cool';
    if (h >= 270 && h < 330) return 'Warm';
    return 'Warm';
}

// Get color type
function getColorType(h, s, l) {
    if (s < 10) return 'Neutral';
    if (l < 20) return 'Dark';
    if (l > 80) return 'Light';
    
    // Primary colors: Red, Yellow, Blue
    if ((h >= 350 || h < 15) && s > 50) return 'Primary';
    if (h >= 50 && h < 70 && s > 50) return 'Primary';
    if (h >= 200 && h < 250 && s > 50) return 'Primary';
    
    // Secondary colors: Orange, Green, Purple
    if (h >= 15 && h < 50 && s > 50) return 'Secondary';
    if (h >= 70 && h < 170 && s > 50) return 'Secondary';
    if (h >= 250 && h < 300 && s > 50) return 'Secondary';
    
    return 'Tertiary';
}

// Get luminance for contrast calculations
function getLuminance(r, g, b) {
    const [rs, gs, bs] = [r, g, b].map(c => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Get contrast ratio between two colors
function getContrastRatio(rgb1, rgb2) {
    const l1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
    const l2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
}

// Check WCAG compliance
function getWcagCompliance(contrastRatio) {
    if (contrastRatio >= 7) return { level: 'AAA', text: 'Excellent' };
    if (contrastRatio >= 4.5) return { level: 'AA', text: 'Good' };
    if (contrastRatio >= 3) return { level: 'AA Large', text: 'OK for large text' };
    return { level: 'Fail', text: 'Poor contrast' };
}

// Get complementary color
function getComplementary(h, s, l) {
    return { h: (h + 180) % 360, s, l };
}

// Get analogous colors
function getAnalogous(h, s, l) {
    return [
        { h: (h - 30 + 360) % 360, s, l },
        { h: (h + 30) % 360, s, l }
    ];
}

// Get triadic colors
function getTriadic(h, s, l) {
    return [
        { h: (h + 120) % 360, s, l },
        { h: (h + 240) % 360, s, l }
    ];
}

// HSL to RGB
function hslToRgb(h, s, l) {
    s /= 100;
    l /= 100;
    
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;
    
    let r, g, b;
    
    if (h < 60) { r = c; g = x; b = 0; }
    else if (h < 120) { r = x; g = c; b = 0; }
    else if (h < 180) { r = 0; g = c; b = x; }
    else if (h < 240) { r = 0; g = x; b = c; }
    else if (h < 300) { r = x; g = 0; b = c; }
    else { r = c; g = 0; b = x; }
    
    return {
        r: Math.round((r + m) * 255),
        g: Math.round((g + m) * 255),
        b: Math.round((b + m) * 255)
    };
}

// Extract dominant colors from image data using k-means
function extractDominantColors(imageData, count = 8) {
    const pixels = [];
    const data = imageData.data;
    
    // Sample pixels (every 4th pixel for performance)
    for (let i = 0; i < data.length; i += 16) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];
        
        if (a > 128) { // Ignore transparent pixels
            pixels.push([r, g, b]);
        }
    }
    
    if (pixels.length === 0) return [];
    
    // Simple k-means clustering
    let centroids = [];
    for (let i = 0; i < count; i++) {
        centroids.push(pixels[Math.floor(Math.random() * pixels.length)]);
    }
    
    for (let iteration = 0; iteration < 10; iteration++) {
        const clusters = Array.from({ length: count }, () => []);
        
        // Assign pixels to nearest centroid
        for (const pixel of pixels) {
            let minDist = Infinity;
            let clusterIndex = 0;
            
            for (let i = 0; i < centroids.length; i++) {
                const dist = colorDistance(pixel, centroids[i]);
                if (dist < minDist) {
                    minDist = dist;
                    clusterIndex = i;
                }
            }
            
            clusters[clusterIndex].push(pixel);
        }
        
        // Update centroids
        for (let i = 0; i < count; i++) {
            if (clusters[i].length > 0) {
                const sum = clusters[i].reduce(
                    (acc, p) => [acc[0] + p[0], acc[1] + p[1], acc[2] + p[2]],
                    [0, 0, 0]
                );
                centroids[i] = [
                    sum[0] / clusters[i].length,
                    sum[1] / clusters[i].length,
                    sum[2] / clusters[i].length
                ];
            }
        }
    }
    
    // Convert to color objects and sort by prominence
    const colors = centroids.map((c, i) => {
        const r = Math.round(c[0]);
        const g = Math.round(c[1]);
        const b = Math.round(c[2]);
        const hex = rgbToHex(r, g, b);
        const hsl = rgbToHsl(r, g, b);
        const hsv = rgbToHsv(r, g, b);
        const cmyk = rgbToCmyk(r, g, b);
        const colorName = findColorName(r, g, b);
        
        return {
            rgb: { r, g, b },
            hex,
            hsl,
            hsv,
            cmyk,
            name: colorName.name,
            temperature: getColorTemperature(hsl.h, hsl.s, hsl.l),
            type: getColorType(hsl.h, hsl.s, hsl.l)
        };
    });
    
    // Remove duplicates and sort by luminance
    const unique = colors.filter((c, i, arr) => 
        arr.findIndex(x => x.hex === c.hex) === i
    );
    
    return unique.sort((a, b) => b.hsl.l - a.hsl.l).slice(0, count);
}

// Export functions
window.ColorUtils = {
    rgbToHex,
    hexToRgb,
    rgbToHsl,
    rgbToHsv,
    rgbToCmyk,
    hslToRgb,
    findColorName,
    getColorTemperature,
    getColorType,
    getLuminance,
    getContrastRatio,
    getWcagCompliance,
    getComplementary,
    getAnalogous,
    getTriadic,
    extractDominantColors,
    COLOR_DATABASE
};
