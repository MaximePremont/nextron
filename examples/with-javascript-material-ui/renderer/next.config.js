module.exports = {
  webpack: (config) => {
    config.target = 'electron-renderer'
    return config
  },
  exportPathMap: async function () {
    return {
      '/home': { page: '/home' },
      '/about': { page: '/about' }
    }
  }
}
