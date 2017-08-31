/**
 * Created by walterfigueiredo on 8/30/17.
 */
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
    if (err){
        return console.log('Unable to connect to MongoDB Server', err);
    }
        console.log('Connected to MongoDB Server');

    // db.collection('User').find({
    //     _id: new ObjectID ('59a6fa83d6f1be813b38c992')
    // }).toArray().then((docs) => {
    //     console.log('User');
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) =>{
    //      console.log('Unable to fetch User');
    // });
    // db.collection('User').find().count().then((count) => {
    //     console.log(`User count: ${count}`);
    // }, (err) =>{
    //     console.log('Unable to fetch User');
    // });
    db.collection('User').find({
        Name:('yeraldin')
    }).toArray().then((docs) => {
        console.log('User');
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) =>{
        console.log('Unable to fetch User');
    });
});
