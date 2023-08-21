const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  addAssignment,
  removeAssignment,
} = require('../../controllers/ThoughtController');

// /api/Thought
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:ThoughtId
router.route('/:ThoughtId').get(getSingleThought).delete(deleteThought);

// /api/thoughts/ThoughttId/assignments
router.route('/:ThoughtId/assignments').post(addAssignment);

// /api/thoughts/:studentId/assignments/:assignmentId
router.route('/:ThoughtId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
