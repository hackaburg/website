const gulp = require("gulp");
const connect = require("gulp-connect");
const pug = require("gulp-pug");
const data = require("gulp-data");
const path = require("path");
const less = require("gulp-less");
const minify = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const tsc = require("gulp-typescript");
const uglify = require("gulp-uglify");

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

function test(done) {
  const buffer = new Buffer("Cgl3b3JrcyBvbiBteSBtYWNoaW5lIMKvXF8o44OEKV8vwq8K", "base64");

  console.log(buffer.toString("utf8"));
  done();
}

function serve() {
  return connect.server({
    root: "dist/",
    livereload: true
  });
}

function templates() {
  return gulp.src(sources.templates.source)
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
}

function css() {
  return gulp.src(sources.less.source)
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
}

function js() {
  const tsconfig = require("./tsconfig.json");

  return gulp.src(sources.js.source)
    .pipe(sourcemaps.init())
    .pipe(tsc(tsconfig.compilerOptions))
    .pipe(sourcemaps.write())
    .pipe(rename({ suffix: ".min" }))
    .pipe(uglify())
    .pipe(gulp.dest(sources.js.destination))
    .pipe(connect.reload());
}

function copy(done) {
  for (const item of sources.copy) {
    gulp.src(item.source)
        .pipe(gulp.dest(item.destination));
  }

  done();
}

gulp.task(test);
gulp.task(serve);
gulp.task(templates);
gulp.task(css);
gulp.task(js);
gulp.task(copy);
gulp.task("default", gulp.parallel("css", "templates", "copy", "js"));
gulp.task("watch", gulp.series("default", gulp.parallel("serve", () => {
  gulp.watch(sources.less.watch, css);
  gulp.watch(sources.js.watch, js);
  gulp.watch(sources.templates.watch, templates);

  for (const item of sources.copy) {
    gulp.watch(item.watch).on("change", (path) => (
        gulp.src(path)
          .pipe(gulp.dest(item.destination))
          .pipe(connect.reload())
      )
    );
  }
})));
