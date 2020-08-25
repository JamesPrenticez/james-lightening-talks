exports.seed = function(knex) {
  return knex('unordered_database').del()
    .then(function () {
      return knex('unordered_database').insert([
        {id: 5, name: 'Jo$eph', favourite_number: 1},
        {id: 3, name: 'Dougal', favourite_number: 3},
        {id: 1, name: 'JV', favourite_number: 5},
        {id: 4, name: 'Edgars', favourite_number: 2},
        {id: 2, name: 'Lache', favourite_number: 4}
      ]);
    });
};
