var dest = "./build";
var src = './app';

module.exports = {
    browserSync: {
        server: {
            // Serve up our build folder
            baseDir: dest
        }
    },
    browserify: {
        bundleConfigs: [{
            entries: src + '/main.js',
            dest: dest,
            outputName: 'bundle.js',
            extensions: ['.hbs'],
            require: ['jquery', 'backbone/node_modules/underscore']
        }]
    },
    sass: {
        src: "/sass/**/*.{sass,scss}",
        dest: dest,
        settings: {
            indentedSyntax: true, // Enable .sass syntax!
            imagePath: 'images' // Used by the image-url helper
        }
    },
    production: {
        jsSrc: dest + '/*.js',
        dest: dest
    }
};
