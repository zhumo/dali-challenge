# dali-challenge

> DALI application for developer level II by Mo Zhu

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# Live Site
Live on Heroku: http://fast-waters-66932.herokuapp.com/

Please make sure you go to the http site, not the https site. See below for more details.

# Why not Github Pages?
Content could not be served on Github Pages because the Mappy API is served over HTTP but Github requires that I serve it over HTTPS if I use the default domain of zhumo.github.io/etc/etc. I could turn off the "Enforce HTTPS" option only if I buy a custom domain.

Instead, I chose to deploy on Heroku. Even then, Heroku prefers HTTPS, but at least it lets you visit the http version of any site. This means that you must be sure to go to the http site, not the https site.
