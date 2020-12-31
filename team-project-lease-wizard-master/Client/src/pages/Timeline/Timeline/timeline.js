/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react';
import TimelineList from './timelineListView.js';
import timelineViewContent from '../../allPagesContents/mainContent/timeline_content'
import timelineLabelContent from '../../allPagesContents/mainContent/timeline_label_content'

const datetime = require('date-and-time')
const today = new Date()


class TimeLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label_set: timelineLabelContent.content,
            // label_set: [{label: 'fixed-term', color: '#006689'}, {label: 'month-to-month', color: '#42bcf5'}, {label: 'pro-rated', color: '#653cd6'}, {label: 'important dates', color: '#7BF1D4'}],
            next_page: "/" ,
            allSet: this.props.state.dates.allSet,       // fixed by M
            movein_date: this.props.state.dates.movein_date,
            deposit_date: this.props.state.deposits.last_month_deposit_date,
            fixterm_date: this.props.state.rents.yes_start_date,
            fixterm_end: this.props.state.rents.yes_end_date,
            notfixterm_date: this.props.state.rents.no_start_date,
            payment_date: this.props.state.dates.start_fixed_date
        }
    }

    helper_month_calculator(my_list, end_date, due, legend){
        const temp_year = parseInt(this.state.fixterm_date.slice(0,4)) + 1
        const next_year = new Date(temp_year.toString() + this.state.fixterm_date.slice(4,10))
        if (end_date < next_year){
            while(due < end_date){
                my_list.push({date: due, description: "Rent Payment Due", legend: legend})
                due = datetime.addMonths(due, 1)
            }
        }else{
            for (let i = 0; i < 12; i++){
                my_list.push({date: due, description: "Rent Payment Due", legend: legend})
                due = datetime.addMonths(due, 1)
            }
        }
    }

    helper_week_calculator(my_list, end_date, due, legend){
        const temp_year = parseInt(this.state.fixterm_date.slice(0,4)) + 1
        const next_year = new Date(temp_year.toString() + this.state.fixterm_date.slice(4,10))
        if (end_date < next_year){
            while(due < end_date){
                my_list.push({date: due, description: "Rent Payment Due", legend: legend})
                due = datetime.addDays(due, 7)
            }
        }else{
            //shoule be 12*4
            for (let i = 0; i < 10; i++){
                my_list.push({date: due, description: "Rent Payment Due", legend: legend})
                due = datetime.addDays(due, 7)
            }
        }
    }

    handle_rent_dates(all_dates){
        if (this.props.state.rents.yes_checked){
            all_dates.push({date: new Date(this.state.fixterm_date), description: "Fixed-term starts", legend: "important dates"} )
            const fix_end = new Date(this.state.fixterm_end)
            all_dates.push({date: fix_end, description: "End of fixed term", legend: "important dates"} )
            const rent_due = new Date(this.state.payment_date)

            if (this.props.state.rents.m_checked){
                this.helper_month_calculator(all_dates, fix_end, rent_due, "fixed-term")
            }else if (this.props.state.rents.w_checked){
                this.helper_week_calculator(all_dates, fix_end, rent_due, "fixed-term")
            }
        }else if (this.props.state.rents.no_checked){
            const not_fix_start = new Date(this.state.notfixterm_date)
            const end = datetime.addMonths(new Date(this.state.notfixterm_date), 12)
            all_dates.push({date: datetime.addMonths(end, -4), description: "Earliest date for notice to end tenancy", legend: "important dates"} )

            if (this.props.state.rents.m_checked){
                all_dates.push({date: not_fix_start, description: "Start of month-to-month", legend: "important dates"} )
                this.helper_month_calculator(all_dates, end, new Date(this.state.payment_date), "month-to-month")
            }else if (this.props.state.rents.w_checked){
                all_dates.push({date: not_fix_start, description: "Start of week-to-week", legend: "important dates"} )
                this.helper_week_calculator(all_dates, end, new Date(this.state.payment_date), "fixed-term")
            }
        }
    }

    handle_pro_rate_dates(all_dates){
        const pro_start = new Date(this.props.state.dates.pro_rated_start_date)
        all_dates.push({date: pro_start, description: "Pro-rated rent term start", legend: "important dates"} )
        const pro_end = new Date(this.props.state.dates.pro_rated_end_date)
        all_dates.push({date: pro_end, description: "Pro-rated rent term end", legend: "important dates"} )

        this.helper_month_calculator(all_dates, pro_end, new Date(this.props.state.dates.pro_rated_due_date), "pro-rated")
    }

    sort_dates(){
        let all_dates = []
        if (this.state.movein_date !== ''){
            all_dates.push({date: new Date(this.state.movein_date), description: "Move in date", legend: "important dates"} )
        }
        if (this.state.deposit_date !== ''){
            all_dates.push({date: new Date(this.state.deposit_date), description: "Deposit received", legend: "important dates"} )
        }
        if (this.props.state.dates.pro_rated_start_date !== '') { this.handle_pro_rate_dates(all_dates) }
        if (this.state.payment_date != '') { this.handle_rent_dates(all_dates) }

        const sorted_dates = all_dates.sort((a,b) => a.date - b.date)
        return sorted_dates
    }

    process_all_dates(){
        let result = []
        const sorted_dates = this.sort_dates()

        for (let i = 0; i < sorted_dates.length; i++){
            const mon = datetime.format(sorted_dates[i].date, 'MMM, ddd')
            const template = {date: sorted_dates[i].date.getUTCDate(), mon: mon, desc: sorted_dates[i].description, legend: sorted_dates[i].legend}
            result.push(template)
        }
        return result
    }


    render() {
        const result = this.process_all_dates()
        let start_mon = datetime.format(datetime.addMonths(today, -12), 'MMM YYYY')
        let end_mon = datetime.format(today, 'MMM YYYY')
        const sorted = this.sort_dates()

        if (sorted.length> 0){
            start_mon = datetime.format(sorted[0].date, 'MMM YYYY')
            end_mon = datetime.format(sorted[sorted.length - 1].date, 'MMM YYYY')
        }
        return (
        <div>
            <h1> {timelineViewContent.heading} </h1>
            <p style={{marginRight: 100}}> {timelineViewContent.content} </p>
            <h3 style={{marginTop: 15}}> {timelineLabelContent.heading} </h3>
            &nbsp;&nbsp;
            {this.state.label_set.map((label) => {
                return (
                    <div style={{display:"inline-block", marginRight: 120}} key = {label.label}>
                    <div style = {{backgroundColor:label.color, width: 20, height: 20, display:"inline-block"}}> </div>
                    <span>&nbsp; {label.label}  </span>
                    </div>
                )
            })}
            <br></br><br></br>
            <TimelineList timeline_info={result} start_mon={start_mon} end_mon={end_mon} ></TimelineList>
        </div>
         );
    }
}

export default TimeLine;
