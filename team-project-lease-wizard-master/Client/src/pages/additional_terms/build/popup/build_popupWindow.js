/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React from 'react'
/* Component for the List of Expenses */
export class PopupWindow extends React.Component {
    render() {
        const {inputValue, InputChange, inputAcc, Cancel, Add} = this.props

        return (
                <div id="AddCustomAgreement" className='popup hide'>
                    <span>
                        <h1>Add a custom term for Parking</h1>
                        <span className="toCenter">
                            <textarea className="CustonAgreementContent" placeholder="Type the text of your term"
                            cols="60" rows="10" maxLength="250" value={inputValue} onChange={InputChange}>
                            </textarea>
                        </span>
                        <span className="toRight">Total words:{inputAcc}/250</span>
                    </span>
                    <button id="whiteCancel" type="button" className="toLeft" onClick={Cancel}>CANCEL</button>
                    <button type="button" className="toLeft" onClick={Add}>ADD</button>
                </div>
                )
            }
}


export default PopupWindow
