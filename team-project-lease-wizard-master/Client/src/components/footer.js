/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'react-feather'
import ProgressBarView from './content/progress_bar.js'

export class Footer extends Component {

    ResetAllSet() {
        const temp_state = this.props.state;
        temp_state.allSet = false;
        this.props.handler(temp_state)
    }

    render() {
        // It will only show our buttons if it's the right route for them to appear.
        const { location } = this.props;
        const previousHidden = (location) => {
            if(this.props.state.global.current_user_type == 'tenant'){
                switch (location.pathname) {
                    case "/":
                        return true;
                    case "/sign_up":
                        return true;
                    case "/sign_up_success_landlord":
                        return true;
                    case "/sign_up_success_tenant":
                        return true;
                    case "/login":
                        return true;
                    case "/disclaimer":
                        return true;
                    case "/concerns":
                        return true;
                    case "/timeline":
                        return true;
                    case "/end":
                      return true;
                    default:
                        return false
                }
            }else{
                switch (location.pathname) {
                    case "/":
                        return true;
                    case "/sign_up":
                        return true;
                    case "/sign_up_success_landlord":
                        return true;
                    case "/sign_up_success_tenant":
                        return true;
                    case "/login":
                        return true;
                    case "/disclaimer":
                        return true;
                    case "/concerns":
                        return true;
                    case "/end":
                      return true;
                    default:
                        return false
                }
            }
        }
        const nextHidden = (location) => {
            switch (location.pathname) {
                case "/":
                    return true;
                case "/login":
                    return true;
                case "/sign_up":
                    return true;
                case "/sign_up_success_landlord":
                    return true;
                case "/sign_up_success_tenant":
                    return true;
                case "/disclaimer":
                    return true;
                case "/additional_terms":
                    return true;
                case "/end":
                    return true;
                default:
                    return false
            }
        }
        const previousLink = (location) => {
            switch (location.pathname) {
                case "/concerns":
                    return "/disclaimer";
                case "/rent":
                    return "/concerns";
                case "/utility_and_service":
                    return "/rent"
                case "/deposits":
                    return "/utility_and_service";
                case "/dates":
                    return "/deposits";
                case "/payment_method":
                    return "/dates";
                case"/timeline":
                    if(this.props.state.global.current_user_type == 'tenant'){
                        return "/concerns";
                    }else{
                        return "/payment_method";
                    }
                case "/timeline_QandA":
                    return "/timeline";
                case "/parties":
                    return "/timeline_QandA";
                case "/change_to_parties":
                    return "/parties";
                case "/legal_requirements":
                    return "/change_to_parties";
                case "/additional_terms":
                    return "/legal_requirements";
                case "/prohibit_terms":
                     return "/legal_requirements";
                case "/general_package":
                    return "/additional_terms"
                case "/build_package":
                    return "/additional_terms"
                default:
                    return "/";
            }
        }
        const nextLink = (location) => {
            switch (location.pathname) {
                case "/concerns":
                     if(this.props.state.global.current_user_type == 'tenant'){
                        return "/timeline";
                    }else{
                        return "/rent";
                    }
                case "/rent":
                    return "/utility_and_service";
                case "/utility_and_service":
                    return "/deposits"
                case "/deposits":
                    return "/dates";
                case "/dates":
                    return "/payment_method";
                case "/payment_method":
                    return "/timeline"
                case"/timeline":
                    return "/timeline_QandA";
                case "/timeline_QandA":
                    return "/parties";
                case "/parties":
                    return "/change_to_parties";
                case "/change_to_parties":
                    return "/legal_requirements";
                case "/legal_requirements":
                    if(this.props.state.global.current_user_type == 'tenant'){
                        if(this.props.state.a_terms.pkg_add === 0){
                             return "/end";
                        }
                        else{
                             return "/prohibit_terms";
                            }
                    }else{
                        return "/additional_terms";
                    }
                case "/prohibit_terms":
                     return "/end";
                case "/general_package":
                    return "/end";
                case "/build_package":
                    return "/end";
                default:
                    return "/end";
            }
        }
        return (
            <footer>
                <Link to={previousLink(location)}>
                    <button id="previous" className={previousHidden(location) ? "hidden" : null}>
                        <ChevronLeft size={24} className="chevronLeft" />Previous</button>
                </Link>
                <ProgressBarView className="progress" state={this.props.state} handler={this.props.handler}/>
                <Link to={nextLink(location)}>
                    <button id="next" className={nextHidden(location) ? "hidden" : null}
                        onClick={this.ResetAllSet.bind(this)}>Next
                            <ChevronRight size={24} className="chevronRight"/>
                    </button>
                </Link>
            </footer>
        )
    }
}

export default withRouter(Footer)
