module.exports = function (grunt) {
  grunt.initConfig({
    uglify: {
      files: {
        src: './index.js',
        dest: 'dist/index.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']); 
};
