/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import NavigationItem from './navigationItem.js'

let moneySvg = require("../../assets/navigation/money.svg"),
    legalRequirementSvg = require("../../assets/navigation/legal_requirement.svg"),
    timelineSvg = require("../../assets/navigation/timeline.svg"),
    unitSvg = require("../../assets/navigation/unit.svg"),
    partiesSvg = require("../../assets/navigation/parties.svg"),
    additionalTermsSvg = require("../../assets/navigation/additional terms.svg")


export class navigation extends Component {
     constructor(props) {
        super(props)
    }
    render() {
        const { location } = this.props
        const hiddenNav = (location.pathname === "/" ? "hidden" : (location.pathname === "/login" | location.pathname === "/sign_up" | location.pathname === "/sign_up_success" ? "hidden" :(location.pathname === "/disclaimer" ? "hidden" :"")))
        let allNavigationItem =
            <ul>
                <NavigationItem imageSrc={moneySvg} imageClass="Money" imageAlt="Money" name="Money" state={this.props.state} />
                <NavigationItem imageSrc={timelineSvg} imageClass="Timeline" alt="Timeline" name="Timeline" state={this.props.state} />
                <NavigationItem imageSrc={unitSvg} imageClass="Unit" imageAlt="Unit" name="Unit" state={this.props.state} />
                <NavigationItem imageSrc={partiesSvg} imageClass="Parties" imageAlt="Parties" name="Parties" state={this.props.state} />
                <NavigationItem imageSrc={legalRequirementSvg} imageClass="legalRequirementSvg" imageAlt="legal Requirements" name="Legal Requirements" state={this.props.state} />
                <NavigationItem imageSrc={additionalTermsSvg} imageclass="AdditionalTerms" imageAlt="Additional Terms" name="Additional Terms" state={this.state} />
            </ul>
        if(this.props.state["global"]["current_user_type"] === "tenant"){
            allNavigationItem =
                <ul>
                    <NavigationItem imageSrc={timelineSvg} imageClass="Timeline" alt="Timeline" name="Timeline" state={this.props.state} />
                    <NavigationItem imageSrc={partiesSvg} imageClass="Parties" imageAlt="Parties" name="Parties" state={this.props.state} />
                    <NavigationItem imageSrc={legalRequirementSvg} imageClass="legalRequirementSvg" imageAlt="legal Requirements" name="Legal Requirements" state={this.props.state} />
                </ul>
        }

        return (
            <nav className={hiddenNav}>
            <div className="navDiv">
                <h2>Table of Contents</h2>
                {allNavigationItem}
            </div>
            </nav>
        )
    }
}

export default withRouter(navigation)
