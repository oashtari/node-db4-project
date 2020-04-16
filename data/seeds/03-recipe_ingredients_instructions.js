
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients_instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients_instructions').insert([
        { recipe_id: 1, ingredient_id: 5, quantity: 2, recipe_steps: 1, description: 'toast burger buns' },
        { recipe_id: 1, ingredient_id: 1, quantity: .5, recipe_steps: 2, description: 'grill beef patty, put on buns' },
        { recipe_id: 1, ingredient_id: 4, quantity: 3, recipe_steps: 3, description: 'apply sauce' },
        { recipe_id: 1, ingredient_id: 6, quantity: 1, recipe_steps: 4, description: 'add onions' },
        { recipe_id: 2, ingredient_id: 5, quantity: 1.5, recipe_steps: 1, description: 'make dough, heat up in oven' },
        { recipe_id: 2, ingredient_id: 4, quantity: 5, recipe_steps: 2, description: 'apply sauce' },
        { recipe_id: 2, ingredient_id: 3, quantity: 8, recipe_steps: 3, description: 'add ham' },
        { recipe_id: 2, ingredient_id: 6, quantity: 2, recipe_steps: 4, description: 'add onions' },
        { recipe_id: 3, ingredient_id: 5, quantity: 2, recipe_steps: 1, description: 'toast bread' },
        { recipe_id: 3, ingredient_id: 3, quantity: 3, recipe_steps: 2, description: 'layer on ham' },
        { recipe_id: 3, ingredient_id: 2, quantity: 3, recipe_steps: 3, description: 'add a tomatoe slice' },
        { recipe_id: 3, ingredient_id: 6, quantity: 100, recipe_steps: 4, description: 'add too much onion' },
      ]);
    });
};
