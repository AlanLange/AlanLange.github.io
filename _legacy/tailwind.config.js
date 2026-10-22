tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#0a0b0e',
                        secondary: '#151821',
                        tertiary: '#1e2532',
                        accent: '#00d4ff',
                        'accent-hover': '#00b8e6',
                        muted: '#6b7280',
                    },
                    fontFamily: {
                        sans: ['Inter', 'system-ui', 'sans-serif'],
                    },
                    animation: {
                        'fade-in': 'fadeIn 0.6s ease-out',
                        'slide-up': 'slideUp 0.8s ease-out',
                        'float': 'float 6s ease-in-out infinite',
                    }
                }
            },
            darkMode: 'class',
        }