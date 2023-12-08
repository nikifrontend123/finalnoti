const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    iconPaths: {
      favicon32: 'img/fablogo.png',
      favicon16: 'img/fablogo.png',
      appleTouchIcon: 'img/fablogo.png',
      maskIcon: 'img/fablogo.png',
      msTileImage: 'img/fablogo.png',
    },
    manifestOptions: {
      name: 'LoginTest',
      short_name: 'LoginTest',
      description: 'LoginTest',
      start_url: './',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#000000',
      orientation: 'portrait',
      icons: [
        {
          src: 'img/fablogo.png',
          sizes: '72x72',
          type: 'image/png',
        },
        {
          src: 'img/fablogo.png',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          src: 'img/fablogo.png',
          sizes: '128x128',
          type: 'image/png',
        },
        {
          src: 'img/fablogo.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: 'img/fablogo.png',
          sizes: '152x152',
          type: 'image/png',
        },
        {
          src: 'img/fablogo.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'img/fablogo.png',
          sizes: '384x384',
          type: 'image/png',
        },
        {
          src: 'img/fablogo.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  },
});
