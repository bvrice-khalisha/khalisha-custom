

module.exports = function(grunt) {

    // Project configuration.

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Task configuration goes here.

       concat: {
           app: {
               src: ['css/*.css'],
             dest: 'concat.css'
          }
       },
        lineremover: {
            noOptions: {
                files: {
                    'tmp': 'concat.css'
                }
            }
        }
         });

    // Load plugins here.
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Load the plugin that provides the "cssmin" task.
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //Load the plugin that provides "concat" task
    grunt.loadNpmTasks('grunt-contrib-concat');

    //Load the plugin for gzip
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-trimtrailingspaces');

    // Register tasks here.
//    grunt.registerTask('default', []);
    grunt.registerTask('default', ['lineremover']);


};

