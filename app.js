const dgram = require('dgram');
const moment = require('moment');

// SERVER SIDE CODE
const subscriptions = new Set();
const clients = [41235, 41236, 41237];

const server = dgram.createSocket('udp4');

server.on('error', err => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);

  if (msg == 'subscribe') {
    subscriptions.add(`${rinfo.address}:${rinfo.port}`);
  } else if (msg == 'unsubscribe') {
    subscriptions.delete(`${rinfo.address}:${rinfo.port}`);
  }
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(41234);

setInterval(() => {
  clients.map(clt => {
    if (subscriptions.has(`127.0.0.1:${clt}`)) {
      const date = moment().format('LTS');

      server.send(date, clt, '127.0.0.1', err => {
        if (err) {
          server.close();
        }
      });
    }
  });
}, 1000);

// CLIENT-SIDE CODE
const client = dgram.createSocket('udp4');
client.bind(41235);

client.on('message', msg => console.log(`${msg}`));
client.send('subscribe', 41234, '127.0.0.1');
setTimeout(async () => {
  await client.send('unsubscribe', 41234, '127.0.0.1');
  client.close();
}, 10000);
