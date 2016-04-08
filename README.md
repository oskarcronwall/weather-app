WeatherApp
-------------

Search for cities in Sweden and display 10-day weather forecast.

The application is built with [AngularJS](http://angularjs.org/), backend with [Node.js](http://nodejs.org/)

## Getting Started

To get you started you can simply clone the WeatherApp repository and install the dependencies:

### Clone WeatherApp

Clone the WeatherApp repository:

```
git clone https://github.com/oskarcronwall/weather-app
cd weather-app
```

### Install Dependencies



The [npm](https://www.npmjs.com/) package is preconfigured to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `bower_components` - contains the angular framework files

### Run the Application

The project is preconfigured with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:3000`.

### End to end testing

The WeatherApp comes with end-to-end tests, written in [Jasmine](http://jasmine.github.io/). These tests
are run with the [Protractor](http://angular.github.io/protractor/#/) End-to-End test runner.  It uses native events and has
special features for Angular applications.

* the configuration is found at `app/e2e-tests/conf.js`
* the end-to-end tests are found in `app/e2e-tests/search-spec.js`

Protractor simulates interaction with our web app and verifies that the application responds
correctly. Therefore, our web server needs to be serving up the application, so that Protractor
can interact with it.

```
npm start
```

In addition, since Protractor is built upon WebDriver we need to install this.  The WeatherApp
project comes with a predefined script to do this:

```
npm run update-webdriver
```

This will download and install the latest version of the stand-alone WebDriver tool.

Once you have ensured that the development web server hosting our application is up and running
and WebDriver is updated, you can run the end-to-end tests using the supplied npm script:

```
npm run protractor
```

This script will execute the end-to-end tests against the application being hosted on the
development server.
