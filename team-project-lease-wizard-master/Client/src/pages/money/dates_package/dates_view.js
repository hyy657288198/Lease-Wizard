/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import 'rc-slider/assets/index.css'
import datesViewContent from '../../allPagesContents/mainContent/dates_view_content'

export class DatesView extends Component {


    render() {
        const {movein_date, handleMoveInDate, start_fixed_date, handleFixedDate, toggleClass, active, pro_rated_start_date, pro_rated_end_date, pro_rated_due_date, pro_rated_amount, handleOptionDate1, handleOptionDate2, handleOptionDate3, handleOptionAmount} = this.props
        let divStyle = {
            hidden: {
                visibility: "hidden",
                height: 0,
                opacity: 0
            },
            visible: {
                visibility: "visible",
                height: "auto",
                opacity: 1
            }
        }
        let symbol = " ➖ "
        if (!active) {
            symbol = " ➕ "
        }

        return (
            <div>
               <h1>{datesViewContent.heading}</h1>
                <p>{datesViewContent.move_in_heading} <input className="dateIcon" type="date" value={movein_date} onChange={handleMoveInDate} /></p>
                {datesViewContent.move_in_lines.map((item, key) => <p key={key}>{item}</p>)}
                <p> {datesViewContent.fixed_term_heading} <input className="dateIcon" type="date" value={start_fixed_date} onChange={handleFixedDate} /></p>
                <p> {datesViewContent.fixed_term_lines}
                <span onClick={toggleClass} style = {{display: "inline-block", padding: 18}}> {symbol} Add pro-rated rent</span>
                </p>

                <div style={active ? divStyle.visible : divStyle.hidden}>
                    <p> From &nbsp;
                        <input className="dateIcon" type="date" value={pro_rated_start_date} onChange={handleOptionDate1} />
                        &nbsp; to &nbsp;
                        <input className="dateIcon" type="date" value={pro_rated_end_date} onChange={handleOptionDate2} />
                        &nbsp; the Tenant will pay a pro-rated amount
                    </p>
                    <p> &nbsp; $ &nbsp;
                        <input type="text" value={pro_rated_amount} onChange={handleOptionAmount} style={{width: 260}}
                                placeholder="Please fill in the amount:" />
                        .
                    </p>
                    <p>This amount is due on &nbsp;
                        <input className="dateIcon" type="date" value={pro_rated_due_date} onChange={handleOptionDate3} />
                    </p>
                </div>
            </div>
        )
    }
}

export default DatesView
