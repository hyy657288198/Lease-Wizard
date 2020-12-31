/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import 'rc-slider/assets/index.css'
import DepositsView from './deposits_view1.js'


export class Deposits extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rent_required_checked: this.props.state.deposits.rent_required_checked,
            rent_not_required_checked: this.props.state.deposits.rent_not_required_checked,
            key_required_checked: this.props.state.deposits.key_required_checked,
            key_not_required_checked: this.props.state.deposits.key_not_required_checked,
            last_month_deposit_amount: this.props.state.deposits.last_month_deposit_amount,
            last_month_deposit_date:this.props.state.deposits.last_month_deposit_date,
            key_deposit_amount: this.props.state.deposits.key_deposit_amount,
            key_deposit_date: this.props.state.deposits.key_deposit_date,
            allSet: this.props.state.deposits.allSet // fixed by marvel
        }

        this.handleLastMonthRent = this.handleLastMonthRent.bind(this)
        this.handleKeyDeposit = this.handleKeyDeposit.bind(this)
        this.handleLastMonthDue = this.handleLastMonthDue.bind(this)
        this.handleKeyDue = this.handleKeyDue.bind(this)
        this.handleLastMonthRequireCheck = this.handleLastMonthRequireCheck.bind(this)
        this.handleKeyRequireCheck = this.handleKeyRequireCheck.bind(this)
        this.handleLastMonthNotRequireCheck = this.handleLastMonthNotRequireCheck.bind(this)
        this.handleKeyNotRequireCheck = this.handleKeyNotRequireCheck.bind(this)
    }

    async handleLastMonthRent(event){
        let rentFlag = (this.state.rent_required_checked?
        (((this.state.last_month_deposit_amount =='')|| (this.state.last_month_deposit_date == ''))? false: true):
        (this.state.rent_not_required_checked?true:false))
        let keyFlag = (this.state.key_required_checked?
        (((this.state.key_deposit_amount =='')|| (this.state.key_deposit_date == ''))? false: true):
        (this.state.key_not_required_checked?true:false))
        let setFlag = rentFlag && keyFlag
        console.log(setFlag)
        const currentRentState = this.state.rent_required_checked
        const re = /^[0-9\b]+$/
        if(currentRentState){
            if (event.target.value === '' || re.test(event.target.value)) {
                await this.setState({last_month_deposit_amount: event.target.value, allSet:setFlag});
            }
        }else{
            if (event.target.value === '' || re.test(event.target.value)) {
                await this.setState({last_month_deposit_amount: '', allSet:setFlag});
            }
        }
        let tempProps = this.props.state
        tempProps.deposits.last_month_deposit_amount = this.state.last_month_deposit_amount
        tempProps.deposits.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleLastMonthDue(event){
         let rentFlag = (this.state.rent_required_checked?
        (((this.state.last_month_deposit_amount =='')|| (this.state.last_month_deposit_date == ''))? false: true):
        (this.state.rent_not_required_checked?true:false))
        let keyFlag = (this.state.key_required_checked?
        (((this.state.key_deposit_amount =='')|| (this.state.key_deposit_date == ''))? false: true):
        (this.state.key_not_required_checked?true:false))
        let setFlag = rentFlag && keyFlag
        console.log(setFlag)
        const currentRentState = this.state.rent_required_checked
        if(currentRentState){
            await this.setState({last_month_deposit_date: event.target.value, allSet:setFlag});
        }else{
            await this.setState({last_month_deposit_date: '', allSet:setFlag});
        }
        let tempProps = this.props.state
        tempProps.deposits.last_month_deposit_date = this.state.last_month_deposit_date
        tempProps.deposits.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleKeyDeposit(event){
         let rentFlag = (this.state.rent_required_checked?
        (((this.state.last_month_deposit_amount =='')|| (this.state.last_month_deposit_date == ''))? false: true):
        (this.state.rent_not_required_checked?true:false))
        let keyFlag = (this.state.key_required_checked?
        (((this.state.key_deposit_amount =='')|| (this.state.key_deposit_date == ''))? false: true):
        (this.state.key_not_required_checked?true:false))
        let setFlag = rentFlag && keyFlag
        console.log(setFlag)
        const currentKeyState = this.state.key_required_checked
        const re = /^[0-9\b]+$/
        if(currentKeyState){
            if (event.target.value === '' || re.test(event.target.value)) {
                await this.setState({key_deposit_amount: event.target.value, allSet:setFlag});
            }
        }else{
            if (event.target.value === '' || re.test(event.target.value)) {
                await this.setState({key_deposit_amount: '', allSet:setFlag});
            }
        }
        let tempProps = this.props.state
        tempProps.deposits.key_deposit_amount = this.state.key_deposit_amount
        tempProps.deposits.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleKeyDue(event){
         let rentFlag = (this.state.rent_required_checked?
        (((this.state.last_month_deposit_amount =='')|| (this.state.last_month_deposit_date == ''))? false: true):
        (this.state.rent_not_required_checked?true:false))
        let keyFlag = (this.state.key_required_checked?
        (((this.state.key_deposit_amount =='')|| (this.state.key_deposit_date == ''))? false: true):
        (this.state.key_not_required_checked?true:false))
        let setFlag = rentFlag && keyFlag
        console.log(setFlag)
        const currentKeyState = this.state.key_required_checked
        if(currentKeyState){
            await this.setState({key_deposit_date: event.target.value, allSet:setFlag});
        }else{
            await this.setState({key_deposit_date: '', allSet:setFlag});
        }
        let tempProps = this.props.state
        tempProps.deposits.key_deposit_date = this.state.key_deposit_date
        tempProps.deposits.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleKeyRequireCheck(event){
         let rentFlag = (this.state.rent_required_checked?
        (((this.state.last_month_deposit_amount =='')|| (this.state.last_month_deposit_date == ''))? false: true):
        (this.state.rent_not_required_checked?true:false))
        let keyFlag = (this.state.key_required_checked?
        (((this.state.key_deposit_amount =='')|| (this.state.key_deposit_date == ''))? false: true):
        (this.state.key_not_required_checked?true:false))
        let setFlag = rentFlag && keyFlag
        await this.setState({  key_not_required_checked: false, key_required_checked: !this.state.key_required_checked, allSet:setFlag})
        let tempProps = this.props.state
        console.log(setFlag)
        tempProps.deposits.key_not_required_checked = this.state.key_not_required_checked
        tempProps.deposits.key_required_checked = this.state.key_required_checked
        tempProps.deposits.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleLastMonthRequireCheck(event){
         let rentFlag = (this.state.rent_required_checked?
        (((this.state.last_month_deposit_amount =='')|| (this.state.last_month_deposit_date == ''))? false: true):
        (this.state.rent_not_required_checked?true:false))
        let keyFlag = (this.state.key_required_checked?
        (((this.state.key_deposit_amount =='')|| (this.state.key_deposit_date == ''))? false: true):
        (this.state.key_not_required_checked?true:false))
        let setFlag = rentFlag && keyFlag
        console.log(setFlag)
        await this.setState({  rent_not_required_checked: false, rent_required_checked: !this.state.rent_required_checked, allSet:setFlag})
        let tempProps = this.props.state
        tempProps.deposits.rent_not_required_checked = this.state.rent_not_required_checked
        tempProps.deposits.rent_required_checked = this.state.rent_required_checked
        tempProps.deposits.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleKeyNotRequireCheck(event){
        let pre_required_flag = !this.state.key_not_required_checked
         let rentFlag = (this.state.rent_required_checked?
        (((this.state.last_month_deposit_amount =='')|| (this.state.last_month_deposit_date == ''))? false: true):
        (this.state.rent_not_required_checked?true:false))
        let keyFlag = (this.state.key_required_checked?
        (((this.state.key_deposit_amount =='')|| (this.state.key_deposit_date == ''))? false: true):
        (pre_required_flag?true:false))
        let setFlag = rentFlag && keyFlag
        console.log(setFlag)
        await this.setState({   key_required_checked: false, key_not_required_checked: !this.state.key_not_required_checked, allSet:setFlag})
        let tempProps = this.props.state
        tempProps.deposits.key_required_checked = this.state.key_required_checked
        tempProps.deposits.key_not_required_checked = this.state.key_not_required_checked
        tempProps.deposits.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleLastMonthNotRequireCheck(event){
        let pre_required_flag = !this.state.rent_not_required_checked
         let rentFlag = (this.state.rent_required_checked?
        (((this.state.last_month_deposit_amount =='')|| (this.state.last_month_deposit_date == ''))? false: true):
        (pre_required_flag?true:false))
        let keyFlag = (this.state.key_required_checked?
        (((this.state.key_deposit_amount =='')|| (this.state.key_deposit_date == ''))? false: true):
        (this.state.key_not_required_checked?true:false))
        let setFlag = rentFlag && keyFlag
        console.log(setFlag)
        await this.setState({   rent_required_checked: false, rent_not_required_checked: !this.state.rent_not_required_checked, allSet:setFlag})
        let tempProps = this.props.state
        tempProps.deposits.rent_required_checked = this.state.rent_required_checked
        tempProps.deposits.rent_not_required_checked = this.state.rent_not_required_checked
        tempProps.deposits.allSet = this.state.allSet
        this.props.handler(tempProps)
    }


    // this func is for the check box in nav bar,
    // when the page is fully filled, the check box will be checked by receiving the date "allSet" is true
    // update allSet when the page is fully filled !!!!!!!!!!!!!!!!
    CheckAllSet(e) {
        e.preventDefault();
        if (("aaaa is filled") && ("bbbb is filled") && ("cccc is filled")) {
            this.setState({
                allSet: true
            })
            let tempProps = this.props.state
            tempProps.allSet = this.state.allSet // true
            this.props.handler(tempProps)
        } else {
            this.setState({
                allSet: false
            })
        }
    }


    render() {
        return (
            <div>
                <DepositsView handleLastMonthRent = {this.handleLastMonthRent} handleKeyDeposit = {this.handleKeyDeposit} handleLastMonthDue = {this.handleLastMonthDue} handleKeyDue = {this.handleKeyDue} handleLastMonthRequireCheck = {this.handleLastMonthRequireCheck} handleKeyRequireCheck = {this.handleKeyRequireCheck} handleLastMonthNotRequireCheck = {this.handleLastMonthNotRequireCheck} handleKeyNotRequireCheck = {this.handleKeyNotRequireCheck} rent_not_required_checked = {this.state.rent_not_required_checked} rent_required_checked= {this.state.rent_required_checked} last_month_deposit_amount= {this.state.last_month_deposit_amount} last_month_deposit_date= {this.state.last_month_deposit_date} key_not_required_checked= {this.state.key_not_required_checked} key_required_checked= {this.state.key_required_checked} key_deposit_amount= {this.state.key_deposit_amount} key_deposit_date= {this.state.key_deposit_date} />
            </div>
        )
    }
}

export default Deposits
