/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React from 'react'
/* Component for the List of Expenses */
export class SendPopupSuccess extends React.Component {

    Cancel(e) {
        e.preventDefault();
        const info = e.target.parentElement
        info.classList.add('hide');
    }

    render() {
        // let {currentSection, Cancel, stateMsg} = this.props

        return (
            <span id='popupMessage' className="hide">
                {/* <span id='popupMessage' > */}
                <p id="DismissText">Your message was sent successfully.</p>
                <p id="Dismiss" onClick={this.Cancel.bind(this)}>DISMISS</p>
            </span>
            )
        }
}


export default SendPopupSuccess
