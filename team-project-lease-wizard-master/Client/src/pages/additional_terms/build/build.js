/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import BuildPkgCategory from './build_pkg_category.js'
import BuildIntroduction from './build_introduction.js'
import BuildCustom from './build_custom.js'
import PopupMessage from './popup/build_popupMessage'
import './build_style.css'
import PopupWindow from './popup/build_popupWindow'

class BuildPackage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            right_content: this.props.state.buildPkg.right_content,
            active: this.props.state.buildPkg.active,
            right_content: this.props.state.buildPkg.right_content,
            input_value: this.props.state.buildPkg.input_value,
            inputAcc: this.props.state.buildPkg.inputAcc,
            currentSection: this.props.state.buildPkg.currentSection,
            data: this.props.state.buildPkg.data,
            popupState: this.props.state.buildPkg.popupState,
            allSet: this.props.state.buildPkg.allSet
        }
    }

    Show(e) {
        e.preventDefault();
        this.setState({
            input_value: "",
            inputAcc: 0
        })
        let pkgBlock = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
        const popup = pkgBlock.querySelector("div [class='popup hide']");
        popup.classList.remove('hide');
    }

    toggleClass(category, e) {
        e.preventDefault();
        let temp = this.state.active
        temp[category] = !temp[category]
        let key
        for (key in temp) {
            if (key !== category){
                temp[key] = false
            }
        }
        this.setState({
            active: temp,
            currentSection: category

        })
    }

    inputChange(e){
        e.preventDefault();
        this.setState({
            input_value: e.target.value,
            inputAcc: e.target.value.length
        })
    }

    Cancel(e) {
        e.preventDefault();
        const info = e.target.parentElement
        info.classList.add('hide');
    }

    AddToList(type, e) {
        e.preventDefault();
        const custonAgreement = e.target.parentElement.parentElement.querySelector('textarea').value
        const info = e.target.parentElement
        info.classList.add('hide');

        // update state
        let content = this.state.right_content
        content[type].push(custonAgreement)
        this.setState({
            right_content: content,
        })
    }


    AddToDataBase(category, e) {
        e.preventDefault();
        // show popup message
        let temp = this.state.active
        let key
        let name
        for (key in temp) {
            if (temp[key] === true){
                name = key
            }
        }
        let popupMessage = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelectorAll("#popupMessage")
        popupMessage[0].classList.remove('hide');
        // popupMessage[2].classList.add('hide');
        let content = e.target.parentElement.parentElement.querySelectorAll('span')[2].textContent

        let tempData = this.state.data
        tempData[category].push(content)
        let setFlag = ((tempData.Parking.length === 0) &&(tempData.Pets.length === 0)&&(tempData.Damages.length === 0))? false:true
        this.setState({
            currentSection: name,
            data: tempData,
            popupState: "added",
            allSet: setFlag
        })
        let tempProps = this.props.state
        tempProps.buildPkg = this.state
        this.props.handler(tempProps)
    }

    DelFromDataBase(category, e) {
        e.preventDefault();
        // show popup message
        let temp = this.state.active
        let key
        let name
        for (key in temp) {
            if (temp[key] === true){
                name = key
            }
        }
        let popupMessage = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelectorAll("#popupMessage")
        // popupMessage[2].classList.remove('hide');
        // popupMessage[1].classList.add('hide');
        popupMessage[0].classList.remove('hide');
        let content = e.target.parentElement.parentElement.querySelectorAll('span')[2].textContent

        const customAgreements = this.state.data
        let index = 0;
        for (let i = 0; i < customAgreements[category].length; i++) {
            if (customAgreements[category][i] === content) {
                index = i;
            }
        }
        customAgreements[category].splice(index, 1)
        let setFlag = ((customAgreements.Parking.length === 0) &&(customAgreements.Pets.length === 0)&&(customAgreements.Damages.length === 0))? false:true
        this.setState({
            currentSection: name,
            data: customAgreements,
            popupState: "deleted",
            allSet: setFlag
        })
        let tempProps = this.props.state
        tempProps.buildPkg = this.state
        this.props.handler(tempProps)
    }

    render() {

        return (
            <div>
                <PopupMessage currentSection={this.state.currentSection} Cancel={this.Cancel.bind(this)} stateMsg={this.state.popupState}/>
                <BuildIntroduction/>
                <div>
                    <nav className="build_subtitle">
                        <BuildPkgCategory category="Parking" showHideFunc={this.toggleClass.bind(this, "Parking")} categoryFlag={this.state.active.Parking}/>
                        <BuildPkgCategory category="Damages" showHideFunc={this.toggleClass.bind(this, "Damages")} categoryFlag={this.state.active.Damages}/>
                        <BuildPkgCategory category="Pets" showHideFunc={this.toggleClass.bind(this, "Pets")} categoryFlag={this.state.active.Pets}/>
                    </nav>

                    <nav>
                        <ul>
                            <BuildCustom category="Parking" categoryFlag={this.state.active.Parking}
                                        buildContent={this.state.right_content} Show={this.Show.bind(this)}
                                        inputValue={this.state.input_value} InputChange={this.inputChange.bind(this)}
                                        inputAcc={this.state.inputAcc} Cancel={this.Cancel.bind(this)} Add={this.AddToList.bind(this,"Parking")}
                                        AddToDataBase={this.AddToDataBase.bind(this, 'Parking')}
                                        DelFromDataBase={this.DelFromDataBase.bind(this, 'Parking')}/>
                            <BuildCustom category="Damages" categoryFlag={this.state.active.Damages}
                                        buildContent={this.state.right_content} Show={this.Show.bind(this)}
                                        inputValue={this.state.input_value} InputChange={this.inputChange.bind(this)}
                                        inputAcc={this.state.inputAcc} Cancel={this.Cancel.bind(this)} Add={this.AddToList.bind(this,"Damages")}
                                        AddToDataBase={this.AddToDataBase.bind(this, 'Damages')}
                                        DelFromDataBase={this.DelFromDataBase.bind(this, 'Damages')}/>
                            <BuildCustom category="Pets" categoryFlag={this.state.active.Pets}
                                        buildContent={this.state.right_content} Show={this.Show.bind(this)}
                                        inputValue={this.state.input_value} InputChange={this.inputChange.bind(this)}
                                        inputAcc={this.state.inputAcc} Cancel={this.Cancel.bind(this)} Add={this.AddToList.bind(this,"Pets")}
                                        AddToDataBase={this.AddToDataBase.bind(this, 'Pets')}
                                        DelFromDataBase={this.DelFromDataBase.bind(this, 'Pets')}/>
                        </ul>
                    </nav>
                </div>
                <PopupWindow inputValue={this.state.input_value} InputChange={this.inputChange.bind(this)} inputAcc={this.state.inputAcc} Cancel={this.Cancel.bind(this)} Add={this.AddToList.bind(this,this.state.currentSection)}/>
            </div>
        )
    }
}

export default BuildPackage
