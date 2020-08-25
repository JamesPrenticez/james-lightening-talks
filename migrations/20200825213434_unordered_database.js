exports.up = function(knex) {
    return knex.schema.createTable('unordered_database', table => {
        table.integer('id')
        table.string('name')
        table.integer('favourite_number').primary()
    })
  
};

exports.down = function(knex) {
    return knex.schmea.dropTable('unordered_database')
};

//THE ONLY DIFFERENCE IS PRIMARY KEY IS HAS MOVED!