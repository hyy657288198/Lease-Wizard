/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React from 'react'
import infoIcon from "./../../assets/pages/info.svg";
import "./popup_info_style.css"


/* Component for the List of Expenses */
export class PopupInfo extends React.Component {

    show(e) {
        e.preventDefault();
        const target = e.target.parentElement.querySelectorAll('#infoTxt')[0]
        target.classList.remove('hide')
    }

    hide(e) {
        e.preventDefault();
        const target = e.target.parentElement.querySelectorAll('#infoTxt')[0]
        target.classList.add('hide')
    }

    render() {
        const {text} = this.props
        return (
            <span id='popupInfo'>
                <span id="infoTxt" className="hide">
                    {text}
                </span>
                <img src={infoIcon} alt="info" onMouseOver={this.show.bind()} onMouseLeave={this.hide.bind()} />
            </span>
            )
        }
}


export default PopupInfo
