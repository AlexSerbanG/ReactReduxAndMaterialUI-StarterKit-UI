// This file configures a web server for testing the production build
// on your local machine.

// import browserSync from 'browser-sync';
// import historyApiFallback from 'connect-history-api-fallback';
// import {chalkProcessing} from './chalkConfig';

/* eslint-disable no-console */

import express from 'express';
import compression from 'compression';
import open from 'open';
import path from 'path';

// console.log(chalkProcessing('Opening production build...'));

// // Run Browsersync
// browserSync({
//   port: 4000,
//   ui: {
//     port: 4001
//   },
//   server: {
//     baseDir: 'dist'
//   },

//   files: [
//     'src/*.html'
//   ],

//   middleware: [historyApiFallback()]
// });

const port = 4000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err){
  if (err) {
      console.log(err);
  } else {
      open('http://localhost:'+port);
  }
});

