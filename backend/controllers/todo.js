const Task = require('../models/Task');

exports.postAddtask = (req, res, next) => {
  console.log(req.body);
  const name = req.body.name;
  const date = req.body.date;
  const description = req.body.description;
  const task = new Task({
    name: name,
    date: date,
    description: description,
  });
  task
    .save()
    .then((result) => {
      console.log('Created Task');
      res.redirect('http://localhost:3000');
    })
    .catch((err) => {
      console.log(err);
      console.log('error');
    });
};

exports.getTasks = (req, res, next) => {
  Task.find()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteTask = (req, res, next) => {
  const taskId = req.params.id;
  Task.findByIdAndRemove(taskId)
    .then(console.log('Task Deleted'))
    .catch((err) => {
      console.log(err);
    });
  res.redirect('http://localhost:3000');
};

exports.editTask = (req, res, next) => {
  const taskId = req.body.taskId;
  const updatedName = req.body.name;
  const updatedDate = req.body.date;
  const updatedDesc = req.body.description;
  Task.findById(taskId)
    .then((task) => {
      task.name = updatedName;
      task.date = updatedDate;
      task.description = updatedDesc;
      return task.save();
    })
    .then((result) => {
      console.log('EDITED PRODUCT!');
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
};
