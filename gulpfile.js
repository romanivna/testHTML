var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    watch = require('gulp-watch');

gulp.task('sass', function() {
    gulp.src('./src/**/*.scss')
        .pipe(sass({
            includePaths: require('node-normalize-scss').includePaths
        }).on('error', sass.logError))
        .pipe(gulp.dest('./build/css/'))
        .pipe(connect.reload());
});

gulp.task('js', function() {
    gulp.src('./src/js/**/*.js')
        .pipe(concat('script.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('connect', function() {
    connect.server({
        port: 17023,
        root: './build',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./src/*.html')
        .pipe(gulp.dest('./build/'))
        .pipe(connect.reload());
});

gulp.task('images', function() {
    gulp.src('./src/images/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images/'))
});

gulp.task('fonts', function() {
    gulp.src('./src/fonts/**/*.*')
        .pipe(gulp.dest('./build/fonts/'))
});

gulp.task('watch', function() {
    gulp.watch('./src/images/**/*.*', ['images']);
    gulp.watch('./src/scss/**/*.scss', ['sass']);
    gulp.watch(['./src/*.html'], ['html']);
});


gulp.task('default', ['connect', 'html', 'sass', 'images', 'fonts', 'watch']);
