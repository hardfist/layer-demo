/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: 'none',
  entry: {
    client: {
      layer: 'client',
      import: './src/client.js',
    },
    server: {
      layer: 'server',
      import: './src/server.js',
    },
  },
  module: {
    rules: [
      {
        test: /answer.js/,
        issuerLayer: 'server',
        use: [
          {
            loader: './src/server-loader1.js',
          },
          {
            loader: './src/server-loader2.js',
          },
        ],
      },
      {
        test: /answer.js/,
        issuerLayer: 'client',
        use: [
          {
            loader: './src/client-loader1.js',
          },
          {
            loader: './src/client-loader2.js',
          },
        ],
      },
    ],
  },
  experiments: {
    layers: true,
  },
};
