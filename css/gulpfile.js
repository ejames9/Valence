/*
** gulpfile.js
**
** gulpfile for the Valence.js framework
**
** Eric James Foster, MIT License.
** * * * * * * * * * * * * * * * * * * */

var gulp = require('gulp');
var babel = require('gulp-babel');
var webpack = require('webpack');
var gulpWebpack = require('gulp-webpack');
var watch = require('gulp-watch');
// var elemsJS = require('./node_modules/gulp-elementsJS-interpreter');


// Webpack configuration. pretty much the meat and potatoes of my build
// config...
var webpackConfig = {
  entry: './js/src/Valence.js',
  module: {
    loaders: [{
      test: /.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['env'],
        plugins: [
          "transform-es2015-destructuring",
          "transform-object-rest-spread",
          "transform-class-properties",
          ["transform-builtin-extend", { globals: ["Error", "Array"] }],
          ["transform-react-jsx", {"pragma": "x"}]
        ]
      }
    }]
  },
  output: {
    filename: 'Valence.js'
  }
};

// This is the primary gulp task. It takes the source file, (Valence.js), and
// bundles it up with it's dependencies, then converts it to es5, installing it
// in the given directory...
gulp.task('es6To5Bundle', ()=> {
     var compiler = gulpWebpack(webpackConfig, webpack),
        jsSrc  = './js/src/Valence.js'
        jsDst  = './js/assets/bundle';
     return gulp.src(jsSrc)
       .pipe(compiler)
       .pipe(babel())
       .pipe(gulp.dest(jsDst));
  })

// Converting the above task to the default task, so that it may be
// executed in the terminal with the simple `gulp` command...
gulp.task(
  'default',
  gulp.series(
    'es6To5Bundle'
  ));

// Watch the following files and re-run the default task on change...
gulp.watch([
  './js/src/*.js',
  './js/src/Form/*.js',
  './js/src/Utilities/*.js',
  './js/src/Props/*.js',
  './js/src/Errors/*.js',
  './js/src/support/shimLoader.js',
  './js/src/support/polyfillLoader.js'
], gulp.series(
    'es6To5Bundle'
  )
)
