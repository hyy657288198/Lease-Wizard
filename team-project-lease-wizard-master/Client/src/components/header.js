/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import { Home, User, Settings } from 'react-feather'
import { Link, withRouter } from 'react-router-dom'

export class Header extends Component {
    constructor(props) {
        super(props)
        this.handleSignOut = this.handleSignOut.bind(this)
    }

    handleSignOut(event){
        let tempProps = this.props.state
        tempProps.global.current_user = ''
        tempProps.global.current_user_name = ''
        tempProps.global.current_user_type = ''
        this.props.handler(tempProps)
    }

    render() {
        const { location } = this.props;
        const signOut = (location) => {
            if(this.props.state.global.current_user_type != ''){
                switch (location.pathname) {
                    case "/":
                        return true;
                    case "/login":
                        return true;
                    case "/sign_up":
                        return true;
                    default:
                        return false
                }
            }else{
                switch (location.pathname) {
                    case "/":
                        return true;
                    case "/login":
                        return true;
                    case "/sign_up":
                        return true;
                    case "/disclaimer":
                        return true;
                    case "/concerns":
                        return true;
                    case "/sign_up_success_landlord":
                        return true;
                    case "/sign_up_success_tenant":
                        return true;
                    case "/utility_and_service":
                        return true;
                    case "/rent":
                        return true;
                    case "/deposits":
                        return true;
                    case "/dates":
                        return true;
                    case "/payment_method":
                        return true;
                    case"/timeline":
                        return true;
                    case "/timeline_QandA":
                        return true;
                    case "/parties":
                        return true;
                    case "/additional_terms":
                        return true;
                    case "/change_to_parties":
                        return true;
                    case "/legal_requirements":
                        return true;
                    case "/general_package":
                        return true
                    case "/build_package":
                        return true
                    case "/additional_terms":
                        return true;
                    case "/end":
                        return true;
                    default:
                        return false
                }
            }
        }

        const signIn = (location) => {
            if(this.props.state.global.current_user_type != ''){
                switch (location.pathname) {
                    case "/":
                        return true;
                    case "/concerns":
                        return true;
                    case "/sign_up_success_landlord":
                        return true;
                    case "/sign_up_success_tenant":
                        return true;
                    case "/utility_and_service":
                        return true;
                    case "/rent":
                        return true;
                    case "/deposits":
                        return true;
                    case "/dates":
                        return true;
                    case "/payment_method":
                        return true;
                    case"/timeline":
                        return true;
                    case "/timeline_QandA":
                        return true;
                    case "/parties":
                        return true;
                    case "/additional_terms":
                        return true;
                    case "/change_to_parties":
                        return true;
                    case "/legal_requirements":
                        return true;
                    case "/general_package":
                        return true
                    case "/build_package":
                        return true
                    case "/additional_terms":
                        return true;
                    case "/end":
                        return true;
                    case "/disclaimer":
                        return true;
                    default:
                        return false
                }
            }
        }

        return (
            <header>
            <div className="homeHeader">
                <Home className="home" size={40} color="white" strokeWidth="1" />
                <h1>Ontario Lease Wizard</h1>
            </div>

            <div className="sub-nav">
            <Link to={signIn(location)}>
                    <Link to="/login" className="button"><button className={signIn(location) ? "hidden" : null}>Sign In</button></Link>
                    <h2 className={signOut(location) ? "hidden" : null}>Welcome, {this.props.state.global.current_user_name}</h2><Link to="/login" className="button"><button className={signOut(location) ? "hidden" : null } onClick={this.handleSignOut}>Sign Out</button></Link>
            </Link>
            </div>
            </header>
        )
    }
}

export default withRouter(Header)
