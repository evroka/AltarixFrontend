import React from 'react';
import logo from '../logo.png';
import 'react-chat-elements/dist/main.css';



function Message() {
    return (
        <div className='user-message media mt-3' >
            <div className='user-info pr-2'>
                <img src={logo} alt="ava" className='avatar rounded-circle w-50'/>
                <p className='user-name p-1' >User Name</p>
            </div>
            <div className='card'>
                <p>Message</p>
            </div>            
        </div>
    );
}

export default Message;