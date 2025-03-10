/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                accent: 'var(--accent)',
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            fontFamily: {
                nunito: ['var(--font-nunito)', 'sans-serif'],
                sans: ['var(--font-nunito)', 'sans-serif'],
            },
        },
    },
    plugins: [],
} 