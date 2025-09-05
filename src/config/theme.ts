export const theme = {
  colors: {
    primary: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf', // Main teal
      500: '#14b8a6',
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
    },
    secondary: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b', // Main slate
      900: '#0f172a',
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
    hero: 'from-slate-800 via-slate-700 to-teal-400',
    heroOverlay: 'bg-black bg-opacity-30'
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