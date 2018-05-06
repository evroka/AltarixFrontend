import React from 'react';
import Message from './Message';

export default function MessageList({ messages }) {
    const messageElements = messages.map(messages =>
        <div key = {messages.id} ><Message messages = {messages} /></div>
    )
    return (
        <div>
            {messageElements}
        </div>
    )
}