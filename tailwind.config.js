const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.js', './src/**/*.ts', './src/**/*.tsx'],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Playfair Display', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                forestGreen: '#1b4529',
                blush: '#c79288'
            }
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ],
}
