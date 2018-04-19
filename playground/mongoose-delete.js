const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

Todo.remove({}).then((result) => {
  console.log(result);
});

//todo.findOneAndRemove

Todo.findByIdAndRemove('5ad895f791684169f5d54640').then((todo) => {
  console.doc(todo);
})
