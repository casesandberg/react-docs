SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "react-documentation/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "babel-runtime": "npm:babel-runtime@5.8.29",
      "core-js": "npm:core-js@1.2.6",
      "babel-preset-es2015": "npm:babel-preset-es2015@6.9.0",
      "babel-preset-react": "npm:babel-preset-react@6.5.0",
      "babel-preset-stage-0": "npm:babel-preset-stage-0@6.5.0",
      "net": "github:jspm/nodelibs-net@0.2.0-alpha",
      "tty": "github:jspm/nodelibs-tty@0.2.0-alpha"
    },
    "packages": {
      "npm:babel-runtime@5.8.29": {
        "map": {}
      },
      "npm:babel-preset-react@6.5.0": {
        "map": {
          "babel-plugin-transform-flow-strip-types": "npm:babel-plugin-transform-flow-strip-types@6.8.0",
          "babel-plugin-transform-react-display-name": "npm:babel-plugin-transform-react-display-name@6.8.0",
          "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.8.0",
          "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.8.0",
          "babel-plugin-transform-react-jsx-source": "npm:babel-plugin-transform-react-jsx-source@6.9.0",
          "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.8.0"
        }
      },
      "npm:babel-plugin-transform-flow-strip-types@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.8.0"
        }
      },
      "npm:babel-preset-es2015@6.9.0": {
        "map": {
          "babel-plugin-transform-es2015-template-literals": "npm:babel-plugin-transform-es2015-template-literals@6.8.0",
          "babel-plugin-transform-es2015-shorthand-properties": "npm:babel-plugin-transform-es2015-shorthand-properties@6.8.0",
          "babel-plugin-transform-es2015-literals": "npm:babel-plugin-transform-es2015-literals@6.8.0",
          "babel-plugin-transform-es2015-classes": "npm:babel-plugin-transform-es2015-classes@6.9.0",
          "babel-plugin-transform-es2015-arrow-functions": "npm:babel-plugin-transform-es2015-arrow-functions@6.8.0",
          "babel-plugin-transform-es2015-object-super": "npm:babel-plugin-transform-es2015-object-super@6.8.0",
          "babel-plugin-transform-es2015-function-name": "npm:babel-plugin-transform-es2015-function-name@6.9.0",
          "babel-plugin-check-es2015-constants": "npm:babel-plugin-check-es2015-constants@6.8.0",
          "babel-plugin-transform-es2015-block-scoped-functions": "npm:babel-plugin-transform-es2015-block-scoped-functions@6.8.0",
          "babel-plugin-transform-es2015-sticky-regex": "npm:babel-plugin-transform-es2015-sticky-regex@6.8.0",
          "babel-plugin-transform-es2015-duplicate-keys": "npm:babel-plugin-transform-es2015-duplicate-keys@6.8.0",
          "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.8.0",
          "babel-plugin-transform-es2015-computed-properties": "npm:babel-plugin-transform-es2015-computed-properties@6.8.0",
          "babel-plugin-transform-es2015-unicode-regex": "npm:babel-plugin-transform-es2015-unicode-regex@6.8.0",
          "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.9.0",
          "babel-plugin-transform-es2015-spread": "npm:babel-plugin-transform-es2015-spread@6.8.0",
          "babel-plugin-transform-es2015-typeof-symbol": "npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0",
          "babel-plugin-transform-regenerator": "npm:babel-plugin-transform-regenerator@6.9.0",
          "babel-plugin-transform-es2015-destructuring": "npm:babel-plugin-transform-es2015-destructuring@6.9.0",
          "babel-plugin-transform-es2015-parameters": "npm:babel-plugin-transform-es2015-parameters@6.9.0",
          "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.8.0"
        }
      },
      "npm:babel-runtime@6.9.1": {
        "map": {
          "core-js": "npm:core-js@2.4.0"
        }
      },
      "npm:babel-plugin-transform-react-display-name@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1"
        }
      },
      "npm:babel-plugin-transform-es2015-template-literals@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1"
        }
      },
      "npm:babel-plugin-transform-es2015-classes@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0",
          "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.8.0",
          "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.8.0",
          "babel-helper-define-map": "npm:babel-helper-define-map@6.9.0",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-messages": "npm:babel-messages@6.8.0",
          "babel-types": "npm:babel-types@6.9.1",
          "babel-traverse": "npm:babel-traverse@6.9.0"
        }
      },
      "npm:babel-plugin-transform-es2015-literals@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1"
        }
      },
      "npm:babel-plugin-transform-es2015-shorthand-properties@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-types": "npm:babel-types@6.9.1"
        }
      },
      "npm:babel-preset-stage-0@6.5.0": {
        "map": {
          "babel-plugin-transform-function-bind": "npm:babel-plugin-transform-function-bind@6.8.0",
          "babel-plugin-transform-do-expressions": "npm:babel-plugin-transform-do-expressions@6.8.0",
          "babel-preset-stage-1": "npm:babel-preset-stage-1@6.5.0"
        }
      },
      "npm:babel-plugin-syntax-jsx@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1"
        }
      },
      "npm:babel-plugin-transform-react-jsx@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.8.0",
          "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.9.0"
        }
      },
      "npm:babel-plugin-transform-es2015-arrow-functions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1"
        }
      },
      "npm:babel-plugin-transform-es2015-object-super@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.8.0"
        }
      },
      "npm:babel-plugin-transform-es2015-sticky-regex@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-types": "npm:babel-types@6.9.1",
          "babel-helper-regex": "npm:babel-helper-regex@6.9.0"
        }
      },
      "npm:babel-plugin-transform-es2015-function-name@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0",
          "babel-types": "npm:babel-types@6.9.1"
        }
      },
      "npm:babel-plugin-transform-es2015-block-scoped-functions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1"
        }
      },
      "npm:babel-plugin-check-es2015-constants@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1"
        }
      },
      "npm:babel-plugin-transform-es2015-duplicate-keys@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-types": "npm:babel-types@6.9.1"
        }
      },
      "npm:babel-plugin-transform-react-jsx-source@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.8.0"
        }
      },
      "npm:babel-plugin-transform-es2015-for-of@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1"
        }
      },
      "npm:babel-plugin-transform-function-bind@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-plugin-syntax-function-bind": "npm:babel-plugin-syntax-function-bind@6.8.0"
        }
      },
      "npm:babel-plugin-transform-es2015-computed-properties@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-helper-define-map": "npm:babel-helper-define-map@6.9.0",
          "babel-template": "npm:babel-template@6.9.0"
        }
      },
      "npm:babel-plugin-transform-es2015-unicode-regex@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "regexpu-core": "npm:regexpu-core@1.0.0",
          "babel-helper-regex": "npm:babel-helper-regex@6.9.0"
        }
      },
      "npm:babel-plugin-transform-do-expressions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-plugin-syntax-do-expressions": "npm:babel-plugin-syntax-do-expressions@6.8.0"
        }
      },
      "npm:babel-plugin-transform-es2015-block-scoping@6.9.0": {
        "map": {
          "lodash": "npm:lodash@4.13.1",
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-types": "npm:babel-types@6.9.1",
          "babel-traverse": "npm:babel-traverse@6.9.0"
        }
      },
      "npm:babel-plugin-syntax-flow@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1"
        }
      },
      "npm:babel-plugin-transform-es2015-spread@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1"
        }
      },
      "npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1"
        }
      },
      "npm:babel-plugin-transform-regenerator@6.9.0": {
        "map": {
          "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.9.0",
          "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-types": "npm:babel-types@6.9.1",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-core": "npm:babel-core@6.9.1",
          "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.8.0",
          "private": "npm:private@0.1.6",
          "babylon": "npm:babylon@6.8.0"
        }
      },
      "npm:babel-plugin-transform-es2015-destructuring@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1"
        }
      },
      "npm:babel-plugin-transform-es2015-parameters@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-types": "npm:babel-types@6.9.1",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-helper-call-delegate": "npm:babel-helper-call-delegate@6.8.0",
          "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.8.0"
        }
      },
      "npm:babel-plugin-transform-es2015-modules-commonjs@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-types": "npm:babel-types@6.9.1",
          "babel-plugin-transform-strict-mode": "npm:babel-plugin-transform-strict-mode@6.8.0"
        }
      },
      "npm:babel-helper-function-name@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-types": "npm:babel-types@6.9.1",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.8.0"
        }
      },
      "npm:babel-helper-replace-supers@6.8.0": {
        "map": {
          "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-messages": "npm:babel-messages@6.8.0",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-types": "npm:babel-types@6.9.1",
          "babel-traverse": "npm:babel-traverse@6.9.0"
        }
      },
      "npm:babel-helper-define-map@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "lodash": "npm:lodash@4.13.1",
          "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0",
          "babel-types": "npm:babel-types@6.9.1"
        }
      },
      "npm:babel-helper-optimise-call-expression@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-types": "npm:babel-types@6.9.1"
        }
      },
      "npm:babel-preset-stage-1@6.5.0": {
        "map": {
          "babel-preset-stage-2": "npm:babel-preset-stage-2@6.5.0",
          "babel-plugin-transform-export-extensions": "npm:babel-plugin-transform-export-extensions@6.8.0",
          "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.9.1",
          "babel-plugin-transform-decorators": "npm:babel-plugin-transform-decorators@6.8.0",
          "babel-plugin-transform-class-constructor-call": "npm:babel-plugin-transform-class-constructor-call@6.8.0"
        }
      },
      "npm:babel-template@6.9.0": {
        "map": {
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-types": "npm:babel-types@6.9.1",
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "lodash": "npm:lodash@4.13.1",
          "babylon": "npm:babylon@6.8.0"
        }
      },
      "npm:babel-messages@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1"
        }
      },
      "npm:babel-types@6.9.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "lodash": "npm:lodash@4.13.1",
          "esutils": "npm:esutils@2.0.2",
          "to-fast-properties": "npm:to-fast-properties@1.0.2"
        }
      },
      "npm:babel-traverse@6.9.0": {
        "map": {
          "babel-messages": "npm:babel-messages@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-types": "npm:babel-types@6.9.1",
          "lodash": "npm:lodash@4.13.1",
          "babylon": "npm:babylon@6.8.0",
          "babel-code-frame": "npm:babel-code-frame@6.8.0",
          "globals": "npm:globals@8.18.0",
          "debug": "npm:debug@2.2.0",
          "invariant": "npm:invariant@2.2.1"
        }
      },
      "npm:babel-helper-builder-react-jsx@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-types": "npm:babel-types@6.9.1",
          "lodash": "npm:lodash@4.13.1",
          "esutils": "npm:esutils@2.0.2"
        }
      },
      "npm:babel-core@6.9.1": {
        "map": {
          "babel-messages": "npm:babel-messages@6.8.0",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-types": "npm:babel-types@6.9.1",
          "lodash": "npm:lodash@4.13.1",
          "private": "npm:private@0.1.6",
          "babylon": "npm:babylon@6.8.0",
          "source-map": "npm:source-map@0.5.6",
          "path-is-absolute": "npm:path-is-absolute@1.0.0",
          "convert-source-map": "npm:convert-source-map@1.2.0",
          "shebang-regex": "npm:shebang-regex@1.0.0",
          "path-exists": "npm:path-exists@1.0.0",
          "slash": "npm:slash@1.0.0",
          "babel-code-frame": "npm:babel-code-frame@6.8.0",
          "babel-register": "npm:babel-register@6.9.0",
          "babel-helpers": "npm:babel-helpers@6.8.0",
          "json5": "npm:json5@0.4.0",
          "debug": "npm:debug@2.2.0",
          "minimatch": "npm:minimatch@2.0.10",
          "babel-generator": "npm:babel-generator@6.9.0"
        }
      },
      "npm:babel-plugin-transform-export-extensions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-plugin-syntax-export-extensions": "npm:babel-plugin-syntax-export-extensions@6.8.0"
        }
      },
      "npm:babel-helper-call-delegate@6.8.0": {
        "map": {
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-types": "npm:babel-types@6.9.1",
          "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.8.0"
        }
      },
      "npm:babel-plugin-syntax-function-bind@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1"
        }
      },
      "npm:babel-plugin-transform-class-properties@6.9.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-plugin-syntax-class-properties": "npm:babel-plugin-syntax-class-properties@6.8.0"
        }
      },
      "npm:babel-plugin-syntax-async-functions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1"
        }
      },
      "npm:babel-plugin-transform-decorators@6.8.0": {
        "map": {
          "babel-types": "npm:babel-types@6.9.1",
          "babel-helper-define-map": "npm:babel-helper-define-map@6.9.0",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.8.0",
          "babel-helper-explode-class": "npm:babel-helper-explode-class@6.8.0"
        }
      },
      "npm:babel-helper-regex@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "lodash": "npm:lodash@4.13.1",
          "babel-types": "npm:babel-types@6.9.1"
        }
      },
      "npm:babel-helper-get-function-arity@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-types": "npm:babel-types@6.9.1"
        }
      },
      "npm:babel-plugin-transform-strict-mode@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-types": "npm:babel-types@6.9.1"
        }
      },
      "npm:babel-plugin-syntax-do-expressions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1"
        }
      },
      "npm:babel-plugin-transform-class-constructor-call@6.8.0": {
        "map": {
          "babel-template": "npm:babel-template@6.9.0",
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-plugin-syntax-class-constructor-call": "npm:babel-plugin-syntax-class-constructor-call@6.8.0"
        }
      },
      "npm:babylon@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1"
        }
      },
      "npm:babel-preset-stage-2@6.5.0": {
        "map": {
          "babel-preset-stage-3": "npm:babel-preset-stage-3@6.5.0",
          "babel-plugin-syntax-trailing-function-commas": "npm:babel-plugin-syntax-trailing-function-commas@6.8.0",
          "babel-plugin-transform-object-rest-spread": "npm:babel-plugin-transform-object-rest-spread@6.8.0"
        }
      },
      "npm:regexpu-core@1.0.0": {
        "map": {
          "regjsparser": "npm:regjsparser@0.1.5",
          "regjsgen": "npm:regjsgen@0.2.0",
          "regenerate": "npm:regenerate@1.3.0"
        }
      },
      "npm:babel-plugin-syntax-trailing-function-commas@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1"
        }
      },
      "npm:babel-plugin-syntax-export-extensions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1"
        }
      },
      "npm:babel-code-frame@6.8.0": {
        "map": {
          "js-tokens": "npm:js-tokens@1.0.3",
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "esutils": "npm:esutils@2.0.2",
          "chalk": "npm:chalk@1.1.3"
        }
      },
      "npm:babel-plugin-transform-object-rest-spread@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-plugin-syntax-object-rest-spread": "npm:babel-plugin-syntax-object-rest-spread@6.8.0"
        }
      },
      "npm:babel-register@6.9.0": {
        "map": {
          "babel-core": "npm:babel-core@6.9.1",
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "core-js": "npm:core-js@2.4.0",
          "lodash": "npm:lodash@4.13.1",
          "path-exists": "npm:path-exists@1.0.0",
          "home-or-tmp": "npm:home-or-tmp@1.0.0",
          "mkdirp": "npm:mkdirp@0.5.1",
          "source-map-support": "npm:source-map-support@0.2.10"
        }
      },
      "npm:babel-helpers@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-template": "npm:babel-template@6.9.0"
        }
      },
      "npm:babel-plugin-syntax-class-constructor-call@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1"
        }
      },
      "npm:babel-plugin-syntax-decorators@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1"
        }
      },
      "npm:babel-helper-explode-class@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-types": "npm:babel-types@6.9.1",
          "babel-helper-bindify-decorators": "npm:babel-helper-bindify-decorators@6.8.0"
        }
      },
      "npm:babel-helper-hoist-variables@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-types": "npm:babel-types@6.9.1"
        }
      },
      "npm:babel-generator@6.9.0": {
        "map": {
          "babel-messages": "npm:babel-messages@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-types": "npm:babel-types@6.9.1",
          "lodash": "npm:lodash@4.13.1",
          "source-map": "npm:source-map@0.5.6",
          "detect-indent": "npm:detect-indent@3.0.1"
        }
      },
      "npm:babel-plugin-syntax-class-properties@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1"
        }
      },
      "npm:invariant@2.2.1": {
        "map": {
          "loose-envify": "npm:loose-envify@1.2.0"
        }
      },
      "npm:babel-preset-stage-3@6.5.0": {
        "map": {
          "babel-plugin-transform-exponentiation-operator": "npm:babel-plugin-transform-exponentiation-operator@6.8.0",
          "babel-plugin-transform-async-to-generator": "npm:babel-plugin-transform-async-to-generator@6.8.0"
        }
      },
      "npm:regjsparser@0.1.5": {
        "map": {
          "jsesc": "npm:jsesc@0.5.0"
        }
      },
      "npm:babel-plugin-transform-exponentiation-operator@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-helper-builder-binary-assignment-operator-visitor": "npm:babel-helper-builder-binary-assignment-operator-visitor@6.8.0",
          "babel-plugin-syntax-exponentiation-operator": "npm:babel-plugin-syntax-exponentiation-operator@6.8.0"
        }
      },
      "npm:babel-plugin-transform-async-to-generator@6.8.0": {
        "map": {
          "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.8.0"
        }
      },
      "npm:debug@2.2.0": {
        "map": {
          "ms": "npm:ms@0.7.1"
        }
      },
      "npm:minimatch@2.0.10": {
        "map": {
          "brace-expansion": "npm:brace-expansion@1.1.4"
        }
      },
      "npm:babel-plugin-syntax-object-rest-spread@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1"
        }
      },
      "npm:source-map-support@0.2.10": {
        "map": {
          "source-map": "npm:source-map@0.1.32"
        }
      },
      "npm:babel-helper-bindify-decorators@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-types": "npm:babel-types@6.9.1"
        }
      },
      "npm:source-map@0.1.32": {
        "map": {
          "amdefine": "npm:amdefine@1.0.0"
        }
      },
      "npm:detect-indent@3.0.1": {
        "map": {
          "repeating": "npm:repeating@1.1.3",
          "get-stdin": "npm:get-stdin@4.0.1",
          "minimist": "npm:minimist@1.2.0"
        }
      },
      "npm:mkdirp@0.5.1": {
        "map": {
          "minimist": "npm:minimist@0.0.8"
        }
      },
      "npm:home-or-tmp@1.0.0": {
        "map": {
          "os-tmpdir": "npm:os-tmpdir@1.0.1",
          "user-home": "npm:user-home@1.1.1"
        }
      },
      "npm:brace-expansion@1.1.4": {
        "map": {
          "concat-map": "npm:concat-map@0.0.1",
          "balanced-match": "npm:balanced-match@0.4.1"
        }
      },
      "npm:babel-plugin-syntax-exponentiation-operator@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1"
        }
      },
      "npm:babel-helper-builder-binary-assignment-operator-visitor@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-types": "npm:babel-types@6.9.1",
          "babel-helper-explode-assignable-expression": "npm:babel-helper-explode-assignable-expression@6.8.0"
        }
      },
      "npm:chalk@1.1.3": {
        "map": {
          "ansi-styles": "npm:ansi-styles@2.2.1",
          "has-ansi": "npm:has-ansi@2.0.0",
          "supports-color": "npm:supports-color@2.0.0",
          "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
          "strip-ansi": "npm:strip-ansi@3.0.1"
        }
      },
      "npm:babel-helper-remap-async-to-generator@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-template": "npm:babel-template@6.9.0",
          "babel-types": "npm:babel-types@6.9.1",
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0"
        }
      },
      "npm:repeating@1.1.3": {
        "map": {
          "is-finite": "npm:is-finite@1.0.1"
        }
      },
      "npm:has-ansi@2.0.0": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.0.0"
        }
      },
      "npm:strip-ansi@3.0.1": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.0.0"
        }
      },
      "npm:babel-helper-explode-assignable-expression@6.8.0": {
        "map": {
          "babel-traverse": "npm:babel-traverse@6.9.0",
          "babel-runtime": "npm:babel-runtime@6.9.1",
          "babel-types": "npm:babel-types@6.9.1"
        }
      },
      "npm:is-finite@1.0.1": {
        "map": {
          "number-is-nan": "npm:number-is-nan@1.0.0"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  babelOptions: {
    "blacklist": [],
    "optional": [
      "runtime",
      "es7.decorators",
      "es7.classProperties",
      "optimisation.modules.system"
    ],
    "stage": 0
  },
  meta: {
    "app/*": {
      "format": "es6"
    },
    "core-js/library/modules/$.global.js": {
      "esmExports": false
    },
    "*.js": {
      "babelOptions": {
        "presets": [
          "es2015",
          "stage-0",
          "react"
        ]
      }
    }
  },
  map: {
    "babel": "npm:babel-core@5.8.33"
  },
  packages: {
    "react-documentation": {
      "main": "react-documentation.js"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "domain": "github:jspm/nodelibs-domain@0.2.0-alpha",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "highlight.js": "npm:highlight.js@8.9.1",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "jsx": "npm:jspm-loader-jsx@0.0.7",
    "lodash": "npm:lodash@3.10.1",
    "markdown": "npm:markdown@0.5.0",
    "module": "github:jspm/nodelibs-module@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.11",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "react": "npm:react@15.1.0",
    "react-context": "npm:react-context@0.0.2",
    "react-dom": "npm:react-dom@15.1.0",
    "reactcss": "npm:reactcss@0.4.1",
    "remarkable": "npm:remarkable@1.6.0",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha"
  },
  packages: {
    "github:jspm/nodelibs-path@0.1.0": {
      "map": {
        "path-browserify": "npm:path-browserify@0.0.0"
      }
    },
    "npm:abbrev@1.0.7": {
      "map": {}
    },
    "npm:amdefine@1.0.0": {
      "map": {}
    },
    "npm:argparse@0.1.16": {
      "map": {
        "underscore": "npm:underscore@1.7.0",
        "underscore.string": "npm:underscore.string@2.4.0"
      }
    },
    "npm:asap@2.0.4": {
      "map": {}
    },
    "npm:autolinker@0.15.3": {
      "map": {}
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "pako": "npm:pako@0.2.8",
        "readable-stream": "npm:readable-stream@2.1.4"
      }
    },
    "npm:buffer-shims@1.0.0": {
      "map": {}
    },
    "npm:core-js@1.2.6": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:core-util-is@1.0.2": {
      "map": {}
    },
    "npm:domain-browser@1.1.7": {
      "map": {}
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.13"
      }
    },
    "npm:envify@3.4.0": {
      "map": {
        "jstransform": "npm:jstransform@10.1.0",
        "through": "npm:through@2.3.8"
      }
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "map": {}
    },
    "npm:fbjs@0.8.3": {
      "map": {
        "core-js": "npm:core-js@1.2.6",
        "immutable": "npm:immutable@3.8.1",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "loose-envify": "npm:loose-envify@1.2.0",
        "object-assign": "npm:object-assign@4.1.0",
        "promise": "npm:promise@7.1.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.10"
      }
    },
    "npm:highlight.js@8.9.1": {
      "map": {}
    },
    "npm:iconv-lite@0.4.13": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:inherits@2.0.1": {
      "map": {}
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "node-fetch": "npm:node-fetch@1.5.3",
        "whatwg-fetch": "npm:whatwg-fetch@1.0.0"
      }
    },
    "npm:jstransform@10.1.0": {
      "map": {
        "base62": "npm:base62@0.1.1",
        "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
        "source-map": "npm:source-map@0.1.31"
      }
    },
    "npm:lodash@3.10.1": {
      "map": {}
    },
    "npm:loose-envify@1.2.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:markdown@0.5.0": {
      "map": {
        "nopt": "npm:nopt@2.1.2"
      }
    },
    "npm:node-fetch@1.5.3": {
      "map": {
        "encoding": "npm:encoding@0.1.12",
        "is-stream": "npm:is-stream@1.1.0"
      }
    },
    "npm:nopt@2.1.2": {
      "map": {
        "abbrev": "npm:abbrev@1.0.7"
      }
    },
    "npm:pako@0.2.8": {
      "map": {}
    },
    "npm:path-browserify@0.0.0": {
      "map": {}
    },
    "npm:process-nextick-args@1.0.7": {
      "map": {}
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.4"
      }
    },
    "npm:punycode@1.3.2": {
      "map": {}
    },
    "npm:react-context@0.0.2": {
      "map": {
        "react": "npm:react@0.13.3",
        "reactcss": "npm:reactcss@0.3.2"
      }
    },
    "npm:react-dom@15.1.0": {
      "map": {
        "react": "npm:react@15.1.0"
      }
    },
    "npm:react@0.13.3": {
      "map": {
        "envify": "npm:envify@3.4.0"
      }
    },
    "npm:react@15.1.0": {
      "map": {
        "fbjs": "npm:fbjs@0.8.3",
        "loose-envify": "npm:loose-envify@1.2.0",
        "object-assign": "npm:object-assign@4.1.0"
      }
    },
    "npm:reactcss@0.3.2": {
      "map": {
        "lodash": "npm:lodash@3.10.1",
        "merge": "npm:merge@1.2.0"
      }
    },
    "npm:reactcss@0.4.1": {
      "map": {
        "lodash": "npm:lodash@3.10.1",
        "merge": "npm:merge@1.2.0",
        "react": "npm:react@0.13.3"
      }
    },
    "npm:readable-stream@2.1.4": {
      "map": {
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:remarkable@1.6.0": {
      "map": {
        "argparse": "npm:argparse@0.1.16",
        "autolinker": "npm:autolinker@0.15.3",
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:source-map@0.1.31": {
      "map": {
        "amdefine": "npm:amdefine@1.0.0"
      }
    },
    "npm:string_decoder@0.10.31": {
      "map": {}
    },
    "npm:through@2.3.8": {
      "map": {}
    },
    "npm:ua-parser-js@0.7.10": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:util-deprecate@1.0.2": {
      "map": {}
    },
    "npm:jspm-loader-jsx@0.0.7": {
      "map": {
        "react": "npm:react@0.13.3",
        "pascal-case": "npm:pascal-case@1.1.2",
        "path": "github:jspm/nodelibs-path@0.1.0",
        "react-hot-api": "github:gaearon/react-hot-api@0.4.5"
      }
    },
    "npm:pascal-case@1.1.2": {
      "map": {
        "upper-case-first": "npm:upper-case-first@1.1.2",
        "camel-case": "npm:camel-case@1.2.2"
      }
    },
    "npm:camel-case@1.2.2": {
      "map": {
        "sentence-case": "npm:sentence-case@1.1.3",
        "upper-case": "npm:upper-case@1.1.3"
      }
    },
    "npm:upper-case-first@1.1.2": {
      "map": {
        "upper-case": "npm:upper-case@1.1.3"
      }
    },
    "npm:sentence-case@1.1.3": {
      "map": {
        "lower-case": "npm:lower-case@1.1.3"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "github:jspm/nodelibs-domain@0.2.0-alpha": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.4"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.6.0"
      }
    },
    "npm:buffer@4.6.0": {
      "map": {
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0",
        "base64-js": "npm:base64-js@1.1.2"
      }
    },
    "github:jspm/nodelibs-zlib@0.2.0-alpha": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.3.0"
      }
    },
    "npm:stream-http@2.3.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.4",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "create-hmac": "npm:create-hmac@1.1.4",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "create-hash": "npm:create-hash@1.1.2",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "create-hmac": "npm:create-hmac@1.1.4",
        "create-hash": "npm:create-hash@1.1.2",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.3",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "elliptic": "npm:elliptic@6.2.7"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.3",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.2",
        "sha.js": "npm:sha.js@2.4.5",
        "ripemd160": "npm:ripemd160@1.0.1"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.3",
        "miller-rabin": "npm:miller-rabin@4.0.0"
      }
    },
    "npm:pbkdf2@3.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "elliptic": "npm:elliptic@6.2.7"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "asn1.js": "npm:asn1.js@4.6.0"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.2",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "cipher-base": "npm:cipher-base@1.0.2",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:elliptic@6.2.7": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "bn.js": "npm:bn.js@4.11.3",
        "brorand": "npm:brorand@1.0.5",
        "hash.js": "npm:hash.js@1.0.3"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:asn1.js@4.6.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "bn.js": "npm:bn.js@4.11.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    }
  }
});
