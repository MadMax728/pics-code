import io from "socket.io-client";

// export websocket
const socket = window.socket = io(process.env.REACT_APP_AUTH_BASEURL);

function connect(cb) {
    // listen for any messages coming through
    // of type 'chat' and then trigger the 
    // callback function with said message
    socket.on('communication-message-board-new-message-response', (message) => {
        // console.log the message for posterity
        console.log(message)
        // trigger the callback passed in when
        // our App component calls connect
        cb(message);
    })
}

function messagecount(userId, cb) {
    socket.emit('communication-notification-board-count-request', {
        userId
    });
    // listen for any messages coming through
    // of type 'chat' and then trigger the 
    // callback function with said message
    socket.on('communication-notification-board-count-response', (count) => {
        // console.log the message for posterity
        console.log(count)
        // trigger the callback passed in when
        // our App component calls connect
        cb(count);
    })
}


function join(senderId, recipientId) {
    socket.emit('communication-message-board-join', {
        recipientId: senderId,
        senderId: recipientId
    });
    socket.emit('communication-message-board-join', {
        senderId: recipientId,
        recipientId: senderId
    });
}

function emit(senderId, recipientId, content) {
    socket.emit('communication-message-board-new-message', {
        recipientId,
        senderId,
        content
    });
}

export { connect, socket, join, messagecount, emit }