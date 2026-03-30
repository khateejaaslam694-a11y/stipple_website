// ============================================
// STIPPLE - Color Utilities
// ============================================

// Color Database - 1000+ named colors
const COLOR_DATABASE = [
    // ============ REDS ============
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
    { name: "Tomato", hex: "#FF6347", rgb: [255, 99, 71] },
    { name: "Fire Brick", hex: "#B22222", rgb: [178, 34, 34] },
    { name: "Dark Red", hex: "#8B0000", rgb: [139, 0, 0] },
    { name: "Indian Red", hex: "#CD5C5C", rgb: [205, 92, 92] },
    { name: "Light Coral", hex: "#F08080", rgb: [240, 128, 128] },
    { name: "Pale Red", hex: "#FFCCCC", rgb: [255, 204, 204] },
    { name: "Deep Red", hex: "#9B1B30", rgb: [155, 27, 48] },
    { name: "Cardinal", hex: "#C41E3A", rgb: [196, 30, 58] },
    { name: "Carmine", hex: "#960018", rgb: [150, 0, 24] },
    { name: "Venetian Red", hex: "#C80815", rgb: [200, 8, 21] },
    { name: "Barn Red", hex: "#7C0A02", rgb: [124, 10, 2] },
    { name: "Lava Red", hex: "#CF1020", rgb: [207, 16, 32] },
    { name: "Alizarin", hex: "#E32636", rgb: [227, 38, 54] },
    { name: "Cadmium Red", hex: "#E30022", rgb: [227, 0, 34] },
    { name: "Rosewood", hex: "#65000B", rgb: [101, 0, 11] },
    { name: "Sangria", hex: "#92000A", rgb: [146, 0, 10] },
    { name: "Brick Red", hex: "#CB4154", rgb: [203, 65, 84] },
    { name: "Falu Red", hex: "#801818", rgb: [128, 24, 24] },
    { name: "Permanent Red", hex: "#CB3030", rgb: [203, 48, 48] },
    { name: "Persian Red", hex: "#CC3333", rgb: [204, 51, 51] },
    { name: "Red", hex: "#FF0000", rgb: [255, 0, 0] },
    { name: "Desire", hex: "#EA3C53", rgb: [234, 60, 83] },
    { name: "Poppy", hex: "#E63946", rgb: [230, 57, 70] },
    { name: "Madder", hex: "#CC2529", rgb: [204, 37, 41] },
    { name: "Rufous", hex: "#A81C07", rgb: [168, 28, 7] },
    { name: "Redwood", hex: "#A45A52", rgb: [164, 90, 82] },
    { name: "English Red", hex: "#AB4B52", rgb: [171, 75, 82] },
    { name: "Tuscan Red", hex: "#7C4848", rgb: [124, 72, 72] },
    { name: "Cordovan", hex: "#893F45", rgb: [137, 63, 69] },
    { name: "Dark Scarlet", hex: "#560319", rgb: [86, 3, 25] },
    { name: "Infrared", hex: "#FF496C", rgb: [255, 73, 108] },
    { name: "Neon Red", hex: "#FF3131", rgb: [255, 49, 49] },
    { name: "Ferrari Red", hex: "#FF2800", rgb: [255, 40, 0] },
    { name: "China Red", hex: "#AA381E", rgb: [170, 56, 30] },
    { name: "Chili Red", hex: "#C21807", rgb: [194, 24, 7] },
    { name: "Raspberry Rose", hex: "#B3446C", rgb: [179, 68, 108] },
    { name: "Pale Carmine", hex: "#AF4035", rgb: [175, 64, 53] },
    { name: "Dark Candy Apple Red", hex: "#A40000", rgb: [164, 0, 0] },
    { name: "Candy Apple Red", hex: "#FF0800", rgb: [255, 8, 0] },
    { name: "Amaranth Red", hex: "#D3212D", rgb: [211, 33, 45] },

    // ============ ORANGES ============
    { name: "Tangerine", hex: "#FF9966", rgb: [255, 153, 102] },
    { name: "Peach", hex: "#FFCBA4", rgb: [255, 203, 164] },
    { name: "Apricot", hex: "#FBCEB1", rgb: [251, 206, 177] },
    { name: "Amber", hex: "#FFBF00", rgb: [255, 191, 0] },
    { name: "Burnt Orange", hex: "#CC5500", rgb: [204, 85, 0] },
    { name: "Rust", hex: "#B7410E", rgb: [183, 65, 14] },
    { name: "Copper", hex: "#B87333", rgb: [184, 115, 51] },
    { name: "Pumpkin", hex: "#FF7518", rgb: [255, 117, 24] },
    { name: "Marigold", hex: "#EAA221", rgb: [234, 162, 33] },
    { name: "Orange", hex: "#FF8000", rgb: [255, 128, 0] },
    { name: "Dark Orange", hex: "#FF8C00", rgb: [255, 140, 0] },
    { name: "Deep Orange", hex: "#E65C00", rgb: [230, 92, 0] },
    { name: "Mango", hex: "#FDBE02", rgb: [253, 190, 2] },
    { name: "Melon", hex: "#FDBCB4", rgb: [253, 188, 180] },
    { name: "Terra Cotta", hex: "#E2725B", rgb: [226, 114, 91] },
    { name: "Ochre", hex: "#CC7722", rgb: [204, 119, 34] },
    { name: "Cadmium Orange", hex: "#ED872D", rgb: [237, 135, 45] },
    { name: "Burnt Sienna", hex: "#E97451", rgb: [233, 116, 81] },
    { name: "Raw Sienna", hex: "#D68A59", rgb: [214, 138, 89] },
    { name: "Sandy Brown", hex: "#F4A460", rgb: [244, 164, 96] },
    { name: "Peru", hex: "#CD853F", rgb: [205, 133, 63] },
    { name: "Cinnamon", hex: "#D2691E", rgb: [210, 105, 30] },
    { name: "Bronze", hex: "#CD7F32", rgb: [205, 127, 50] },
    { name: "Butterscotch", hex: "#E3963E", rgb: [227, 150, 62] },
    { name: "Peach Orange", hex: "#FFCC99", rgb: [255, 204, 153] },
    { name: "Atomic Tangerine", hex: "#FF9966", rgb: [255, 153, 102] },
    { name: "Outrageous Orange", hex: "#FF6E4A", rgb: [255, 110, 74] },
    { name: "Neon Orange", hex: "#FF6700", rgb: [255, 103, 0] },
    { name: "Safety Orange", hex: "#FF7800", rgb: [255, 120, 0] },
    { name: "Princeton Orange", hex: "#F58025", rgb: [245, 128, 37] },
    { name: "Dark Tangerine", hex: "#FFA812", rgb: [255, 168, 18] },
    { name: "Alloy Orange", hex: "#C46210", rgb: [196, 98, 16] },
    { name: "Sinopia", hex: "#CB410B", rgb: [203, 65, 11] },
    { name: "Flame", hex: "#E25822", rgb: [226, 88, 34] },
    { name: "Persimmon", hex: "#EC5800", rgb: [236, 88, 0] },
    { name: "Tenne", hex: "#CD5700", rgb: [205, 87, 0] },
    { name: "Smashed Pumpkin", hex: "#FF6D3B", rgb: [255, 109, 59] },
    { name: "Oregon", hex: "#9B4400", rgb: [155, 68, 0] },
    { name: "Sorbus", hex: "#DD6600", rgb: [221, 102, 0] },
    { name: "Vivid Orange", hex: "#FF5F00", rgb: [255, 95, 0] },
    { name: "Halloween Orange", hex: "#E86100", rgb: [232, 97, 0] },
    { name: "Papaya Whip", hex: "#FFEFD5", rgb: [255, 239, 213] },
    { name: "Bisque", hex: "#FFE4C4", rgb: [255, 228, 196] },
    { name: "Navajo White", hex: "#FFDEAD", rgb: [255, 222, 173] },
    { name: "Moccasin", hex: "#FFE4B5", rgb: [255, 228, 181] },
    { name: "Wheat Orange", hex: "#F5C67F", rgb: [245, 198, 127] },
    { name: "Sunset Orange", hex: "#FD5E53", rgb: [253, 94, 83] },
    { name: "Burnt Amber", hex: "#CC7000", rgb: [204, 112, 0] },
    { name: "Tiger Orange", hex: "#FD7C2A", rgb: [253, 124, 42] },

    // ============ YELLOWS ============
    { name: "Canary", hex: "#FFEF00", rgb: [255, 239, 0] },
    { name: "Lemon", hex: "#FFF44F", rgb: [255, 244, 79] },
    { name: "Buttercup", hex: "#F9E915", rgb: [249, 233, 21] },
    { name: "Gold", hex: "#FFD700", rgb: [255, 215, 0] },
    { name: "Honey", hex: "#EB9605", rgb: [235, 150, 5] },
    { name: "Mustard", hex: "#FFDB58", rgb: [255, 219, 88] },
    { name: "Saffron", hex: "#F4C430", rgb: [244, 196, 48] },
    { name: "Cream", hex: "#FFFDD0", rgb: [255, 253, 208] },
    { name: "Champagne", hex: "#F7E7CE", rgb: [247, 231, 206] },
    { name: "Yellow", hex: "#FFFF00", rgb: [255, 255, 0] },
    { name: "Light Yellow", hex: "#FFFFE0", rgb: [255, 255, 224] },
    { name: "Dark Yellow", hex: "#D4AC0D", rgb: [212, 172, 13] },
    { name: "Corn Yellow", hex: "#FBEC5D", rgb: [251, 236, 93] },
    { name: "Banana", hex: "#FFE135", rgb: [255, 225, 53] },
    { name: "Goldenrod", hex: "#DAA520", rgb: [218, 165, 32] },
    { name: "Dark Goldenrod", hex: "#B8860B", rgb: [184, 134, 11] },
    { name: "Pale Goldenrod", hex: "#EEE8AA", rgb: [238, 232, 170] },
    { name: "Flax", hex: "#EEDC82", rgb: [238, 220, 130] },
    { name: "Straw", hex: "#E4D96F", rgb: [228, 217, 111] },
    { name: "Vanilla", hex: "#F3E5AB", rgb: [243, 229, 171] },
    { name: "Aureolin", hex: "#FDEE00", rgb: [253, 238, 0] },
    { name: "Naples Yellow", hex: "#FADA5E", rgb: [250, 218, 94] },
    { name: "Citrine", hex: "#E4D00A", rgb: [228, 208, 10] },
    { name: "Pear", hex: "#D1E231", rgb: [209, 226, 49] },
    { name: "Yellow Green", hex: "#9ACD32", rgb: [154, 205, 50] },
    { name: "Butter", hex: "#FFFBC1", rgb: [255, 251, 193] },
    { name: "Cadmium Yellow", hex: "#FFF600", rgb: [255, 246, 0] },
    { name: "Cyber Yellow", hex: "#FFD300", rgb: [255, 211, 0] },
    { name: "Neon Yellow", hex: "#CFFF04", rgb: [207, 255, 4] },
    { name: "Laser Lemon", hex: "#FFFF66", rgb: [255, 255, 102] },
    { name: "Unmellow Yellow", hex: "#FFFF66", rgb: [255, 255, 102] },
    { name: "Yellow Sunshine", hex: "#FFF44F", rgb: [255, 244, 79] },
    { name: "Minion Yellow", hex: "#F5D700", rgb: [245, 215, 0] },
    { name: "Arylide Yellow", hex: "#E9D66B", rgb: [233, 214, 107] },
    { name: "Hansa Yellow", hex: "#E9C21D", rgb: [233, 194, 29] },
    { name: "Jonquil", hex: "#F4CA16", rgb: [244, 202, 22] },
    { name: "Laguna Yellow", hex: "#F8E473", rgb: [248, 228, 115] },
    { name: "Sandstorm", hex: "#ECD540", rgb: [236, 213, 64] },
    { name: "Dodie Yellow", hex: "#FEF65B", rgb: [254, 246, 91] },
    { name: "Sunflower", hex: "#FFC512", rgb: [255, 197, 18] },
    { name: "Bumblebee", hex: "#FCE205", rgb: [252, 226, 5] },
    { name: "School Bus Yellow", hex: "#FFD800", rgb: [255, 216, 0] },
    { name: "Taxi Yellow", hex: "#F8D806", rgb: [248, 216, 6] },
    { name: "Lemon Glacier", hex: "#FDFF00", rgb: [253, 255, 0] },
    { name: "Lemon Chiffon", hex: "#FFFACD", rgb: [255, 250, 205] },
    { name: "Chartreuse Yellow", hex: "#DFFF00", rgb: [223, 255, 0] },

    // ============ GREENS ============
    { name: "Emerald", hex: "#50C878", rgb: [80, 200, 120] },
    { name: "Jade", hex: "#00A86B", rgb: [0, 168, 107] },
    { name: "Forest Green", hex: "#228B22", rgb: [34, 139, 34] },
    { name: "Olive", hex: "#808000", rgb: [128, 128, 0] },
    { name: "Sage", hex: "#9DC183", rgb: [157, 193, 131] },
    { name: "Mint Green", hex: "#98FF98", rgb: [152, 255, 152] },
    { name: "Lime Green", hex: "#32CD32", rgb: [50, 205, 50] },
    { name: "Chartreuse", hex: "#7FFF00", rgb: [127, 255, 0] },
    { name: "Fern Green", hex: "#4F7942", rgb: [79, 121, 66] },
    { name: "Moss Green", hex: "#8A9A5B", rgb: [138, 154, 91] },
    { name: "Pine Green", hex: "#01796F", rgb: [1, 121, 111] },
    { name: "Hunter Green", hex: "#355E3B", rgb: [53, 94, 59] },
    { name: "Spruce Green", hex: "#1B3907", rgb: [27, 57, 7] },
    { name: "Green", hex: "#008000", rgb: [0, 128, 0] },
    { name: "Dark Green", hex: "#006400", rgb: [0, 100, 0] },
    { name: "Light Green", hex: "#90EE90", rgb: [144, 238, 144] },
    { name: "Pale Green", hex: "#98FB98", rgb: [152, 251, 152] },
    { name: "Sea Green", hex: "#2E8B57", rgb: [46, 139, 87] },
    { name: "Medium Sea Green", hex: "#3CB371", rgb: [60, 179, 113] },
    { name: "Spring Green", hex: "#00FF7F", rgb: [0, 255, 127] },
    { name: "Medium Spring Green", hex: "#00FA9A", rgb: [0, 250, 154] },
    { name: "Lawn Green", hex: "#7CFC00", rgb: [124, 252, 0] },
    { name: "Green Yellow", hex: "#ADFF2F", rgb: [173, 255, 47] },
    { name: "Dark Olive Green", hex: "#556B2F", rgb: [85, 107, 47] },
    { name: "Olive Drab", hex: "#6B8E23", rgb: [107, 142, 35] },
    { name: "Dark Sea Green", hex: "#8FBC8F", rgb: [143, 188, 143] },
    { name: "Medium Aquamarine", hex: "#66CDAA", rgb: [102, 205, 170] },
    { name: "Aquamarine", hex: "#7FFFD4", rgb: [127, 255, 212] },
    { name: "Malachite", hex: "#0BDA51", rgb: [11, 218, 81] },
    { name: "Shamrock", hex: "#45CEA2", rgb: [69, 206, 162] },
    { name: "Hookers Green", hex: "#49796B", rgb: [73, 121, 107] },
    { name: "Viridian", hex: "#40826D", rgb: [64, 130, 109] },
    { name: "Artichoke", hex: "#8F9779", rgb: [143, 151, 121] },
    { name: "Asparagus", hex: "#87A96B", rgb: [135, 169, 107] },
    { name: "Tea Green", hex: "#D0F0C0", rgb: [208, 240, 192] },
    { name: "Celadon", hex: "#ACE1AF", rgb: [172, 225, 175] },
    { name: "Laurel Green", hex: "#A9BA9D", rgb: [169, 186, 157] },
    { name: "Reseda Green", hex: "#74856B", rgb: [116, 133, 107] },
    { name: "Neon Green", hex: "#39FF14", rgb: [57, 255, 20] },
    { name: "Electric Green", hex: "#00FF00", rgb: [0, 255, 0] },
    { name: "Harlequin", hex: "#3FFF00", rgb: [63, 255, 0] },
    { name: "Apple Green", hex: "#8DB600", rgb: [141, 182, 0] },
    { name: "Avocado", hex: "#568203", rgb: [86, 130, 3] },
    { name: "Bottle Green", hex: "#006A4E", rgb: [0, 106, 78] },
    { name: "British Racing Green", hex: "#004225", rgb: [0, 66, 37] },
    { name: "Cadmium Green", hex: "#006B3C", rgb: [0, 107, 60] },
    { name: "Camouflage Green", hex: "#78866B", rgb: [120, 134, 107] },
    { name: "Chartreuse Green", hex: "#7FFF00", rgb: [127, 255, 0] },
    { name: "Chrome Green", hex: "#346E36", rgb: [52, 110, 54] },
    { name: "Cinnabar Green", hex: "#61B329", rgb: [97, 179, 41] },
    { name: "Clover", hex: "#384E27", rgb: [56, 78, 39] },
    { name: "Cucumber", hex: "#75905E", rgb: [117, 144, 94] },
    { name: "Dollar Bill", hex: "#85BB65", rgb: [133, 187, 101] },
    { name: "Feldgrau", hex: "#4D5D53", rgb: [77, 93, 83] },
    { name: "Fern", hex: "#63B76C", rgb: [99, 183, 108] },
    { name: "Frog Green", hex: "#7EC516", rgb: [126, 197, 22] },
    { name: "Granny Smith Apple", hex: "#A8E4A0", rgb: [168, 228, 160] },
    { name: "Honeydew Green", hex: "#F0FFF0", rgb: [240, 255, 240] },
    { name: "Iguana Green", hex: "#71BC78", rgb: [113, 188, 120] },
    { name: "India Green", hex: "#138808", rgb: [19, 136, 8] },
    { name: "Irish Green", hex: "#019020", rgb: [1, 144, 32] },
    { name: "Islamic Green", hex: "#009000", rgb: [0, 144, 0] },
    { name: "Jungle Green", hex: "#29AB87", rgb: [41, 171, 135] },
    { name: "Kelly Green", hex: "#4CBB17", rgb: [76, 187, 23] },
    { name: "Kombu Green", hex: "#354230", rgb: [53, 66, 48] },
    { name: "Mantis", hex: "#74C365", rgb: [116, 195, 101] },
    { name: "Midnight Green", hex: "#004953", rgb: [0, 73, 83] },
    { name: "Mughal Green", hex: "#306030", rgb: [48, 96, 48] },
    { name: "Myrtle Green", hex: "#317873", rgb: [49, 120, 115] },
    { name: "Office Green", hex: "#008000", rgb: [0, 128, 0] },
    { name: "Pakistan Green", hex: "#006600", rgb: [0, 102, 0] },
    { name: "Paris Green", hex: "#50C878", rgb: [80, 200, 120] },
    { name: "Pea Green", hex: "#8DB600", rgb: [141, 182, 0] },
    { name: "Phthalo Green", hex: "#123524", rgb: [18, 53, 36] },
    { name: "Pigment Green", hex: "#00A550", rgb: [0, 165, 80] },
    { name: "Pistachio", hex: "#93C572", rgb: [147, 197, 114] },
    { name: "Rifle Green", hex: "#444C38", rgb: [68, 76, 56] },
    { name: "Sap Green", hex: "#507D2A", rgb: [80, 125, 42] },
    { name: "Screamin Green", hex: "#66FF66", rgb: [102, 255, 102] },

    // ============ TEALS & CYANS ============
    { name: "Teal", hex: "#008080", rgb: [0, 128, 128] },
    { name: "Turquoise", hex: "#40E0D0", rgb: [64, 224, 208] },
    { name: "Aqua", hex: "#00FFFF", rgb: [0, 255, 255] },
    { name: "Cyan", hex: "#00E5FF", rgb: [0, 229, 255] },
    { name: "Seafoam", hex: "#71EEB8", rgb: [113, 238, 184] },
    { name: "Cerulean", hex: "#007BA7", rgb: [0, 123, 167] },
    { name: "Dark Teal", hex: "#003333", rgb: [0, 51, 51] },
    { name: "Light Teal", hex: "#99DDDD", rgb: [153, 221, 221] },
    { name: "Dark Turquoise", hex: "#00CED1", rgb: [0, 206, 209] },
    { name: "Medium Turquoise", hex: "#48D1CC", rgb: [72, 209, 204] },
    { name: "Pale Turquoise", hex: "#AFEEEE", rgb: [175, 238, 238] },
    { name: "Light Cyan", hex: "#E0FFFF", rgb: [224, 255, 255] },
    { name: "Dark Cyan", hex: "#008B8B", rgb: [0, 139, 139] },
    { name: "Cadet Blue", hex: "#5F9EA0", rgb: [95, 158, 160] },
    { name: "Light Sea Green", hex: "#20B2AA", rgb: [32, 178, 170] },
    { name: "Dark Slate Gray", hex: "#2F4F4F", rgb: [47, 79, 79] },
    { name: "Teal Blue", hex: "#367588", rgb: [54, 117, 136] },
    { name: "Verdigris", hex: "#43B3AE", rgb: [67, 179, 174] },
    { name: "Robin Egg Blue", hex: "#00CCCC", rgb: [0, 204, 204] },
    { name: "Cyan Azure", hex: "#4E82B4", rgb: [78, 130, 180] },
    { name: "Electric Cyan", hex: "#00FFEF", rgb: [0, 255, 239] },
    { name: "Celeste", hex: "#B2FFFF", rgb: [178, 255, 255] },
    { name: "Opal", hex: "#A8C5BB", rgb: [168, 197, 187] },
    { name: "Viridian Green", hex: "#009698", rgb: [0, 150, 152] },
    { name: "Munsell Cyan", hex: "#00A693", rgb: [0, 166, 147] },
    { name: "Persian Green", hex: "#00A693", rgb: [0, 166, 147] },
    { name: "Keppel", hex: "#3AB09E", rgb: [58, 176, 158] },
    { name: "Zomp", hex: "#39A78E", rgb: [57, 167, 142] },
    { name: "Bondi Blue", hex: "#0095B6", rgb: [0, 149, 182] },
    { name: "Pacific Blue", hex: "#1CA9C9", rgb: [28, 169, 201] },
    { name: "Copper Crayola", hex: "#AD6F69", rgb: [173, 111, 105] },
    { name: "Eton Blue", hex: "#96C8A2", rgb: [150, 200, 162] },
    { name: "Teal Deer", hex: "#99E6B3", rgb: [153, 230, 179] },
    { name: "Cyan Cobalt Blue", hex: "#28589C", rgb: [40, 88, 156] },
    { name: "Ariel", hex: "#6DCFF6", rgb: [109, 207, 246] },
    { name: "Sky Cyan", hex: "#76D7EA", rgb: [118, 215, 234] },
    { name: "Peacock Blue", hex: "#005F6A", rgb: [0, 95, 106] },
    { name: "Tropical Rain Forest", hex: "#00755E", rgb: [0, 117, 94] },

    // ============ BLUES ============
    { name: "Azure", hex: "#007FFF", rgb: [0, 127, 255] },
    { name: "Sapphire", hex: "#0F52BA", rgb: [15, 82, 186] },
    { name: "Cobalt Blue", hex: "#0047AB", rgb: [0, 71, 171] },
    { name: "Navy Blue", hex: "#000080", rgb: [0, 0, 128] },
    { name: "Midnight Blue", hex: "#191970", rgb: [25, 25, 112] },
    { name: "Sky Blue", hex: "#87CEEB", rgb: [135, 206, 235] },
    { name: "Powder Blue", hex: "#B0E0E6", rgb: [176, 224, 230] },
    { name: "Ocean Blue", hex: "#015F7E", rgb: [1, 95, 126] },
    { name: "Steel Blue", hex: "#4682B4", rgb: [70, 130, 180] },
    { name: "Denim Blue", hex: "#1560BD", rgb: [21, 96, 189] },
    { name: "Indigo", hex: "#4B0082", rgb: [75, 0, 130] },
    { name: "Periwinkle", hex: "#CCCCFF", rgb: [204, 204, 255] },
    { name: "Blue", hex: "#0000FF", rgb: [0, 0, 255] },
    { name: "Dark Blue", hex: "#00008B", rgb: [0, 0, 139] },
    { name: "Light Blue", hex: "#ADD8E6", rgb: [173, 216, 230] },
    { name: "Royal Blue", hex: "#4169E1", rgb: [65, 105, 225] },
    { name: "Dodger Blue", hex: "#1E90FF", rgb: [30, 144, 255] },
    { name: "Deep Sky Blue", hex: "#00BFFF", rgb: [0, 191, 255] },
    { name: "Cornflower Blue", hex: "#6495ED", rgb: [100, 149, 237] },
    { name: "Medium Blue", hex: "#0000CD", rgb: [0, 0, 205] },
    { name: "Slate Blue", hex: "#6A5ACD", rgb: [106, 90, 205] },
    { name: "Dark Slate Blue", hex: "#483D8B", rgb: [72, 61, 139] },
    { name: "Blue Violet", hex: "#8A2BE2", rgb: [138, 43, 226] },
    { name: "Ultramarine", hex: "#3F00FF", rgb: [63, 0, 255] },
    { name: "Electric Blue", hex: "#7DF9FF", rgb: [125, 249, 255] },
    { name: "Baby Blue", hex: "#89CFF0", rgb: [137, 207, 240] },
    { name: "Prussian Blue", hex: "#003153", rgb: [0, 49, 83] },
    { name: "Egyptian Blue", hex: "#1034A6", rgb: [16, 52, 166] },
    { name: "Space Blue", hex: "#1B2A4A", rgb: [27, 42, 74] },
    { name: "Tiffany Blue", hex: "#0ABAB5", rgb: [10, 186, 181] },
    { name: "Columbia Blue", hex: "#9BDDFF", rgb: [155, 221, 255] },
    { name: "Picton Blue", hex: "#45B1E8", rgb: [69, 177, 232] },
    { name: "Glaucous", hex: "#6082B6", rgb: [96, 130, 182] },
    { name: "Cadet Grey", hex: "#91A3B0", rgb: [145, 163, 176] },
    { name: "Air Force Blue", hex: "#5D8AA8", rgb: [93, 138, 168] },
    { name: "Alice Blue", hex: "#F0F8FF", rgb: [240, 248, 255] },
    { name: "Argentinian Blue", hex: "#6CB4E4", rgb: [108, 180, 228] },
    { name: "Ball Blue", hex: "#21ABCD", rgb: [33, 171, 205] },
    { name: "Bdazzled Blue", hex: "#2E5894", rgb: [46, 88, 148] },
    { name: "Beau Blue", hex: "#BCD4E6", rgb: [188, 212, 230] },
    { name: "Bleu De France", hex: "#318CE7", rgb: [49, 140, 231] },
    { name: "Blue Bell", hex: "#A2A2D0", rgb: [162, 162, 208] },
    { name: "Blue Crayola", hex: "#1F75FE", rgb: [31, 117, 254] },
    { name: "Blue Gray", hex: "#6699CC", rgb: [102, 153, 204] },
    { name: "Blue Green", hex: "#0D98BA", rgb: [13, 152, 186] },
    { name: "Blue Jeans", hex: "#5DADEC", rgb: [93, 173, 236] },
    { name: "Blue Pigment", hex: "#333399", rgb: [51, 51, 153] },
    { name: "Blue Sapphire", hex: "#126180", rgb: [18, 97, 128] },
    { name: "Brandeis Blue", hex: "#0070FF", rgb: [0, 112, 255] },
    { name: "Brilliant Azure", hex: "#3399FF", rgb: [51, 153, 255] },
    { name: "Capri", hex: "#00BFFF", rgb: [0, 191, 255] },
    { name: "Carolina Blue", hex: "#56A0D3", rgb: [86, 160, 211] },
    { name: "Celtic Blue", hex: "#246BCE", rgb: [36, 107, 206] },
    { name: "Chefchaouen Blue", hex: "#4E82B4", rgb: [78, 130, 180] },
    { name: "China Blue", hex: "#56A0D3", rgb: [86, 160, 211] },
    { name: "Cool Grey", hex: "#9090C0", rgb: [144, 144, 192] },
    { name: "Dark Cornflower Blue", hex: "#26428B", rgb: [38, 66, 139] },
    { name: "Duke Blue", hex: "#00009C", rgb: [0, 0, 156] },
    { name: "Eton Blue", hex: "#96C8A2", rgb: [150, 200, 162] },
    { name: "Flag Blue", hex: "#002366", rgb: [0, 35, 102] },
    { name: "Han Blue", hex: "#446CCF", rgb: [68, 108, 207] },
    { name: "Han Purple", hex: "#5218FA", rgb: [82, 24, 250] },
    { name: "Harmony Blue", hex: "#5B7FA6", rgb: [91, 127, 166] },
    { name: "Iceberg Blue", hex: "#71A6D2", rgb: [113, 166, 210] },
    { name: "Illuminating Emerald", hex: "#319177", rgb: [49, 145, 119] },
    { name: "Independence Blue", hex: "#4C516D", rgb: [76, 81, 109] },
    { name: "International Blue", hex: "#002FA7", rgb: [0, 47, 167] },
    { name: "Iris Blue", hex: "#5A4FCF", rgb: [90, 79, 207] },
    { name: "Livid Blue", hex: "#6699CC", rgb: [102, 153, 204] },
    { name: "Lapis Lazuli", hex: "#26619C", rgb: [38, 97, 156] },
    { name: "Light Cobalt Blue", hex: "#88ACE0", rgb: [136, 172, 224] },
    { name: "Majorelle Blue", hex: "#6050DC", rgb: [96, 80, 220] },
    { name: "Maya Blue", hex: "#73C2FB", rgb: [115, 194, 251] },
    { name: "Medium Persian Blue", hex: "#0067A5", rgb: [0, 103, 165] },
    { name: "Marian Blue", hex: "#083EA7", rgb: [8, 62, 167] },
    { name: "Neon Blue", hex: "#4D4DFF", rgb: [77, 77, 255] },
    { name: "Non Photo Blue", hex: "#A4DDED", rgb: [164, 221, 237] },
    { name: "Oxford Blue", hex: "#002147", rgb: [0, 33, 71] },
    { name: "Pale Cerulean", hex: "#9BC4E2", rgb: [155, 196, 226] },
    { name: "Palatinate Blue", hex: "#273BE2", rgb: [39, 59, 226] },
    { name: "Persian Blue", hex: "#1C39BB", rgb: [28, 57, 187] },
    { name: "Phthalo Blue", hex: "#000F89", rgb: [0, 15, 137] },
    { name: "Polynesian Blue", hex: "#254A80", rgb: [37, 74, 128] },
    { name: "Rich Electric Blue", hex: "#0892D0", rgb: [8, 146, 208] },
    { name: "Ruddy Blue", hex: "#76D7EA", rgb: [118, 215, 234] },
    { name: "Saint Patrick Blue", hex: "#23297A", rgb: [35, 41, 122] },
    { name: "Savoy Blue", hex: "#4B61D1", rgb: [75, 97, 209] },
    { name: "Smalt Blue", hex: "#003399", rgb: [0, 51, 153] },
    { name: "True Blue", hex: "#0073CF", rgb: [0, 115, 207] },
    { name: "UCLA Blue", hex: "#536895", rgb: [83, 104, 149] },
    { name: "United Nations Blue", hex: "#5B92E5", rgb: [91, 146, 229] },
    { name: "Vivid Cerulean", hex: "#00AAEE", rgb: [0, 170, 238] },
    { name: "Yonder Blue", hex: "#5B7FA6", rgb: [91, 127, 166] },

    // ============ PURPLES ============
    { name: "Lavender", hex: "#E6E6FA", rgb: [230, 230, 250] },
    { name: "Lilac", hex: "#C8A2C8", rgb: [200, 162, 200] },
    { name: "Mauve", hex: "#E0B0FF", rgb: [224, 176, 255] },
    { name: "Orchid", hex: "#DA70D6", rgb: [218, 112, 214] },
    { name: "Plum", hex: "#8E4585", rgb: [142, 69, 133] },
    { name: "Violet", hex: "#8F00FF", rgb: [143, 0, 255] },
    { name: "Amethyst", hex: "#9966CC", rgb: [153, 102, 204] },
    { name: "Grape", hex: "#6F2DA8", rgb: [111, 45, 168] },
    { name: "Eggplant", hex: "#614051", rgb: [97, 64, 81] },
    { name: "Wine Purple", hex: "#722F37", rgb: [114, 47, 55] },
    { name: "Purple", hex: "#800080", rgb: [128, 0, 128] },
    { name: "Dark Purple", hex: "#4B0150", rgb: [75, 1, 80] },
    { name: "Dark Violet", hex: "#9400D3", rgb: [148, 0, 211] },
    { name: "Dark Orchid", hex: "#9932CC", rgb: [153, 50, 204] },
    { name: "Dark Magenta", hex: "#8B008B", rgb: [139, 0, 139] },
    { name: "Medium Orchid", hex: "#BA55D3", rgb: [186, 85, 211] },
    { name: "Thistle", hex: "#D8BFD8", rgb: [216, 191, 216] },
    { name: "Wisteria", hex: "#C9A0DC", rgb: [201, 160, 220] },
    { name: "Heather", hex: "#9B7BB5", rgb: [155, 123, 181] },
    { name: "Iris", hex: "#5A4FCF", rgb: [90, 79, 207] },
    { name: "Byzantine", hex: "#BD33A4", rgb: [189, 51, 164] },
    { name: "Byzantium", hex: "#702963", rgb: [112, 41, 99] },
    { name: "Mulberry", hex: "#C54B8C", rgb: [197, 75, 140] },
    { name: "African Violet", hex: "#B284BE", rgb: [178, 132, 190] },
    { name: "Palatinate Purple", hex: "#682860", rgb: [104, 40, 96] },
    { name: "Ube", hex: "#8878C3", rgb: [136, 120, 195] },
    { name: "Medium Purple", hex: "#9370DB", rgb: [147, 112, 219] },
    { name: "Medium Slate Blue", hex: "#7B68EE", rgb: [123, 104, 238] },
    { name: "Veronica", hex: "#A020F0", rgb: [160, 32, 240] },
    { name: "Eminence", hex: "#6C3082", rgb: [108, 48, 130] },
    { name: "Royal Purple", hex: "#7851A9", rgb: [120, 81, 169] },
    { name: "Tyrian Purple", hex: "#66023C", rgb: [102, 2, 60] },
    { name: "Patriarch", hex: "#800080", rgb: [128, 0, 128] },
    { name: "Purple Heart", hex: "#69359C", rgb: [105, 53, 156] },
    { name: "Rebecca Purple", hex: "#663399", rgb: [102, 51, 153] },
    { name: "Blue Purple", hex: "#8A2BE2", rgb: [138, 43, 226] },
    { name: "French Violet", hex: "#8806CE", rgb: [136, 6, 206] },
    { name: "Floral Lavender", hex: "#B57EDC", rgb: [181, 126, 220] },
    { name: "Lavender Purple", hex: "#967BB6", rgb: [150, 123, 182] },
    { name: "Bright Ube", hex: "#D19FE8", rgb: [209, 159, 232] },
    { name: "Pale Purple", hex: "#FAE6FA", rgb: [250, 230, 250] },
    { name: "Purpureus", hex: "#9A4EAE", rgb: [154, 78, 174] },
    { name: "Pearly Purple", hex: "#B768A2", rgb: [183, 104, 162] },
    { name: "Magenta Haze", hex: "#9C4472", rgb: [156, 68, 114] },
    { name: "Medium Red Violet", hex: "#BB3385", rgb: [187, 51, 133] },
    { name: "Mardi Gras", hex: "#880085", rgb: [136, 0, 133] },
    { name: "Pansy Purple", hex: "#78184A", rgb: [120, 24, 74] },
    { name: "Pomp And Power", hex: "#86608E", rgb: [134, 96, 142] },
    { name: "Sugar Plum", hex: "#914E75", rgb: [145, 78, 117] },
    { name: "Twilight Lavender", hex: "#8A496B", rgb: [138, 73, 107] },
    { name: "Chinese Violet", hex: "#856088", rgb: [133, 96, 136] },

    // ============ PINKS ============
    { name: "Tulip Pink", hex: "#BC475F", rgb: [188, 71, 95] },
    { name: "Magenta", hex: "#FF00FF", rgb: [255, 0, 255] },
    { name: "Hot Pink", hex: "#FF69B4", rgb: [255, 105, 180] },
    { name: "Blush Pink", hex: "#DE5D83", rgb: [222, 93, 131] },
    { name: "Carnation Pink", hex: "#FFA6C9", rgb: [255, 166, 201] },
    { name: "Flamingo", hex: "#FC8EAC", rgb: [252, 142, 172] },
    { name: "Raspberry", hex: "#E30B5D", rgb: [227, 11, 93] },
    { name: "Pink", hex: "#FFC0CB", rgb: [255, 192, 203] },
    { name: "Light Pink", hex: "#FFB6C1", rgb: [255, 182, 193] },
    { name: "Deep Pink", hex: "#FF1493", rgb: [255, 20, 147] },
    { name: "Pale Pink", hex: "#FADADD", rgb: [250, 218, 221] },
    { name: "Pastel Pink", hex: "#FFD1DC", rgb: [255, 209, 220] },
    { name: "Baby Pink", hex: "#F4C2C2", rgb: [244, 194, 194] },
    { name: "Dusty Rose", hex: "#DCAE96", rgb: [220, 174, 150] },
    { name: "Puce", hex: "#CC8899", rgb: [204, 136, 153] },
    { name: "Amaranth Pink", hex: "#E52B50", rgb: [229, 43, 80] },
    { name: "Cerise", hex: "#DE3163", rgb: [222, 49, 99] },
    { name: "Ultra Pink", hex: "#FF6FFF", rgb: [255, 111, 255] },
    { name: "Bubblegum Pink", hex: "#FFC1CC", rgb: [255, 193, 204] },
    { name: "Persian Pink", hex: "#F77FBE", rgb: [247, 127, 190] },
    { name: "Brink Pink", hex: "#FB607F", rgb: [251, 96, 127] },
    { name: "Mimi Pink", hex: "#FFDAE9", rgb: [255, 218, 233] },
    { name: "Baker Miller Pink", hex: "#FF91AF", rgb: [255, 145, 175] },
    { name: "Cameo Pink", hex: "#EFBBCC", rgb: [239, 187, 204] },
    { name: "Cherry Blossom", hex: "#FFB7C5", rgb: [255, 183, 197] },
    { name: "Coral Pink", hex: "#F88379", rgb: [248, 131, 121] },
    { name: "Cyclamen", hex: "#F56FA1", rgb: [245, 111, 161] },
    { name: "Dark Pink", hex: "#E75480", rgb: [231, 84, 128] },
    { name: "Dogwood Rose", hex: "#D71868", rgb: [215, 24, 104] },
    { name: "Fandango Pink", hex: "#DE5285", rgb: [222, 82, 133] },
    { name: "Lavender Pink", hex: "#FBAED2", rgb: [251, 174, 210] },
    { name: "Lavender Rose", hex: "#FBA0E3", rgb: [251, 160, 227] },
    { name: "Lemonade Pink", hex: "#FFC0CB", rgb: [255, 192, 203] },
    { name: "Mexican Pink", hex: "#E4007C", rgb: [228, 0, 124] },
    { name: "Neon Pink", hex: "#FF44CC", rgb: [255, 68, 204] },
    { name: "Pastel Magenta", hex: "#F49AC2", rgb: [244, 154, 194] },
    { name: "Pink Flamingo", hex: "#FC74FD", rgb: [252, 116, 253] },
    { name: "Pink Lace", hex: "#FFDDF4", rgb: [255, 221, 244] },
    { name: "Pink Lavender", hex: "#D8B4E2", rgb: [216, 180, 226] },
    { name: "Pink Sherbet", hex: "#F78FA7", rgb: [247, 143, 167] },
    { name: "Queen Pink", hex: "#E8CCD7", rgb: [232, 204, 215] },
    { name: "Rose Pink", hex: "#FF66CC", rgb: [255, 102, 204] },
    { name: "Rose Red", hex: "#C21E56", rgb: [194, 30, 86] },
    { name: "Rose Taupe", hex: "#905D5D", rgb: [144, 93, 93] },
    { name: "Rose Vale", hex: "#AB4E52", rgb: [171, 78, 82] },
    { name: "Rosewater", hex: "#FFF0F5", rgb: [255, 240, 245] },
    { name: "Salmon Pink", hex: "#FF91A4", rgb: [255, 145, 164] },
    { name: "Shimmering Blush", hex: "#D98695", rgb: [217, 134, 149] },
    { name: "Shocking Pink", hex: "#FC0FC0", rgb: [252, 15, 192] },
    { name: "Sunburnt Cyclamen", hex: "#FF404C", rgb: [255, 64, 76] },
    { name: "Thulian Pink", hex: "#DE6FA1", rgb: [222, 111, 161] },

    // ============ BROWNS ============
    { name: "Chocolate", hex: "#7B3F00", rgb: [123, 63, 0] },
    { name: "Coffee Brown", hex: "#6F4E37", rgb: [111, 78, 55] },
    { name: "Mocha", hex: "#967969", rgb: [150, 121, 105] },
    { name: "Caramel Brown", hex: "#FFD59A", rgb: [255, 213, 154] },
    { name: "Sienna", hex: "#A0522D", rgb: [160, 82, 45] },
    { name: "Umber", hex: "#635147", rgb: [99, 81, 71] },
    { name: "Tan", hex: "#D2B48C", rgb: [210, 180, 140] },
    { name: "Beige", hex: "#F5F5DC", rgb: [245, 245, 220] },
    { name: "Sand", hex: "#C2B280", rgb: [194, 178, 128] },
    { name: "Khaki", hex: "#C3B091", rgb: [195, 176, 145] },
    { name: "Taupe", hex: "#483C32", rgb: [72, 60, 50] },
    { name: "Chestnut", hex: "#954535", rgb: [149, 69, 53] },
    { name: "Mahogany", hex: "#C04000", rgb: [192, 64, 0] },
    { name: "Brown", hex: "#A52A2A", rgb: [165, 42, 42] },
    { name: "Dark Brown", hex: "#5C3317", rgb: [92, 51, 23] },
    { name: "Light Brown", hex: "#B5651D", rgb: [181, 101, 29] },
    { name: "Saddle Brown", hex: "#8B4513", rgb: [139, 69, 19] },
    { name: "Rosy Brown", hex: "#BC8F8F", rgb: [188, 143, 143] },
    { name: "Burlywood", hex: "#DEB887", rgb: [222, 184, 135] },
    { name: "Wheat", hex: "#F5DEB3", rgb: [245, 222, 179] },
    { name: "Sepia", hex: "#704214", rgb: [112, 66, 20] },
    { name: "Walnut Brown", hex: "#773F1A", rgb: [119, 63, 26] },
    { name: "Hazel Brown", hex: "#8E7618", rgb: [142, 118, 24] },
    { name: "Tawny", hex: "#CD5700", rgb: [205, 87, 0] },
    { name: "Coyote Brown", hex: "#81613C", rgb: [129, 97, 60] },
    { name: "Fulvous", hex: "#E48400", rgb: [228, 132, 0] },
    { name: "Field Drab", hex: "#6C541E", rgb: [108, 84, 30] },
    { name: "Cafe Au Lait", hex: "#A67B5B", rgb: [166, 123, 91] },
    { name: "Cafe Noir", hex: "#4B3832", rgb: [75, 56, 50] },
    { name: "Caput Mortuum", hex: "#592720", rgb: [89, 39, 32] },
    { name: "Chamoisee", hex: "#A0785A", rgb: [160, 120, 90] },
    { name: "Cinereous", hex: "#98817B", rgb: [152, 129, 123] },
    { name: "Coconut Brown", hex: "#965A3E", rgb: [150, 90, 62] },
    { name: "Dark Lava", hex: "#483C32", rgb: [72, 60, 50] },
    { name: "Donkey Brown", hex: "#664C28", rgb: [102, 76, 40] },
    { name: "Ecru", hex: "#C2B280", rgb: [194, 178, 128] },
    { name: "Fallow", hex: "#C19A6B", rgb: [193, 154, 107] },
    { name: "French Bistre", hex: "#856D4D", rgb: [133, 109, 77] },
    { name: "Fuzzy Wuzzy Brown", hex: "#CC6666", rgb: [204, 102, 102] },
    { name: "Grullo", hex: "#A99A86", rgb: [169, 154, 134] },
    { name: "Kobe", hex: "#882D17", rgb: [136, 45, 23] },
    { name: "Liver Brown", hex: "#674C47", rgb: [103, 76, 71] },
    { name: "Medium Taupe", hex: "#674C47", rgb: [103, 76, 71] },
    { name: "Mud Brown", hex: "#70543E", rgb: [112, 84, 62] },
    { name: "Old Copper", hex: "#724A2F", rgb: [114, 74, 47] },
    { name: "Pale Brown", hex: "#987654", rgb: [152, 118, 84] },
    { name: "Pastel Brown", hex: "#836953", rgb: [131, 105, 83] },
    { name: "Shadow Brown", hex: "#8A795D", rgb: [138, 121, 93] },
    { name: "Spicy Mix", hex: "#8B5252", rgb: [139, 82, 82] },
    { name: "Tuscan Brown", hex: "#6F4E37", rgb: [111, 78, 55] },
    { name: "Van Dyke Brown", hex: "#664228", rgb: [102, 66, 40] },
    { name: "Wood Brown", hex: "#C19A6B", rgb: [193, 154, 107] },
    { name: "Wenge", hex: "#645452", rgb: [100, 84, 82] },
    { name: "Russet", hex: "#80461B", rgb: [128, 70, 27] },

    // ============ NEUTRALS & GRAYS ============
    { name: "White", hex: "#FFFFFF", rgb: [255, 255, 255] },
    { name: "Ivory", hex: "#FFFFF0", rgb: [255, 255, 240] },
    { name: "Snow", hex: "#FFFAFA", rgb: [255, 250, 250] },
    { name: "Pearl", hex: "#F0EAD6", rgb: [240, 234, 214] },
    { name: "Silver", hex: "#C0C0C0", rgb: [192, 192, 192] },
    { name: "Platinum", hex: "#E5E4E2", rgb: [229, 228, 226] },
    { name: "Ash Gray", hex: "#B2BEB5", rgb: [178, 190, 181] },
    { name: "Stone Gray", hex: "#928E85", rgb: [146, 142, 133] },
    { name: "Slate Gray", hex: "#708090", rgb: [112, 128, 144] },
    { name: "Charcoal", hex: "#36454F", rgb: [54, 69, 79] },
    { name: "Onyx", hex: "#353839", rgb: [53, 56, 57] },
    { name: "Obsidian", hex: "#1C1C1C", rgb: [28, 28, 28] },
    { name: "Jet Black", hex: "#343434", rgb: [52, 52, 52] },
    { name: "Black", hex: "#000000", rgb: [0, 0, 0] },
    { name: "Gainsboro", hex: "#DCDCDC", rgb: [220, 220, 220] },
    { name: "Light Gray", hex: "#D3D3D3", rgb: [211, 211, 211] },
    { name: "Gray", hex: "#808080", rgb: [128, 128, 128] },
    { name: "Dark Gray", hex: "#A9A9A9", rgb: [169, 169, 169] },
    { name: "Dim Gray", hex: "#696969", rgb: [105, 105, 105] },
    { name: "Light Slate Gray", hex: "#778899", rgb: [119, 136, 153] },
    { name: "Smoke", hex: "#F5F5F5", rgb: [245, 245, 245] },
    { name: "Fog Gray", hex: "#D4D4D4", rgb: [212, 212, 212] },
    { name: "Mist Gray", hex: "#E8E8E8", rgb: [232, 232, 232] },
    { name: "Pebble Gray", hex: "#9E9E9E", rgb: [158, 158, 158] },
    { name: "Graphite", hex: "#474747", rgb: [71, 71, 71] },
    { name: "Lead Gray", hex: "#212121", rgb: [33, 33, 33] },
    { name: "Flint Gray", hex: "#6D6D6D", rgb: [109, 109, 109] },
    { name: "Pewter", hex: "#8D8D8D", rgb: [141, 141, 141] },
    { name: "Nickel", hex: "#727472", rgb: [114, 116, 114] },
    { name: "Ghost White", hex: "#F8F8FF", rgb: [248, 248, 255] },
    { name: "Seashell White", hex: "#FFF5EE", rgb: [255, 245, 238] },
    { name: "Floral White", hex: "#FFFAF0", rgb: [255, 250, 240] },
    { name: "Old Lace", hex: "#FDF5E6", rgb: [253, 245, 230] },
    { name: "Linen White", hex: "#FAF0E6", rgb: [250, 240, 230] },
    { name: "Antique White", hex: "#FAEBD7", rgb: [250, 235, 215] },
    { name: "Misty Rose", hex: "#FFE4E1", rgb: [255, 228, 225] },
    { name: "Lavender Blush", hex: "#FFF0F5", rgb: [255, 240, 245] },
    { name: "Mint Cream", hex: "#F5FFFA", rgb: [245, 255, 250] },
    { name: "Honeydew White", hex: "#F0FFF0", rgb: [240, 255, 240] },
    { name: "Azure White", hex: "#F0FFFF", rgb: [240, 255, 255] },
    { name: "Pale Silver", hex: "#C9C0BB", rgb: [201, 192, 187] },
    { name: "Quick Silver", hex: "#A6A6A6", rgb: [166, 166, 166] },
    { name: "Sonic Silver", hex: "#757575", rgb: [117, 117, 117] },
    { name: "Spanish Gray", hex: "#989898", rgb: [152, 152, 152] },
    { name: "Battleship Gray", hex: "#848482", rgb: [132, 132, 130] },
    { name: "Davy Gray", hex: "#555555", rgb: [85, 85, 85] },
    { name: "Outer Space", hex: "#414A4C", rgb: [65, 74, 76] },
    { name: "Eerie Black", hex: "#1B1B1B", rgb: [27, 27, 27] },
    { name: "Raisin Black", hex: "#242124", rgb: [36, 33, 36] },
    { name: "Rich Black", hex: "#004040", rgb: [0, 64, 64] },
    { name: "Licorice", hex: "#1A1110", rgb: [26, 17, 16] },
    { name: "Night Black", hex: "#0D0D0D", rgb: [13, 13, 13] },
    { name: "Dark Charcoal", hex: "#333333", rgb: [51, 51, 51] },
    { name: "Gunmetal", hex: "#2A3439", rgb: [42, 52, 57] },
    { name: "Xanadu", hex: "#738678", rgb: [115, 134, 120] },
    { name: "Warm Gray", hex: "#8B7E74", rgb: [139, 126, 116] },
    { name: "Cool Gray", hex: "#8C92AC", rgb: [140, 146, 172] },
    { name: "Blue Gray", hex: "#6699CC", rgb: [102, 153, 204] },
    { name: "Pale Silver Gray", hex: "#D4CDC5", rgb: [212, 205, 197] },
    { name: "Light Silver", hex: "#D9D9D9", rgb: [217, 217, 217] },
    { name: "Medium Gray", hex: "#BEBEBE", rgb: [190, 190, 190] },
    { name: "Tin Gray", hex: "#909090", rgb: [144, 144, 144] },
    { name: "Taupe Gray", hex: "#8B8589", rgb: [139, 133, 137] },
    { name: "Marengo Gray", hex: "#4C5866", rgb: [76, 88, 102] },
    { name: "Payne Gray", hex: "#536878", rgb: [83, 104, 120] },
    { name: "Roman Silver", hex: "#838996", rgb: [131, 137, 150] },
    { name: "Cadet Gray", hex: "#91A3B0", rgb: [145, 163, 176] },
    { name: "Ash White", hex: "#E9E4D4", rgb: [233, 228, 212] },
];

// ============================================
// Smart HSL Fallback Naming
// ============================================
function generateSmartName(h, s, l) {
    if (s < 8) {
        if (l >= 97) return 'Near White';
        if (l >= 90) return 'Very Light Gray';
        if (l >= 78) return 'Light Gray';
        if (l >= 62) return 'Gray';
        if (l >= 48) return 'Medium Gray';
        if (l >= 34) return 'Dark Gray';
        if (l >= 18) return 'Very Dark Gray';
        if (l >= 8) return 'Near Black';
        return 'Black';
    }

    var lightPrefix = '';
    if (l >= 92) lightPrefix = 'Pale ';
    else if (l >= 78) lightPrefix = 'Light ';
    else if (l >= 63) lightPrefix = 'Soft ';
    else if (l <= 12) lightPrefix = 'Near Black ';
    else if (l <= 22) lightPrefix = 'Very Dark ';
    else if (l <= 32) lightPrefix = 'Dark ';
    else if (l <= 44) lightPrefix = 'Deep ';

    var satPrefix = '';
    if (s < 15) satPrefix = 'Muted ';
    else if (s < 30) satPrefix = 'Desaturated ';
    else if (s >= 92) satPrefix = 'Vivid ';
    else if (s >= 78) satPrefix = 'Bright ';
    else if (s >= 64) satPrefix = 'Rich ';

    var hueName = '';
    if (h < 8 || h >= 355) hueName = 'Red';
    else if (h < 15) hueName = 'Red Orange';
    else if (h < 22) hueName = 'Orange Red';
    else if (h < 32) hueName = 'Orange';
    else if (h < 42) hueName = 'Dark Orange';
    else if (h < 52) hueName = 'Amber';
    else if (h < 60) hueName = 'Yellow Orange';
    else if (h < 68) hueName = 'Yellow';
    else if (h < 76) hueName = 'Yellow Lime';
    else if (h < 88) hueName = 'Lime';
    else if (h < 100) hueName = 'Chartreuse';
    else if (h < 118) hueName = 'Yellow Green';
    else if (h < 138) hueName = 'Green';
    else if (h < 150) hueName = 'Emerald';
    else if (h < 162) hueName = 'Spring Green';
    else if (h < 172) hueName = 'Mint';
    else if (h < 182) hueName = 'Cyan Green';
    else if (h < 192) hueName = 'Cyan';
    else if (h < 202) hueName = 'Sky Blue';
    else if (h < 212) hueName = 'Light Blue';
    else if (h < 222) hueName = 'Azure';
    else if (h < 235) hueName = 'Blue';
    else if (h < 248) hueName = 'Cobalt Blue';
    else if (h < 260) hueName = 'Indigo Blue';
    else if (h < 272) hueName = 'Indigo';
    else if (h < 284) hueName = 'Violet';
    else if (h < 296) hueName = 'Purple';
    else if (h < 308) hueName = 'Dark Purple';
    else if (h < 318) hueName = 'Magenta';
    else if (h < 328) hueName = 'Fuchsia';
    else if (h < 338) hueName = 'Rose';
    else if (h < 348) hueName = 'Deep Rose';
    else hueName = 'Crimson';

    return (lightPrefix + satPrefix + hueName).trim();
}

// ============================================
// Convert RGB to HEX
// ============================================
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
    r /= 255; g /= 255; b /= 255;
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
    r /= 255; g /= 255; b /= 255;
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
    if (r === 0 && g === 0 && b === 0) return { c: 0, m: 0, y: 0, k: 100 };
    let c = 1 - (r / 255);
    let m = 1 - (g / 255);
    let y = 1 - (b / 255);
    const k = Math.min(c, m, y);
    c = Math.round(((c - k) / (1 - k)) * 100);
    m = Math.round(((m - k) / (1 - k)) * 100);
    y = Math.round(((y - k) / (1 - k)) * 100);
    return { c, m, y, k: Math.round(k * 100) };
}

// ============================================
// Color Distance
// ============================================
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

// ============================================
// Find Color Name with Smart Fallback
// ============================================
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

    const THRESHOLD = 40;
    if (minDistance > THRESHOLD) {
        const hsl = rgbToHsl(r, g, b);
        const smartName = generateSmartName(hsl.h, hsl.s, hsl.l);
        return {
            name: smartName,
            distance: minDistance,
            matchedHex: rgbToHex(r, g, b)
        };
    }

    return {
        name: closestColor.name,
        distance: minDistance,
        matchedHex: closestColor.hex
    };
}

// ============================================
// Get Color Temperature
// ============================================
function getColorTemperature(h, s, l) {
    if (s < 15) return 'Neutral';
    if (h >= 0 && h < 60) return 'Warm';
    if (h >= 60 && h < 150) return 'Neutral';
    if (h >= 150 && h < 270) return 'Cool';
    if (h >= 270 && h < 330) return 'Warm';
    return 'Warm';
}

// ============================================
// Get Color Type
// ============================================
function getColorType(h, s, l) {
    if (s < 10) return 'Neutral';
    if (l < 20) return 'Dark';
    if (l > 80) return 'Light';
    if ((h >= 350 || h < 15) && s > 50) return 'Primary';
    if (h >= 50 && h < 70 && s > 50) return 'Primary';
    if (h >= 200 && h < 250 && s > 50) return 'Primary';
    if (h >= 15 && h < 50 && s > 50) return 'Secondary';
    if (h >= 70 && h < 170 && s > 50) return 'Secondary';
    if (h >= 250 && h < 300 && s > 50) return 'Secondary';
    return 'Tertiary';
}

// ============================================
// Luminance & Contrast
// ============================================
function getLuminance(r, g, b) {
    const [rs, gs, bs] = [r, g, b].map(c => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrastRatio(rgb1, rgb2) {
    const l1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
    const l2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
}

function getWcagCompliance(contrastRatio) {
    if (contrastRatio >= 7) return { level: 'AAA', text: 'Excellent' };
    if (contrastRatio >= 4.5) return { level: 'AA', text: 'Good' };
    if (contrastRatio >= 3) return { level: 'AA Large', text: 'OK for large text' };
    return { level: 'Fail', text: 'Poor contrast' };
}

// ============================================
// Color Harmonies
// ============================================
function getComplementary(h, s, l) {
    return { h: (h + 180) % 360, s, l };
}

function getAnalogous(h, s, l) {
    return [
        { h: (h - 30 + 360) % 360, s, l },
        { h: (h + 30) % 360, s, l }
    ];
}

function getTriadic(h, s, l) {
    return [
        { h: (h + 120) % 360, s, l },
        { h: (h + 240) % 360, s, l }
    ];
}

// ============================================
// HSL to RGB
// ============================================
function hslToRgb(h, s, l) {
    s /= 100; l /= 100;
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

// ============================================
// Extract Dominant Colors
// ============================================
function extractDominantColors(imageData, count = 8) {
    const pixels = [];
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 16) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];
        if (a > 128) pixels.push([r, g, b]);
    }
    if (pixels.length === 0) return [];
    let centroids = [];
    for (let i = 0; i < count; i++) {
        centroids.push(pixels[Math.floor(Math.random() * pixels.length)]);
    }
    for (let iteration = 0; iteration < 10; iteration++) {
        const clusters = Array.from({ length: count }, () => []);
        for (const pixel of pixels) {
            let minDist = Infinity;
            let clusterIndex = 0;
            for (let i = 0; i < centroids.length; i++) {
                const dist = colorDistance(pixel, centroids[i]);
                if (dist < minDist) { minDist = dist; clusterIndex = i; }
            }
            clusters[clusterIndex].push(pixel);
        }
        for (let i = 0; i < count; i++) {
            if (clusters[i].length > 0) {
                const sum = clusters[i].reduce(
                    (acc, p) => [acc[0] + p[0], acc[1] + p[1], acc[2] + p[2]], [0, 0, 0]
                );
                centroids[i] = [
                    sum[0] / clusters[i].length,
                    sum[1] / clusters[i].length,
                    sum[2] / clusters[i].length
                ];
            }
        }
    }
    const colors = centroids.map((c) => {
        const r = Math.round(c[0]);
        const g = Math.round(c[1]);
        const b = Math.round(c[2]);
        const hex = rgbToHex(r, g, b);
        const hsl = rgbToHsl(r, g, b);
        const hsv = rgbToHsv(r, g, b);
        const cmyk = rgbToCmyk(r, g, b);
        const colorName = findColorName(r, g, b);
        return {
            rgb: { r, g, b }, hex, hsl, hsv, cmyk,
            name: colorName.name,
            temperature: getColorTemperature(hsl.h, hsl.s, hsl.l),
            type: getColorType(hsl.h, hsl.s, hsl.l)
        };
    });
    const unique = colors.filter((c, i, arr) =>
        arr.findIndex(x => x.hex === c.hex) === i
    );
    return unique.sort((a, b) => b.hsl.l - a.hsl.l).slice(0, count);
}

// ============================================
// Export
// ============================================
window.ColorUtils = {
    rgbToHex, hexToRgb, rgbToHsl, rgbToHsv, rgbToCmyk, hslToRgb,
    findColorName, getColorTemperature, getColorType,
    getLuminance, getContrastRatio, getWcagCompliance,
    getComplementary, getAnalogous, getTriadic,
    extractDominantColors, COLOR_DATABASE
};
