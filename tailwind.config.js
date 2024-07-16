const { emerald } = require('daisyui/src/theming/themes')

const config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            keyframes: {
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                },
            },
            animation: {
                blink: 'blink 1s infinite',
            },
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            'light',
            {
                emerald: {
                    ...require('daisyui/src/theming/themes')['emerald'],
                    '--primary': '#ffffff',
                },
            },
            'dark',
            {
                sunset: {
                    ...require('daisyui/src/theming/themes')['sunset'],
                    '--rounded-btn': '0.5rem',
                },
            },
        ],
    },
}

module.exports = config
