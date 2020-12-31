/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import UtilitySingleInstruction from './utility_single_instruction'

export class UtilityIntroduction extends Component {

    render() {
        const {state} = this.props
        const title = state.table_content.Title
        const intro = state.table_content.Introduction
        const instructions = state.table_content.Instructions
        const notes = state.table_content.Notes
        return (

            <div>
                <h1>{title}</h1>
                <p>{intro}</p>
                <br></br>
                {instructions.map((item) => {
                        return (
                            <UtilitySingleInstruction key={(item)}
                                item = {item}/>
                        )
                    })}
                <br></br>
                <p>{notes}</p>
            </div>
        )
    }
}

export default UtilityIntroduction
