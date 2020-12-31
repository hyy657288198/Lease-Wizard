/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import 'rc-slider/assets/index.css'
import paymentViewContent from '../../allPagesContents/mainContent/payment_method_view_content'
import infoIcon from "./../../../assets/pages/info.svg";
import PopupInfo from '../../../pages/popup_info/popup_info'

export class PaymentView extends Component {

    render() {
        const {email_checked, cheque_checked, cash_checked, paypal_checked, other_checked, email, other, yes_checked, no_checked,
        handleEmailCheck, handleChequeCheck, handleCashCheck, handlePaypalCheck, handleOtherCheck, handleEmail, handleOther, handleYesCheck, handleNoCheck} = this.props
        return (
            <div>
               <h1> {paymentViewContent.heading} </h1>
               <br></br>
               <h2> {paymentViewContent.sub_heading} </h2>


                <form style = {{display: "inline-block"}}>
                    <label><input type="checkbox" className="payment_method" checked={email_checked} onChange={handleEmailCheck} /> Email transfer   <PopupInfo text={paymentViewContent.popupInfo[0]}/> </label>    </form>
                <label style = {{display: "inline-block", padding: 18}}>
                    <input type="text" className = "payment_method" value={email} placeholder="enter email address"  onChange={handleEmail} />
                </label>
                <br></br>
                <label><input type="checkbox" className = "payment_method" checked={cheque_checked} onChange={handleChequeCheck} /> Cheque</label>
                <br></br>
                <label><input type="checkbox" className = "payment_method" checked={cash_checked} onChange={handleCashCheck} /> Cash</label>
                <br></br>
                <label><input type="checkbox" className = "payment_method" checked={paypal_checked} onChange={handlePaypalCheck} /> PayPal</label>
                <br></br>
                <form style = {{display: "inline-block"}}>
                <label><input type="checkbox" className = "payment_method" checked={other_checked} onChange={handleOtherCheck} /></label> </form>
                <label style = {{display: "inline-block", padding: 18}}>
                    <input type="text" className = "payment_method" value={other} placeholder="other(please specify)"  onChange={handleOther} />
                </label>
                <br></br>
                <br></br>
                <h2> {paymentViewContent.question} <PopupInfo text={paymentViewContent.popupInfo[0]}/></h2>
                <form style = {{display: "inline-block", padding: 10}}> <label><input type="radio"  checked={yes_checked} onClick={handleYesCheck} onChange={()=>{}}/> Yes</label>    </form>
                <form style = {{display: "inline-block", padding: 10}}><label><input type="radio" checked={no_checked} onClick={handleNoCheck} onChange={()=>{}}/>No</label>    </form>
            </div>
        )
    }
}

export default PaymentView
