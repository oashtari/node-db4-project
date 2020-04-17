
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, ingredient_name: 'beef' },
        { id: 2, ingredient_name: 'tomatoe' },
        { id: 3, ingredient_name: 'ham' },
        { id: 4, ingredient_name: 'sauce' },
        { id: 5, ingredient_name: 'bread' },
        { id: 6, ingredient_name: 'onion' }
      ]);
    });
};
