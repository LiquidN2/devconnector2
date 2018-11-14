const { ObjectID } = require('mongodb');

// Load DB models
const Message = require('./../../models/Message');

// Load input validator
const validateMessageInput = require('./../../validation/message');

const messageCreate = (req, res) => {
  // validate post input
  const { errors, isValid } = validateMessageInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  // extract fields from post req body
  const newMessageFields = {};
  newMessageFields.user = req.user._id;
  if (req.body.text) newMessageFields.text = req.body.text.trim();
  if (req.body.roomId) newMessageFields.roomId = req.body.roomId.trim();
  // newMessageFields.roomId = new ObjectID();

  // create post
  const newMessage = new Message(newMessageFields);

  newMessage.save().then(message => {
    if (!message) {
      errors.message = 'Unable to create new message';
      return res.status(400).json(errors);
    }

    return res.status(201).json(message);
  }).catch(err => res.status(400).send());
};

const messageByRoomIdGet = (req, res) => {
  const errors = {};
  const userId = req.user._id;
  const { roomId } = req.params;

  Message.find({ roomId })
    .then(messages => {
      res.json(messages);
    })
    .catch(err => res.status(400).send());
};

module.exports = { 
  messageCreate,
  messageByRoomIdGet 
};