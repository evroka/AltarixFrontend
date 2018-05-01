import React from 'react';


function InputMessage() {
    return (

        <div className="input-group mb-3">
            <textarea type="text" className="form-control mb-3" placeholder="Введите сообщение"/>
            <div>
                <button className="btn btn-dark ml-3 mt-3" type="button">Send</button>
            </div>
        </div>
       /* <div className='input-message input-group mb-3'>
         <form >
            <label>
                <textarea rows='3' cols='50' className='form-control ml-3' />
            </label>
            <button type="submit" value="Submit" className='btn btn-outline-secondary'/>
         </form>
        </div>
        */
    );
}

export default InputMessage;