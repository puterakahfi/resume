var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');
var reload = browserSync.reload;
var rename = require("gulp-rename");


gulp.task('default', ['build','browser-sync', 'watch']);


gulp.task('watch',function(done){
    gulp.watch(['src/**/*.css'], ['copy-css']);
    gulp.watch(['src/**/*.js'],['copy-js']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('build',['copy-css','copy-js','copy-fonts','copy-third']);

// static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// copy fonts to dist
gulp.task('copy-fonts', function(){
    return gulp.src('src/fonts/**/*').pipe(gulp.dest('dist/fonts'));
});

// copy css files
gulp.task('copy-css',function(){
    return gulp.src('src/css/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

// copy js files
gulp.task('copy-js',function(){
    return gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

//copy third party package
gulp.task('copy-third',function(){
    return gulp.src('src/packages/**/*').pipe(gulp.dest('dist/packages'));
});
