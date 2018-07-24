# ERS web app
This is a web app making full use of the [ERS API](https://github.com/EuropeanRespiratorySociety/api-ers)
it provides:
* Search UI
* News
* Profile
* Interests
* ...


## Editor config
In order to have the best experience while developping install:

* ESLint
* Vue2 Snippets
* Vuetify-vscode

Set also the following editor configuration:

```
    "[javascript]": {
        "editor.tabSize": 2
    },
    "[vue]": {
        "editor.tabSize": 2
    },
    "eslint.validate": [
        "javascriptreact",
        {
            "language": "javascript",
            "autoFix": true
        },
        {
            "language": "vue",
            "autoFix": true
        },
        {
            "language": "vue-html",
            "autoFix": true
        }
    ],
    "editor.formatOnSave": true,
    "eslint.autoFixOnSave": true
```

This will ensure that there is no surprise with code linting

If we decide to move to typescript, we will need the Vetur extension


> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# Production procedure
1. Commit and push code to github

## Connect to Infomaniak and setup the environment
2. `ssh` to Infomaniak
3. go to the Search UI folder: `cd search`

## Deploy new code
6. Pull changes from github master: `git pull origin master`
7. Build website: `npm run build`
8. Check that everything works ;)

