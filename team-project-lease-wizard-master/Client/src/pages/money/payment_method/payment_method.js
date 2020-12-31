/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import 'rc-slider/assets/index.css'
import PaymentView from './payment_method_view.js'


// calSvg goes inside the date picker input
//let calSvg = require("../../assets/component/cal.svg");
export class Payment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email_checked: this.props.state.payment_method.email_checked,
            cheque_checked: this.props.state.payment_method.cheque_checked,
            cash_checked: this.props.state.payment_method.cash_checked,
            paypal_checked: this.props.state.payment_method.paypal_checked,
            other_checked: this.props.state.payment_method.other_checked,
            email: this.props.state.payment_method.email,
            other: this.props.state.payment_method.other,
            yes_checked: this.props.state.payment_method.yes_checked,
            no_checked: this.props.state.payment_method.no_checked,
            allSet: this.props.state.payment_method.allSet
        }
        this.handleEmailCheck = this.handleEmailCheck.bind(this)
        this.handleChequeCheck = this.handleChequeCheck.bind(this)
        this.handleCashCheck = this.handleCashCheck.bind(this)
        this.handlePaypalCheck = this.handlePaypalCheck.bind(this)
        this.handleOtherCheck = this.handleOtherCheck.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleOther = this.handleOther.bind(this)
        this.handleYesCheck = this.handleYesCheck.bind(this)
        this.handleNoCheck = this.handleNoCheck.bind(this)
    }
    async handleEmailCheck(event){
        let emailFlag = this.state.email_checked? (this.state.email === ''? false: true):false
        let otherFlag = this.state.other_checked? (this.state.other === ''? false: true):false
        let methodFlag = emailFlag || this.state.cheque_checked || this.state.cash_checked || this.state.paypal_checked
        let ynFlag = this.state.yes_checked || this.state.no_checked
        let setFlag = methodFlag && ynFlag
        const currentState = this.state.email_checked
        await this.setState({email_checked: !currentState, allSet: setFlag})
        let tempProps = this.props.state
        tempProps.payment_method.email_checked = this.state.email_checked
        tempProps.payment_method.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleChequeCheck(event){
                let emailFlag = this.state.email_checked? (this.state.email === ''? false: true):false
        let otherFlag = this.state.other_checked? (this.state.other === ''? false: true):false
        let methodFlag = emailFlag || !this.state.cheque_checked || this.state.cash_checked || this.state.paypal_checked
        let ynFlag = this.state.yes_checked || this.state.no_checked
        let setFlag = methodFlag && ynFlag
        const currentState = this.state.cheque_checked
        await this.setState({cheque_checked: !currentState, allSet: setFlag})
        let tempProps = this.props.state
        tempProps.payment_method.cheque_checked = this.state.cheque_checked
        tempProps.payment_method.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleCashCheck(event){
                let emailFlag = this.state.email_checked? (this.state.email === ''? false: true):false
        let otherFlag = this.state.other_checked? (this.state.other === ''? false: true):false
        let methodFlag = emailFlag || this.state.cheque_checked || !this.state.cash_checked || this.state.paypal_checked
        let ynFlag = this.state.yes_checked || this.state.no_checked
        let setFlag = methodFlag && ynFlag
        const currentState = this.state.cash_checked
        await this.setState({cash_checked: !currentState, allSet: setFlag})
        let tempProps = this.props.state
        tempProps.payment_method.cash_checked = this.state.cash_checked
        tempProps.payment_method.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handlePaypalCheck(event){
                let emailFlag = this.state.email_checked? (this.state.email === ''? false: true):false
        let otherFlag = this.state.other_checked? (this.state.other === ''? false: true):false
        let methodFlag = emailFlag || this.state.cheque_checked || this.state.cash_checked || !this.state.paypal_checked
        let ynFlag = this.state.yes_checked || this.state.no_checked
        let setFlag = methodFlag && ynFlag
        const currentState = this.state.paypal_checked
        await this.setState({paypal_checked: !currentState, allSet: setFlag})
        let tempProps = this.props.state
        tempProps.payment_method.paypal_checked = this.state.paypal_checked
        tempProps.payment_method.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleOtherCheck(event){
                let emailFlag = this.state.email_checked? (this.state.email === ''? false: true):false
        let otherFlag = this.state.other_checked? (this.state.other === ''? false: true):false
        let methodFlag = emailFlag || this.state.cheque_checked || this.state.cash_checked || this.state.paypal_checked
        let ynFlag = this.state.yes_checked || this.state.no_checked
        let setFlag = methodFlag && ynFlag
        const currentState = this.state.other_checked
        await this.setState({other_checked: !currentState, allSet: setFlag})
        let tempProps = this.props.state
        tempProps.payment_method.other_checked = this.state.other_checked
        tempProps.payment_method.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleEmail(event){
                let emailFlag = this.state.email_checked? (this.state.email === ''? false: true):false
        let otherFlag = this.state.other_checked? (this.state.other === ''? false: true):false
        let methodFlag = emailFlag || this.state.cheque_checked || this.state.cash_checked || this.state.paypal_checked
        let ynFlag = this.state.yes_checked || this.state.no_checked
        let setFlag = methodFlag && ynFlag
        const currentRentState = this.state.email_checked
        if(currentRentState){
            await this.setState({email: event.target.value, allSet: setFlag});
        }else{
            await this.setState({email: '', allSet: setFlag});
        }
        let tempProps = this.props.state
        tempProps.payment_method.email = this.state.email
        tempProps.payment_method.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleOther(event){
                let emailFlag = this.state.email_checked? (this.state.email === ''? false: true):false
        let otherFlag = this.state.other_checked? (this.state.other === ''? false: true):false
        let methodFlag = this.state.emailFlag || this.state.cheque_checked || this.state.cash_checked || this.state.paypal_checked
        let ynFlag = this.state.yes_checked || this.state.no_checked
        let setFlag = methodFlag && ynFlag
        const currentRentState = this.state.other_checked
        if(currentRentState){
            await this.setState({other: event.target.value, allSet: setFlag});
        }else{
            await this.setState({other: '', allSet: setFlag});
        }
        let tempProps = this.props.state
        tempProps.payment_method.other = this.state.other
        tempProps.payment_method.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleYesCheck(event){
                let emailFlag = this.state.email_checked? (this.state.email === ''? false: true):false
        let otherFlag = this.state.other_checked? (this.state.other === ''? false: true):false
        let methodFlag = emailFlag || this.state.cheque_checked || this.state.cash_checked || this.state.paypal_checked
        let ynFlag = !this.state.yes_checked || this.state.no_checked
        let setFlag = methodFlag && ynFlag
        await this.setState({  no_checked: false, yes_checked: !this.state.yes_checked, allSet: setFlag})
        let tempProps = this.props.state
        tempProps.payment_method.no_checked = this.state.no_checked
        tempProps.payment_method.yes_checked = this.state.yes_checked
        tempProps.payment_method.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleNoCheck(event){
        let emailFlag = this.state.email_checked? (this.state.email === ''? false: true):false
        let otherFlag = this.state.other_checked? (this.state.other === ''? false: true):false
        let methodFlag = emailFlag || this.state.cheque_checked || this.state.cash_checked || this.state.paypal_checked
        let ynFlag = this.state.yes_checked || !this.state.no_checked
        let setFlag = methodFlag && ynFlag
        await this.setState({  yes_checked: false, no_checked: !this.state.no_checked, allSet: setFlag})
        let tempProps = this.props.state
        tempProps.payment_method.yes_checked = this.state.yes_checked
        tempProps.payment_method.no_checked = this.state.no_checked
        tempProps.payment_method.allSet = this.state.allSet
        this.props.handler(tempProps)
    }


    render() {
        return (
            <div>
            <PaymentView email_checked = {this.state.email_checked} cheque_checked = {this.state.cheque_checked} cash_checked = {this.state.cash_checked} paypal_checked = {this.state.paypal_checked}
             other_checked = {this.state.other_checked} email = {this.state.email} other = {this.state.other} yes_checked = {this.state.yes_checked} no_checked = {this.state.no_checked}
             handleEmailCheck = {this.handleEmailCheck} handleChequeCheck = {this.handleChequeCheck} handleCashCheck = {this.handleCashCheck}
             handlePaypalCheck = {this.handlePaypalCheck} handleOtherCheck = {this.handleOtherCheck} handleEmail = {this.handleEmail}
             handleOther = {this.handleOther} handleYesCheck = {this.handleYesCheck} handleNoCheck = {this.handleNoCheck} />
            </div>
        )
    }
}

export default Payment
