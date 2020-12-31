/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import 'rc-slider/assets/index.css'
import RentsView from './rent_view1.js'


// calSvg goes inside the date picker input
//let calSvg = require("../../assets/component/cal.svg");
export class Rent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            yes_checked: this.props.state.rents.yes_checked,
            no_checked: this.props.state.rents.no_checked,
            m_checked: this.props.state.rents.m_checked,
            w_checked: this.props.state.rents.w_checked,
            o_checked: this.props.state.rents.o_checked,
            yes_start_date: this.props.state.rents.yes_start_date,
            yes_end_date: this.props.state.rents.yes_end_date,
            no_start_date: this.props.state.rents.no_start_date,
            base_amount: this.props.state.rents.base_amount,
            //fullDateStatus: false
            allSet: this.props.state.rents.allSet  // fixed by M
        }
        this.handleYesStartDate = this.handleYesStartDate.bind(this)
        this.handleYesEndDate = this.handleYesEndDate.bind(this)
        this.handleNoStartDate = this.handleNoStartDate.bind(this)
        this.handleBaseAmount = this.handleBaseAmount.bind(this)
        this.handleCheck1 = this.handleCheck1.bind(this)
        this.handleCheck2 = this.handleCheck2.bind(this)
        this.handleCheck3 = this.handleCheck3.bind(this)
        this.handleCheck4 = this.handleCheck4.bind(this)
        this.handleCheck5 = this.handleCheck5.bind(this)
    }
    async handleYesStartDate(event){
        let ynFlag = (this.state.yes_checked?
            (((this.state.yes_start_date === '') || (this.state.yes_end_date === ''))?false:true):
            (this.state.no_checked?(this.state.no_start_date === ''? false: true):false))
        let mwoFlag = (this.state.m_checked||this.state.w_checked||this.state.o_checked)
        let baseFlag = !(this.state.base_amount === '')
        let setFlag = ynFlag && mwoFlag && baseFlag
        console.log(setFlag)
        const yesState = this.state.yes_checked
        if(yesState){
            await this.setState({yes_start_date: event.target.value, allSet:setFlag});
        }else{
            await this.setState({yes_start_date: '', allSet:setFlag});
        }
        let tempProps = this.props.state
        tempProps.rents.yes_start_date = this.state.yes_start_date
        tempProps.rents.allSet = this.state.allSet
        this.props.handler(tempProps)
        console.log(tempProps)
    }
    async handleYesEndDate(event){
        let ynFlag = (this.state.yes_checked?
            (((this.state.yes_start_date === '') || (this.state.yes_end_date === ''))?false:true):
            (this.state.no_checked?(this.state.no_start_date === ''? false: true):false))
        let mwoFlag = (this.state.m_checked||this.state.w_checked||this.state.o_checked)
        let baseFlag = !(this.state.base_amount === '')
        let setFlag = ynFlag && mwoFlag && baseFlag
        console.log(setFlag)
        const yesState = this.state.yes_checked
        if(yesState){
            await this.setState({yes_end_date: event.target.value, allSet:setFlag});
        }else{
            await this.setState({yes_end_date: '', allSet:setFlag});
        }
        let tempProps = this.props.state
        tempProps.rents.yes_end_date = this.state.yes_end_date
        tempProps.rents.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleNoStartDate(event){
        let ynFlag = (this.state.yes_checked?
            (((this.state.yes_start_date === '') || (this.state.yes_end_date === ''))?false:true):
            (this.state.no_checked?(this.state.no_start_date === ''? false: true):false))
        let mwoFlag = (this.state.m_checked||this.state.w_checked||this.state.o_checked)
        let baseFlag = !(this.state.base_amount === '')
        let setFlag = ynFlag && mwoFlag && baseFlag
        console.log(setFlag)
        const noState = this.state.no_checked
        if(noState){
            await this.setState({no_start_date: event.target.value, allSet:setFlag});
        }else{
            await this.setState({no_start_date:'', allSet:setFlag});
        }
        let tempProps = this.props.state
        tempProps.rents.no_start_date = this.state.no_start_date
        tempProps.rents.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleBaseAmount(event){
        let ynFlag = (this.state.yes_checked?
            (((this.state.yes_start_date === '') || (this.state.yes_end_date === ''))?false:true):
            (this.state.no_checked?(this.state.no_start_date === ''? false: true):false))
        let mwoFlag = (this.state.m_checked||this.state.w_checked||this.state.o_checked)
        let baseFlag = !(this.state.base_amount === '')
        let setFlag = ynFlag && mwoFlag && baseFlag
        console.log(setFlag)
        const re = /^[0-9\b]+$/
        if (event.target.value === '' || re.test(event.target.value)) {
            await this.setState({base_amount: event.target.value, allSet:setFlag});
        }
        let tempProps = this.props.state
        tempProps.rents.base_amount = this.state.base_amount
        tempProps.rents.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleCheck1(event){
        //console.log(setFlag)
        await this.setState({   no_checked: false, yes_checked: !this.state.yes_checked})
        let tempProps = this.props.state
        tempProps.rents.no_checked = this.state.no_checked
        tempProps.rents.yes_checked = this.state.yes_checked
        tempProps.rents.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleCheck2(event){
        await this.setState({  yes_checked: false, no_checked: !this.state.no_checked})
        let tempProps = this.props.state
        tempProps.rents.yes_checked = this.state.yes_checked
        tempProps.rents.no_checked = this.state.no_checked
        tempProps.rents.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleCheck3(event){
        let mFlag = !this.state.m_checked
        let ynFlag = (this.state.yes_checked?
            (((this.state.yes_start_date === '') || (this.state.yes_end_date === ''))?false:true):
            (this.state.no_checked?(this.state.no_start_date === ''? false: true):false))
        let mwoFlag = (mFlag||this.state.w_checked||this.state.o_checked)
        let baseFlag = !(this.state.base_amount === '')
        let setFlag = ynFlag && mwoFlag && baseFlag
        console.log(setFlag)
        await this.setState({   w_checked: false, o_checked: false, m_checked: !this.state.m_checked, allSet:setFlag})
        let tempProps = this.props.state
        tempProps.rents.w_checked = this.state.w_checked
        tempProps.rents.o_checked = this.state.o_checked
        tempProps.rents.m_checked = this.state.m_checked
        tempProps.rents.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleCheck4(event){
        let wFlag = !this.state.w_checked
        let ynFlag = (this.state.yes_checked?
            (((this.state.yes_start_date === '') || (this.state.yes_end_date === ''))?false:true):
            (this.state.no_checked?(this.state.no_start_date === ''? false: true):false))
        let mwoFlag = (this.state.m_checked||wFlag||this.state.o_checked)
        let baseFlag = !(this.state.base_amount === '')
        let setFlag = ynFlag && mwoFlag && baseFlag
        console.log(setFlag)
        await this.setState({  m_checked: false, o_checked: false, w_checked: !this.state.w_checked, allSet:setFlag})
        let tempProps = this.props.state
        tempProps.rents.m_checked = this.state.m_checked
        tempProps.rents.o_checked = this.state.o_checked
        tempProps.rents.w_checked = this.state.w_checked
        tempProps.rents.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleCheck5(event){
        let oFlag = !this.state.o_checked
        let ynFlag = (this.state.yes_checked?
            (((this.state.yes_start_date === '') || (this.state.yes_end_date === ''))?false:true):
            (this.state.no_checked?(this.state.no_start_date === ''? false: true):false))
        let mwoFlag = (this.state.m_checked||this.state.w_checked||oFlag)
        let baseFlag = !(this.state.base_amount === '')
        let setFlag = ynFlag && mwoFlag && baseFlag
        console.log(setFlag)
        await this.setState({  w_checked: false, m_checked: false, o_checked: !this.state.o_checked, allSet:setFlag})
        let tempProps = this.props.state
        tempProps.rents.w_checked = this.state.w_checked
        tempProps.rents.m_checked = this.state.m_checked
        tempProps.rents.o_checked = this.state.o_checked
        tempProps.rents.allSet = this.state.allSet
        this.props.handler(tempProps)
    }



    render() {
        return (
            <div>
                <RentsView handleYesStartDate = {this.handleYesStartDate} handleYesEndDate= {this.handleYesEndDate} handleNoStartDate= {this.handleNoStartDate} handleBaseAmount= {this.handleBaseAmount} handleCheck1= {this.handleCheck1} handleCheck2= {this.handleCheck2} handleCheck3= {this.handleCheck3} handleCheck4= {this.handleCheck4} handleCheck5= {this.handleCheck5} yes_checked = {this.state.yes_checked} yes_start_date= {this.state.yes_start_date} yes_end_date= {this.state.yes_end_date} no_checked= {this.state.no_checked} no_start_date= {this.state.no_start_date} base_amount= {this.state.base_amount} m_checked= {this.state.m_checked} w_checked= {this.state.w_checked} o_checked= {this.state.o_checked}/>
            </div>
        )
    }
}

export default Rent
