import React, { Component } from 'react'
import '../App.css'

        let concerns_progress = 0
        let legal_progress = 0
        let utility_progress = 0
        let cp_progress = 0
        let q_a_progress = 0
        let time_progress = 0

export class ProgressBarHome extends Component {
     constructor(props) {
        super(props)
        this.state = {
            active: false,
            current_value: 0
            
        }

    }
    render() {
        concerns_progress = window.location.pathname ==="/concerns" ?0:concerns_progress
        legal_progress = window.location.pathname ==="/concerns" ?0:legal_progress
        utility_progress = window.location.pathname ==="/concerns" ?0:utility_progress
        cp_progress = window.location.pathname ==="/concerns" ?0:cp_progress
        q_a_progress = window.location.pathname ==="/concerns" ?0:q_a_progress
        time_progress = window.location.pathname ==="/concerns" ?0: time_progress
        
        let a_terms_progress = this.props.state.a_terms.allSet ? 8 : 0
        let g_pkg_progress = this.props.state.a_terms.pkg_add ===1?14: 
        (this.props.state.a_terms.pkg_add ===2? 0: (window.location.pathname ==="/end" ?14:0))
        let bld_pkg_progress = this.props.state.a_terms.pkg_add ===2?(this.props.state.buildPkg.allSet ? 14:0): 
        (this.props.state.a_terms.pkg_add ===1? 0: (window.location.pathname ==="/end" ?14:0))
        concerns_progress = window.location.pathname ==="/rent" ? 6:concerns_progress
        legal_progress = window.location.pathname ==="/legal_requirements" ?8:legal_progress
        let dates_progress = this.props.state.dates.allSet ?8:0
        let deposit_progress = this.props.state.deposits.allSet ?8:0
        let rent_progress = this.props.state.rents.allSet ?8:0
        utility_progress = window.location.pathname ==="/utility_and_service" ?6:utility_progress
        cp_progress = window.location.pathname ==="/change_to_parties" ?7:cp_progress
        q_a_progress = window.location.pathname ==="/timeline_QandA" ?7:q_a_progress
        time_progress = window.location.pathname ==="/timeline" ?6:time_progress
        let parties_progress = this.props.state.parties.allSet ?8:0
        let pm_progress = this.props.state.payment_method.allSet ?6:0
        let progress_part = a_terms_progress + g_pkg_progress +bld_pkg_progress + 
           concerns_progress + legal_progress + dates_progress + deposit_progress +
           rent_progress + utility_progress + cp_progress + parties_progress + q_a_progress + time_progress +
           pm_progress
        // let progress = (window.location.pathname === "/additional_terms" ? 62 : 
        //     window.location.pathname ==="/general_package" ?80:
        //     window.location.pathname ==="/build_package" ?75:
        //     window.location.pathname ==="/prohibit_terms" ?90:
        //     window.location.pathname ==="/concerns" ? 0:
        //     window.location.pathname ==="/end" ?100:
        //     window.location.pathname ==="/legal_requirements" ?56:
        //     window.location.pathname ==="/dates" ?25:
        //     window.location.pathname ==="/deposits" ?20:
        //     window.location.pathname ==="/rent" ?10:
        //     window.location.pathname ==="/utility_and_service" ?15:
        //     window.location.pathname ==="/parties_change" ?50:
        //     window.location.pathname ==="/parties" ?45:
        //     window.location.pathname ==="/timeline_QandA" ?40:
        //     window.location.pathname ==="/timeline" ?32:this.state.current_value)
        // let w = (progress*5).toString() + "%"
        let w = (progress_part).toString() + "%"
        const fixBgStyle = {
                  width: w,
                  height: "45px",
                  borderRadius: "1%",
                  background: "#ffffff",
                  boxShadow: "2px 4px 6px 0px rgba(0, 0, 0, 0.25)"
}
       const textStyle = {
        wordBreak: "normal",
            width: "2em",
            textAlign: "left",
            fontSize: "2em",
            fontWeight: "bold",
            marginLeft: "-3em",
            verticalAlign: "bottom",
            display: "inline-block",
            whiteSpace: "nowrap",
       }
        return (
            <div className="progress">
                    <div className="outer" >
                        <div className="inner">
                            <div className = "bg" style={fixBgStyle}>
                                <span className = "text" style ={textStyle}>{progress_part}%</span>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default ProgressBarHome
