import io from 'socket.io-client';
import config from 'config';

const socket = io.connect(config.get('queue.url'), {
  query: `token=${config.get('queue.auth')}&type=${config.get('queue.type')}`,
});

socket.on('connect', () => {
  console.log('connected to server');
});

socket.on('disconnect', () => {
  console.log('disconnect');
});

socket.on('force-disconnect', () => {
  console.log('force-disconnect');
  socket.disconnect();
  process.exit(0);
});

export default (processor) => {
  socket.on('process', (data) => {
    processor(data.payload, data);
  });
};

export function error(err, data) {
  data.tries = data.tries !== undefined ? ++data.tries : 1;
  if (config.get('retry') && data.tries < config.get('retry')) {
    socket.emit('failure', { data, err });
  }
}

export function success(data) {
  socket.emit('success', data);
}
