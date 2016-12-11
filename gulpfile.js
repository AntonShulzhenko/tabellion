const gulp         = require('gulp');
const sass         = require('gulp-sass');
const browserSync  = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const min          = require('gulp-clean-css');
const reload       = browserSync.reload;
const sourcemaps   = require('gulp-sourcemaps');
const imagemin     = require('gulp-imagemin');
const gulpif       = require('gulp-if');
const uglify       = require('gulp-uglify');
const concat       = require('gulp-concat');
const useref       = require('gulp-useref');
const cache        = require('gulp-cache');

var src = {
  scss: 'src/scss/**/*.scss',
  css : 'src/css',
  html: 'src/*.html',
  nm  : 'node_modules',
  js  : 'src/js/**/*.js'
}


gulp.task('libs', () => {
  return gulp.src([src.nm + '/bootstrap-sass/assets/javascripts/bootstrap.min.js', src.nm + '/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('src/libs'));
});


gulp.task('fonts', function() {
  return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('build/fonts'));
});


gulp.task('images', function() {
  return gulp.src('src/img/**/*.+(png|jpg|gif|svg)')
  .pipe(cache(imagemin({
    interlaced: true
  })))
  .pipe(gulp.dest('build/img'));
});


gulp.task('styles', () => {
  return gulp.src(src.scss)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(gulp.dest(src.css))
    .pipe(reload({stream: true}))
    .pipe(gulp.dest('build/css'))
    .pipe(min())
		.pipe(gulp.dest('build/css'));
});


gulp.task('js', () => {
  return gulp.src('src/js/modules/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('src/js'));
});


gulp.task('serve', ['styles'], () => {
  browserSync.init({
    server: "./src"
  });
  gulp.watch(src.scss, ['styles']);
  gulp.watch(src.js, ['js']).on('change', reload);
  gulp.watch(src.html).on('change', reload);
  gulp.watch('src/img/**/*.+(png|jpg|gif|svg)').on('change', reload);
});


gulp.task('build', () => {
  return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', min()))
    .pipe(gulp.dest('build'));
});

gulp.task('default', ['serve', 'libs', 'js', 'build', 'fonts', 'images']);
