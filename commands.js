const db = require('./db')

function list () {
  db.getAll()
    .then(listTodos)
    .catch(logError)
    .finally(db.close)
}

function listTodos (todos) {
  todos.forEach(todo => {
    console.info(`${todo.id}: ${todo.name}`)
  })
}

function logError (err) {
  console.error('Uh oh!', err.message)
}

module.exports = {
  list,
  listTodos,
  logError
}
