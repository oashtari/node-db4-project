const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes');
};

function getShoppingList(id) {
    return db('recipes as r')
        .join('recipe_ingredients_instructions as rgi', 'r.id', '=', 'rgi.recipe_id')
        .join('ingredients as i', 'i.id', '=', 'rgi.ingredient_id')
        .select('r.recipe_name', 'i.ingredient_name', 'rgi.quantity')
        .where({ 'r.id': id })
};

function getInstructions(id) {
    return db('recipes as r')
        .join('recipe_ingredients_instructions as rgi', 'r.id', '=', 'rgi.recipe_id')
        .select('r.recipe_name', 'rgi.description', 'rgi.recipe_steps')
        .where({ 'r.id': id })
};



// function findById(id) {
//     return db('schemes')
//         .where({ id })
//         .first()
// }

// function findSteps(id) {
//     return db('schemes')
//         .join('steps', 'schemes.id', '=', 'steps.scheme_id')
//         .select('schemes.scheme_name', 'steps.step_number', 'steps.instructions')
//         .where({ 'schemes.id': id })
//         .orderBy(['scheme_name', { column: 'step_number', order: 'asc' }])
// }

// function add(scheme) {
//     return db('schemes')
//         .insert(scheme, 'id')
//         .then(id => {
//             return findById(id[0])
//         })
// }

// function update(changes, id) {
//     return db('schemes')
//         .where({ id })
//         .update(changes, 'id')
//         .then(() => { // if you want to return the item, this is not needed
//             return findById(id)
//         })
// }

// function remove(id) {
//     return db('schemes')
//         .where({ id })
//         .del();
// }