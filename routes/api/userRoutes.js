const router = require('express').Router();
const {
  getUsers,
  getSinglUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/UserController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router
  .route('/:UserId')
  .get(getSinglUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
