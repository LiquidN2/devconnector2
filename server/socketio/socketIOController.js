const socketIOController = socket => {
  console.log('a user connected', socket.id);

  // when client disconnect with chat server 
  socket.on('disconnect', () => {
    console.log(`user ${socket.id} disconnected`);
});
};

module.exports = socketIOController;