/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React from 'react'
import '../utility_style.css'

class UtilityAddAttribute extends React.Component {

    render() { 
        const {addAttribute} = this.props
        const plus_sign = "➕"
        return (
            <tr id="addAttribute" className="rowStyle">
                <td className="rowName cellStyle"> 
                    <input id="addAttrBox" type="text" name="newAttribute" placeholder="Type and click add"/>
                    <span onClick={addAttribute}> {plus_sign} </span>
                </td>
            </tr>
        )
    }
}
export default UtilityAddAttribute
