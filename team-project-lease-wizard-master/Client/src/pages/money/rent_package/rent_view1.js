/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import 'rc-slider/assets/index.css'
import rentViewContent from '../../allPagesContents/mainContent/rent_view_content'
import infoIcon from "./../../../assets/pages/info.svg";

export class RentsView extends Component {

    render() {
        const {handleYesStartDate, handleYesEndDate, handleNoStartDate, handleBaseAmount, handleCheck1, handleCheck2, handleCheck3, handleCheck4, handleCheck5, yes_checked, yes_start_date, yes_end_date, no_checked, no_start_date, base_amount, m_checked, w_checked, o_checked } = this.props
        return (
            <div>
                <h1> {rentViewContent.heading} </h1>
               <br></br>
               <h2> {rentViewContent.question} </h2>


                <form style = {{display: "inline-block"}}>
                 <label><input type="radio" checked={yes_checked} onClick={handleCheck1} onChange={()=>{}}/>Yes</label>    </form>
                <label style = {{display: "inline-block", padding: 18}}>
                    &nbsp;&nbsp;&nbsp;Start date:&nbsp; <input className="dateIcon" type="date" value={yes_start_date} onChange={handleYesStartDate} />
                </label>
                <label style = {{display: "inline-block", padding: 18}}>
                    &nbsp;&nbsp;&nbsp;End date:&nbsp; <input className="dateIcon" type="date" value={yes_end_date} onChange={handleYesEndDate} />
                </label>

                <br></br>

                <form style = {{display: "inline-block"}}> <label><input type="radio" checked={no_checked} onClick={handleCheck2} onChange={()=>{}}/>No</label>    </form>
                <label style = {{display: "inline-block", padding: 18}}>
                    &nbsp;&nbsp;&nbsp;Start date:&nbsp; <input className="dateIcon" type="date" value={no_start_date} onChange={handleNoStartDate} />
                </label>

                <br></br>
                <br></br>
                <label style = {{display: "inline-block"}}>
                <h2 style = {{display: "inline-block"}}>Base Rent:</h2>&nbsp; <input type="text" value={base_amount} onChange={handleBaseAmount} />
                </label>
                <h2 style = {{display: "inline-block"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;every:</h2>
                <form style = {{display: "inline-block", padding: 5}}> <label><input type="radio"  checked={m_checked} onClick={handleCheck3} onChange={()=>{}}/> Month</label>    </form>
                <form style = {{display: "inline-block", padding: 5}}><label><input type="radio" checked={w_checked} onClick={handleCheck4} onChange={()=>{}}/>Week</label>    </form>
                <form style = {{display: "inline-block", padding: 5}}><label><input type="radio"  checked={o_checked} onClick={handleCheck5} onChange={()=>{}}/>Other</label>  </form>

                {rentViewContent.lines.map((item, key) => <p key={key}>{item}</p>)}
            </div>
        )
    }
}

export default RentsView
