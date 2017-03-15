var io = require('socket.io-client')

var socket = io.connect('http://localhost:2725', {
  query: `token=${process.argv[2]}&type=${process.argv[3] || 'mailQueue'}`
});

socket.on('connect', function(){
  console.log('connected to server')
  setTimeout(function() {
    socket.emit('auth', '12312312');
  }, 2000)
});
socket.on('process', function(data){
  setTimeout(function() {
    console.log('process', typeof data, data.body);
    socket.emit('finish')
  }, 500)
});
socket.on('disconnect', function(){
  console.log('disconnect');
});

console.log('client running');
