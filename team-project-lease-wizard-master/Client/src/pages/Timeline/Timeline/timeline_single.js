/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default class TimelineSingle extends React.Component{
    color_convert(legend){
        let result = {}
        if (legend === "important dates"){
            result = {bc: '#7BF1D4', tc:"black"}
        }else if (legend === "fixed-term"){
            result = {bc:'#006689', tc:"white"}
        }else if (legend === "month-to-month"){
            result = {bc:'#42bcf5', tc: "black"}
        }else if (legend === "pro-rated"){
            result = {bc:'#653cd6', tc:"white"}
        }
        return result
    }


    render(){
        const{day} = this.props
        const result = this.color_convert(day.legend)
        return (
            <TableRow>
                <TableCell align='left'>
                    <span style={{backgroundColor: result.bc, padding: 7, borderRadius: 80, color: result.tc}}> &nbsp;&nbsp;{day.date} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {day.mon} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </TableCell>
                <TableCell align='left'>
                    {day.desc}
                </TableCell>
            </TableRow>
        )
    }
}
