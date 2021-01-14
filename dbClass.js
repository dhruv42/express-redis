const config = require('./config/config.json');

class Database {
    constructor(){
        this.connection = require('redis').createClient(config.dbUrl)
        console.log("***** Redis Connected *****");
    }
    getConnection = () =>  this.connection;
}
module.exports = new Database();
