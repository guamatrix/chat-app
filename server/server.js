const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected!');

  // socket.emit('newEmail', {
  //   from: 'mike@mike.com',
  //   text: 'hey, this is the text',
  //   createdAt: '22222'
  // });

  // socket.on('createEmail', (newEmail) => {
  //   console.log('create email', newEmail);
  // });

  socket.on('createMessage', (message) => {
    console.log('create message ', message);
  });

  socket.emit('createMessage', {
    from: 'server',
    text: 'test message server'
  });

  socket.on('disconnect', () => {
    console.log('client disconnected');
  });
});

server.listen(port, () => {
  console.log('server starter port ' + port);
});
