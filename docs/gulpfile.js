/*
** gulpfile.js
**
** gulpfile for the Valence.js framework project site..
**
** Eric James Foster, MIT License.
** * * * * * * * * * * * * * * * * * * */

const gulp = require('gulp')
const babel = require('gulp-babel')
const webpack = require('webpack')
const gulpWebpack = require('gulp-webpack')
const watch = require('gulp-watch')
const lucyGoosy = require('gulp-no-strict')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
// const elemsJS = require('./node_modules/gulp-elementsJS-interpreter')


// The meat and potatoes of my build
// config...
const webpackConfig = {
  mode: 'none',
  entry: './js/src/valenceIO.jsx',
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            compact: false,
            presets: ['@babel/env'],
            plugins: [
              "@babel/plugin-transform-destructuring",
              "@babel/plugin-proposal-object-rest-spread",
              "@babel/plugin-proposal-class-properties",
              ["@babel/plugin-transform-react-jsx", {"pragma": "x"}]
            ]
          }
        }
      }
    ]
  },
  output: {
    filename: 'valenceIOBundle.js'
  }
}

// This is the primary gulp task. It takes the source file, (Valence.js), and
// bundles it up with it's dependencies, then converts it to es5, installing it
// in the given directory...
gulp.task('es6to5Bundle', ()=> {
     const compiler = gulpWebpack(webpackConfig, webpack),
        jsSrc  = './js/src/valenceIO.jsx'
        jsDst  = './js/assets/'
     return gulp.src(jsSrc)
       .pipe(compiler)
       .pipe(babel())
       .pipe(lucyGoosy())
       // .pipe(uglify())
       .pipe(gulp.dest(jsDst))
  })

gulp.task(
  'default',
  gulp.series(
    'es6to5Bundle'
  )
)

gulp.watch(['./js/src/*.jsx', '../js/src/**/*'],
  gulp.series(
    'default'
  ))
