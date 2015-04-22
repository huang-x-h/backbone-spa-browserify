var dest = "./build";
var src = './src';

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
    less: {
        src: './less/bundle.less',
        dest: dest
    },
    production: {
        jsSrc: dest + '/*.js',
        dest: dest
    },
    vendor: {
        src: './node_modules',
        dest: dest + '/vendor'
    }
};
