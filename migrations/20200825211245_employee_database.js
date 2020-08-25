exports.up = function(knex) {
    return knex.schema.createTable('employee_database', table => {
        table.integer('id').primary()
        table.string('name')
        table.integer('favourite_number')
    })
  
};

exports.down = function(knex) {
    return knex.schmea.dropTable('employee_database')
};