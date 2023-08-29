const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  createReaction,
} = require('../../controllers/thoughtController');

// /api/Thought
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:ThoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// /api/thoughts/ThoughttId/thoughts
router.route('/:thoughtId/thought').post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reacationId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteThought);

module.exports = router;
