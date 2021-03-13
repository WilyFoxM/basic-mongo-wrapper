const MongoClient = require('mongodb').MongoClient;

class Interface {
    // Class constructor
    constructor(url, dbname) {
        this.url = url;
        this.dbname = dbname;
    }

    // Find method
    find(collectionname, params = '') {
        let promise = new Promise((resolve, reject) => {
            MongoClient.connect(this.url, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
                if(err) {
                    return console.log(err);
                }
                this.db = client.db(this.dbname);
                this.collection = this.db.collection(collectionname);
                // Getting data
                this.collection.find(params).toArray((err, result) => {
                    if(err) {
                        reject(err);
                        return console.log(err);
                    }
                    resolve(result);
                    client.close();
                });
            });
        });

        // Returning result data
        return promise.then(resolve => {
            return resolve;
        });
    }

    // FindOne method
    findOne(collectionname, params = '') {
        let promise = new Promise((resolve, reject) => {
            MongoClient.connect(this.url, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
                if(err) {
                    reject(err);
                    return console.log(err);
                }
                this.db = client.db(this.dbname);
                this.collection = this.db.collection(collectionname);
                // Getting data
                this.collection.findOne(params, (err, result) => {
                    resolve(result);
                    client.close();
                });
            });
        })

        // Returning result data
        return promise.then(result => {
            return result;
        })
    }

    // FindOneAndUpdate method
    findOneAndUpdate(collectionname, paramsfind, paramsupdate) {
        let promise = new Promise((resolve, reject) => {
            MongoClient.connect(this.url, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
                if(err) {
                    reject(err);
                    return console.log(err);
                }
                this.db = client.db(this.dbname);
                this.collection = this.db.collection(collectionname);
                // Updating data
                this.collection.findOneAndUpdate(paramsfind, { $set: paramsupdate }, async (err, result) => {
                    if(err) {
                        return;
                    }
                    resolve(result);
                    client.close();
                });
            });
        });
        
        // Returning result
        return promise.then(result => {
            return result;
        });
    }

    // UpdateOne method
    updateOne(collectionname, paramsfind, paramsupdate) {
        let promise = new Promise((resolve, reject) => {
            MongoClient.connect(this.url, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
                if(err) {
                    reject(err);
                    return console.log(err);
                }
                this.db = client.db(this.dbname);
                this.collection = this.db.collection(collectionname);
                // Updating data
                this.collection.updateOne(paramsfind, { $set: paramsupdate}, async (err, result) => {
                    if(err) {
                        return;
                    }
                    resolve(result);
                    client.close();
                });
            });
        });
        
        // Returning result
        return promise.then(result => {
            return result;
        });
    }

    // UpdateMany method
    updateMany(collectionname, paramsfind, paramsupdate) {
        let promise = new Promise((resolve, reject) => {
            MongoClient.connect(this.url, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
                if(err) {
                    reject(err);
                    return console.log(err);
                }
                this.db = client.db(this.dbname);
                this.collection = this.db.collection(collectionname);
                // Updating data
                this.collection.updateMany(paramsfind, { $set: paramsupdate}, async (err, result) => {
                    if(err) {
                        return;
                    }
                    resolve(result);
                    client.close();
                });
            });
        });
        
        // Returning result
        return promise.then(result => {
            return result;
        });
    }

    // InsertOne method
    insertOne(collectionname, data) {
        let promise = new Promise((resolve, reject) => {
            MongoClient.connect(this.url, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
                if(err) {
                    reject(err);
                    return console.log(err);
                }
                this.db = client.db(this.dbname);
                this.collection = this.db.collection(collectionname);
                // Inserting data
                this.collection.insertOne(data, async (err, result) => {
                    if(err) {
                        return;
                    }
                    resolve(result);
                    client.close();
                });
            });
        });
        
        // Returning result
        return promise.then(result => {
            return result;
        });
    }

    // InsertMany method
    insertMany(collectionname, data) {
        let promise = new Promise((resolve, reject) => {
            MongoClient.connect(this.url, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
                if(err) {
                    reject(err);
                    return console.log(err);
                }
                this.db = client.db(this.dbname);
                this.collection = this.db.collection(collectionname);
                // Inserting data
                this.collection.insertMany(data, async (err, result) => {
                    if(err) {
                        return;
                    }
                    resolve(result);
                    client.close();
                });
            });
        });
        
        // Returning result
        return promise.then(result => {
            return result;
        });
    }

    // DeleteOne method
    deleteOne(collectionname, params = '') {
        let promise = new Promise((resolve, reject) => {
            MongoClient.connect(this.url, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
                if(err) {
                    reject(err);
                    return console.log(err);
                }
                this.db = client.db(this.dbname);
                this.collection = this.db.collection(collectionname);
                // Deliting data
                this.collection.deleteOne(params, async (err, result) => {
                    if(err) {
                        return;
                    }
                    resolve(result);
                    client.close();
                });
            });
        });
        
        // Returning result
        return promise.then(result => {
            return result;
        });
    }

    // DeleteMany method
    deleteMany(collectionname, params = '') {
        let promise = new Promise((resolve, reject) => {
            MongoClient.connect(this.url, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
                if(err) {
                    reject(err);
                    return console.log(err);
                }
                this.db = client.db(this.dbname);
                this.collection = this.db.collection(collectionname);
                // Deliting data
                this.collection.deleteMany(params, async (err, result) => {
                    if(err) {
                        return;
                    }
                    resolve(result);
                    client.close();
                });
            });
        });
        
        // Returning result
        return promise.then(result => {
            return result;
        });
    }

    // Drop method
    drop(collectionname) {
        let promise = new Promise((resolve, reject) => {
            MongoClient.connect(this.url, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
                if(err) {
                    reject(err);
                    return console.log(err);
                }
                this.db = client.db(this.dbname);
                this.collection = this.db.collection(collectionname);
                // Drop table
                this.collection.drop(async (err, result) => {
                    if(err) {
                        return;
                    }
                    resolve(result);
                    client.close();
                });
            });
        });
        
        // Returning result
        return promise.then(result => {
            return result;
        });
    }

    // CreateCollection method
    createCollection(collectionname, data = '') {
        let promise = new Promise((resolve, reject) => {
            MongoClient.connect(this.url, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
                if(err) {
                    reject(err);
                    return console.log(err);
                }
                this.db = client.db(this.dbname);
                this.db.createCollection(collectionname, data, async (err, result) => {
                    if(err) {
                        return;
                    }
                    resolve(result);
                    client.close();
                });
            });
        });
        
        // Returning result
        return promise.then(result => {
            return result;
        });
    }

    // GetCollectionNames method
    getCollectionNames() {
        let promise = new Promise((resolve, reject) => {
            MongoClient.connect(this.url, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
                if(err) {
                    reject(err);
                    return console.log(err);
                }
                this.db = client.db(this.dbname);
                // Getting collection names
                this.db.listCollections({  }, { nameOnly: true }).toArray().then(result => {
                    if(err) {
                        return;
                    }
                    resolve(result);
                    client.close();
                });
            });
        });
        
        // Returning result
        return promise.then(result => {
            return result;
        });
    }

    // GetName method
    getName() {
        let promise = new Promise((resolve, reject) => {
            MongoClient.connect(this.url, { useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
                if(err) {
                    reject(err);
                    return console.log(err);
                }
                this.db = client.db(this.dbname);
                // Getting db name
                resolve(this.db.databaseName);
                client.close();
                return;
            });
        });
        
        // Returning result
        return promise.then(result => {
            return result;
        });
    }
}
module.exports = Interface;