Hybrid HCard React application

Language: TypeScript. Most of it is 95% ES2018 JavaScript, apart from the type declarations.
Frameworks: React, Express
Databases: MongoDB, using my own `mongo-container` (https://github.com/insprintorob/mongo-container) npm package

Features
----
- Hot reload support for the server. Changes made to the codebase will automatically be made available to the browser.
- Cookie based session
- Config with environment specific overrides (e.g. for non production environments such as uat/staging/local development)
- Built in web server

Architectures and design patterns
----
- Service oriented architecture
- Single purpose design
- Functional programming
- SOLID
- TDD

Prerequisites
----
- Make sure you have a local mongodb server running at 127.0.0.1 port 27017. This is the only non node dependency.
- You'll need to install the following globally to build the code, run the built in webserver and run the unit tests: `npm install -g typescript nodemon jest`

Installation
----
Clone the repo, enter the folder in your operating systems terminal then run
`npm install`

Once this finishes, run
`npm run build` to build the JavaScript

Then start the built in webserver by running
`npm run serve`

Go to http://localhost:8080 in chrome. If you have JavaScript enabled in chrome you'll be redirected to the SPA app at http://localhost:8080/spa.html
Otherwise you'll see the SSR version of the app.

Running the tests
----
The unit tests are run using jest. To run them run `npm run test`