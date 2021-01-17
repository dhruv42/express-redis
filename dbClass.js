class Database {
    constructor(){
        this.connection = require('redis').createClient({
            host:process.env.DB_HOST,
            port:process.env.DB_PORT,
            password:process.env.DB_PASSWORD
        })
        console.log("***** Redis Connected *****");
    }
    getConnection = () =>  this.connection;
}
module.exports = new Database();
