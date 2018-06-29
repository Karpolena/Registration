var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('scss',function(){
    return gulp.src('./src/SCSS/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/css'))
});


gulp.task('watch',function(){
    gulp.watch('./src/SCSS/main.scss', ['scss'])
});