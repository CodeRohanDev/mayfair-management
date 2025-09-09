export const theme = {
  colors: {
    primary: {
      50: '#f0f4f8',
      100: '#d9e6f2',
      200: '#b3cce6',
      300: '#8db3d9',
      400: '#6699cc',
      500: '#4080bf', // Lighter shade of main color
      600: '#1a2f4f', // Slightly lighter than main
      700: '#0a1b2f', // Main color
      800: '#08172a',
      900: '#061324',
    },
    secondary: {
      50: '#f0f4f8',
      100: '#d9e6f2',
      200: '#b3cce6',
      300: '#8db3d9',
      400: '#6699cc',
      500: '#4080bf',
      600: '#1a2f4f',
      700: '#0a1b2f', // Main color for secondary as well
      800: '#08172a',
      900: '#061324',
    },
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    }
  },
  gradients: {
    hero: 'from-[#0a1b2f] via-[#1a2f4f] to-[#4080bf]',
    heroOverlay: 'bg-[#0a1b2f] bg-opacity-80'
  },
  typography: {
    fontFamily: {
      primary: "'IBM Plex Sans', 'Inter', sans-serif",
      secondary: "'IBM Plex Sans', 'Inter', sans-serif"
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    },
    fontSize: {
      hero: {
        mobile: 'text-3xl',
        tablet: 'text-4xl',
        desktop: 'text-5xl'
      },
      section: 'text-3xl',
      card: 'text-lg',
      body: 'text-base',
      small: 'text-sm'
    }
  },
  spacing: {
    section: 'py-20',
    container: 'mx-auto px-4 sm:px-6 lg:px-8'
  }
};