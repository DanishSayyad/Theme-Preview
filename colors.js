const palettes = [
    // Original 15
    {name:"Teal & Coral", colors:["#F8F9FA","#008080","#FF6B6B","#FFD166"]},
    {name:"Navy & Gold", colors:["#FFFFFF","#1E3A8A","#FBBF24","#E5E7EB"]},
    {name:"Olive & Beige", colors:["#FAFAF5","#556B2F","#C2B280","#8FBC8F"]},
    {name:"Turquoise & Orange", colors:["#F9FAFB","#0EA5E9","#F97316","#22C55E"]},
    {name:"Black & Red", colors:["#FFFFFF","#000000","#E11D48","#6B7280"]},
    {name:"Lavender & Charcoal", colors:["#F9FAFB","#6B7280","#A78BFA","#FBBF24"]},
    {name:"Plum & Sand", colors:["#FFFFFF","#7C3AED","#F59E0B","#E5E7EB"]},
    {name:"Violet & Teal", colors:["#F8F9FA","#5B21B6","#0D9488","#F97316"]},
    {name:"Lilac & Rose", colors:["#FAFAFA","#C084FC","#F43F5E","#475569"]},
    {name:"Indigo & Mint", colors:["#FFFFFF","#4338CA","#10B981","#F9A8D4"]},
    {name:"Purple Base", colors:["#FFFFFF","#6C63FF","#212529","#F8F9FA"]},
    {name:"Cool Blue Neutral", colors:["#FFFFFF","#374151","#60A5FA","#D1D5DB"]},
    {name:"Green & Yellow", colors:["#FFFFFF","#1F2937","#34D399","#FDE68A"]},
    {name:"Sky & Soft Red", colors:["#F8FAFC","#0F172A","#38BDF8","#FCA5A5"]},
    {name:"Purple + Yellow Pop", colors:["#FAFAFA","#111827","#A855F7","#FACC15"]},

    // 5 new shopping-oriented palettes
    {name:"Minimal Luxe", colors:["#FFFFFF","#111827","#6B7280","#E5E7EB"]}, 
    {name:"Warm Earth", colors:["#FAFAF5","#6B4226","#C68642","#EED9C4"]},
    {name:"Urban Denim", colors:["#F9FAFB","#1E3A8A","#3B82F6","#93C5FD"]},
    {name:"Modern Neutral", colors:["#FFFFFF","#374151","#9CA3AF","#F3F4F6"]},
    {name:"Blush Chic", colors:["#FFFBFE","#9D174D","#EC4899","#FBCFE8"]},

    // 🟡 Yellow + Black
    { name: "Golden Edge", colors: ["#FFD700", "#000000", "#FFF8DC", "#696969"] },
    { name: "Neon Energy", colors: ["#FFEB3B", "#212121", "#FFFFFF", "#FF9800"] },
    { name: "Luxury Yellow", colors: ["#F7C600", "#1A1A1A", "#E5E5E5", "#333333"] },
    { name: "Cyber Glow", colors: ["#FFC107", "#000000", "#00E5FF", "#424242"] },
    { name: "Bee Hive", colors: ["#FFDD00", "#101820", "#F2F2F2", "#757575"] },

    // 🔴 Red + Black
    { name: "Crimson Bold", colors: ["#E10600", "#000000", "#F5F5F5", "#333333"] },
    { name: "Scarlet Luxe", colors: ["#D32F2F", "#121212", "#B71C1C", "#EEEEEE"] },
    { name: "Red Inferno", colors: ["#FF0000", "#1C1C1C", "#FF6F61", "#2E2E2E"] },
    { name: "Modern Gothic", colors: ["#B71C1C", "#000000", "#8B0000", "#D3D3D3"] },
    { name: "Ruby Flame", colors: ["#C62828", "#212121", "#E53935", "#FAFAFA"] },

    // 🔵🟢⚫ Blue + Green + Black
    { name: "Ocean Tech", colors: ["#2196F3", "#4CAF50", "#000000", "#E0F7FA"] },
    { name: "Cyber Wave", colors: ["#00B0FF", "#00C853", "#1C1C1C", "#ECEFF1"] },
    { name: "Neon Stream", colors: ["#2979FF", "#00E676", "#101010", "#BDBDBD"] },
    { name: "Aqua Glow", colors: ["#00E5FF", "#00C853", "#000000", "#B2FF59"] },
    { name: "Matrix Vibes", colors: ["#00ACC1", "#2E7D32", "#000000", "#9E9E9E"] }
];
