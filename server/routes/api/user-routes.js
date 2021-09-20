const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  getAllUser,
  login
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router
  .route('/')
  .get(getAllUser)
  .post(createUser)
  .put(authMiddleware, createUser);

router
  .route('/login')
  .post(login);

router
  .route('/me')
  .get(authMiddleware, getSingleUser);

module.exports = router;