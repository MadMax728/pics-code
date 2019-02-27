import React, { Component } from "react";
import { Auth } from "../../../../auth";
import { connect } from "react-redux";
import { DateFormat } from "../../../Factory";
import MessageItem from "./MessageItem";
import { getMessages } from "../../../../actions";
import * as websocket from "../../../../websocket";
import PropTypes from "prop-types";
import * as moment from "moment";

class MessagesLazyList extends Component {
  constructor(props, context) {
    super(props, context);
    // get  user from local storage
    const storage = Auth.extractJwtFromStorage();
    // parse the user info
    const userInfo = JSON.parse(storage.userInfo) || {};
    this.state = {
      user: {},
      me: userInfo.id,
      messages: [],
      lastEvaluatedKeys: null,
      lastEvaluatedPages: [],
      fromTime: moment(new Date())
        .add(-12, "hours")
        .toISOString(),
      toTime: new Date().toISOString()
    };

    // this.props.socket.on('communication-message-board-history', (data) => {
    //   console.log('data', data);
    // });

    websocket.connect(data => {
      const { me, user } = this.state;
      if (
        user &&
        (me === data.recipientId || me === data.senderId) &&
        (user._id === data.recipientId || user._id === data.senderId)
      ) {
        this.setState({ messages: [...this.state.messages, data] });
      }
    });
  }

  static getDerivedStateFromProps(props, state) {
    // Any time the current user changes,
    // Reset any parts of state that are tied to that user.
    // In this simple example, that's just the email.
    if (props.user !== state.user) {
      return {
        user: props.user,
        lastEvaluatedKeys: undefined,
        lastEvaluatedPages: [],
        fromTime: moment(new Date())
          .add(-12, "hours")
          .toISOString(),
        toTime: new Date().toISOString()
      };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      this.setState({ messages: [] }, () => {
        this.getMessages(true);
      });
    }
    const { lastEvaluatedKeys, lastEvaluatedPages } = this.state;

    if (prevProps.count !== this.props.count) {
      this.getMessages();
    }
  }

  scrollBottomOnNewMessage = () => {
    if (this.messagesEnd) {
      this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
  };

  componentDidMount() {
    console.log("Default ", this.props);
    this.props.setMessageListRef(this);
    this.getMessages(true);
  }

  clearMessages = () => {
    this.setState({ messages: [] });
  };

  getMessages = callback => {
    const { me, user, fromTime, toTime, messages } = this.state;
    if (!user || !user._id) return;
    this.props.getMessages(me, user._id, fromTime, toTime).then(() => {
      const { messagesData } = this.props;
      if (messagesData && !messagesData.isLoading && messagesData.messages) {
        const newMessages = [...messagesData.messages, ...messages];
        this.setState(
          {
            messages: newMessages,
            fromTime: moment(messagesData.fromTime)
              .add(-12, "hours")
              .toISOString(),
            toTime: messagesData.fromTime
          },
          () => {
            if (callback) {
              this.scrollBottomOnNewMessage();
            }
          }
        );
      }
      if (
        messagesData &&
        !messagesData.isLoading &&
        messagesData.lastEvaluatedKeys &&
        messagesData.lastEvaluatedKeys.id
      ) {
        this.setState({ lastEvaluatedKeys: messagesData.lastEvaluatedKeys });
      }
    });
  };

  render() {
    const { messages, me } = this.state;
    return (
      <div>
        {messages.map((item, key) => {
          if (item.deletedFor.find(userid => userid === me) === undefined) {
            return (
              <div key={item._id}>
                {key === 0 && (
                  <div className="date">{DateFormat(item.createdAt)}</div>
                )}
                {key > 0 &&
                  DateFormat(messages[key - 1].createdAt) !==
                    DateFormat(item.createdAt) && (
                    <div className="date">{DateFormat(item.createdAt)}</div>
                  )}
                <div>
                  <MessageItem me={me} item={item} />
                </div>
              </div>
            );
          }
        })}
        <div
          style={{ float: "left", clear: "both" }}
          ref={el => {
            this.messagesEnd = el;
          }}
        />
      </div>
    );
  }
}

MessagesLazyList.propTypes = {
  getMessages: PropTypes.func.isRequired,
  setMessageListRef: PropTypes.func,
  messagesData: PropTypes.any,
  user: PropTypes.any,
  count: PropTypes.number
};

const mapStateToProps = state => ({
  messagesData: state.messagesData,
  fromTime: state.fromTime,
  toTime: state.toTime
});

const mapDispatchToProps = {
  getMessages
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesLazyList);
