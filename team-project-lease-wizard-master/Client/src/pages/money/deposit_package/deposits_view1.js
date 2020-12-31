/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import 'rc-slider/assets/index.css'
import depositsViewContent from '../../allPagesContents/mainContent/deposits_view_content'
import PopupInfo from '../../../pages/popup_info/popup_info'
import infoIcon from "./../../../assets/pages/info.svg";

export class DepositsView extends Component {

    render() {
        const {handleLastMonthRent, handleKeyDeposit, handleLastMonthDue, handleKeyDue, handleLastMonthRequireCheck, handleKeyRequireCheck, handleLastMonthNotRequireCheck, handleKeyNotRequireCheck, rent_not_required_checked, rent_required_checked, last_month_deposit_amount, last_month_deposit_date, key_not_required_checked, key_required_checked, key_deposit_amount, key_deposit_date} = this.props

        return (
            <div>
                <h1> {depositsViewContent.heading} </h1>
                <h2> {depositsViewContent.rent_heading} &nbsp;&nbsp;<PopupInfo text={depositsViewContent.popupInfo[0]}/> </h2>
                {depositsViewContent.rent_content_lines.map((item, key) => <p key={key}>{item}</p>)}
                <form><label><input type="radio" checked={rent_not_required_checked} onChange={handleLastMonthNotRequireCheck}/> Not required</label>    </form>
                <form><label><input type="radio" checked={rent_required_checked} onChange={handleLastMonthRequireCheck}/> Last months rent deposit is required.</label>    </form>
                <label>
                    $<input type="text" value={last_month_deposit_amount} onChange={handleLastMonthRent} />
                </label>
                <label>
                    &nbsp;&nbsp;&nbsp;due on:&nbsp; <input className="dateIcon" type="date" value={last_month_deposit_date} onChange={handleLastMonthDue} /><PopupInfo text={depositsViewContent.popupInfo[0]}/>
                </label>

                <h2>{depositsViewContent.key_heading} &nbsp;&nbsp;<PopupInfo text={depositsViewContent.popupInfo[0]}/></h2>
                {depositsViewContent.key_content_lines.map((item, key) => <p key={key}>{item}</p>)}
                <form><label><input type="radio"  checked={key_not_required_checked} onChange={handleKeyNotRequireCheck}/> Not required</label>    </form>
                <form><label><input type="radio" checked={key_required_checked} onChange={handleKeyRequireCheck}/> Key deposit is required.</label>    </form>

                <label>
                    $<input type="text" value={key_deposit_amount} onChange={handleKeyDeposit} />
                </label>
                <label>
                    &nbsp;&nbsp;&nbsp;due on:&nbsp; <input className="dateIcon" type="date" value={key_deposit_date} onChange={handleKeyDue} />
                </label>

                <h2> {depositsViewContent.other_heading} <PopupInfo text={depositsViewContent.popupInfo[0]}/></h2>
                {depositsViewContent.other_content_lines.map((item, key) => <p key={key}>{item}</p>)}
            </div>
        )
    }
}

export default DepositsView
