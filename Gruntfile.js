module.exports = function (grunt)
{
	grunt.initConfig({

		pkg : grunt.file.readJSON('package.json'),

		jshint :
		{
			build : ['Gruntfile.js', 'src/js/*.js']
		},

		uglify :
		{
			build :
			{
				files :
				{
					'assets/js/master.min.js' : ['src/js/master.js']
				}
			}
		},

		less :
		{
			build :
			{
				files :
				{
					'assets/css/master.css' : ['src/css/master.less']
				}
			}
		},

		cssmin :
		{
			build :
			{
				files :
				{
					'assets/css/master.min.css' : ['assets/css/master.css']
				}
			}
		},

		watch :
		{	
			stylesheets :
			{
				files : ['src/css/*.less'],
				tasks : ['less', 'cssmin']
			},
			scripts :
			{
				files : ['src/js/master.js'],
				tasks : ['jshint', 'uglify']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jshint', 'uglify', 'less', 'cssmin']);
};