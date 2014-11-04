module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        coffee:{
            compileJoined: {
                options: {
                    join: true
                },
                files: {
                    'js/main.js': [
                        'coffee/*'
                    ]
                }
            },
        },
        watch: {
            coffee: {
                files: ['coffee/*.coffee', 'example/coffee/*.coffee'],
                tasks: 'coffee'
            }
        },
        bower: {
            target: {
                rjsConfig: 'app/config.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-requirejs');

    grunt.registerTask('default', [
        'coffee', 'bower'
    ]);
};
