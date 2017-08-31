/**
 * Created by walterfigueiredo on 8/30/17.
 */
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, objectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log("Unable to connect to the MongoDB server");
    }
    console.log("Connected to the MongoDB Server");

    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed: false
    // }, (err, result) =>{
    //     if(err){
    //         return console.log('Unable to insert Todo', err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // });
    db.collection('User').insertOne({
        Name:'Walter',
        Age: 28,
        Location: 'CDMX'
    }, (err, result) =>{
        if (err){
            return console.log('Unable to insert User', err)
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2))
    });

    db.close();
});

