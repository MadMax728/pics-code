import React, { Component } from "react";
import { Auth } from "../../../../auth";
import { connect } from "react-redux";
import { DateFormat } from "../../../Factory";
import MessageItem from './MessageItem';
import { getMessages } from "../../../../actions";
import PropTypes from "prop-types";

class MessagesLazyList extends Component {
  
    constructor(props, context) {
        super(props, context);
        // get  user from local storage 
        const storage = Auth.extractJwtFromStorage();
        // parse the user info
        const userInfo = JSON.parse(storage.userInfo) || {};
        this.state = {
            user : {},
            me : userInfo.id,
            messages : []
        }
        this.props.socket.on('communication-message-board-new-message-response', (data) => {
            const { me, user } = this.state;
            if(user && (me === data.recipientId || me === data.senderId) && (user.id === data.recipientId || user.id === data.senderId)) {
                this.setState({messages: [...this.state.messages, data]});
                this.scrollBottomOnNewMessage();
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
          };
        }
        return null;
    }
    

    componentDidUpdate(prevProps, prevState) {
        if (prevState.user !== this.state.user) {
            this.setState({ messages: [] }, () => {
                this.getMessages(true);
            })
        }
    }

    scrollBottomOnNewMessage = () => {
        if (this.messagesEnd) {
            this.messagesEnd.scrollIntoView({ behavior: "smooth" });
        }
    }

    componentDidMount() {
        this.getMessages(true);
    }

    getMessages = (callback) => {

        const { me, user } = this.state;
        
        if(!user || !user.id) return;

        this.props.getMessages(me, user.id).then(() => {
            const  { messagesData } = this.props;
            if(messagesData && !messagesData.isLoading && messagesData.messages) {
                this.setState({ messages: [...this.state.messages, ...messagesData.messages ] }, () => {
                    if(callback) {
                        this.scrollBottomOnNewMessage();
                    } 
                })
            }
        });

    }

    render() {
        const { messages, me } = this.state;
        return (
            <div>
               {
                    messages.map((item, key) => (
                        <div key={item.id}> 
                            { 
                                key === 0 && (
                                    <div className="date">{ DateFormat(item.createdAt) }</div>
                                )
                            }
                            { 
                                key > 0 && (DateFormat(messages[key - 1].createdAt) !== DateFormat(item.createdAt)) && (
                                    <div className="date">{ DateFormat(item.createdAt) }</div>
                                )
                            }
                            <div>
                                <MessageItem me={me} item={item} />
                            </div>
                        </div>
                    ))
                }
                <div style={{ float:"left", clear: "both" }}
                     ref={(el) => { this.messagesEnd = el; }}>
                </div>
            </div>
        )
    }

}
  
MessagesLazyList.propTypes = {
    getMessages: PropTypes.func.isRequired,
    messagesData: PropTypes.any,
    user:PropTypes.any,
    socket: PropTypes.any
};
  
const mapStateToProps = state => ({
    messagesData: state.messagesData
});
  
const mapDispatchToProps = {
    getMessages
};
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessagesLazyList);
  