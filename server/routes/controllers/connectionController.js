// Load model
const Connection = require('./../../models/Connection');

// Load validator
const validateConnectionRequest = require('./../../validation/connection');

const connectionAdd = (req, res) => {
  const { errors, isValid } = validateConnectionRequest(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const userId = req.user._id;
  const connectToUserId = req.body.userId;

  const requesterPromise = new Promise((resolve, reject) => {
    Connection.findOne({ user: userId })
      .then(connection => {
        if (connection) {
          // if connection exist, check if req.body.userId exists in connections
          return Connection.findOne({
            user: userId,
            "connections.user": connectToUserId
          }).then(isConnected => {
            // if connected, send notifcation message
            if (isConnected) {
              resolve({ msg: "already connected" });
              // return Promise.reject();
            } else {
              // if not, add userId to connections
              const conditions = { user: userId };
              const update = {
                $push: {
                  connections: {
                    user: connectToUserId,
                    selfInitiated: true
                  }
                }
              };
              const options = { new: true };

              return Connection.findOneAndUpdate(conditions, update, options);
            }
          }).catch(err => reject(err));
        } else {
          // create connection
          const connectionFields = {
            user: userId,
            connections: [{
              user: connectToUserId,
              selfInitiated: true
            }]
          };

          const newConnection = new Connection(connectionFields);
          return newConnection.save();
        }
      })
      .then(updatedConnection => {
        resolve(updatedConnection);
      })
      .catch(err => reject(err));
  });

  const receiverPromise = new Promise((resolve, reject) => {
    Connection.findOne({ user: connectToUserId })
      .then(connection => {
        if (connection) {
          // if connection exist, check if req.body.userId exists in connections
          return Connection.findOne({
            user: connectToUserId,
            "connections.user": userId
          }).then(isConnected => {
            // if connected, send notifcation message
            if (isConnected) {
              resolve({ msg: "already connected" });
              // return Promise.reject();
            } else {
              // if not, add userId to connections
              const conditions = { user: connectToUserId };
              const update = {
                $push: {
                  connections: {
                    user: userId,
                    selfInitiated: false
                  }
                }
              };
              const options = { new: true };

              return Connection.findOneAndUpdate(conditions, update, options);
            }
          }).catch(err => reject(err));
        } else {
          // create connection
          const connectionFields = {
            user: connectToUserId,
            connections: [{
              user: userId,
              selfInitiated: false
            }]
          };

          const newConnection = new Connection(connectionFields);
          return newConnection.save();
        }
      })
      .then(updatedConnection => {
        resolve(updatedConnection);
      })
      .catch(err => reject(err));
  });

  Promise.all([requesterPromise, receiverPromise])
    .then(values => res.json(values))
    .catch(err => res.status(400).json(err));

};

const conenctionRemove = (req, res) => {
  const { errors, isValid } = validateConnectionRequest(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const userId = req.user._id;
  const connectToUserId = req.body.userId;
  
  // remove from the
  const requesterPromise = new Promise((resolve, reject) => {
    Connection.findOne({
      user: userId,
      "connections.user": connectToUserId
    }).then(isConnected => {
      if (!isConnected) {
        errors.connection = 'not connected to this user';
        // res.status(404).json(errors);
        resolve(errors);
      } else {
        const conditions = { user: userId };
        const update = {
          $pull: {
            connections: {
              user: connectToUserId
            }
          }
        };
        const options = { new: true };
  
        return Connection.findOneAndUpdate(conditions, update, options);
      }
    })
      .then(updatedConnection => {
        // res.json(updatedConnection);
        resolve(updatedConnection);
      })
      .catch(err => reject(err));
  });

  const receiverPromise = new Promise((resolve, reject) => {
    Connection.findOne({
      user: connectToUserId,
      "connections.user": userId
    }).then(isConnected => {
      if (!isConnected) {
        errors.connection = 'not connected to this user'
        // res.status(404).json(errors);
        resolve(errors);
      } else {
        const conditions = { user: connectToUserId };
        const update = {
          $pull: {
            connections: {
              user: userId
            }
          }
        };
        const options = { new: true };
  
        return Connection.findOneAndUpdate(conditions, update, options);
      }
    })
      .then(updatedConnection => {
        // res.json(updatedConnection);
        resolve(updatedConnection);
      })
      .catch(err => reject(err));
  });

  Promise.all([requesterPromise, receiverPromise])
    .then(values => res.json(values))
    .catch(err => res.status(400).json(err));
};

const connectionApprove = (req, res) => {
  const { errors, isValid } = validateConnectionRequest(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const userId = req.user._id;
  const connectToUserId = req.body.userId;

  const approverPromise = new Promise((resolve, reject) => {
    const conditions = {
      user: userId,
      "connections.user": connectToUserId,
      "connections.selfInitiated": false,
      "connections.connected": false
    };
    const update = {
      $set: { "connections.$.connected": true }
    };
    const options = { new: true };

    Connection.findOneAndUpdate(conditions, update, options)
      .then(connection => {
        if(!connection) {
          errors.connection = 'No pending connection request found';
          resolve(errors);
        } else {
          resolve(connection);
        }
      })
      .catch(err => reject(err));
  });

  const requesterPromise = new Promise((resolve, reject) => {
    const conditions = {
      user: connectToUserId,
      "connections.user": userId,
      "connections.selfInitiated": true,
      "connections.connected": false
    };
    const update = {
      $set: { "connections.$.connected": true }
    };
    const options = { new: true };

    Connection.findOneAndUpdate(conditions, update, options)
      .then(connection => {
        if(!connection) {
          errors.connection = 'No pending connection request found';
          resolve(errors);
        } else {
          resolve(connection);
        }
      })
      .catch(err => reject(err));
  });

  Promise.all([approverPromise, requesterPromise])
    .then(values => res.json(values))
    .catch(err => res.status(400).send());
};

const connectionGet = (req, res) => {
  const errors = {};
  const userId = req.user._id;

  // pagination
  const pageNumber = req.query.pageNumber ? req.query.pageNumber : 0;
  const nPerPage = 3;
  const startCommentsIndex = pageNumber > 0 ? ((pageNumber - 1) * nPerPage) : 0;
  const endCommentsIndex = startCommentsIndex + nPerPage;

  Connection.findOne({ user: userId })
    .sort({ date: -1 })
    .skip(pageNumber > 0 ? ((pageNumber - 1) * nPerPage) : 0)
    .limit(nPerPage)
    .then(connection => {
      if (!connection || connection.connections.length === 0) {
        errors.connection = 'no connection found';
        res.status(404).json(errors);
      } else {
        const { _id, user, connections, __v } = connection;
        const result = {
          _id,
          user,
          connections,
          __v,
          numConnections: connections.length
        };

        res.json(result);
      }
    })
    .catch(err => res.status(400).send(err));
};

module.exports = {
  connectionAdd,
  conenctionRemove,
  connectionGet,
  connectionApprove
};