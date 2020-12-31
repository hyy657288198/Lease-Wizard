/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React from 'react';
// import { uid } from 'react-uid';
import './build_style.css'


/* Component for the List of Expenses */
export default class SingleAgreement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {active: false}

    }

    AddOrDel() {
        let temp_active = this.state
        if (this.state === false) {
        }

        this.setState({
            active: !temp_active["active"]
        })
    }


    render() {
        const {agreement, AddToDataBase, DelFromDataBase} = this.props
        const symble = this.state["active"] ?
                    <span onClick={DelFromDataBase}> <span onClick={this.AddOrDel.bind(this)} role="img" aria-label="minus sign">➖</span> </span>
                    : <span onClick={AddToDataBase}> <span onClick={this.AddOrDel.bind(this)} role="img" aria-label="plus sign">➕</span> </span>
        return (
            <tr>
                <td>
                    {symble} <span>{agreement}</span>
                </td>
            </tr>
        )
    }
}
