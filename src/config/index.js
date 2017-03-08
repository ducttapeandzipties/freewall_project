// config/index.js

//express and mongo config



const config = {
  appName: 'freewall app',  // sets name of express app
  port: 8080,               // sets express app port to 8080
  db: {
    host: 'localhost',      // mongo config
    dbName: 'fsjs',
}
}

module.exports = config;
