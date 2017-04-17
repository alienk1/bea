const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .copy('node_modules/jquery/dist/jquery.min.js', 'public/vendor/js/jquery.min.js')
    .copy('node_modules/bootstrap/dist/js/bootstrap.min.js', 'public/vendor/js/bootstrap.min.js')
    .copy('node_modules/bootstrap/dist/css/bootstrap.min.css', 'public/vendor/css/bootstrap.min.css')
    .copy('node_modules/scrollreveal/dist/scrollreveal.min.js', 'public/vendor/js/scrollreveal.min.js')
    .copy('node_modules/magnific-popup/dist/jquery.magnific-popup.min.js', 'public/vendor/js/jquery.magnific-popup.min.js')
    .copy('node_modules/magnific-popup/dist/magnific-popup.css', 'public/vendor/css/magnific-popup.css')
    .copy('node_modules/font-awesome/css/font-awesome.min.css', 'public/vendor/css/font-awesome.min.css')
    .copy('node_modules/font-awesome/fonts', 'public/vendor/fonts')
    //will remove
    .copy('resources/assets/template/img/portfolio/fullsize', 'public/img/portfolio/fullsize')
    .copy('resources/assets/template/img/portfolio/thumbnails', 'public/img/portfolio/thumbnails')


    .scripts([
        'resources/assets/template/js/creative.js'
    ], 'public/js/all.min.js')
   .less('resources/assets/template/less/creative.less', 'public/css/all.min.css');
