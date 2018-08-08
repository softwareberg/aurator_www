var gulp        = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Compile sass into CSS + add prefixes & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(['src/scss/*.scss'])
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

// Move the html files into our /dist folder
gulp.task('html', function() {
    return gulp.src(['src/*.html'])
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.stream());
});

// Move the js files into our /dist folder
gulp.task('js', function() {
    return gulp.src(['src/js/*.js'])
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['html', 'js', 'sass'], function() {

    browserSync.init({
        server: "./src"  
    });

    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch(['src/js/*.js'], ['js']);
    gulp.watch(["src/*.html"],['html']).on('change', browserSync.reload);
    // gulp.watch("src/js/*.js").on('change', browserSync.reload);
});

// gulp.task('default', ['js','serve']);
gulp.task('default', ['serve']);