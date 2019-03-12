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


// The meat and potatoes of my build
// config...
var webpackConfig = {
  entry: './test.js',
  module: {
    loaders: [{
      test: /.js?$/,
      loader: 'babel-loader',
      // exclude: /node_modules/,
      query: {
        presets: ['env'],
        plugins: [
          "@babel/plugin-transform-es2015-destructuring",
          "@babel/plugin-transform-object-rest-spread",
          "@babel/plugin-transform-class-properties",
          ["@babel/plugin-transform-react-jsx", {"pragma": "x"}]
        ]
      }
    }]
  },
  output: {
    filename: 'testBundle.js'
  }
};

// This is the primary gulp task. It takes the source file, (Valence.js), and
// bundles it up with it's dependencies, then converts it to es5, installing it
// in the given directory...
gulp.task('es6To5Bundle', ()=> {
     var compiler = gulpWebpack(webpackConfig, webpack),
        jsSrc  = './test.js'
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
  './test.js',
  './node_modules/Valence/Valence.js',
  './node_modules/Valence/js/src/*.js',
  './node_modules/Valence/js/src/Form/*.js',
  './node_modules/Valence/js/src/Utilities/*.js',
  './node_modules/Valence/js/src/Props/*.js',
  './node_modules/Valence/js/src/Errors/*.js',
  './node_modules/Valence/js/src/support/shimLoader.js',
  './node_modules/Valence/js/src/support/polyfillLoader.js'
], gulp.series(
    'es6To5Bundle'
  )
)
