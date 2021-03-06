const config = require('./knexfile').development
const database = require('knex')(config)

function getAll (db = database) {
  return db('employee_database').select()
}

function close (db = database) {
  db.destroy()
}

module.exports = {
  getAll,
  close
}
