import io from "socket.io-client";

const socket = io('/');

export const connectionNotify = callback => {
  socket.on('connect', callback);
};