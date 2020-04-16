
exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.text('recipe_name', 255)
                .unique()
                .notNullable()
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.text('ingredient_name', 128)
                .unique()
                .notNullable()
        })


        .createTable('recipe_ingredients_instructions', tbl => {
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipes.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')

            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('ingredients.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')

            tbl.float('quantity')
                .notNullable()

            tbl.integer('recipe_steps')
                .notNullable()

            tbl.text('description', 256)


            // tbl.primary(['recipe_id', 'ingredient_id', 'quantity', 'recipe_steps']) 
            // only if we want unique instances of these combos
        })

    // .createTable('steps', tbl => {
    //     tbl.integer('recipe_id')
    //         .unsigned()
    //         .notNullable()
    //         .references('recipes.id')
    //         .onUpdate('CASCADE')
    //         .onDelete('CASCADE')

    //     tbl.integer('recipe_steps')
    //         .unsigned()
    //         .notNullable()
    //         .references('id')
    //         .inTable('recipe_ingredients')
    //         .onUpdate('CASCADE')
    //         .onDelete('CASCADE')

    //     tbl.text('description', 256)
    // })

};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('recipe_ingredients_instructions')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')

};


//seeds need to follow same sequence of table creation
// foreign key constraints in knexfile

// pool: {
//     afterCreate: (conn, done) => {
//         conn.run('PRAGMA foreign_keys = ON', done);
//     }
// }