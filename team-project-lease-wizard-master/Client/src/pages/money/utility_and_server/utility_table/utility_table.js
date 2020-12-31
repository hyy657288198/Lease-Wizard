/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React from 'react'
import UtilityTableHeaders from './utility_table_headers'
import UtilitySingleRow from './utility_single_row'
import UtilityAddAttribute from './utility_AddAttribute'

/* Component for the List of Expenses */
class UtilityTable extends React.Component {

    render() {
        const {headers, rows, data, clickAddOrEditNote, DisableOtherBoxes, addAttribute} = this.props
        return (
                <table className="tableSize">
                    <tbody>
                        <UtilityTableHeaders headers={headers}/>
                        {rows.map((row) => {
                            return (
                                <UtilitySingleRow key={row}
                                                  row={row}
                                                  data={data}
                                                  clickAddOrEditNote={clickAddOrEditNote}
                                                  DisableOtherBoxes={DisableOtherBoxes}
                                />
                            )
                        })}
                        <UtilityAddAttribute addAttribute={addAttribute}/>
                    </tbody>
                </table>
                )
            }
}


export default UtilityTable
