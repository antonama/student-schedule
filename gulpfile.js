/**
 * Created by Anton on 5/24/2015.
 */

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass');

var sources = {
    scss: "scss/**/*.scss"
};

var destinations = {
    scss: {
        path: "./scss"
    },
    css: {
        file: "styles.css",
        path: "./public/css"
    }
};

gulp.task('default', [
    'sass',
    'watch'
]);

gulp.task('sass', function () {
    gulp.src(sources.scss)
        .pipe(sass())
        .pipe(concat(destinations.css.file))
        .pipe(gulp.dest(destinations.css.path));
});

gulp.task('watch', function () {
    gulp.watch(sources.scss, ['sass']);
});
