/**
 * Created by walterfigueiredo on 8/31/17.
 */
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server', err);
    }
    console.log('Connected to MongoDB Server');

    // db.collection('User').deleteMany({Location:'CDMX'}).then((result) => {
    //     console.log(result);
    // })
    // db.collection('User').deleteOne({age:30}).then((result) => {
    //     console.log(result);
    // })
    // db.collection('Todos').findOneAndDelete({name: "yeraldin"}).then((result) => {
    //     console.log(result);
    // })
    db.collection('User').findOneAndDelete({_id: new ObjectID("59a9e6ae40997f5c0c0c12b9")}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    })

});
