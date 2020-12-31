/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import UtilityIntroduction from './intro/utility_introduction'
import UtilityTable from './utility_table/utility_table'
import './utility_style.css'
import PopupAdd from './popup/popup_add'
import PopupEdit from './popup/popup_edit'



class UtilityAndService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table_content: this.props.state.utility_and_service.table_content,
            numRow: this.props.state.utility_and_service.numRow,
            allSet: this.props.state.utility_and_service.allSet,
            data: this.props.state.utility_and_service.data,
            input_value: this.props.state.utility_and_service.input_value,
            curAttribute: ""
        }
        this.addOrEditInDataBase = this.addOrEditInDataBase.bind(this)
        this.clickAddOrEditNote = this.clickAddOrEditNote.bind(this)
        this.deleteNote = this.deleteNote.bind(this)
        this.DisableOtherBoxes = this.DisableOtherBoxes.bind(this)
        this.addAttribute = this.addAttribute.bind(this)            
    }

    async addOrEditInDataBase(e) {
        e.preventDefault();
        const value = e.target.parentElement.querySelector('textarea').value
        const attr = this.state.curAttribute
        const temp_state = this.state
        temp_state.data[attr][3] = value
        e.target.parentElement.classList.add('hide')
        await this.props.handler({
            utility_and_service: temp_state
        })
    }

    async deleteNote(e) {
        const attr = this.state.curAttribute
        const temp_state = this.state
        temp_state.data[attr][3] = ''
        e.target.parentElement.classList.add('hide')
        await this.props.handler({
            utility_and_service: temp_state
        })
    }

    async clickAddOrEditNote(e) {
        e.preventDefault();

        const main = e.target.parentElement.parentElement.parentElement.parentElement
        const id = e.target.parentElement.id
        if (e.target.innerHTML === "➕ add note") {
            const addPopup = main.querySelectorAll("#addBox")[0]
            addPopup.querySelectorAll('textarea')[0].value = this.state.data[id][3]
            addPopup.classList.remove('hide')
        } else {
            const editPopup = main.querySelectorAll("#editBox")[0]
            editPopup.querySelectorAll('textarea')[0].value = this.state.data[id][3]
            editPopup.classList.remove('hide')
        }
        const temp_state = this.state
        temp_state.curAttribute = id
        await this.props.handler({
            utility_and_service: temp_state
        })
    }

    async addAttribute(e) {
        const newAttr = e.target.parentElement.querySelector("input").value
        const temp_data = this.state.data
        temp_data[newAttr] = ["false", "false", "false", ""]
        const temp_table_content = this.state.table_content
        temp_table_content.TableRowLabel.push(newAttr)

        const temp_state = this.state
        temp_state.data = temp_data
        temp_state.table_content = temp_table_content
        e.target.parentElement.querySelector("input").value = ''
        await this.props.handler({
            utility_and_service: temp_state
        })
    }

    async DisableOtherBoxes(e){
        const id = e.target.parentElement.parentElement.id
        const temp_state = this.state
        let temp_data = temp_state.data
        switch (e.target.name) {
            case "Box0":
                if (e.target.checked == false) {
                    temp_data[id][0] = "false"
                    temp_data[id][1] = "false"
                    temp_data[id][2] = "false"
                } else {
                    temp_data[id][0] = "true"
                    temp_data[id][1] = "false"
                    temp_data[id][2] = "false"
                }
                await this.props.handler({
                    utility_and_service: temp_state
                })
                break;
            case "Box1":
                if (e.target.checked == false) {
                    temp_data[id][0] = "false"
                    temp_data[id][1] = "false"
                    temp_data[id][2] = "false"
                } else {
                    temp_data[id][0] = "false"
                    temp_data[id][1] = "true"
                    temp_data[id][2] = "false"
                }
                await this.props.handler({
                    utility_and_service: temp_state
                })
                break;
            case "Box2":
                if (e.target.checked == false) {
                    temp_data[id][0] = "false"
                    temp_data[id][1] = "false"
                    temp_data[id][2] = "false"
                } else {
                    temp_data[id][0] = "false"
                    temp_data[id][1] = "false"
                    temp_data[id][2] = "true"
                }
                await this.props.handler({
                    utility_and_service: temp_state
                })
                break;
            }
    }

    render() { 
        return ( 
            <div className="BodyMain">   
                <PopupAdd addOrEditInDataBase={this.addOrEditInDataBase} attr={this.state.curAttribute}/>
                <PopupEdit addOrEditInDataBase={this.addOrEditInDataBase} attr={this.state.curAttribute} deleteNote={this.deleteNote}/>
                <UtilityIntroduction state={this.state}/>
                <br></br>
                <UtilityTable state={this.state} 
                        headers={this.state.table_content.TableHeader} 
                        rows={this.state.table_content.TableRowLabel} 
                        data={this.state.data} 
                        clickAddOrEditNote={this.clickAddOrEditNote}
                        DisableOtherBoxes={this.DisableOtherBoxes}
                        addAttribute={this.addAttribute}
                />
            </div> 
        );
    }
}

export default UtilityAndService;
