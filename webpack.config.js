const path = require('path');

module.exports = {
  "mode": "production",
  "entry": "server/index.js",
  "output": {
      "path": __dirname+'/public',
      "filename": "[name].[chunkhash:8].js"
  },
  "devtool": "source-map",
  "module": {
      "rules": [
          {
              "test": /\.(js|jsx)$/,
              "exclude": /node_modules/,
              "use": {
                  "loader": "babel-loader",
                  "options": {
                      "presets": [
                          "env",
                          "react"
                      ]
                  }
              }
          },
          {
              "test": /\.scss$/,
              "use": [
                  "style-loader",
                  "css-loader",
                  "sass-loader"
              ]
          }
      ]
  }
}