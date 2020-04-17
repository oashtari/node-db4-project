const express = require('express');

const Recipes = require('./recipe-model');

const router = express.Router();


router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.json(recipes);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get recipes' });
        });
});

router.get('/:id/list', (req, res) => {

    const { id } = req.params;

    Recipes.getShoppingList(id)
        .then(list => {
            if (list) {
                res.status(200).json(list)
            } else {
                res.status(404).json({ message: 'Could not find list for given recipe' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get any shopping list' });
        });
})

router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;

    Recipes.getInstructions(id)
        .then(steps => {
            if (steps) {
                res.status(200).json(steps)
            } else {
                res.status(404).json({ message: 'Could not find instructions for this recipe' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get any the instructions of any sort' });
        });
})

// router.get('/:id/shoppinglist', (req, res) => {
//     const id = req.params.id;

//     recipeDB.getShoppingList(id)
//         .then(shoppingList => {
//             if (shoppingList) {
//                 res.status(200).json(shoppingList);
//             } else {
//                 res.status(404).json({ message: "No ingredients found" });
//             }
//         })
//         .catch(error => {
//             res.status(500).json({ message: "Error getting ingredients", error: error });
//         })
// });

module.exports = router;




// Build the following endpoints. Write any additional data access helpers as needed.

// - `GET /api/recipes/`: all recipes (without details about ingredients or steps)
// - `GET /api/recipes/:id/shoppingList`: a list of ingredients and quantites for a single recipe
// - `GET /api/recipes/:id/instructions`: a correctly ordered list of how to prepare a single recipe
// - `GET /api/ingredients/:id/recipes`: all recipes in the system that utilize a single ingredient 


// router.get('/', (req, res) => {
//   Schemes.find()
//     .then(schemes => {
//       res.json(schemes);
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to get schemes' });
//     });
// });

// router.get('/:id', (req, res) => {
//   const { id } = req.params;

//   Schemes.findById(id)
//     .then(scheme => {
//       if (scheme) {
//         res.json(scheme);
//       } else {
//         res.status(404).json({ message: 'Could not find scheme with given id.' })
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to get schemes' });
//     });
// });

// router.get('/:id/steps', (req, res) => {
//   const { id } = req.params;

//   Schemes.findSteps(id)
//     .then(steps => {
//       if (steps.length) {
//         res.json(steps);
//       } else {
//         res.status(404).json({ message: 'Could not find steps for given scheme' })
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to get steps' });
//     });
// });

// router.post('/', (req, res) => {
//   const schemeData = req.body;

//   Schemes.add(schemeData)
//     .then(scheme => {
//       console.log(scheme)
//       res.status(201).json(scheme);
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to create new scheme' });
//     });
// });

// router.post('/:id/steps', (req, res) => {
//   const stepData = req.body;
//   const { id } = req.params;

//   Schemes.findById(id)
//     .then(scheme => {
//       if (scheme) {
//         Schemes.addStep(stepData, id)
//           .then(step => {
//             res.status(201).json(step);
//           })
//       } else {
//         res.status(404).json({ message: 'Could not find scheme with given id.' })
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to create new step' });
//     });
// });

// router.put('/:id', (req, res) => {
//   const { id } = req.params;
//   const changes = req.body;

//   Schemes.findById(id)
//     .then(scheme => {
//       if (scheme) {
//         Schemes.update(changes, id)
//           .then(updatedScheme => {
//             res.json(updatedScheme);
//           });
//       } else {
//         res.status(404).json({ message: 'Could not find scheme with given id' });
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to update scheme' });
//     });
// });

// router.delete('/:id', (req, res) => {
//   const { id } = req.params;

//   Schemes.remove(id)
//     .then(deleted => {
//       if (deleted) {
//         res.json({ removed: deleted });
//       } else {
//         res.status(404).json({ message: 'Could not find scheme with given id' });
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to delete scheme' });
//     });
// });

// module.exports = router;