const ChatUser = require('../utils/ChatUsers');
const chatUsers = new ChatUser();

const socketIOController = (socket, io) => {

  socket.on('join', ({roomId, userId, userName}) => {

    if(userId && roomId) {
      chatUsers.addUser(socket.id, userId, userName, roomId);
      chatUsers.removeDuplicates();
      // console.log(userId, 'joining room', roomId);
      // socket.join(roomId);
      // console.log(chatUsers.getUserList());
      // io.to(roomId).emit('updateUserList', chatUsers.getUserList(roomId));
    }

    socket.join(roomId);
        
    io.emit('updateUserList', chatUsers.getUserList());

  });

  socket.on('newClientMessage', message => {
    io.to(message.roomId).emit('newServerMessage', message);

  });

  // when client disconnect with chat server 
  socket.on('disconnect', () => {
    const removedUser = chatUsers.removeOffline(socket.id);
    io.emit('removeUser', removedUser);
  });
};

module.exports = socketIOController;