var gulp = require('gulp');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var image = require('gulp-image');
var concatCss = require('gulp-concat-css');
var autoprefixer = require('gulp-autoprefixer');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('default',['pics','css'],() => {
  return gulp.src(['src/javascript/app.js','src/javascript/stateConfig.js','src/javascript/*.js','src/javascript/controllers/*.js'])
    .pipe(ngAnnotate())
    .pipe(concat('app.js'))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
  
});

gulp.task('pics',()=>{
  gulp.src(['src/pics/*.png','src/pics/*.jpg','src/pics/*.svg'])
    .pipe(image())
    .pipe(gulp.dest('dist/pics'));
})

gulp.task('css', function () {
  return gulp.src(['src/styles/main.css','src/styles/grid-system.css','src/styles/desktop.css'])
    .pipe(concatCss('bundle.css'))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist/styles'));
});