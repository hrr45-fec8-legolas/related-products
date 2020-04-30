const path = require('path');
module.exports = {
  "entry": path.join(__dirname, 'client/App.jsx'),
  "output": {
      "path": path.join(__dirname, 'public'),
      "filename": "bundle.js"
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