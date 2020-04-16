const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {

};

function getShoppingList(id) {

};

function getInstructions(id) {

};


// In addition to the `migrations` and `seeding` scripts, write a data access file that **exports** an object with the following functions:

// - `getRecipes()`: should return a list of all recipes in the database.
// - `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
// - `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe

// Organize and name your files anyway you see fit.


// function find() {
//     return db('schemes');  //
// }

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