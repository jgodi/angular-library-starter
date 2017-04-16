const ENV = process.env.npm_lifecycle_event;
const WATCH = ENV === 'test:watch';

module.exports = function (config) {
    const CONFIGURATION = {
        frameworks: ['jasmine', 'karma-typescript'],
        files: [{
                pattern: 'base.spec.ts'
            },
            {
                pattern: 'src/**/*.+(ts|html)'
            }
        ],
        preprocessors: {
            '**/*.ts': ['karma-typescript']
        },
        karmaTypescriptConfig: {
            bundlerOptions: {
                entrypoints: /\.spec\.ts$/,
                transforms: [
                    require('karma-typescript-angular2-transform')
                ]
            },
            compilerOptions: {
                lib: ['ES2015', 'DOM']
            }
        },
        reporters: ['progress', 'karma-typescript'],
        browsers: ['Chrome'],
        colors: true,
        logLevel: config.LOG_INFO,
        singleRun: !WATCH,
        autoWatch: WATCH,
        client: {
            captureConsole: true
        },
        customLaunchers: {
            Chrome_travis_ci: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        }
    };

    if (!WATCH) {
        CONFIGURATION.karmaTypescriptConfig.coverageOptions = {
            instrumentation: true,
            exclude: [
                /\.(d|spec|test|module)\.ts/,
                /\index.ts/,

            ]
        };
        CONFIGURATION.karmaTypescriptConfig.reports = {
            'text': '',
            'text-summary': '',
            'html': 'coverage/html',
            'lcovonly': 'coverage'
        };
    }

    if (process.env.TRAVIS) {
        CONFIGURATION.browsers = ['Chrome_travis_ci'];
    }

    config.set(CONFIGURATION);
};
