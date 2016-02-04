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
      options: {
        seperator: ";",
        stripBanners: true
      },
      js: {
        src: [
          "<%= config.template %>js/iife-start.js",
          "<%= config.template %>js/jquery.min.js",
          "<%= config.template %>js/main.js",
          "<%= config.template %>js/iife-end.js"
        ],
        dest: '<%= config.template %>js/master.js'
      },
      css: {
        src: [
          // "<%= config.template %>css/font-awesome.css",
          "<%= config.template %>css/bootstrap.css",
          "<%= config.template %>css/style.css"
        ],
        dest: "<%= config.template %>css/master.css"
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
      masterjs: {
        src: '<%= config.template %>js/master.js',
        dest: '<%= config.template %>js/master.min.js'
      }
    },



    ////////////
    // watch //
    ////////////
    /*
      npm install grunt-contrib-watch
      grunt.loadNpmTasks('grunt-contrib-watch');
    */
    watch: {
      // js: {
      //   files: ['<%= config.template %>js/*.js'],
      //   tasks: ['concat:js'],
      //   options: {
      //     spawn: false,
      //     // livereload: 35729
      //   },
      // },
      less: {
        files: ['<%= config.template %>less/**/*.less'],
        tasks: ['less_imports', 'less:stylecss'],
        options: {
          spawn: true
          // livereload: 35729
        }
      },
      sass: {
        files: ['<%= config.template %>scss/**/*.scss'],
        tasks: ['sass_import' ,'sass:stylecss'],
        options: {
          spawn: true
          // livereload: 35729
        }
      },
      css: {
        files: ['<%= config.template %>css/**/*.css'],
        options: {
          spawn: false,
          livereload: 35729
        }
      },
      lessBootstrap: {
        files: ['<%= config.template %>less-bootstrap/**/*.less'],
        tasks: ['less:bootstrap'],
        options: {
          spawn: false
          // livereload: 35729
        }
      },
      sassBootstrap: {
        files: ['<%= config.template %>scss-bootstrap/**/*.scss'],
        tasks: ['sass:bootstrap', 'autoprefixer:bootstrap'],
        options: {
          spawn: false
          // livereload: 35729
        }
      },
      livereload: {
        files: [
          '.htaccess',
          '*.html',
          '*.php',
          '*.inc',
          '*.js',
          '*.json',
          '*.jpg',
          '*.png',
          '*.gif',
          '*.svg',
          '*.eot',
          '*.woff',
          '<%= config.template %>*/*.html',
          '<%= config.template %>*/**/*.html',
          '<%= config.template %>*/*.php',
          '<%= config.template %>*/**/*.php',
          '<%= config.template %>*/*.inc',
          '<%= config.template %>*/**/*.inc',
          '<%= config.template %>js/**/*.js',
          '<%= config.template %>*/*.jpg',
          '<%= config.template %>*/*.png',
          '<%= config.template %>*/*.gif',
          '<%= config.template %>*/*.svg',
          '<%= config.template %>fonts/*.eot',
          '<%= config.template %>fonts/*.woff'
        ],
        options: {
          spawn: false,
          livereload: 35729
        }
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
          relativeUrls: true
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
          relativeUrls: true
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
          relativeUrls: true
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
      }
      // custom: {
      //   options: {
      //     paths: ["less"],
      //     compress: false,
      //     cleancss: false,
      //     optimization: false,
      //     dumpLineNumbers: "comments" // comments, mediaquery, all.
      //   },
      //   files: {
      //     "<%= config.template %>css/res.css": "<%= config.template %>less/res.less"
      //   }
      // }
    },




    /**
    npm install grunt-less-imports --save-dev
    grunt.loadNpmTasks('grunt-less-imports');
     */
    less_imports: {
      options: {
        // banner: '// Compiled stylesheet'
      },
      styles: {
        src: [
          '<%= config.template %>less/plugins/*.less',
          '<%= config.template %>less/elements/*.less',
          '<%= config.template %>less/pages/*.less'
        ],
        dest: '<%= config.template %>less/less-import.less'
      }
    },


    ////////////////
    // grunt scss //
    ////////////////
    /*
    npm install grunt-contrib-sass --save-dev
    grunt.loadNpmTasks('grunt-contrib-sass');
     */
    sass: {
      stylecss: {
        options: {
          sourcemap: "none",
          precision: 5,
          check: false,
          lineNumbers: false,
          update: false,
          compass: false,
          loadPath: [
            '<%= config.template %>scss/plugins',
            '<%= config.template %>scss/elements',
            '<%= config.template %>scss/pages'
          ],
          style: 'expanded' // nested, compact, compressed, expanded.
        },
        files: {
          '<%= config.template %>css/style.css': '<%= config.template %>scss/style.scss'
        }
      },
      bootstrap: {
        options: {
          sourcemap: "none",
          precision: 5,
          check: false,
          lineNumbers: false,
          update: false,
          compass: false,
          style: 'expanded' // nested, compact, compressed, expanded.
        },
        files: {
          '<%= config.template %>css/bootstrap.css': '<%= config.template %>scss-bootstrap/bootstrap.scss'
        }
      },
      fontawesome: {
        options: {
          sourcemap: "none",
          precision: 5,
          check: false,
          lineNumbers: false,
          update: false,
          compass: false,
          style: 'compact' // nested, compact, compressed, expanded.
        },
        files: {
          '<%= config.template %>css/font-awesome.css': '<%= config.template %>scss-fa/font-awesome.scss'
        }
      }
    },



    /**
    npm install grunt-sass-import --save-dev
    grunt.loadNpmTasks('grunt-sass-import');
    */
    sass_import: {
      options: {
        basePath: '<%= config.template %>scss/'
      },
      dist: {
        files: {
          'scss-import.scss': [
            "plugins/*",
            "elements/*",
            "pages/*"
          ]
        }
      }
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
          '<%= config.template %>css/master.css': [
            '<%= config.template %>css/font-awesome.css',
            '<%= config.template %>css/bootstrap.css',
            '<%= config.template %>css/style.css'
          ]
        }
      }
    },




    /////////////////
    // autoprefixr //
    /////////////////
    /*
    npm install grunt-autoprefixer --save-dev
    grunt.loadNpmTasks('grunt-autoprefixer');
     */
    autoprefixer: {
      options: {
        browsers: [
          '> 1%',
          'last 5 versions',
          'ie 11',
          'ie 10',
          'safari > 6'
        ]
      },
      stylecss: {
        src: "<%= config.template %>css/style.css",
        dest: '<%= config.template %>css/style.css'
      },
      bootstrap: {
        src: "<%= config.template %>css/bootstrap.css",
        dest: '<%= config.template %>css/bootstrap.css'
      }
    },







    /*
    npm install grunt-injector --save-dev
    grunt.loadNpmTasks('grunt-injector');
     */
    injector: {
      options: {
        addRootSlash: false,
        bowerPrefix: "bow"
      },
      js: {
        files: {
          '<%= config.template %>index.html': [
            '<%= config.template %>js/app/**/*.js'
          ]
        }
      },
      css: {
        files: {
          '<%= config.template %>index.html': [
            '<%= config.template %>css/*.css'
          ]
        }
      }
    },










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
      },
      livereload_http_server: {
        command: 'lr-http-server'
      },
      browser_sync_php_server: {
        command: 'browser-sync start --proxy localhost:9898/blank-less/ --files ".htaccess, *.html, *.php, *.inc, *.js, *.json, *.jpg, *.png, *.gif, *.svg, *.eot, *.woff, , <%= config.template %>css/*.css, <%= config.template %>*/*.html, <%= config.template %>*/**/*.html, <%= config.template %>*/*.php, <%= config.template %>*/**/*.php, <%= config.template %>*/*.inc, <%= config.template %>*/**/*.inc, <%= config.template %>js/**/*.js, <%= config.template %>*/*.jpg, <%= config.template %>*/*.png, <%= config.template %>*/*.gif, <%= config.template %>*/*.svg, <%= config.template %>fonts/*.eot, <%= config.template %>fonts/*.woff"'
      },
      browser_sync_http_server: {
        command: 'browser-sync start --server --files ".htaccess, *.html, *.php, *.inc, *.js, *.json, *.jpg, *.png, *.gif, *.svg, *.eot, *.woff, , <%= config.template %>css/*.css, <%= config.template %>*/*.html, <%= config.template %>*/**/*.html, <%= config.template %>*/*.php, <%= config.template %>*/**/*.php, <%= config.template %>*/*.inc, <%= config.template %>*/**/*.inc, <%= config.template %>js/**/*.js, <%= config.template %>*/*.jpg, <%= config.template %>*/*.png, <%= config.template %>*/*.gif, <%= config.template %>*/*.svg, <%= config.template %>fonts/*.eot, <%= config.template %>fonts/*.woff"'
      }
    }








    /*
    npm install grunt-angular-templates --save-dev
    grunt.loadNpmTasks('grunt-angular-templates');
    */
    // ngtemplates: {
    //   appName: {
    //     src: '<%= config.template %>views/**/*.html',
    //     dest: '<%= config.template %>views/templates.js',
    //     options: {
    //       url: function(url) {
    //         return url.replace('.html', '').replace(/\//gi, ".");
    //       },
    //       htmlmin: {
    //         collapseBooleanAttributes:      true,
    //         collapseWhitespace:             true,
    //         removeAttributeQuotes:          false,
    //         removeComments:                 true,
    //         removeEmptyAttributes:          false,
    //         removeRedundantAttributes:      true,
    //         removeScriptTypeAttributes:     false,
    //         removeStyleLinkTypeAttributes:  false
    //       }
    //     }
    //   }
    // },






    /*
      npm install grunt-contrib-requirejs --save-dev
      grunt.loadNpmTasks('grunt-contrib-requirejs');
    */
    // requirejs: {
    //   compile: {
    //     options: {
    //       name: "app",
    //       baseUrl: "<%= config.template %>js",
    //       mainConfigFile: "js/config.js",
    //       out: "js/require-master.js",
    //       include: "lib/require.min.js",
    //       preserveLicenseComments: false
    //     }
    //   }
    // },



    /*
      grunt.loadNpmTasks('grunt-contrib-handlebars');
      npm install grunt-contrib-handlebars --save-dev
    */
    // handlebars: {
    //   all: {
    //     files: {
    //       "<%= config.template %>js/templates.js": ["<%= config.template %>js/views/**/*.hbs"]
    //     }
    //   },
    //   options: {
    //     namespace: 'Templates',
    //     processName: function(filePath) {
    //       return filePath.replace(/^js\/views\//, '').replace(/\.hbs$/, '');
    //     }
    //   }
    // },






    /////////////
    // js hint //
    /////////////
    /*
      npm install grunt-contrib-jshint --save-dev
      grunt.loadNpmTasks('grunt-contrib-jshint');
    */
    // jshint: {
    //   options: {
    //     curly: true,
    //     eqeqeq: true,
    //     eqnull: true,
    //     browser: true,
    //     globals: {
    //       jQuery: true
    //     }
    //   },
    //   gruntjs: {
    //     options: {
    //       jshintrc: '<%= config.template %>js/.jshintrc'
    //     },
    //     src: ['Gruntfile.js']
    //   },
    //   mainjs: {
    //     options: {
    //       jshintrc: '<%= config.template %>js/.jshintrc'
    //     },
    //     src: ['<%= config.template %>js/main.js']
    //   },
    //   alljs: {
    //     options: {
    //       jshintrc: '<%= config.template %>js/.jshintrc'
    //     },
    //     src: ['<%= config.template %>js/*.js']
    //   }
    // },




  });


  // 3. Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-less-imports');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-sass-import');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-autoprefixer');
  // grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-injector');
  // grunt.loadNpmTasks('grunt-contrib-requirejs');
  // grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['less_import', 'less', 'concat', 'uglify']);
  grunt.registerTask('compress', ['concat:js', 'less', 'sass', 'cssmin']);
  grunt.registerTask('bs-php', ['shell:browser_sync_php_server']);
  grunt.registerTask('bs-http', ['shell:browser_sync_http_server']);
};
