// 1. Centralized Control (Kontrol Terpusat)
tailwind.config = {
    // 5. Dark Mode
    darkMode: "class",    
    theme: {
        extend: {
            // 2. Palet Warna Custom
            colors: {
                primary: "#A78BFA", // Pastel Violet (Violet 400)
                secondary: "#F472B6", // Pastel Pink (Pink 400)
                accent: "#2DD4BF", // Pastel Teal (Teal 400)
                "background-light": "#FDFBF7", // Soft warm off-white
                "background-dark": "#1E293B", // Muted dark slate
                "card-light": "#FFFFFF",
                "card-dark": "#334155", // Soft dark card
                "border-light": "#E2E8F0",
                "border-dark": "#475569",
            },
            // 3. Font Custom
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                display: ["Playfair Display", "serif"],
            },
            // 4. Background Custom
            backgroundImage: {
                'gradient-primary': 'linear-gradient(to right, #A78BFA, #F472B6)',
            }
        },
    },
};