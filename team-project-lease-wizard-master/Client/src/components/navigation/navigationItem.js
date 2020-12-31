/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'

import { ChevronRight } from 'react-feather'
import { Link } from 'react-router-dom'
import AdditionalSubNav from '../../pages/additional_terms/a_sub_nav_list.js'
import TimelineSubNav from '../../pages/Timeline/timeline_sub_nav_list.js'
import MoneySubNav from '../../pages/money/money_sub_nav_list.js'
import PartiesSubNav from '../../pages/parties/parties_sub_nav_list.js'
import RequirementsSubNav from '../../pages/legal_requirements/legal_requirements_sub_nav_list.js'

class NavigationItem extends Component {
    constructor(props) {
        super(props)
        this.toggleClass = this.toggleClass.bind(this)
        this.state = {
            active: false,
            Additional_Terms: AdditionalSubNav,
            TimeLine: TimelineSubNav,
            Money: MoneySubNav,
            Parties: PartiesSubNav,
            Legal_Requirements: RequirementsSubNav
        }

    }
    toggleClass() {
        const currentState = this.state.active
        this.setState({ active: !currentState })
    }

    render() {
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
        let LinkStyle = {color:"black"}
        let addterm_sublist = (this.props.name === "Additional Terms" ? this.state.Additional_Terms : [])
        let timeline_sublist = (this.props.name === "Timeline" ? this.state.TimeLine : [])
        let money_sublist = (this.props.name === "Money" ? this.state.Money : [])
        let parties_sublist = (this.props.name === "Parties" ? this.state.Parties : [])
        let requirements_sublist = (this.props.name === "Legal Requirements" ? this.state.Legal_Requirements : [])

        return (
            <li
                className={this.state.active ? 'active' : null}
                onClick={this.toggleClass}
            >
            <ChevronRight className={"chevronRight " + (this.state.active ? 'active' : null)} side={25}/>
            <img src={this.props.imageSrc} className={this.props.imageClass} alt={this.props.imageAlt} />
            <span>{this.props.name}</span>
            <div style={this.state.active ? divStyle.visible : divStyle.hidden}>
            <ul>  {money_sublist.map((item, key) =>
                <li key={item.id}><Link style={LinkStyle} to={item.add} ><input id={item.id} type="checkbox" checked={item.checked} onChange={()=>{}}/> {item.desc}</Link></li>)}
            </ul>
            <ul>  {timeline_sublist.map((item, key) =>
                <li key={item.id}><Link style={LinkStyle} to={item.add} ><input id={item.id} type="checkbox" checked={item.checked} onChange={()=>{}}/> {item.desc}</Link></li>)}
            </ul>
            <ul>  {addterm_sublist.map((item, key) =>
                    <li key={item.id}><Link style = {LinkStyle} to={item.add} ><input id={item.id} type="checkbox" checked={item.checked} onChange={()=>{}}/> {item.desc}</Link></li>)}
            </ul>
            <ul>  {parties_sublist.map((item, key) =>
                    <li key={item.id}><Link style = {LinkStyle} to={item.add} ><input id={item.id} type="checkbox" checked={item.checked} onChange={()=>{}}/> {item.desc}</Link></li>)}
            </ul>
            <ul>  {requirements_sublist.map((item, key) =>
                <li key={item.id}><Link style={LinkStyle} to={item.add} ><input id={item.id} type="checkbox" checked={item.checked} onChange={() => { }} /> {item.desc}</Link></li>)}
            </ul>
            </div>
            </li>

        )
    }
}

export default NavigationItem
