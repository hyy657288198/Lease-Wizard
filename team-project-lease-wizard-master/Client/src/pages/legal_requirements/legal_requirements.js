/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import { ChevronRight } from 'react-feather'
import LegalRequirementSub from '../allPagesContents/mainContent/legal_requirements_sub'

class LegalRequirement extends Component {

    constructor(props) {
        super(props)
        this.toggleClass = this.toggleClass.bind(this)
        this.state = {
            active: false,
            legal_requirement_sub: LegalRequirementSub,
            all_true: "",
            next_page: "/",
            smoke_allowed_checked: false,
            smoke_not_allowed_checked: true
        }
        this.handleSmokeAllowCheck = this.handleSmokeAllowCheck.bind(this)
        this.handleSmokeNotAllowCheck = this.handleSmokeNotAllowCheck.bind(this)

    }
    async handleSmokeAllowCheck(event) {
        await this.setState({ smoke_not_allowed_checked: false, smoke_allowed_checked: !this.state.smoke_allowed_checked })
        let tempProps = this.props.state
        tempProps.requirements = this.state
        this.props.handler(tempProps)
        // { console.log(this.props.state["requirements"]["smoke_allowed_checked"]) }

    }

    async handleSmokeNotAllowCheck(event) {
        await this.setState({ smoke_allowed_checked: false, smoke_not_allowed_checked: !this.state.smoke_not_allowed_checked })
        let tempProps = this.props.state
        tempProps.requirements = this.state
        this.props.handler(tempProps)
    }

    toggleClass() {
        const currentState = this.state.active
        this.setState({ active: !currentState })
    }

    parse(str) {
        var args = [].slice.call(arguments, 1),
            i = 0;

        return str.replace(/%s/g, () => args[i++]);
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


        let sublist = (this.state.legal_requirement_sub.filter(task => task.id === this.props.id))[0]
        let content = sublist.tenant_desc
        let smoke;
        if (this.props.state["global"]["current_user_type"] === "tenant"){
            if (this.props.id === "Q8") {
                content = sublist.tenant_desc_not
                if (this.props.state["requirements"]["smoke_allowed_checked"]) {
                    content = sublist.tenant_desc_yes
                }
            }
        } else {
            if (this.props.id === "Q8") {
                smoke = <p>Do you allow smoking?  <input type="radio" checked={this.state.smoke_allowed_checked} onClick={this.handleSmokeAllowCheck} onChange={() => { }} />Yes <input type="radio" checked={this.state.smoke_not_allowed_checked} onClick={this.handleSmokeNotAllowCheck} onChange={() => { }} />No</p>
            }
            content = sublist.landlord_desc
        }

        return (
            <li
                className={this.state.active ? 'active' : null}
            >
                <h3><span onClick={this.toggleClass}>{sublist.name}</span>
                    <ChevronRight className={"chevronRight " + (this.state.active ? 'active' : null)} side={25} />
                </h3>
                <div style={this.state.active ? divStyle.visible : divStyle.hidden}>
                    {smoke}
                    <p>{content}</p>
                </div>
            </li>

        )
    }
}

export default LegalRequirement

//{this.parse(sublist.desc, this.props.state["concerns"]["guests"], "2")}
