const gulp = require("gulp"),
      connect = require("gulp-connect"),
      pug = require("gulp-pug"),
      data = require("gulp-data"),
      path = require("path"),
      less = require("gulp-less"),
      minify = require("gulp-clean-css"),
      sourcemaps = require("gulp-sourcemaps"),
      rename = require("gulp-rename"),
      tsc = require("gulp-typescript"),
      uglify = require("gulp-uglify");

const sources = {
  templates: {
    watch: "src/templates/**/*.pug",
    source: "src/templates/pages/**/*.pug",
    destination: "dist/"
  },
  less: {
    watch: "src/less/**/*.less",
    source: "src/less/stylesheet.less",
    destination: "dist/assets/css/"
  },
  js: {
    watch: "src/ts/**/*.ts",
    source: "src/ts/**/*.ts",
    destination: "dist/assets/js/"
  },
  copy: [
    {
      watch: "src/images/**/*",
      source: "src/images/**/*",
      destination: "dist/assets/images/"
    },
    {
      watch: "src/robots.txt",
      source: "src/robots.txt",
      destination: "dist/"
    }
  ]
};

gulp.task("test", () => {
  const buffer = new Buffer("Cgl3b3JrcyBvbiBteSBtYWNoaW5lIMKvXF8o44OEKV8vwq8K", "base64");

  console.log(buffer.toString("utf8"));
});

gulp.task("serve", () => {
  connect.server({
    root: "dist/",
    livereload: true
  });
});

gulp.task("templates", () => {
  gulp.src(sources.templates.source)
    .pipe(data((file) => {
        return {
            filename: path.basename(file.path)
        };
    }))
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest(sources.templates.destination))
    .pipe(connect.reload());
});

gulp.task("css", () => {
  gulp.src(sources.less.source)
    .pipe(sourcemaps.init())
    .pipe(less({
        plugins: [
            require("less-plugin-glob")
        ]
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(sources.less.destination))
    .pipe(minify({
        level: {
            2: {
                mergeAdjacentRules: true,
                mergeIntoShorthands: true,
                mergeMedia: true,
                mergeNonAdjacentRules: true,
                mergeSemantically: false,
                overrideProperties: true,
                reduceNonAdjacentRules: true,
                removeDuplicateFontRules: true,
                removeDuplicateMediaBlocks: true,
                removeDuplicateRules: true,
                restructureRules: false
            }
        }
    }))
    .pipe(rename({
        suffix: ".min"
    }))
    .pipe(gulp.dest(sources.less.destination))
    .pipe(connect.reload());
});

gulp.task("js", () => {
  const tsconfig = require("./tsconfig.json");

  gulp.src(sources.js.source)
    .pipe(sourcemaps.init())
    .pipe(tsc(tsconfig.compilerOptions))
    .pipe(sourcemaps.write())
    .pipe(rename({ suffix: ".min" }))
    .pipe(uglify())
    .pipe(gulp.dest(sources.js.destination))
    .pipe(connect.reload());
});

gulp.task("copy", () => {
  for (const item of sources.copy) {
    gulp.src(item.source)
        .pipe(gulp.dest(item.destination));
  }
});

gulp.task("watch", ["default", "serve"], () => {
  gulp.watch(sources.less.watch, ["css"]);
  gulp.watch(sources.js.watch, ["js"]);

  gulp.watch(sources.templates.watch, (event) => {
    if (event.type == "changed") {
        sources.templates.source = event.path;

        gulp.start("templates");
    }
  });

  for (const item of sources.copy) {
    gulp.watch(item.watch, (event) => {
        if (event.type != "deleted") {
            gulp.src(event.path)
                .pipe(gulp.dest(item.destination))
                .pipe(connect.reload());
        }
    });
  }
});

gulp.task("default", ["css", "templates", "copy", "js"]);
