const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const connectionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  connections: [{
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },

    connected: {
      type: Boolean,
      default: false
    },

    selfInitiated: {
      type: Boolean
    }
  }]
});

const Connection = mongoose.model('Connection', connectionSchema);

module.exports = Connection;