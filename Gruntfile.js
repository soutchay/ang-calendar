module.exports = function(grunt){
	//Configure Tasks
	grunt.initConfig({
		nodemon: {
			dev: {
				script: 'server.js'
			}
		},
		sass: {

		},
        ngAnnotate: {

        },
        watch: {

        }
	});
    //Load tasks
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-watch');
    grunt.registerTask('default', ['nodemon']);
};