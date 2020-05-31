// include gulp
var gulp = require('gulp');

// include plug-ins
var changed = require('gulp-changed');
var minifyHTML = require('gulp-minify-html');

// minify new or changed HTML pages
gulp.task('minify-html', function () {
  var opts = { empty: true, quotes: true };
  var htmlPath = { htmlSrc: ['./webapp/components/**/*.html', '!/**/*.min.html'] };

  return gulp.src(htmlPath.htmlSrc)
    // .pipe(changed(htmlPath.htmlDest))
    .pipe(minifyHTML(opts))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(function (file) {
      return file.base;
    }));
});

// include plug-ins
var concat = require('gulp-concat');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');

// CSS concat, auto prefix, minify, then rename output file
gulp.task('minify-css', function () {
  var cssPath = { cssSrc: ['./webapp/css/*.css', '!*.min.css', '!/**/*.min.css'], cssDest: './webapp/css/' };

  return gulp.src(cssPath.cssSrc)
    .pipe(concat('style.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(cssPath.cssDest));
});

// include plug-ins
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify-es').default;

// JS concat, strip debugging code and minify
gulp.task('bundle-scripts', function () {
  var jsPath = {
    jsSrc: ['./webapp/services/*.js',
      './webapp/components/**/*.js',
      '!/**/*.min.js'],
    jsDest: './webapp/'
  };
  return gulp.src(jsPath.jsSrc)
    .pipe(concat('ngscripts.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(jsPath.jsDest));
});
