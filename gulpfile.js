var { watch, series, src, dest } = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

function sassAndAuto() {
    return src('scss/app.scss')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass({
            includePaths: ['scss']
        }))
        .pipe(dest('css'));
}

exports.sassAndAuto = sassAndAuto;
exports.default = series(sassAndAuto);
watch(['scss/*.scss'], series(sassAndAuto));
