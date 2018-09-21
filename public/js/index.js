const socket = io();
socket.on('connect', () => {
  console.log('connected to server');
});

socket.on('disconnect', () => {
  console.log('disconnected from server');
});

// socket.on('createMessage', (message) => {
//   console.log('new message', message);
// });

socket.on('newMessage', (message) => {
  console.log('new message', message);
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
});

// socket.emit('createEmail', ({
//   from: 'client@client.com',
//   text: 'text from client',
//   createdAt: 123
// }));

// socket.emit('createMessage', ({
//   from: 'client@client.com',
//   text: 'text from client',
// }));


// socket.on('newEmail', (email) => {
//   console.log('new email', email);
// });

// socket.emit('createMessage', {
//   from: 'Client',
//   text: 'Hi'
// }, function(data) {
//   console.log('got it', data);
// });

jQuery('#message-form').on('submit', function(e) {
  e.preventDefault();
  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function() {

  })
});
