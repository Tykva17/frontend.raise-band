const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const  minify = require('gulp-js-minify');
const  imagemin = require('gulp-imagemin');
const autoprefixer = require('autoprefixer');




const paths = {
    src: {
        styles: 'src/scss/**/*.scss',
        script: 'src/js/**/*.js',
        img: 'src/img/**/*',
        html: 'src/*.html'
    },
    dist: {
        styles: 'dist/css',
        script: 'dist/js',
        img: 'dist/img',
        html: 'dist/'
    },

};





const buildHTML = () => (
    gulp.src([
        paths.src.html
    ])
        // .pipe(useref({noAssets: true}))
        .pipe(gulp.dest(paths.dist.html))
);

const buildJS = () => (
    gulp.src(paths.src.script)
        .pipe(concat('script.js'))
        .pipe(minify())
        .pipe(gulp.dest(paths.dist.script))
);



const buildSCSS = () => (
    gulp.src(paths.src.styles)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(concat('main.css'))

        .pipe(gulp.dest(paths.dist.styles))
);


const imgBuild = () => (
    gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest(paths.dist.img))
)
const runDev = () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    gulp.watch(paths.src.styles, buildSCSS).on('change', browserSync.reload);
    gulp.watch(paths.src.script, buildJS).on('change', browserSync.reload);
    gulp.watch(paths.src.html, buildHTML).on('change', browserSync.reload);
    gulp.watch(paths.src.html, imgBuild).on('change', browserSync.reload);

};

gulp.task('autoprefixer', () => {

    return gulp.src('./src/*.css')
        .pipe(postcss([ autoprefixer() ]))
        .pipe(gulp.dest('./dest'))
})

gulp.task('buildJS', buildJS);
gulp.task('buildSCSS', buildSCSS);
gulp.task('buildSCSS', imgBuild);
gulp.task('buildHTML', imgBuild);

gulp.task('build', gulp.series(
    buildSCSS,
    buildJS,
    imgBuild,
    buildHTML

));

gulp.task('dev', gulp.series(
    buildSCSS,
    buildJS,
    buildHTML,
    imgBuild,
    runDev
));




