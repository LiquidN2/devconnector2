const passport = require('passport');
const express = require('express');

const router = express.Router();

const connectionController = require('./../controllers/connectionController');

// @route   GET api/connections/test
// @desc    Test connections route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: "Connections works" }));

// @route   GET api/connections
// @desc    add new connection for current user
// @access  Private
router.get(
  '/', 
  passport.authenticate('jwt', { session: false }),
  connectionController.connectionGet
);

// @route   POST api/connections
// @desc    request new connection for current user
// @access  Private
router.post(
  '/', 
  passport.authenticate('jwt', { session: false }),
  connectionController.connectionAdd
);

// @route   DELETE api/connections
// @desc    remove existing connection for current user
// @access  Private
router.delete(
  '/', 
  passport.authenticate('jwt', { session: false }),
  connectionController.conenctionRemove
);

// @route   PATCH api/connections/approve
// @desc    approve connection request
// @access  Private
router.patch(
  '/approve', 
  passport.authenticate('jwt', { session: false }),
  connectionController.connectionApprove
);

module.exports = router;