const { emerald } = require('daisyui/src/theming/themes')

const config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                grad: 'linear-gradient(315deg, #DE94FF 0%, #A1B1FF 100%)',
            },
            boxShadow: {
                sm: '4px 10px 40px rgba(34, 26, 53, 0.05)',
                md: '4px 10px 40px rgba(34, 26, 53, 0.06)',
                lg: '4px 10px 40px rgba(34, 26, 53, 0.07)',
                grad: '4px 10px 20px rgba(219, 150, 255, 0.4);',
            },
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
    plugins: [
        require('daisyui'),

        function ({ addUtilities }) {
            const newUtilities = {
                '.h-sidebar': {
                    height: 'calc(100vh - 25px)',
                },
            }
            addUtilities(newUtilities, ['responsive', 'hover'])
        },
    ],
    daisyui: {
        themes: [
            'light',
            {
                emerald: {
                    ...require('daisyui/src/theming/themes')['emerald'],
                    'base-200': '#fcfcfc',
                },
            },
            'dark',
        ],
    },
}

module.exports = config
