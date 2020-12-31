/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React from 'react';
// import { Table } from 'reactstrap';
// import timeline from './timeline.js'
// import Table from '@empd/reactable';
import TimelineSingle from './timeline_single.js';
import { uid } from 'react-uid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { TableRow } from '@material-ui/core';


export default class TimelineList extends React.Component{
    render(){
        const {timeline_info} = this.props
        const {start_mon} = this.props
        const {end_mon} = this.props
        return (
            <Table id = "timeline_table" style={{textAlign: "left", border: 1}}>
                <TableBody>
                    <TableRow>
                        <TableCell align='left'>
                            {start_mon} - {end_mon}
                        </TableCell>
                        <TableCell align='left'>
                            &nbsp;
                        </TableCell>
                    </TableRow>
                    {timeline_info.map((date) => {
                        return (
                            <TimelineSingle key = {uid(date)}
                                            day = {date}></TimelineSingle>
                        )
                    })}
                </TableBody>
            </Table >
        )
    }
}
