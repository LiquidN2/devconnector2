const socketIOController = (socket, io) => {
  // console.log('a user connected', socket.id);
  let room;

  socket.on('join', roomId => {
    // console.log('joining room', roomId);
    room = roomId;
    socket.join(room);
  });

  socket.on('newClientMessage', message => {
    io.to(room).emit('newServerMessage', message);
    // io.emit('newServerMessage', message);
    // console.log(message);
  });

  // when client disconnect with chat server 
  socket.on('disconnect', () => {
    // console.log(`user ${socket.id} disconnected`);
  });
};

module.exports = socketIOController;