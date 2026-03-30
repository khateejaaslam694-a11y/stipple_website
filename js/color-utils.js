// ============================================
// STIPPLE - Color Utilities
// ============================================

// Color Database - 500+ named colors
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
    { name: "Lava", hex: "#CF1020", rgb: [207, 16, 32] },
    { name: "Raspberry Red", hex: "#C0392B", rgb: [192, 57, 43] },
    { name: "Falu Red", hex: "#801818", rgb: [128, 24, 24] },
    { name: "Alizarin", hex: "#E32636", rgb: [227, 38, 54] },
    { name: "Cadmium Red", hex: "#E30022", rgb: [227, 0, 34] },
    { name: "Permanent Red", hex: "#CB3030", rgb: [203, 48, 48] },
    { name: "Rosewood", hex: "#65000B", rgb: [101, 0, 11] },
    { name: "Sangria", hex: "#92000A", rgb: [146, 0, 10] },
    { name: "Brick Red", hex: "#CB4154", rgb: [203, 65, 84] },

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
    { name: "Orange", hex: "#FF8000", rgb: [255, 128, 0] },
    { name: "Dark Orange", hex: "#FF8C00", rgb: [255, 140, 0] },
    { name: "Deep Orange", hex: "#E65C00", rgb: [230, 92, 0] },
    { name: "Mango", hex: "#FDBE02", rgb: [253, 190, 2] },
    { name: "Papaya", hex: "#FFEFD5", rgb: [255, 239, 213] },
    { name: "Melon", hex: "#FDBCB4", rgb: [253, 188, 180] },
    { name: "Terra Cotta", hex: "#E2725B", rgb: [226, 114, 91] },
    { name: "Sienna Orange", hex: "#C47A45", rgb: [196, 122, 69] },
    { name: "Ochre", hex: "#CC7722", rgb: [204, 119, 34] },
    { name: "Cadmium Orange", hex: "#ED872D", rgb: [237, 135, 45] },
    { name: "Burnt Sienna", hex: "#E97451", rgb: [233, 116, 81] },
    { name: "Raw Sienna", hex: "#D68A59", rgb: [214, 138, 89] },
    { name: "Bisque", hex: "#FFE4C4", rgb: [255, 228, 196] },
    { name: "Navajo White", hex: "#FFDEAD", rgb: [255, 222, 173] },
    { name: "Sandy Brown", hex: "#F4A460", rgb: [244, 164, 96] },
    { name: "Peru", hex: "#CD853F", rgb: [205, 133, 63] },
    { name: "Cinnamon", hex: "#D2691E", rgb: [210, 105, 30] },
    { name: "Bronze", hex: "#CD7F32", rgb: [205, 127, 50] },
    { name: "Butterscotch", hex: "#E3963E", rgb: [227, 150, 62] },
    { name: "Caramel Orange", hex: "#FF9B00", rgb: [255, 155, 0] },
    { name: "Peach Orange", hex: "#FFCC99", rgb: [255, 204, 153] },

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
    { name: "Yellow", hex: "#FFFF00", rgb: [255, 255, 0] },
    { name: "Light Yellow", hex: "#FFFFE0", rgb: [255, 255, 224] },
    { name: "Dark Yellow", hex: "#D4AC0D", rgb: [212, 172, 13] },
    { name: "Corn", hex: "#FBEC5D", rgb: [251, 236, 93] },
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
    { name: "Harlequin", hex: "#3FFF00", rgb: [63, 255, 0] },
    { name: "Hookers Green", hex: "#49796B", rgb: [73, 121, 107] },
    { name: "Viridian", hex: "#40826D", rgb: [64, 130, 109] },
    { name: "Artichoke", hex: "#8F9779", rgb: [143, 151, 121] },
    { name: "Asparagus", hex: "#87A96B", rgb: [135, 169, 107] },
    { name: "Tea Green", hex: "#D0F0C0", rgb: [208, 240, 192] },
    { name: "Celadon", hex: "#ACE1AF", rgb: [172, 225, 175] },
    { name: "Laurel Green", hex: "#A9BA9D", rgb: [169, 186, 157] },
    { name: "Reseda Green", hex: "#74856B", rgb: [116, 133, 107] },
    { name: "Dark Spruce", hex: "#0F2407", rgb: [15, 36, 7] },

    // Teals & Cyans
    { name: "Teal", hex: "#008080", rgb: [0, 128, 128] },
    { name: "Turquoise", hex: "#40E0D0", rgb: [64, 224, 208] },
    { name: "Aqua", hex: "#00FFFF", rgb: [0, 255, 255] },
    { name: "Cyan", hex: "#00FFFF", rgb: [0, 255, 255] },
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

    // Blues
    { name: "Azure", hex: "#007FFF", rgb: [0, 127, 255] },
    { name: "Sapphire", hex: "#0F52BA", rgb: [15, 82, 186] },
    { name: "Cobalt", hex: "#0047AB", rgb: [0, 71, 171] },
    { name: "Navy", hex: "#000080", rgb: [0, 0, 128] },
    { name: "Midnight Blue", hex: "#191970", rgb: [25, 25, 112] },
    { name: "Sky Blue", hex: "#87CEEB", rgb: [135, 206, 235] },
    { name: "Powder Blue", hex: "#B0E0E6", rgb: [176, 224, 230] },
    { name: "Ocean Blue", hex: "#015F7E", rgb: [1, 95, 126] },
    { name: "Steel Blue", hex: "#4682B4", rgb: [70, 130, 180] },
    { name: "Denim", hex: "#1560BD", rgb: [21, 96, 189] },
    { name: "Indigo", hex: "#4B0082", rgb: [75, 0, 130] },
    { name: "Periwinkle", hex: "#CCCCFF", rgb: [204, 204, 255] },
    { name: "Blue", hex: "#0000FF", rgb: [0, 0, 255] },
    { name: "Dark Blue", hex: "#00008B", rgb: [0, 0, 139] },
    { name: "Light Blue", hex: "#ADD8E6", rgb: [173, 216, 230] },
    { name: "Pale Blue", hex: "#BFEFFF", rgb: [191, 239, 255] },
    { name: "Royal Blue", hex: "#4169E1", rgb: [65, 105, 225] },
    { name: "Dodger Blue", hex: "#1E90FF", rgb: [30, 144, 255] },
    { name: "Deep Sky Blue", hex: "#00BFFF", rgb: [0, 191, 255] },
    { name: "Cornflower Blue", hex: "#6495ED", rgb: [100, 149, 237] },
    { name: "Medium Blue", hex: "#0000CD", rgb: [0, 0, 205] },
    { name: "Slate Blue", hex: "#6A5ACD", rgb: [106, 90, 205] },
    { name: "Medium Slate Blue", hex: "#7B68EE", rgb: [123, 104, 238] },
    { name: "Light Slate Blue", hex: "#8470FF", rgb: [132, 112, 255] },
    { name: "Dark Slate Blue", hex: "#483D8B", rgb: [72, 61, 139] },
    { name: "Blue Violet", hex: "#8A2BE2", rgb: [138, 43, 226] },
    { name: "Medium Purple", hex: "#9370DB", rgb: [147, 112, 219] },
    { name: "Cadet", hex: "#536872", rgb: [83, 104, 114] },
    { name: "Glaucous", hex: "#6082B6", rgb: [96, 130, 182] },
    { name: "Ultramarine", hex: "#3F00FF", rgb: [63, 0, 255] },
    { name: "Electric Blue", hex: "#7DF9FF", rgb: [125, 249, 255] },
    { name: "Baby Blue", hex: "#89CFF0", rgb: [137, 207, 240] },
    { name: "Ice Blue", hex: "#D6EAF8", rgb: [214, 234, 248] },
    { name: "Prussian Blue", hex: "#003153", rgb: [0, 49, 83] },
    { name: "Egyptian Blue", hex: "#1034A6", rgb: [16, 52, 166] },
    { name: "Space Blue", hex: "#1B2A4A", rgb: [27, 42, 74] },
    { name: "Tiffany Blue", hex: "#0ABAB5", rgb: [10, 186, 181] },
    { name: "Columbia Blue", hex: "#9BDDFF", rgb: [155, 221, 255] },
    { name: "Picton Blue", hex: "#45B1E8", rgb: [69, 177, 232] },

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
    { name: "Purple", hex: "#800080", rgb: [128, 0, 128] },
    { name: "Dark Purple", hex: "#4B0150", rgb: [75, 1, 80] },
    { name: "Light Purple", hex: "#D8B4FE", rgb: [216, 180, 254] },
    { name: "Medium Purple", hex: "#9370DB", rgb: [147, 112, 219] },
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
    { name: "Purple Mountain", hex: "#9D81BA", rgb: [157, 129, 186] },
    { name: "Ube", hex: "#8878C3", rgb: [136, 120, 195] },
    { name: "African Violet", hex: "#B284BE", rgb: [178, 132, 190] },
    { name: "Veronica", hex: "#A020F0", rgb: [160, 32, 240] },
    { name: "Palatinate", hex: "#682860", rgb: [104, 40, 96] },

    // Pinks
    { name: "Tulip Pink", hex: "#BC475F", rgb: [188, 71, 95] },
    { name: "Magenta", hex: "#FF00FF", rgb: [255, 0, 255] },
    { name: "Fuchsia", hex: "#FF00FF", rgb: [255, 0, 255] },
    { name: "Hot Pink", hex: "#FF69B4", rgb: [255, 105, 180] },
    { name: "Blush", hex: "#DE5D83", rgb: [222, 93, 131] },
    { name: "Carnation", hex: "#FFA6C9", rgb: [255, 166, 201] },
    { name: "Flamingo", hex: "#FC8EAC", rgb: [252, 142, 172] },
    { name: "Watermelon Pink", hex: "#FD4659", rgb: [253, 70, 89] },
    { name: "Raspberry", hex: "#E30B5D", rgb: [227, 11, 93] },
    { name: "Pink", hex: "#FFC0CB", rgb: [255, 192, 203] },
    { name: "Light Pink", hex: "#FFB6C1", rgb: [255, 182, 193] },
    { name: "Deep Pink", hex: "#FF1493", rgb: [255, 20, 147] },
    { name: "Pale Pink", hex: "#FADADD", rgb: [250, 218, 221] },
    { name: "Pastel Pink", hex: "#FFD1DC", rgb: [255, 209, 220] },
    { name: "Baby Pink", hex: "#F4C2C2", rgb: [244, 194, 194] },
    { name: "Dusty Rose", hex: "#DCAE96", rgb: [220, 174, 150] },
    { name: "Puce", hex: "#CC8899", rgb: [204, 136, 153] },
    { name: "Thulian Pink", hex: "#DE6FA1", rgb: [222, 111, 161] },
    { name: "Amaranth", hex: "#E52B50", rgb: [229, 43, 80] },
    { name: "Cerise", hex: "#DE3163", rgb: [222, 49, 99] },
    { name: "Punch Pink", hex: "#FF6BB5", rgb: [255, 107, 181] },
    { name: "Tickle Me Pink", hex: "#FC89AC", rgb: [252, 137, 172] },
    { name: "Charm", hex: "#D46A7E", rgb: [212, 106, 126] },
    { name: "Ultra Pink", hex: "#FF6FFF", rgb: [255, 111, 255] },
    { name: "Bubblegum", hex: "#FFC1CC", rgb: [255, 193, 204] },
    { name: "Mimi Pink", hex: "#FFDAE9", rgb: [255, 218, 233] },
    { name: "Persian Pink", hex: "#F77FBE", rgb: [247, 127, 190] },
    { name: "Brink Pink", hex: "#FB607F", rgb: [251, 96, 127] },

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
    { name: "Brown", hex: "#A52A2A", rgb: [165, 42, 42] },
    { name: "Dark Brown", hex: "#5C3317", rgb: [92, 51, 23] },
    { name: "Light Brown", hex: "#B5651D", rgb: [181, 101, 29] },
    { name: "Saddle Brown", hex: "#8B4513", rgb: [139, 69, 19] },
    { name: "Rosy Brown", hex: "#BC8F8F", rgb: [188, 143, 143] },
    { name: "Burlywood", hex: "#DEB887", rgb: [222, 184, 135] },
    { name: "Moccasin", hex: "#FFE4B5", rgb: [255, 228, 181] },
    { name: "Wheat", hex: "#F5DEB3", rgb: [245, 222, 179] },
    { name: "Linen", hex: "#FAF0E6", rgb: [250, 240, 230] },
    { name: "Antique White", hex: "#FAEBD7", rgb: [250, 235, 215] },
    { name: "Bisque Brown", hex: "#FFE4C4", rgb: [255, 228, 196] },
    { name: "Peach Puff", hex: "#FFDAB9", rgb: [255, 218, 185] },
    { name: "Sepia", hex: "#704214", rgb: [112, 66, 20] },
    { name: "Walnut", hex: "#773F1A", rgb: [119, 63, 26] },
    { name: "Hazel", hex: "#8E7618", rgb: [142, 118, 24] },
    { name: "Tawny", hex: "#CD5700", rgb: [205, 87, 0] },
    { name: "Coyote Brown", hex: "#81613C", rgb: [129, 97, 60] },
    { name: "Field Drab", hex: "#6C541E", rgb: [108, 84, 30] },
    { name: "Fulvous", hex: "#E48400", rgb: [228, 132, 0] },

    // Neutrals & Grays
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
    { name: "Gainsboro", hex: "#DCDCDC", rgb: [220, 220, 220] },
    { name: "Light Gray", hex: "#D3D3D3", rgb: [211, 211, 211] },
    { name: "Gray", hex: "#808080", rgb: [128, 128, 128] },
    { name: "Dark Gray", hex: "#A9A9A9", rgb: [169, 169, 169] },
    { name: "Dim Gray", hex: "#696969", rgb: [105, 105, 105] },
    { name: "Light Slate Gray", hex: "#778899", rgb: [119, 136, 153] },
    { name: "Smoke", hex: "#F5F5F5", rgb: [245, 245, 245] },
    { name: "Fog", hex: "#D4D4D4", rgb: [212, 212, 212] },
    { name: "Mist", hex: "#E8E8E8", rgb: [232, 232, 232] },
    { name: "Pebble", hex: "#9E9E9E", rgb: [158, 158, 158] },
    { name: "Graphite", hex: "#474747", rgb: [71, 71, 71] },
    { name: "Lead", hex: "#212121", rgb: [33, 33, 33] },
    { name: "Flint", hex: "#6D6D6D", rgb: [109, 109, 109] },
    { name: "Pewter", hex: "#8D8D8D", rgb: [141, 141, 141] },
    { name: "Nickel", hex: "#727472", rgb: [114, 116, 114] },
    { name: "Steel", hex: "#B0C4DE", rgb: [176, 196, 222] },
    { name: "Ghost White", hex: "#F8F8FF", rgb: [248, 248, 255] },
    { name: "Alice Blue", hex: "#F0F8FF", rgb: [240, 248, 255] },
    { name: "Azure White", hex: "#F0FFFF", rgb: [240, 255, 255] },
    { name: "Honeydew", hex: "#F0FFF0", rgb: [240, 255, 240] },
    { name: "Mint Cream", hex: "#F5FFFA", rgb: [245, 255, 250] },
    { name: "Old Lace", hex: "#FDF5E6", rgb: [253, 245, 230] },
    { name: "Floral White", hex: "#FFFAF0", rgb: [255, 250, 240] },
    { name: "Seashell", hex: "#FFF5EE", rgb: [255, 245, 238] },
    { name: "Lavender Blush", hex: "#FFF0F5", rgb: [255, 240, 245] },
    { name: "Misty Rose", hex: "#FFE4E1", rgb: [255, 228, 225] },
];

// ============================================
// Smart HSL Fallback Naming
// ============================================
function generateSmartName(h, s, l) {
    // Achromatic (gray/white/black)
    if (s < 8) {
        if (l >= 95) return 'Near White';
        if (l >= 85) return 'Very Light Gray';
        if (l >= 70) return 'Light Gray';
        if (l >= 55) return 'Gray';
        if (l >= 40) return 'Medium Gray';
        if (l >= 25) return 'Dark Gray';
        if (l >= 12) return 'Very Dark Gray';
        return 'Near Black';
    }

    // Lightness prefix
    var lightPrefix = '';
    if (l >= 90) lightPrefix = 'Pale ';
    else if (l >= 75) lightPrefix = 'Light ';
    else if (l >= 60) lightPrefix = 'Soft ';
    else if (l <= 15) lightPrefix = 'Deep Dark ';
    else if (l <= 28) lightPrefix = 'Dark ';
    else if (l <= 42) lightPrefix = 'Deep ';

    // Saturation prefix
    var satPrefix = '';
    if (s < 20) satPrefix = 'Muted ';
    else if (s < 40) satPrefix = 'Desaturated ';
    else if (s >= 90) satPrefix = 'Vivid ';
    else if (s >= 75) satPrefix = 'Bright ';

    // Hue name
    var hueName = '';
    if (h < 8 || h >= 352) hueName = 'Red';
    else if (h < 18) hueName = 'Red Orange';
    else if (h < 30) hueName = 'Orange Red';
    else if (h < 45) hueName = 'Orange';
    else if (h < 55) hueName = 'Amber';
    else if (h < 65) hueName = 'Yellow Orange';
    else if (h < 75) hueName = 'Yellow';
    else if (h < 85) hueName = 'Yellow Green';
    else if (h < 105) hueName = 'Chartreuse';
    else if (h < 135) hueName = 'Green';
    else if (h < 150) hueName = 'Emerald';
    else if (h < 165) hueName = 'Spring Green';
    else if (h < 178) hueName = 'Mint';
    else if (h < 192) hueName = 'Cyan Green';
    else if (h < 200) hueName = 'Cyan';
    else if (h < 212) hueName = 'Sky Blue';
    else if (h < 228) hueName = 'Azure';
    else if (h < 242) hueName = 'Blue';
    else if (h < 255) hueName = 'Cobalt Blue';
    else if (h < 268) hueName = 'Indigo';
    else if (h < 282) hueName = 'Violet';
    else if (h < 295) hueName = 'Purple';
    else if (h < 310) hueName = 'Magenta';
    else if (h < 325) hueName = 'Fuchsia';
    else if (h < 340) hueName = 'Rose';
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
// Color Distance (Weighted Euclidean)
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
// Find Closest Color Name — with Smart Fallback
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

    // If best match is too far — use smart HSL name instead
    const THRESHOLD = 45;
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

// Get color temperature
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
    if ((h >= 350 || h < 15) && s > 50) return 'Primary';
    if (h >= 50 && h < 70 && s > 50) return 'Primary';
    if (h >= 200 && h < 250 && s > 50) return 'Primary';
    if (h >= 15 && h < 50 && s > 50) return 'Secondary';
    if (h >= 70 && h < 170 && s > 50) return 'Secondary';
    if (h >= 250 && h < 300 && s > 50) return 'Secondary';
    return 'Tertiary';
}

// Get luminance
function getLuminance(r, g, b) {
    const [rs, gs, bs] = [r, g, b].map(c => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Get contrast ratio
function getContrastRatio(rgb1, rgb2) {
    const l1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
    const l2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
}

// WCAG compliance
function getWcagCompliance(contrastRatio) {
    if (contrastRatio >= 7) return { level: 'AAA', text: 'Excellent' };
    if (contrastRatio >= 4.5) return { level: 'AA', text: 'Good' };
    if (contrastRatio >= 3) return { level: 'AA Large', text: 'OK for large text' };
    return { level: 'Fail', text: 'Poor contrast' };
}

// Complementary color
function getComplementary(h, s, l) {
    return { h: (h + 180) % 360, s, l };
}

// Analogous colors
function getAnalogous(h, s, l) {
    return [
        { h: (h - 30 + 360) % 360, s, l },
        { h: (h + 30) % 360, s, l }
    ];
}

// Triadic colors
function getTriadic(h, s, l) {
    return [
        { h: (h + 120) % 360, s, l },
        { h: (h + 240) % 360, s, l }
    ];
}

// HSL to RGB
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

// Extract dominant colors
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

// Export
window.ColorUtils = {
    rgbToHex, hexToRgb, rgbToHsl, rgbToHsv, rgbToCmyk, hslToRgb,
    findColorName, getColorTemperature, getColorType,
    getLuminance, getContrastRatio, getWcagCompliance,
    getComplementary, getAnalogous, getTriadic,
    extractDominantColors, COLOR_DATABASE
};
