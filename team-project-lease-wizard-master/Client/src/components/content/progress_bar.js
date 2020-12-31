/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'

import { Route } from 'react-router-dom'
import '../../App.scss'
import ProgressBarHome from '../../progress_bar/home.js'
import MySlider from '../../pages/shared_elements/my_slider.js'

export class ProgressBarView extends Component{
	render(){
		return(
			<div className="progress">
                <Route exact path={["/concerns", "/rent", "/deposits", "/dates", "/utility_and_service", "/timeline", "/timeline_QandA", "/parties", "/change_to_parties", "/legal_requirements","/additional_terms", "/prohibit_terms", "/general_package", "/build_package", "/end", "/payment_method"]} render={() =><ProgressBarHome state={this.props.state} handler={this.props.handler}/>} />
            </div>
            )
	}
}

export default ProgressBarView
