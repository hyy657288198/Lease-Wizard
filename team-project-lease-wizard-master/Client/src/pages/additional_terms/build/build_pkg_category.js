/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React from 'react';
import { ChevronRight } from 'react-feather'

/* Component for the List of Expenses */
export class BuildPkgCategory extends React.Component {

    render() {
        const {category, showHideFunc, categoryFlag} = this.props

        return (
            <ul>
                <span onClick={showHideFunc}>
                    <span className="buildPakgType">{category}</span>
                    <ChevronRight className={categoryFlag ? "chevronRightInBuild" : "chevronRightInBuild hide"} />
                </span>
            </ul>
        )
    }
}


export default BuildPkgCategory
