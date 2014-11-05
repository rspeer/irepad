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
                    'bower_components/underscore/underscore.js',
                    'bower_components/firebase/firebase-debug.js',
                    'bower_components/codemirror/lib/codemirror.js',
                    'bower_components/codemirror/mode/xml/xml.js',
                    'bower_components/codemirror/mode/markdown/markdown.js',
                    'bower_components/codemirror/mode/gfm/gfm.js',
                    'bower_components/codemirror/addon/mode/overlay.js',
                    'bower_components/firepad/dist/firepad.js',
                    'lib/firepad-userlist.js'
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
