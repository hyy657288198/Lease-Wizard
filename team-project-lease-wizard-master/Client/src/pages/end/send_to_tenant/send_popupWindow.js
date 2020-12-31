/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React from 'react'
import './send_window_style.css'
/* Component for the List of Expenses */
const AllEmails = ["123@qq.com", "301@outlook.com", "309@gmail.com"]

export class SendPopupWindow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cur_user: "xquan97@outlook.com",
            input_value: "",
            inputAcc: 0,
        }
        this.inputChange = this.inputChange.bind(this)
        this.Cancel = this.Cancel.bind(this)
        this.SendEmail = this.SendEmail.bind(this)
        this.CheckEmailAddress = this.CheckEmailAddress.bind(this)
    }

    Cancel(e) {
        e.preventDefault();
        const info = e.target.parentElement.parentElement
        info.classList.add('hide');
    }

    async CheckEmailAddress(e){
        e.preventDefault();
        let checkbox = e.target.parentElement.querySelectorAll('#validEmailCheck')[0]
        if (this.props.AllTenants.includes(e.target.value)) {
            checkbox.classList.remove('hide')
        } else {
            checkbox.classList.add('hide')
        }
    }

    SendEmail(e){
        e.preventDefault();
        const sendBox = e.target.parentElement
        sendBox.classList.add('hide')
        const popup = sendBox.parentElement.querySelectorAll("#popupMessage")[0]
        popup.classList.remove('hide')
    }

    inputChange(e){
        e.preventDefault();
        this.setState({
            input_value: e.target.value,
            inputAcc: e.target.value.length
        })
    }

    render() {

        return (
                <div id="sendBox" className='popup hide'>
                    <span>
                        <h1 id="sendTitle"> Send to Tenant to View:</h1>
                        <span id="closeButton" className="toRight" onClick={this.Cancel}>Close ❌</span>
                        <br></br>
                        <input id="emailBox" className="toLeft" placeholder="Enter tenant email address" onChange={this.CheckEmailAddress}/>
                        <p id="validEmailCheck"className="toLeft hide">✅</p>
                        <textarea className="emailContent toLeft" placeholder="Add message to tenant:"
                        cols="60" rows="10" maxLength="500" value={this.state.input_value} onChange={this.inputChange}>
                        </textarea>
                        <span className="toRight">Total words:{this.state.inputAcc}/500</span>
                    </span>
                    <button type="button" className="toLeft" onClick={this.SendEmail}>SEND</button>
                </div>
                )
            }
}


export default SendPopupWindow
