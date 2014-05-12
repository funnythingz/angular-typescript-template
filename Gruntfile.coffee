module.exports = (grunt)->

  grunt.loadNpmTasks('grunt-contrib-compass')
  grunt.loadNpmTasks('grunt-typescript')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-copy')

  grunt.registerTask('default', ['typescript', 'concat', 'uglify', 'clean', 'copy', 'compass'])
  grunt.registerTask('server', ['connect'])

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    uglify:
      dist:
        files: 'build/app.min.js': ['build/app.js']

    concat:
      hackleview:
        src: ['src/ts/**/*.js']
        dest: 'build/app.js'

      options:
        separator: ';'

    copy:
      html:
        files: [{
          expand: true
          cwd: 'src/html/'
          src: ['**/*.html']
          dest: 'build/'
        }]

      assets:
        files: [{
          expand: true
          cwd: 'assets/imgs/'
          src: ['**/*.png', '**/*.jpg']
          dest: 'build/imgs/'
        }]

      angular:
        files: [{
          expand: true
          cwd: 'bower_components/angular/'
          src: ['angular.min.js']
          dest: 'build/js/'
        }]

    typescript:
      base:
        src: ['src/ts/**/*.ts', 'tests/**/*.ts']
        options:
          sourceMap: false

    compass:
      dist:
        options:
          config: 'config.rb'

    watch:
      typescript:
        files: ['src/ts/**/*.ts', 'tests/**/*.ts']
        tasks: ['typescript', 'concat', 'uglify', 'clean', 'copy']
        options:
          atBegin: true

      css:
        files: ['src/scss/**/*.scss']
        tasks: ['compass']
        options:
          atBegin: true

      html:
        files: ['src/html/**/*.html']
        tasks: ['copy:html']
        options:
          atBegin: true

    clean: ['src/ts/**/*.js']

    connect:
      server:
        options:
          port: 8000
          base: 'build'
          keepalive: true

  })
