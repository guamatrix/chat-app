const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

const utils = require('./utils/message');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected!');

  socket.emit('newMessage', utils.generateMessage('admin', 'Welcome to the chat'));

  socket.broadcast.emit('newMessage', utils.generateMessage('admin', 'fulano join'));
  // socket.emit('newEmail', {
  //   from: 'mike@mike.com',
  //   text: 'hey, this is the text',
  //   createdAt: '22222'
  // });

  // socket.on('createEmail', (newEmail) => {
  //   console.log('create email', newEmail);
  // });

  socket.on('createMessage', (message, callback) => {
    console.log('create message ', message);

    io.emit('newMessage', utils.generateMessage(message.from, message.text));
    callback('this is from the server');
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    // createAt: new Date().getTime()
    // })
  });

  // socket.emit('createMessage', {
  //   from: 'server',
  //   text: 'test message server'
  // });

  socket.on('disconnect', () => {
    console.log('client disconnected');
  });
});

server.listen(port, () => {
  console.log('server starter port ' + port);
});
