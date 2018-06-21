const socket = io();
socket.on('connect', () => {
  console.log('connected to server');
});

socket.on('disconnect', () => {
  console.log('disconnected from server');
});

socket.on('createMessage', (message) => {
  console.log('new message', message);
});

// socket.emit('createEmail', ({
//   from: 'client@client.com',
//   text: 'text from client',
//   createdAt: 123
// }));

socket.emit('createMessage', ({
  from: 'client@client.com',
  text: 'text from client',
}));


// socket.on('newEmail', (email) => {
//   console.log('new email', email);
// });
