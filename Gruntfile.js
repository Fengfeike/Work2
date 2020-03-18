module.exports = function (grunt) {
    grunt.initConfig({
      htmlmin: {
        options: {
          removeComments:true,  
          cllapseWhitespace: true
        },
    files: {
            src: './index.html',
            dest: 'dist/index.html'        
    }
        
      }
                 
    });

      grunt.loadNpmTasks('grunt-contrib-htmlmin');
      grunt.registerTask('default', ['htmlmin']); 

  };

