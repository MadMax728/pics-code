import io from "socket.io-client";

// export websocket
const socket = (window.socket = io(process.env.REACT_APP_AUTH_BASEURL));

function connect(cb) {
  // listen for any messages coming through
  // of type 'chat' and then trigger the
  // callback function with said message
  socket.on("communication-message-board-new-message-response", message => {
    // console.log the message for posterity
    console.log(message);
    // trigger the callback passed in when
    // our App component calls connect
    cb(message);
  });
}

function messagecount(userId, cb) {
  socket.emit("communication-notification-board-count-request", {
    userId
  });
  // listen for any messages coming through
  // of type 'chat' and then trigger the
  // callback function with said message
  socket.on("communication-notification-board-count-response", count => {
    // console.log the message for posterity
    console.log(count);
    // trigger the callback passed in when
    // our App component calls connect
    cb(count);
  });
}

function join(senderId, recipientId, userId) {
  socket.emit("communication-message-board-join", {
    recipientId: senderId,
    senderId: recipientId,
    userId
  });
  //Request to join for notification socket
  socket.emit("communication-notification-board-join", {
    userId
  });
}

function emit(senderId, recipientId, content) {
  console.log("Calling emit");
  socket.emit("communication-message-board-new-message", {
    recipientId,
    senderId,
    content
  });
}

function subReqNotification(subscribedCallback, pendingCallback) {
  //If I get subscription request which is allready accepted
  socket.on(
    "communication-notification-board-new-send-request-subscribe",
    request => {
      subscribedCallback(request);
    }
  );

  //If I get subscription request which is pending
  socket.on(
    "communication-notification-board-new-send-request-pending",
    request => {
      pendingCallback(request);
    }
  );
}

function subAcceptNotification(cb) {
  socket.on("communication-notification-board-accept-request", request => {
    cb(request);
  });
}

export {
  connect,
  socket,
  join,
  messagecount,
  emit,
  subReqNotification,
  subAcceptNotification
};
