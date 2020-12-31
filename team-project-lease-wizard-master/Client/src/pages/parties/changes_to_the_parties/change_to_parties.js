/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import { ChevronRight } from 'react-feather'
import ChangePartiesSub from '../../allPagesContents/mainContent/change_to_parties_sub'

class ChangeParties extends Component {

    constructor(props) {
        super(props)
        this.toggleClass = this.toggleClass.bind(this)
        this.state = {
            active: false,
            change_to_parties_sub: ChangePartiesSub,
            all_true: "",
            next_page: "/"
        }

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


        let sublist = (this.state.change_to_parties_sub.filter(task => task.id === this.props.id))[0]
        let name = sublist.name_tenant
        let content = sublist.desc_tenant
        let checkbox_read
        if (this.props.state["global"]["current_user_type"] === "tenant") {
            checkbox_read = <div> <input type="checkbox" name={name} /> I've read this section</div>
        } else{
            name = sublist.name_landlord
            content = sublist.desc_landlord
        }

        return (
            <li
                className={this.state.active ? 'active' : null}
            >
                {console.log(this.props.state["global"]["current_user_type"])}
                <h3><span onClick={this.toggleClass}>{name}</span>
                <ChevronRight className={"chevronRight " + (this.state.active ? 'active' : null)} side={25} />
                </h3>
                <div style={this.state.active ? divStyle.visible : divStyle.hidden}>
                    <p>{content}</p>
                    {checkbox_read}
                </div>
            </li>

        )
    }
}

export default ChangeParties

//{this.parse(sublist.desc, this.props.state["concerns"]["guests"], "2")}
