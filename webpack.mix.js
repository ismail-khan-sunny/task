const mix = require("laravel-mix");

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
mix.js("resources/js/web_app.js", "public/js").styles(
    [
        "resources/js/assets/css/bootstrap.min.css",
        "resources/js/assets/css/style.css"
    ],
    "public/css/web.css"
);
let config = {
    output: {
        publicPath: process.env.MIX_VUE_ROUTER_BASE
            ? "/" + process.env.MIX_VUE_ROUTER_BASE + "/public/"
            : "/public/", // development
        //chunkFilename: 'js/chunks/[name].[chunkhash].js',     // production
        chunkFilename: "js/chunks/[name].js" // development
    }
};

if (mix.config.inProduction) {
    // Overwrite naming structure for production
    config.output.chunkFilename = "js/chunks/[name].[chunkhash].js"; // production
} else {
    // Enable sourcemaps
    mix.webpackConfig({ devtool: "source-map" }).sourceMaps();
}

mix.webpackConfig(config);
