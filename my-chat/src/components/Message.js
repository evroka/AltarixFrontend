import React, {Component} from 'react';

class Message extends Component {
    constructor(props) {
        super(props);
    }

    getLogoPath() {
        const pathStart = 'https://filin.mail.ru/letters/default/45x45/';
        const pathEnd = '/1.png';
        let elem = this.props.messages.name;
        let str = elem.toUpperCase()[0];
        let n = str.charCodeAt(0);
        //russian alphabet
        if (n >= 1040) {
        n -= 1040;
        }
        //latin alphabet
        else {
        n -= 65;
        }
        n = n % 16;
        let addr = n.toString().padStart(2, "0");
        const resultPath = pathStart + str + '/' + addr + pathEnd;
        return resultPath;
    }

    render() {
        const {messages} = this.props;
        if (this.props.messages.isOutgoing) {
            return (
                <div className='my-message media mt-3' >
                    <div className='card card-right mr-2'>
                        <p>{messages.text}</p>
                        <p className="date-posted">Отправлено: {(new Date(messages.id)).toDateString()} </p>
                    </div>  
                    <div className='user-info pr-2'>
                        <img src={this.getLogoPath()} alt="ava" className='avatar rounded-circle'/>
                        <p className='user-name p-1' >{messages.name}</p>
                    </div>          
                </div>
            );
        } else {
            return (
                <div className='media mt-3' >
                    <div className='user-info pr-2'>
                            <img src={this.getLogoPath()} alt="ava" className='avatar rounded-circle'/>
                            <p className='user-name p-1' >{messages.name}</p>
                    </div>   
                    <div className='card card-left rounded'>
                        <p>{messages.text}</p>
                        <p className="date-posted">Отправлено: {(new Date(messages.id)).toDateString()} </p>
                    </div>  
                </div>
            );
        }
    }
}

export default Message;