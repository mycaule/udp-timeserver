# Exploring UDP Sockets

This is a small project using UDP to try [Modern JS][Modern JS Cheatsheet] features. I would like to go further in the [Nodejs.org](UDP / Datagram Sockets) documentation as well.


The server serves time to a list of subscribed users. Clients can receive the messages and configure their preferences by sending commands to the server.

The client will poll the server for 10 seconds before closing the connection. Notifications are sent every 1 second.

```
server listening 0.0.0.0:41234

server got: subscribe from 127.0.0.1:41235
client got: 11:54:04 AM from 127.0.0.1:41234
client got: 11:54:05 AM from 127.0.0.1:41234
client got: 11:54:06 AM from 127.0.0.1:41234
client got: 11:54:07 AM from 127.0.0.1:41234
client got: 11:54:08 AM from 127.0.0.1:41234
client got: 11:54:09 AM from 127.0.0.1:41234
client got: 11:54:10 AM from 127.0.0.1:41234
client got: 11:54:11 AM from 127.0.0.1:41234
client got: 11:54:12 AM from 127.0.0.1:41234
server got: unsubscribe from 127.0.0.1:41235
```

## Usage
- To run the application with hot reload: `npm start`.
- To run the tests: `npm test`.

## Protocol

### Server information

- Address: 127.0.0.1
- Port: 41234

### Allowed messages

#### subscribe

*Send `subscribe` message to port 41234.*

Subscribe to the messages sent by the server.

#### unsubscribe

*Send `unsubscribe` message to port 41234.*

Unsubscribe to the messages sent by the server.

## References
- [UDP / Datagram Sockets](https://nodejs.org/dist/latest-v8.x/docs/api/dgram.html)
- [ES6 Sets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Modern JS Cheatsheet](https://github.com/mbeaudru/modern-js-cheatsheet)
