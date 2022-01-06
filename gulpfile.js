const { src, dest, watch, parallel } = require('gulp');

//CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer'); //va a segurnos que el codigo css funcione en los navegadores 
const cssnano = require('cssnano'); //comprime el codigo de css
const postcss = require('gulp-postcss'); // postcss hace mejoraras y transformaciones por medio de gulp-plumber, autoprefixer y cssnano
const sourcemaps = require('gulp-sourcemaps');

//Image
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');


//JavaScript
const terser = require('gulp-terser-js');

function css( done ){    
    src('src/scss/**/*.scss') //Identificar el archivo .scss a compilar
        .pipe(sourcemaps.init()) //vamos a iniciar el sourcemaps para hacer un mapeo en el codigo de css minificado para saber donde podemos modificarlo desde sass 
        .pipe( plumber() )
        .pipe( sass() )  //compilar el archivo
        .pipe( postcss( [autoprefixer(), cssnano()] ) ) //las mejoras de css junto con la minificacion 
        .pipe(sourcemaps.write('.')) //guardar las referencias de css en el mismo lugar/carpeta de build / css
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
        .pipe( sourcemaps.init() )
        .pipe( terser() ) //minifica javascript 
        .pipe( sourcemaps.write('.'))
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
