var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
});

gulp.task('watch', function(){
  gulp.watch(['index.html','stylesheet.css'], browserSync.reload); 
  // Other watchers
});

gulp.task('default', ['browserSync', 'watch']);