// include gulp
var gulp = require('gulp'); 
 
// include plug-ins
var changed = require('gulp-changed');
var minifyHTML = require('gulp-minify-html');

// minify new or changed HTML pages
gulp.task('minify-html', function() {
  var opts = {empty:true, quotes:true};
  var htmlPath = {htmlSrc:'./webapp/*.html', htmlDest:'./webapp/build/views'};
  
   return gulp.src(htmlPath.htmlSrc)
     .pipe(changed(htmlPath.htmlDest))
     .pipe(minifyHTML(opts))
     .pipe(gulp.dest(htmlPath.htmlDest));
 });

// include plug-ins
var concat = require('gulp-concat');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');

// include plug-ins
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify-es').default;
 
// JS concat, strip debugging code and minify
gulp.task('bundle-scripts', function() {
var jsPath = {jsSrc:['./webapp/app.js','./webapp/config.js','./webapp/components/**/*.js'], jsDest:'./webapp'};
  return gulp.src(jsPath.jsSrc)
    .pipe(concat('ngscripts.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(jsPath.jsDest));
});