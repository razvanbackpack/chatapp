var mysql = require ("mysql");



module.exports = class DatabaseManager {
    connection = false;

    constructor() {
        this.#initiate();
    }

    #initiate () {
        if(this.connection != false) return;

        this.connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "", 
            database: "chatapp",
        })

        this.connection.connect(() => {
            console.log('DATABASE CONNECTED!');
        });

    }

    getUsers() {
        let query = "SELECT * FROM users;";
        return new Promise((resolve, reject) => {
            this.connection.query(query, [], function (err, results) {
                if(err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
};
