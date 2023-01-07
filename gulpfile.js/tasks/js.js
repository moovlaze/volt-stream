const uglify = require("gulp-uglify");
const rename = require("gulp-rename");

const js = () => {
  return $.gulp
    .src($.path.src.js, { sourcemaps: $.app.isDev })
    .pipe(
      $.plumber({
        errorHandler: $.notify.onError((error) => ({
          title: "JS",
          message: error.message,
        })),
      })
    )
    .pipe(
      $.gulpIf(
        $.app.isProd,
        $.gulp.dest($.path.build.js, { sourcemaps: $.app.isDev })
      )
    )
    .pipe($.gulpIf($.app.isProd, uglify()))
    .pipe(
      $.gulpIf(
        $.app.isProd,
        rename({
          suffix: ".min",
        })
      )
    )
    .pipe($.gulp.dest($.path.build.js, { sourcemaps: $.app.isDev }))
    .pipe($.browserSync.stream());
};

module.exports = js;
