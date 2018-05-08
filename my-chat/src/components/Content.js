import React, {Component} from 'react';
import MessageList from './MessageList';
import InputMessage from './Input.js';
import { db } from './firebase'

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            msgs: []
        }
    };

    componentDidMount() {
        const messagesRef = db.ref('messages');

        messagesRef.on('value', (snapshot) => {
            const messages = snapshot.val();
            const arr = Object.values(messages);

            this.setState(() => {
                return {msgs: arr};
              });
        });
    }

    sendHandler(message) {
        db.ref(`/messages/${message.id}`).set(message);
    }

    render() {
        return (
            <div>
                <div className="content">
                    <MessageList messages={this.state.msgs}/>
                </div>
                <div className="input">
                    <InputMessage onSend={this.sendHandler.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default Content;