'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        mochacli: {
            options: {
                force: true
            },
            all: [__dirname + '/fail.js']
        }
    });

    grunt.loadTasks(__dirname + '/../../tasks');

    grunt.registerTask('default', 'mochacli');
};
