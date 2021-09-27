module.exports = {
  remote: 'emailwerk/jaen-panoramaweg-page',
  initialHideUI: true, // optional hide UI on load
  plugins: {
    pages: {
      resolve: require('@snek-at/jaen-pages/jaen-register'),
      templates: [
        require('./src/templates/HousePage/index.tsx'),
        require('./src/templates/ApartmentPage/index.tsx'),
        require('./src/templates/BlogPage/index.tsx'),
      ]
    }
  }
}
