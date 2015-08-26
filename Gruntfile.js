var config = {
  // template directory
  template: ''
};

module.exports = function(grunt) {


  // 1. All configuration goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),



    // Configurable paths
    config: config,





    //////////////
    // concat //
    //////////////
    /*
      npm install grunt-contrib-concat
      grunt.loadNpmTasks('grunt-contrib-concat');
    */
    concat: {
      js: {
        src: [
          "<%= config.template %>js/jquery.min.js",
          "<%= config.template %>js/main.js"
        ],
        dest: '<%= config.template %>js/master.js'
      },
      bootstrap: {
        src: [
          '<%= config.template %>js/bs-js/transition.js',
          '<%= config.template %>js/bs-js/alert.js',
          '<%= config.template %>js/bs-js/button.js',
          '<%= config.template %>js/bs-js/carousel.js',
          '<%= config.template %>js/bs-js/collapse.js',
          '<%= config.template %>js/bs-js/dropdown.js',
          '<%= config.template %>js/bs-js/modal.js',
          '<%= config.template %>js/bs-js/tooltip.js',
          '<%= config.template %>js/bs-js/popover.js',
          '<%= config.template %>js/bs-js/scrollspy.js',
          '<%= config.template %>js/bs-js/tab.js',
          '<%= config.template %>js/bs-js/affix.js'
        ],
        dest: "<%= config.template %>js/bootstrap.js"
      },
      css: {
        src: [
          "<%= config.template %>css/bootstrap.css",
          // "<%= config.template %>css/font-awesome.css",
          "<%= config.template %>css/style.css"
        ],
        dest: "<%= config.template %>css/master.css"
      }
    },



    /////////////
    // js hint //
    /////////////
    /*
      npm install grunt-contrib-jshint --save-dev
      grunt.loadNpmTasks('grunt-contrib-jshint');
    */
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        },
      },
      gruntjs: {
        options: {
          jshintrc: '<%= config.template %>js/.jshintrc'
        },
        src: ['Gruntfile.js']
      },
      mainjs: {
        options: {
          jshintrc: '<%= config.template %>js/.jshintrc'
        },
        src: ['<%= config.template %>js/main.js']
      },
      alljs: {
        options: {
          jshintrc: '<%= config.template %>js/.jshintrc'
        },
        src: ['<%= config.template %>js/*.js']
      }
    },



    //////////////
    // uglify //
    //////////////
    /*
      npm install grunt-contrib-uglify
      grunt.loadNpmTasks('grunt-contrib-uglify');
    */
    uglify: {
      options: {
        preserveComments: 'false', //false all some
        compress : {
          drop_console: true
        }
      },
      jquery: {
        src: '<%= config.template %>js/jquery.js',
        dest: '<%= config.template %>js/jquery.min.js'
      },
      bootstrapjs: {
        src: '<%= config.template %>js/bootstrap.js',
        dest: '<%= config.template %>js/bootstrap.min.js'
      },
      masterjs: {
        src: '<%= config.template %>js/master.js',
        dest: '<%= config.template %>js/master.min.js'
      },
      mainjs: {
        src: '<%= config.template %>js/main.js',
        dest: '<%= config.template %>js/main.min.js'
      },
      mastercss: {
        src: '<%= config.template %>css/master.css',
        dest: '<%= config.template %>css/master.min.css'
      },
      stylecss: {
        src: '<%= config.template %>css/style.css',
        dest: '<%= config.template %>css/style.min.css'
      },
      bootstrapcss: {
        src: '<%= config.template %>css/bootstrap.css',
        dest: '<%= config.template %>css/bootstrap.min.css'
      },
    },



    ////////////
    // watch //
    ////////////
    /*
      npm install grunt-contrib-watch
      grunt.loadNpmTasks('grunt-contrib-watch');
    */
    watch: {
      /*js: {
        files: ['<%= config.template %>js/*.js'],
        tasks: ['concat:js'],
        options: {
          spawn: false,
          // livereload: 35729
        },
      },*/
      stylecss: {
        files: ['<%= config.template %>less/*.less'],
        tasks: ['less:stylecss'],
        options: {
          spawn: true,
          // livereload: 35729
        },
      },
      /*
      customcss : {
        files: ['<%= config.template %>less/*.less'],
        tasks: ['less:custom'],
        options: {
          spawn: true,
          // livereload: 35729
        },
      },*/
      css: {
        files: ['<%= config.template %>css/*.css'],
        options: {
          spawn: false,
          livereload: 35729
        },
      },
      bootstrap: {
        files: ['<%= config.template %>less-bootstrap/*.less'],
        tasks: ['less:bootstrap'],
        options: {
          spawn: false,
          // livereload: 35729
        },
      },
      livereload: {
        files: [
          '.htaccess',
          '*.html',
          '*.php',
          '*.inc',
          '*.js',
          '*.jpg',
          '*.png',
          '*.gif',
          '*.svg',
          '*.eot',
          '*.woff',
          '<%= config.template %>*/*.html',
          '<%= config.template %>*/*.php',
          '<%= config.template %>*/*.inc',
          '<%= config.template %>*/*.js',
          '<%= config.template %>*/*.jpg',
          '<%= config.template %>*/*.png',
          '<%= config.template %>*/*.gif',
          '<%= config.template %>*/*.svg',
          '<%= config.template %>*/*.eot',
          '<%= config.template %>*/*.woff',
        ],
        options: {
          spawn: false,
          livereload: 35729
        },
      }
    },


    ///////////
    // less //
    ///////////
    /*
      npm install grunt-contrib-less
      grunt.loadNpmTasks('grunt-contrib-less');
    */
    less: {
      stylecss: {
        options: {
          paths: ["less"],
          compress: false,
          cleancss: false,
          optimization: false,
          // dumpLineNumbers: "comments", // comments, mediaquery, all.
          // sourceMap: true
          // modifyVars: {
          //   imgPath: '',
          //   bgColor: ''
          // }
        },
        files: {
          "<%= config.template %>css/style.css": "<%= config.template %>less/style.less"
        }
      },
      bootstrap: {
        options: {
          paths: ["<%= config.template %>less-bootstrap"],
          compress: false,
          cleancss: false,
          optimization: false,
          // dumpLineNumbers: "comments", // comments, mediaquery, all.
          // sourceMap: true
          // modifyVars: {
          //   imgPath: '',
          //   bgColor: ''
          // }
        },
        files: {
          "<%= config.template %>css/bootstrap.css": "<%= config.template %>less-bootstrap/bootstrap.less"
        }
      },
      fontawesome: {
        options: {
          paths: ["<%= config.template %>less-fa"],
          compress: false,
          cleancss: false,
          optimization: false,
          // dumpLineNumbers: "all", // comments, mediaquery, all.
          // sourceMap: true
          // modifyVars: {
          //   imgPath: '',
          //   bgColor: ''
          // }
        },
        files: {
          "<%= config.template %>css/font-awesome.css": "<%= config.template %>less-fa/font-awesome.less"
        }
      },
/*      custom: {
        options: {
          paths: ["less"],
          compress: false,
          cleancss: false,
          optimization: false,
          dumpLineNumbers: "comments" // comments, mediaquery, all.
        },
        files: {
          "<%= config.template %>css/res.css": "<%= config.template %>less/res.less"
        }
      },*/
    },




    /////////////
    // css min //
    /////////////
    /*
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    npm install grunt-contrib-cssmin --save-dev
     */
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'site/templates/css/master.css': [
            'site/templates/css/font-awesome.css',
            'site/templates/css/bootstrap.css',
            'site/templates/css/style.css'
          ]
        }
      }
    }




    /*
      npm install grunt-contrib-requirejs --save-dev
      grunt.loadNpmTasks('grunt-contrib-requirejs');
    */
    requirejs: {
      compile: {
        options: {
          name: "app",
          baseUrl: "js",
          mainConfigFile: "js/config.js",
          out: "js/require-master.js",
          include: "lib/require.min.js",
          preserveLicenseComments: false
        }
      }
    },



    /*
      grunt.loadNpmTasks('grunt-contrib-handlebars');
      npm install grunt-contrib-handlebars --save-dev
    */
    handlebars: {
      all: {
        files: {
          "<%= config.template %>js/templates.js": ["<%= config.template %>js/views/**/*.hbs"]
        }
      },
      options: {
        namespace: 'Templates',
        processName: function(filePath) {
          return filePath.replace(/^js\/views\//, '').replace(/\.hbs$/, '');
        }
      }
    },



    /////////////
    // connect //
    /////////////
    /*
    grunt.loadNpmTasks('grunt-contrib-connect');
    npm install grunt-contrib-connect --save-dev
     */
/*    connect: {
      options: {
        port: 9000,
        open: true,
        livereload: 35729,
        // Change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost',
      },
      livereload: {
        options: {
          middleware: function(connect) {
            return [
              // connect.static('.tmp'),
              // connect().use('/bower_components', connect.static('./bower_components')),
              // connect.static(config.template)
            ];
          }
        }
      }
    },*/






    ////////////
    // banner //
    ////////////
    /*
      npm install grunt-banner --save-dev
      grunt.loadNpmTasks('grunt-banner');
    */
/*    usebanner: {
      st: {
        options: {
          position: 'top',
          banner: '<%= banner %>'
        },
        files: {
          src: [
            '<%= config.template %>css/style.css',
            '<%= config.template %>css/bootstrap.css',
            '<%= config.template %>js/master.js',
            '<%= config.template %>css/master.css'
          ]
        }
      }
    },*/



    ////////////
    // shell //
    ////////////
    /*
      npm install grunt-shell
      grunt.loadNpmTasks('grunt-contrib-less');
    */
    shell: {
      css2less: {
        command: 'cd <%= config.template %>less css2less less\\test.css > less\\test.less && del less\\test.css'
      },
      pngQuant: {
        command: 'cd <%= config.template %>img && del *.min.png && pngquant --force --verbose --quality=45-85 --ext=.min.png *.png'
      },
      jpgCompress: {
        command: 'cd <%= config.template %>img && del *.min.jpg && mogrify -format "min.jpg" -quality 80 *.jpg'
      },
      svg2png: {
        command: 'cd <%= config.template %>svg && del *.png && mogrify -format png *.svg'
      },
      delete_all_compressed_images: {
        command: 'cd <%= config.template %>img && del *.min.jpg && del *.min.png'
      },
      http_server: {
        command: 'http-server -o'
      }
    }

  });


  // 3. Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-shell');
  // grunt.loadNpmTasks('grunt-contrib-connect');
  // grunt.loadNpmTasks('grunt-autoprefixer');
  // grunt.loadNpmTasks('grunt-contrib-copy');
  // grunt.loadNpmTasks('grunt-contrib-htmlmin');
  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('default', ['less', 'concat', 'uglify']);
  grunt.registerTask('compress', ['concat:master', 'uglify:masterjs', 'cssmin']);
  grunt.registerTask('0000-default', ['concat', 'uglify', 'less']);
};
