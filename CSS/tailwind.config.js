// Tailwind CSS Configuration
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
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
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                display: ["Playfair Display", "serif"],
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(to right, #A78BFA, #F472B6)',
            }
        },
    },
};