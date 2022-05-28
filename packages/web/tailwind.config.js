module.exports = {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: '#8257e5',
        'brand-hover': '#996dff',
        'text-on-brand-color': '#ffffff',
        'dark/surface-primary': '#18181b',
        'dark/surface-secondary': '#27272a',
        'dark/surface-secondary-hover': '#3f3f46',
        'dark/stroke': '#52525b',
        'dark/tooltip': '#f4f4f5',
        'dark/text-primary': '#f4f4f5',
        'dark/text-secondary': '#a1a1aa',
        'dark/text-on-tooltip': '#27272a',
        'dark/background': '#09090a',
        'light/surface-primary': '#ffffff',
        'light/surface-secondary': '#f4f4f5',
        'light/surface-secondary-hover': '#e4e4e7',
        'light/stroke': '#d4d4d8',
        'light/tooltip': '#27272a',
        'light/text-primary': '#27272a',
        'light/text-secondary': '#71717a',
        'light/text-on-tooltip': '#f4f4f5',
        'light/background': '#ffffff'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
