/**
 * Created by walterfigueiredo on 9/1/17.
 */
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server', err);
    }
    console.log('Connected to MongoDB Server');
    db.collection('User').findOneAndUpdate({
        _id: new ObjectID('59a9e6d340997f5c0c0c12d4')
    },{
        $set:{
            name:'walter',
            completed: true
        },
        $inc:{
            age:-1
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    })

});
