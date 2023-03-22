const {MongoClient} = require ('mongodb');

let dbconnect;

module.exports = {
    connectDb: (callback) => {

        MongoClient.connect('')
        .then((client) => {
            dbconnect = client.db();
            return callback();
        })
        .catch((err) => {
            console.log(err);
            return callback();
        })

    },

    requestDb: () => {
        
        return dbconnect;
        
    }
}