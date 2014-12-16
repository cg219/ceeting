	var path = require("path");

module.exports = function(grunty){

	var libraryScripts = [];
	var sourceScripts = ["src/js/*"];
	var styles = [];

	grunty.initConfig({
		pkg: grunty.file.readJSON("package.json"),
		less: {
			all: {
				options: {
					paths: ["public/css"]
				},
				files: {
					"src/css/styles.css" : "src/less/styles.less"
				}
			}
		},
		clean: {
			libs: ["public/js/libs"]
		},
		cssmin: {
			build: {
				files: {
					"public/css/styles.css" : styles
				}
			}
		},
		uglify: {
			options: {
				mangle: true,
				compress: true
			},
			libs: {
				files: {
					"public/js/libs.min.js" : libraryScripts
				}
			},
			scripts: {
				files: {
					"public/js/scripts.min.js" : sourceScripts
				}
			}
		},
		jade: {
			main: {
				options: {
					pretty: true,
					data: false
				},
				files: [{
					src: "app/views/*.jade",
					dest: "public",
					expand: true,
					ext: ".html",
					flatten: true
				}]
			}
		},
		watch: {
			options: {
				spawn: false
			},
			scripts: {
				files: ["src/js/*.js"],
				tasks: ["uglify:scripts"]
			},
			pages: {
				files: ["app/views/*.jade"],
				tasks: ["jade"]
			},
			css: {
				files: ["src/less/*"],
				tasks: ["less", "cssmin"]
			}
		},
		focus: {
			all: {
				include: ["scripts", "pages", "css"]
			}
		}

	})

	grunty.loadNpmTasks("grunt-contrib-clean");
	grunty.loadNpmTasks("grunt-contrib-cssmin");
	grunty.loadNpmTasks("grunt-contrib-copy");
	grunty.loadNpmTasks("grunt-contrib-uglify");
	grunty.loadNpmTasks("grunt-contrib-watch");
	grunty.loadNpmTasks("grunt-contrib-less");
	grunty.loadNpmTasks("grunt-contrib-jade");
	grunty.loadNpmTasks("grunt-focus");

	grunty.registerTask("bowerLibs", ["clean:libs", "uglify:libs"]);
	grunty.registerTask("build", ["clean:libs", "uglify:libs", "uglify:scripts", "jade", "less", "cssmin:build"]);
	grunty.registerTask("default", ["focus:all"]);
}