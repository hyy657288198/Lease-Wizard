/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React from 'react'
/* Component for the List of Expenses */
export class AddCustomAgreement extends React.Component {
    render() {
        const {Show} = this.props

        return (
            <tr>
                <td>
                    <span onClick={Show} role="img" aria-label="plus sign"> ➕ </span> Custom Term
                </td>
            </tr>
            )
        }
}


export default AddCustomAgreement
