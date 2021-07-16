import * as todoDb from '../data/todo-db.js'


export {
  index,
  show,
  newTodo as new,
  create,
  deleteTodo as delete
}

function deleteTodo(req, res) {
  todoDb.findByIdAndDelete(req.params.id, function (error, todo) {
    res.redirect('/todos')
  })
}

function create(req, res) {
  todoDb.create(req.body, function(error, todo) {
    res.redirect('/todos')
  })
}

function newTodo(req, res) {
  res.render('todos/new')
}

function index(req, res) {
  todoDb.find({}, function(error, todos) {
    res.render('todos/index', {
      todos,
      error,
      time: req.time
    })
  })
}

function show(req, res) {
  todoDb.findById(req.params.id, function(error, todo) {
    res.render('todos/show', {
      todo,
      error
    })
  })
}