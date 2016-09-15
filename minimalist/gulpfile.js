var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('default', ['browser-sync', 'watch']);


gulp.task('watch',function(done){
    gulp.watch(['src/**/*.css'], ['copy-css']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

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
    return gulp.src('src/css/**/*.css').pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

// copy js files
gulp.task('copy-js',function(){
    return gulp.src('src/js/**/*.js').pipe(gulp.dest('dist/js'));
});

//copy third party package
gulp.task('copy-third',function(){
    return gulp.src('src/packages/**/*').pipe(gulp.dest('dist/packages'));
});
