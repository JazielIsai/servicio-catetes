const { src, dest, watch, parallel } = require('gulp');

//CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

//Image
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');



function css( done ){    
    src('src/scss/**/*.scss') //Identificar el archivo .scss a compilar
        .pipe( plumber() )
        .pipe( sass() )  //compilar el archivo
        .pipe( dest('build/css') ) //almacenarlo en el disco duro


    done();
}

function image (done) {
    const options = {
        optimizationLevel: 3
    };

    src('src/img/**/*.{jpg, png, ico}')
        .pipe ( cache ( imagemin(options) ) )
        .pipe( dest ('./build/img') )   
    done();
}

function versionWebp (done) {

    const options = {
        quality: 50
    };

    src('src/img/**/*.{jpg, png, ico}')
        .pipe( webp(options) )
        .pipe( dest('./build/img'))

    done();
}

function javascript ( done ) {

    src('src/js/**/*.js')
        .pipe(dest('./build/js'))
    done();
}

function dev( done ) {

    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', javascript);

    done();
}

exports.css = css;
exports.js = javascript;
exports.image = image;
exports.versionWebp = versionWebp;
exports.dev = parallel(image,versionWebp, javascript ,dev);
