/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import "./cal.css"

const datetime = require('date-and-time')

class Calculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date_input: "",
            date_result: "",
            num_day_notice: 30
        }
    }

    async handleDate(event){
        const input_string = event.target.value
        const input_date = new Date(event.target.value)
        const result_date = datetime.addDays(input_date, -this.state.num_day_notice)
        const result_string = datetime.format(result_date, 'YYYY-MM-DD')
        await this.setState({
            date_input: input_string,
            date_result: result_string
        })
        console.log(input_string)
        console.log(result_string)
        // console.log(new Date(this.state.date_input))
        // console.log(datetime.addDays(new Date(this.state.date_input), -10))
        // console.log(datetime.format(new Date(this.state.date_input), 'MM-DD-YYYY'))
    }
    render() {

        return (
            <div>
                <h4 id="cal_subtitle">Move out notice time</h4>
                <p>There are rules about when a Tenant can end the <span id="cal_important">Tenancy</span> .</p>
                <p>In general, the Tenancy can only end on the <span id="cal_important">last day of the period</span> and Tenants must give the
                Landlord <span id="cal_important">written notice</span> at least <span id="cal_important">{this.state.num_day_notice}</span> days before they move out.
                </p>
                <br />
                <h4 id="cal_subtitle">Move out calculator</h4>
                <p>If I want to move out on</p>
                <input className="dateIcon" type="date" onChange={this.handleDate.bind(this)}/>
                <p>I must give written notice by</p>
                <input className="dateIcon" type="date" value={this.state.date_result} readOnly/>
                <p> <span id="cal_important">More tips</span> on moving out</p>
            </div>
            )
    }
}

export default Calculator;
