const passport = require('passport');
const express = require('express');

const router = express.Router();

// @route   GET api/messages/test
// @desc    Test messages route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: "Message works" }));

module.exports = router;