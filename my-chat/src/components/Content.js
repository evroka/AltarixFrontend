import React, {Component} from 'react';
import MessageList from './MessageList';
import messages from '../messages';
import InputMessage from './Input.js';

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            msgs: messages
        }
    };

    sendHandler(message) {
        
        const arr = this.state.msgs;
        arr.push(message);
        this.setState(() => {
            return {msgs: arr};
          });
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