module.exports = function (grunt) {
  grunt.initConfig({
    cssmin:{
      './dist/index.css':'./index.css'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['cssmin']); 
};
