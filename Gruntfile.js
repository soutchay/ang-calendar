module.exports = function(grunt){
	//Configure Tasks
	grunt.initConfig({
		nodemon: {
			dev: {
				script: 'server.js'
			}
		},
		sass: {
            dist: {
                files: {
                    'public/assets/css/main.css': 'public/assets/css/main.scss'
                }
            }
		},
        ngAnnotate: {

        },
        watch: {
          css: {
            files: '**/*.scss',
            tasks: ['sass']
            }
        }
	});
    //Load tasks
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass', 'watch']);
};