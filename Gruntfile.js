module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'css/app.css': 'sass/app.scss',
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['sass']);
};