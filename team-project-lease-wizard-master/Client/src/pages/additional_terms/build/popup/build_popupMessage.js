/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React from 'react'
/* Component for the List of Expenses */
export class PopupMessage extends React.Component {
    render() {
        let {currentSection, Cancel, stateMsg} = this.props
        if (stateMsg === "SUBMITTED") {
            currentSection = "Every"
        }

        return (
            <span id='popupMessage' className="hide">
                <p id="DismissText">{currentSection} term {stateMsg} successfully</p>
                <p id="Dismiss" onClick={Cancel}>DISMISS</p>
            </span>
            )
        }
}


export default PopupMessage
