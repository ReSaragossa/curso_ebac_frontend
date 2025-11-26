const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const path = require("path");

// Caminhos
const paths = {
    scss: "./src/scss/**/*.scss",
    js: "./src/js/**/*.js",
    images: "./src/images/**/*",
    dist: "./dist"
};

// Tarefa 1 — Compilar SASS
function compileSass() {
    return gulp.src(paths.scss)
        .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
        .pipe(gulp.dest(path.join(paths.dist, "css")));
}

// Tarefa 2 — Comprimir Imagens
function compressImages() {
    const imageminGifsicle = require('imagemin-gifsicle');
    const imageminMozjpeg = require('imagemin-mozjpeg');
    const imageminOptipng = require('imagemin-optipng');
    const imageminSvgo = require('imagemin-svgo');

    return gulp.src(paths.images)
        .pipe(imagemin([
            (imageminGifsicle.default || imageminGifsicle)(),
            (imageminMozjpeg.default || imageminMozjpeg)(),
            (imageminOptipng.default || imageminOptipng)(),
            (imageminSvgo.default || imageminSvgo)()
        ]))
        .pipe(gulp.dest(path.join(paths.dist, "images")));
}

// Tarefa 3 — Minificar JavaScript
function minifyJS() {
    return gulp.src(paths.js)
        .pipe(uglify())
        .pipe(gulp.dest(path.join(paths.dist, "js")));
}

// Tarefa de observação opcional
function watchFiles() {
    gulp.watch(paths.scss, compileSass);
    gulp.watch(paths.js, minifyJS);
    gulp.watch(paths.images, compressImages);
}

// Exportar tarefas
exports.sass = compileSass;
exports.images = compressImages;
exports.js = minifyJS;
exports.watch = watchFiles;

// Tarefa padrão (roda tudo)
exports.default = gulp.parallel(compileSass, compressImages, minifyJS);
