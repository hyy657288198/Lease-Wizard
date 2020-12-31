/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React from 'react'
import PopupInfo from '../../../popup_info/popup_info'
import UtilityContent from '../../../allPagesContents/mainContent/utility_content'


class UtilityTableSingleHeader extends React.Component {

    render() {
        const {header} = this.props
        return (
            <th id="header" className="cellStyle">
                <h2>{header} <PopupInfo text={UtilityContent.popUpInfo[header]}/></h2>
            </th>
        )
    }
}
export default UtilityTableSingleHeader
