//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Andare al mare'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Andare al mare'}).then((result) => {
  //   console.log(result);
  // });

  //findOneandDelete
  db.collection('Todos').findOneAndDelete({complete: false}).then((result) => {
    console.log(result);
  });

  // db.collection('Todos').find({
  //   _id: new ObjectID('5ad6039a91684169f5d51887')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // });



  //db.close();
})
