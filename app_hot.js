const path=require('path');
const express=require('express');
const webpack=require('webpack');
const webpackMiddleware=require('webpack-dev-middleware');
const webpackHotMiddleware=require('webpack-hot-middleware');
const config=require('./webpack.config.hot.js');

const app = express();
const compiler = webpack(config);

app.use(webpackMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
	colors: true,
  }
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dev/index.html'));
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});

