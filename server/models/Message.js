const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  from: {
    type: Schema.Types.ObjectId,
    ref: 'User' // works like joining tables
  },

  to: {
    type: Schema.Types.ObjectId,
    ref: 'User' // works like joining tables
  },

  message: {
    type: String
  },

  date: {
    type: Date
  }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Profile;