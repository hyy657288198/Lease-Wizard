/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'

// Importing our content pages.
import Home from '../../pages/home.js'
import SignUp from '../../pages/sign_up/sign_up.js'
import SignUpSuccessTenant from '../../pages/sign_up/sign_up_success_tenant.js'
import SignUpSuccessLandlord from '../../pages/sign_up/sign_up_success_landlord.js'
import LoginProfile from '../../pages/login/login_start.js'
import Disclaimer from '../../pages/disclaimer.js'
import Concerns from '../../pages/concerns/concerns.js'
import Rent from '../../pages/money/rent_package/rent.js'
import Deposits from '../../pages/money/deposit_package/deposits.js'
import Dates from '../../pages/money/dates_package/dates.js'
import Payment from '../../pages/money/payment_method/payment_method.js'
import Timeline from '../../pages/Timeline/Timeline/timeline.js'
import TimelineQA from '../../pages/Timeline/Questions_and_Answers/q_and_a_view.js'
import LegalRequirements from "../../pages/legal_requirements/legal_requirements_view";
import Parties from '../../pages/parties/parties_package/parties.js'
import PartiesChange from '../../pages/parties/changes_to_the_parties/change_to_parties_view'
import AddtionalTerms from '../../pages/additional_terms/a_terms/a_terms.js'
import SideBarView from './side_bar.js'
import ProhibitTermView from '../../pages/additional_terms/p_terms/p_terms_view.js'
import EndView from '../../pages/end/end.js'
import GeneralPackageView from '../../pages/additional_terms/g_package/g_package_view.js'
import BuildPackage from '../../pages/additional_terms/build/build.js'
import UtilityAndService from '../../pages/money/utility_and_server/utility_and_server.js'
import ProgressBarView from './progress_bar.js'
// Importing our sidebars (they change with the route, as the pages do.)

// The Router below changes the page content depending on the current route path. Each page is going to have some way -- whether in the footer or on the page, or even through components/navigation.js -- to push a new path, thus changing the content.

// If a component needs to manipulate App-level state (and that will be often) then you need to throw the Route a render and make an inline function to inject the passing of props and prop functions. See /concerns below.
export class Content extends Component {
    render() {
        return (<>
            <div className="content">
            <div className="contentRoute">
                    <AnimatedSwitch
                        atEnter={{ opacity: 0, offset: 100 }}
                        atLeave={{ opacity: 0 }}
                        atActive={{ opacity: 1, offset: 0 }}
                        className="switch-wrapper"
                        mapStyles={(styles) => ({
                            transform: `translateX(${styles.offset}%)`,
                            opacity: `${styles.opacity}`
                        })}
                    >
                <Route exact path="/" component={Home} />
                <Route exact path="/login" render={() => <LoginProfile state={this.props.state} handler={this.props.handler} />}/>
                <Route exact path="/sign_up" render={() => <SignUp state={this.props.state} handler={this.props.handler} />}/>
                <Route exact path="/sign_up_success_tenant" component={SignUpSuccessTenant}/>
                <Route exact path="/sign_up_success_landlord" component={SignUpSuccessLandlord}/>
                <Route exact path="/disclaimer" component={Disclaimer}/>
                <Route exact path="/concerns" render={() => <Concerns state={this.props.state} handler={this.props.handler} />}/>
                <Route exact path="/rent" render={() => <Rent state={this.props.state} handler={this.props.handler} />} />
                <Route exact path="/deposits" render={() => <Deposits state={this.props.state} handler={this.props.handler} />} />
                <Route exact path="/dates" render={() => <Dates state={this.props.state} handler={this.props.handler} />} />
                <Route exact path="/payment_method" render={() => <Payment state={this.props.state} handler={this.props.handler} />} />
                <Route exact path="/utility_and_service" render={() => <UtilityAndService state={this.props.state} handler={this.props.handler} />} />
                <Route exact path="/timeline" render={() => <Timeline state={this.props.state} handler={this.props.handler} />} />
                <Route exact path="/timeline_QandA" render={() => <TimelineQA state={this.props.state} handler={this.props.handler} />} />
                <Route exact path="/parties" render={() => <Parties state={this.props.state} handler={this.props.handler} />} />
                <Route exact path="/change_to_parties" render={() => <PartiesChange state={this.props.state} handler={this.props.handler} />} />
                <Route exact path="/legal_requirements" render={() => <LegalRequirements state={this.props.state} handler={this.props.handler} />} />
                <Route exact path="/additional_terms" render={() => <AddtionalTerms state={this.props.state} handler={this.props.handler} />}/>
                <Route exact path="/prohibit_terms" render={() => <ProhibitTermView state={this.props.state} handler={this.props.handler} />}/>
                <Route exact path="/general_package" render={() => <GeneralPackageView state={this.props.state} handler={this.props.handler} />}/>
                <Route exact path="/build_package" render={() => <BuildPackage state={this.props.state} handler={this.props.handler} />}/>
                <Route exact path="/end" render={() => <EndView state={this.props.state} handler={this.props.handler} />}/>
                </AnimatedSwitch>
            </div>
            <SideBarView/>
            </div>
            </>
        )
    }
}

export default Content
