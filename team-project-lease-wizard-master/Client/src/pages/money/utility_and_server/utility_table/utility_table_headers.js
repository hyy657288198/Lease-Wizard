/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React from 'react'
import UtilityTableSingleHeader from './utility_table_single_header'

class UtilityTableHeaders extends React.Component {

    render() {
        const {headers} = this.props
        return (
            <tr id="tableHeader">
                {headers.map((header) => {
                    return (
                        <UtilityTableSingleHeader key={(header)}
                            header = {header}/>
                    )
                })}
            </tr>
        )
    }
}
export default UtilityTableHeaders
