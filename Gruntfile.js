module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        coffee: {
            compile: {
                options: {
                    sourceMap: true
                },
                files: {
                    'js/irepad.js': [
                        'coffee/**/*.coffee',
                    ]
                }
            }
        },
        concat: {
            libs: {
                src: [
                    // JS libraries we depend on, in dependency order
                    'lib/underscore/underscore.js',
                    'lib/codemirror/lib/codemirror.js',
                    'lib/codemirror/mode/xml/xml.js',
                    'lib/codemirror/mode/markdown/markdown.js',
                    'lib/codemirror/mode/gfm/gfm.js',
                    'lib/codemirror/addon/mode/overlay.js',
                    'lib/userlist/firepad-userlist.js'
                ],
                dest: 'js/libs.js'
            }
        },
        watch: {
            coffee: {
                files: ['coffee/*.coffee'],
                tasks: 'coffee'
            }
        }
    });

    grunt.registerTask('default', [
        'coffee', 'concat', 'watch'
    ]);
};
