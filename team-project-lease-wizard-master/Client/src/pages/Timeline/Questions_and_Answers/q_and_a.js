/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import { ChevronRight } from 'react-feather'
import QandASub from '../../allPagesContents/mainContent/q_and_a_sub'

const datetime = require('date-and-time')

class QandA extends Component {

    constructor(props) {
        super(props)
        this.toggleClass = this.toggleClass.bind(this)
        this.state = {
            active: false,
            q_and_a_sub: QandASub,
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

        let start_date_string = this.props.state["rents"]["yes_start_date"]
        let end_date_string = this.props.state["rents"]["yes_end_date"]
        console.log(end_date_string)
        let sublist = (this.state.q_and_a_sub.filter(task => task.id === this.props.id))[0]
        let content = sublist.desc
        let is_fixed_term = this.props.state["rents"]["yes_checked"]
        if (is_fixed_term){
            content = this.parse(sublist.desc, end_date_string, start_date_string)
        } else{
            content = this.parse(sublist.desc, "N/A", "N/A")
        }
        if (sublist.id === "Q3"){
            let end_date = new Date(end_date_string)
            let now_date = Date.now()
            let sixty_end_date = datetime.addDays(end_date, -60)
            console.log(now_date)
            console.log(sixty_end_date)
            if (now_date < sixty_end_date){
                content += sublist.desc_60_more
            } else{
                content += sublist.desc_60_fewer
            }
        }
        return (
            <li
                className={this.state.active ? 'active' : null}
            >
                <h3><span onClick={this.toggleClass}>{sublist.name}</span>
                <ChevronRight className={"chevronRight " + (this.state.active ? 'active' : null)} side={25} />
                </h3>
                <div style={this.state.active ? divStyle.visible : divStyle.hidden}>
                    <p>{content}</p>
                </div>
            </li>

        )
    }
}

export default QandA

//{this.parse(sublist.desc, this.props.state["concerns"]["guests"], "2")}
