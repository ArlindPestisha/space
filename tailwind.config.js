/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#0B0d17',
                secondary: '#D0D6f9',
                white: '#FFFFFF',
            },
            fontFamily: {
                bellefair: ['Bellefair', 'serif'],
                barlowCondensed: ['Barlow Condensed', 'sans-serif'],
            },
            backgroundImage: {
                home: "url('/src/assets/home/background-home-desktop.jpg')",
                homeTablet:
                    "url('/src/assets/home/background-home-tablet.jpg')",
                homeMobile:
                    "url('/src/assets/home/background-home-mobile.jpg')",
                crewDesktop:
                    "url('/src/assets/crew/background-crew-desktop.jpg')",
                crewTablet:
                    "url('/src/assets/crew/background-crew-tablet.jpg')",
                crewMobile:
                    "url('/src/assets/crew/background-crew-mobile.jpg')",
                destinationDesktop:
                    "url('/src/assets/destination/background-destination-desktop.jpg')",
                destinationTablet:
                    "url('/src/assets/destination/background-destination-tablet.jpg')",
                destinationMobile:
                    "url('/src/assets/destination/background-destination-mobile.jpg')",
                technologyDesktop:
                    "url('/src/assets/technology/background-technology-desktop.jpg')",
                technologyTablet:
                    "url('/src/assets/technology/background-technology-tablet.jpg')",
                technologyMobile:
                    "url('/src/assets/technology/background-technology-mobile.jpg')",
            },
        },
    },
    plugins: [],
}
