var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    spritesmith = require('gulp.spritesmith'),
    notify = require("gulp-notify");

var paths = {
    src: {
        dev:'dev/**/*.*',
        jade:'dev/**/*.jade',
        scss:'dev/scss/style.scss',
        sprites: 'dev/sprites/*.png'
    },
    dest:{
        app:'app/',
        jade:'app/',
        scss:'app/css/',
        sprites: 'app/images/'
    }
};

gulp.task('sass',function () {
    gulp.src(paths.src.scss)
        .pipe(sass({"bundleExec": true}))
        .pipe(gulp.dest(paths.dest.scss));
});

gulp.task('jade',function () {
    var YOUR_LOCALS = {};

    gulp.src(paths.src.jade)
        .pipe(jade({
             locals: YOUR_LOCALS
            //,pretty: '    '
        }))
        .pipe(gulp.dest(paths.dest.jade));
});

gulp.task('sprite', function () {
    var spriteData = gulp.src(paths.src.sprites)
        .pipe(spritesmith({
                imgName: '../images/sprite.png',
                cssName: 'sprite.css',
                algorithm: "top-down"
        }));
    spriteData.img.pipe(gulp.dest(paths.dest.sprites));
    spriteData.css.pipe(gulp.dest(paths.dest.scss));
});

gulp.task('notify',function () {
    gulp.src(paths.src.dev)
        .pipe(through(function () {
            this.emit("error", new Error("Something happend: Error message!"))
        }))
        .on("error", notify.onError(function (error) {
            return "Message to the notifier: " + error.message;
        }));
})

gulp.task('default',['jade','sass','sprite']);

gulp.task('watch',function () {
    gulp.watch(paths.src.dev,['default']);
});