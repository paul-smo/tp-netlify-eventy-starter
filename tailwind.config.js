module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: false,
  },
  theme: {
    extend: {
      colors: {
        'yellow': '#FFB942',
      },
      fontFamily: {
            'sans': ['-apple-system', 'BlinkMacSystemFont'],
        'serif': ['Georgia', 'Cambria'],
'mono': ['SFMono-Regular', 'Menlo'],
'display': ['Oswald'],
'body': ['Open Sans']
      },
    },
  },
  variants: {},
  plugins: [],
}
