/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import 'rc-slider/assets/index.css'
import DatesView from './dates_view.js'


export class Dates extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: this.props.state.dates.active,
            movein_date: this.props.state.dates.movein_date,
            start_fixed_date: this.props.state.dates.start_fixed_date,
            pro_rated_start_date: this.props.state.dates.pro_rated_start_date,
            pro_rated_end_date: this.props.state.dates.pro_rated_end_date,
            pro_rated_due_date: this.props.state.dates.pro_rated_due_date,
            pro_rated_amount: this.props.state.dates.pro_rated_amount,
            allSet: this.props.state.dates.allSet // fixed by M
        }
        this.toggleClass = this.toggleClass.bind(this)
        this.handleMoveInDate = this.handleMoveInDate.bind(this)
        this.handleFixedDate = this.handleFixedDate.bind(this)
        this.handleOptionAmount = this.handleOptionAmount.bind(this)
        this.handleOptionDate1 = this.handleOptionDate1.bind(this)
        this.handleOptionDate2 = this.handleOptionDate2.bind(this)
        this.handleOptionDate3 = this.handleOptionDate3.bind(this)

    }

    async handleMoveInDate(event){
        let setFlag = ((this.state.movein_date ==='') || (this.state.start_fixed_date ===''))? false: true
        console.log(setFlag)
        await this.setState({movein_date: event.target.value, allSet:setFlag})
        let tempProps = this.props.state
        tempProps.dates.movein_date = this.state.movein_date
        tempProps.dates.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleFixedDate(event){
        let setFlag = ((this.state.movein_date ==='') || (this.state.start_fixed_date ===''))? false: true
        console.log(setFlag)
        await this.setState({start_fixed_date: event.target.value, allSet:setFlag})
        let tempProps = this.props.state
        tempProps.dates.start_fixed_date = this.state.start_fixed_date
        tempProps.dates.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleOptionDate1(event){
        await this.setState({pro_rated_start_date: event.target.value})
        let tempProps = this.props.state
        tempProps.dates.pro_rated_start_date = this.state.pro_rated_start_date
        this.props.handler(tempProps)
    }
    async handleOptionDate2(event){
        await this.setState({pro_rated_end_date: event.target.value})
        let tempProps = this.props.state
        tempProps.dates.pro_rated_end_date = this.state.pro_rated_end_date
        this.props.handler(tempProps)
    }
    async handleOptionDate3(event){
        await this.setState({pro_rated_due_date: event.target.value})
        let tempProps = this.props.state
        tempProps.dates.pro_rated_due_date = this.state.pro_rated_due_date
        this.props.handler(tempProps)
    }
    async handleOptionAmount(event){
        const re = /^[0-9\b]+$/
        if (event.target.value === '' || re.test(event.target.value)) {
            await this.setState({pro_rated_amount: event.target.value})
        }

        let tempProps = this.props.state
        tempProps.dates.pro_rated_amount = this.state.pro_rated_amount
        this.props.handler(tempProps)
        console.log(this.props.state)
    }
    async toggleClass() {
        const currentState = this.state.active
        await this.setState({ active: !currentState })
    }
    render() {


        return (
            <div>
                <DatesView movein_date = {this.state.movein_date} handleMoveInDate = {this.handleMoveInDate} start_fixed_date= {this.state.start_fixed_date} handleFixedDate = {this.handleFixedDate} toggleClass = {this.toggleClass} active= {this.state.active} pro_rated_start_date= {this.state.pro_rated_start_date} pro_rated_end_date= {this.state.pro_rated_end_date} pro_rated_due_date= {this.state.pro_rated_due_date} pro_rated_amount= {this.state.pro_rated_amount} handleOptionDate1 = {this.handleOptionDate1} handleOptionDate2 = {this.handleOptionDate2} handleOptionDate3 = {this.handleOptionDate3} handleOptionAmount = {this.handleOptionAmount}/>
            </div>
        )
    }
}

export default Dates
