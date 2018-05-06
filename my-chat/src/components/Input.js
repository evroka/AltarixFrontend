import React, {Component} from 'react';

class InputMessage extends Component {
    constructor() {
        super();
        this.state = { text: ''};
    }

    updateMessage(event) {
        this.setState({ text: event.target.value });
    }

    handleSubmit(event) { 
        event.preventDefault();
        if (this.state.text === '') {
            return;
        }
        let msg = {
            'id': Date.now(),
            'name': 'Natasha Safonova',
            'text': this.state.text, 
            'isOutgoing': true
        }
        this.props.onSend(msg);
        this.setState({ text: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="input-group ml-4">
                    <textarea   type="text" 
                                value={this.state.text} 
                                onChange={this.updateMessage.bind(this)} 
                                className="form-control mb-3 col-lg-10" 
                                placeholder="Введите сообщение"/>
                    <span className="input-group-btn">
                        <input type='submit' value='Send' className='btn btn-dark ml-3'/>
                    </span>
                </div>
            </form>
        );
    }
}

export default InputMessage;