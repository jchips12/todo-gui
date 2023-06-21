/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{html,js,jsx}',
        './public/index.html',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    "tailwindCSS.experimental.classRegex": [
        ["Classes \\=([^;]*);", "'([^']*)'"],
        ["Classes \\=([^;]*);", "\"([^\"]*)\""],
        ["Classes \\=([^;]*);", "\\`([^\\`]*)\\`"]
    ]
}

