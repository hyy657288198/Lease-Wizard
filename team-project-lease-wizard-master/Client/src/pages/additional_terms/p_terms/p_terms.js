/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import { ChevronRight } from 'react-feather'
// import ProhibitSub from './p_term_sub.js'

//<div style={this.state.all_true =="decorate" ? divStyle.visible : divStyle.hidden}>
//<Link to="/end"><button disabled={!((guestL[0].checked)&(petL[0].checked)&(decL[0].checked))}>Next</button></Link>
//</div>

class ProhibitTerms extends Component {

    constructor(props) {
        super(props)
        this.toggleClass = this.toggleClass.bind(this)
        this.state = {
            active: false,
            sub: this.props.data,
            pet_true: "",
            parking_true: "",
            demage_true: ""
        }

    }
    toggleClass() {
        const currentState = this.state.active
        this.setState({ active: !currentState })
    }
            CheckAllSet(e) {
        e.preventDefault();
        if ((this.state.pet_true === "Pets") && (this.state.parking_true === "Parking") && (this.state.demage_true === "Demages")) {
            this.setState({
                allSet: true
            })
            let tempProps = this.props.state
            tempProps.allSet = this.state.allSet // true
            this.props.handler(tempProps)
        } else {
            this.setState({
                allSet: false
            })
        }
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
        let general_pkg = this.state.sub;
        let sublist = general_pkg.filter(task=>task.id===this.props.id)
        let res = 'I have read and understood this.'
        //let guestL = this.state.prohibit_sub.filter(task=>task.id==="guest")
        //let petL = this.state.prohibit_sub.filter(task=>task.id==="pet")
        //let decL = this.state.prohibit_sub.filter(task=>task.id==="decorate")
        return (
            <li
                className={this.state.active ? 'active' : null}
            >
            <h3>
            <span onClick={this.toggleClass}>  {this.props.name} </span>
            <ChevronRight className={"chevronRight " + (this.state.active ? 'active' : null)} side={25}/> 
            </h3>

            <div style={this.state.active ? divStyle.visible : divStyle.hidden}>
              {sublist.map((item, key) =>
                    <div key={item.id}>
                        {item.desc.map((sub_item, key) => 
                            <p key={key}>{sub_item}</p>)}
                            <p><input type="checkbox"/>{res}</p>
                    </div>)}
            </div>
            </li>
        )
    }
}

export default ProhibitTerms
