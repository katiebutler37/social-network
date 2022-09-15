const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
  } = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/thoughts
router
  .route('/')
  .get(getAllThoughts)

// Set up POST at /api/thoughts/:userId
router
  .route('/:userId')
  .post(createThought);  

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// Set up POST and DELETE at /api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')  
  .post(addReaction)

// Set up POST and DELETE at /api/thoughts/:thoughtId/reactions/:reactionId  
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction)
  


module.exports = router;