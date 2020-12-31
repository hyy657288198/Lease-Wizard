/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import { ChevronRight } from 'react-feather'
import GeneralSub from '../../allPagesContents/mainContent/g_package_sub'

class GeneralPackage extends Component {

    constructor(props) {
        super(props)
        this.toggleClass = this.toggleClass.bind(this)
        this.state = {
            active: false,
            g_sub: GeneralSub
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

        let sublist = this.state.g_sub.filter(task=>task.id===this.props.id)
        return (
            <li className={this.state.active ? 'active' : null}>
                <h3> <span onClick={this.toggleClass}>{this.props.name}</span>
                    <ChevronRight className={"chevronRight " + (this.state.active ? 'active' : null)} side={25}/>
                </h3>
                <div style={this.state.active ? divStyle.visible : divStyle.hidden}>
                        {sublist.map((item) =>
                            <div key={item.id}>{item.desc.map((sub_item, key) =>
                                <p key={key}>{sub_item} </p>)}</div>)}
                </div>
            </li>
        )
    }
}

export default GeneralPackage
