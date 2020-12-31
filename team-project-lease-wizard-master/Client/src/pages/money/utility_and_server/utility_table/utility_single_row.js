/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React from 'react'
// import {addOrEditInDataBase} from './utility_and_server.js'

class UtilitySingleRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "checked": [false, false, false],
            "note": ""
        }
        // this.DisableOtherBoxes = this.DisableOtherBoxes.bind(this)
    }

    // async DisableOtherBoxes(e){
    //     console.log(e.target.parentElement.parentElement.id)
    //     switch (e.target.name) {
    //         case "Box0":
    //             console.log(e.target.checked)
    //             if (e.target.checked == false) {
    //                 await this.setState({
    //                     checked: [false, false, false]
    //                 })
    //             } else {
    //                 await this.setState({
    //                     checked: [true, false, false]
    //                 })
    //             }
    //             break;
    //         case "Box1":
    //             if (e.target.checked == false) {
    //                 await this.setState({
    //                     checked: [false, false, false]
    //                 })
    //             } else {
    //                 await this.setState({
    //                     checked: [false, true, false]
    //                 })
    //             }
    //             break;
    //         case "Box2":
    //             if (e.target.checked == false) {
    //                 await this.setState({
    //                     checked: [false, false, false]
    //                 })
    //             } else {
    //                 await this.setState({
    //                     checked: [false, false, true]
    //             })}
    //             break;
    //     }
    // }

    // addOrEditNote(e) {
    //     const main = e.target.parentElement.parentElement.parentElement.parentElement
    //     const id = e.target.parentElement.parentElement.id
    //     console.log("THIS IS THE ID " + id)
    //     if (e.target.innerHTML === "➕ add note") {
    //         const addPopup = main.querySelectorAll("#addBox")[0]
    //         addPopup.classList.remove('hide')
    //     } else {
    //         const editPopup = main.querySelectorAll("#editBox")[0]
    //         editPopup.classList.remove('hide')
    //     }
    //     this.props.handlerCurrAttribute().bind(id, this)
    // }

    inputChange(e){
        e.preventDefault();
        this.setState({
            input_value: e.target.value,
        })
    }



    render() { 
        const {row, data, clickAddOrEditNote, DisableOtherBoxes} = this.props;
        let note;
        if (data[row].slice(-1)[0] === "") {
            note = "➕ add note"
        } else {
            note = "✏️ edit note"
        }
        let key_one = data[row][0] === "true" ? true  : false
        let key_two = data[row][1] === "true" ? true  : false
        let key_three = data[row][2] === "true" ? true  : false
        return (
            <tr id={row} className="rowStyle">
                <td className="rowName cellStyle"> {row} </td>
                <td className="cellStyle">
                    <input type="checkbox" name="Box0" value={row} checked={key_one} onChange={DisableOtherBoxes}/>
                </td>
                <td className="cellStyle">
                    <input type="checkbox" name="Box1" value={row} checked={key_two} onChange={DisableOtherBoxes}/>
                </td>
                <td className="cellStyle">
                    <input type="checkbox" name="Box2" value={row} checked={key_three} onChange={DisableOtherBoxes}/>
                </td>
                <td className="cellStyle" onClick={clickAddOrEditNote}>
                    {note}
                </td>
            </tr>
        )
    }
}
export default UtilitySingleRow
