let mix = require('laravel-mix');

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

mix.webpackConfig({
    resolve: {
        alias: {

            Task: path.resolve(__dirname, 'resources', 'assets/js/components/Task.jsx') ,
            TaskForm: path.resolve(__dirname, 'resources', 'assets/js/components/TaskForm.jsx') ,
            ResultMessage: path.resolve(__dirname, 'resources', 'assets/js/components/ResultMessage.jsx') ,
            searchData: path.resolve(__dirname, 'resources', 'assets/js/api/searchData.jsx') ,



        }
    }
});
mix.react('resources/assets/js/App.jsx', 'public/js');
mix.sass('resources/assets/sass/app.scss', 'public/css');
