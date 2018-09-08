//require vars
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync').create(),
    babel = require('gulp-babel'),
    rename = require('gulp-rename'),
    browserify = require('gulp-browserify');

//paths
var sassPath = './src/scss/main.scss';
var sassAllPath = './src/scss/**/*.scss';
var sassExport = './dist/css/';

var jsPath = './src/js/main.js';
var jsAllPath = './src/js/**/*.js';
var jsExport = './dist/js';

var htmlPath = './src/*.html'

//Js Scripts Tasks - Uglify
gulp.task('scripts', function(){
    return gulp.src( jsPath )
    .pipe( plumber() )
    .pipe(babel({
        presets: ['@babel/env']
     }))
    .pipe( uglify() )
    .pipe(rename('main-min.js'))
    .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
    .pipe( gulp.dest( jsExport ) )
    .pipe(browserSync.stream())
})


//Styles Tasks
gulp.task('styles', function(){
    return gulp.src( sassPath )
    .pipe( plumber() )
    .pipe( sass({ outputStyle: 'compressed' })
           .on( 'error', sass.logError ) )
    .pipe(rename('main-min.css'))
    .pipe( gulp.dest( sassExport ) )
    .pipe(browserSync.stream())
})

//Watch Tasks
gulp.task('watch', function(){
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    gulp.watch( jsAllPath, ['scripts'] )
    gulp.watch( sassAllPath, ['styles'] )
    gulp.watch( htmlPath ).on('change', browserSync.reload)
})



gulp.task('default', ['watch'] );
