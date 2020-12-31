/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'

import { Route } from 'react-router-dom'
import '../../App.scss'
import sidebarHome from '../../sidebars/home.js'

export class SideBarView extends Component{
	render(){
		return(
			<div className="sidebar">
                <h2>Learn More</h2>
                <Route exact path={["/", "/login", "/sign_up", "/sign_up_success_tenant", "/sign_up_success_landlord", "/disclaimer", "/concerns", "/rent", "/deposits", "/dates", "/utility_and_service", "/timeline", "/timeline_QandA", "/parties", "/change_to_parties", "/legal_requirements","/additional_terms", "/prohibit_terms", "/general_package", "/build_package", "/payment_method","/end"]} component={sidebarHome} />
            </div>
            )
	}
}

export default SideBarView
