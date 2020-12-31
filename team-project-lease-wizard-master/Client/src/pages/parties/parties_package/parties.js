/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import 'rc-slider/assets/index.css'
import PartiesView from './parties_view.js'


export class Parties extends Component {
    constructor(props) {
        super(props)
        this.state = {
            add_tenant_active: this.props.state.parties.add_tenant_active,
            add_building_manager_active: this.props.state.parties.add_building_manager_active,
            add_landlord_active: this.props.state.parties.add_landlord_active,
            phone_checked: this.props.state.parties.phone_checked,
            email_checked: this.props.state.parties.email_checked,
            all_true: "",
            landlord_name: this.props.state.parties.landlord_name,
            tenant_name: this.props.state.parties.tenant_name,
            landlord_address: this.props.state.parties.landlord_address,
            landlord_unit: this.props.state.parties.landlord_unit,
            landlord_city: this.props.state.parties.landlord_city,
            landlord_postal_code: this.props.state.parties.landlord_postal_code,
            landlord_phone: this.props.state.parties.landlord_phone,
            landlord_email: this.props.state.parties.landlord_email,
            emergency_name: this.props.state.parties.emergency_name,
            emergency_relation: this.props.state.parties.emergency_relation,
            emergency_email: this.props.state.parties.emergency_email,
            emergency_phone: this.props.state.parties.emergency_phone,
            allSet: this.props.state.parties.allSet         // fixed by M
        }
        this.toggleClass1 = this.toggleClass1.bind(this)
        this.toggleClass2 = this.toggleClass2.bind(this)
        this.toggleClass3 = this.toggleClass3.bind(this)
        this.handleLandlordName = this.handleLandlordName.bind(this)
        this.handleTenantName = this.handleTenantName.bind(this)
        this.handleLandlordAddress = this.handleLandlordAddress.bind(this)
        this.handleLandlordUnit = this.handleLandlordUnit.bind(this)
        this.handleLandlordCity = this.handleLandlordCity.bind(this)
        this.handleLandlordPostalCode = this.handleLandlordPostalCode.bind(this)
        this.handleLandlordPhone = this.handleLandlordPhone.bind(this)
        this.handleLandlordEmail = this.handleLandlordEmail.bind(this)
        this.handleLandlordPhoneCheck = this.handleLandlordPhoneCheck.bind(this)
        this.handleLandlordEmailCheck = this.handleLandlordEmailCheck.bind(this)
        this.handleEmergencyName = this.handleEmergencyName.bind(this)
        this.handleEmergencyRelation = this.handleEmergencyRelation.bind(this)
        this.handleEmergencyPhone = this.handleEmergencyPhone.bind(this)
        this.handleEmergencyEmail = this.handleEmergencyEmail.bind(this)

    }

    async handleLandlordName(event){
        let setFlag = (!(this.state.landlord_name ==='')&&
        !(this.state.tenant_name ==='')&&
        !(this.state.landlord_address ==='')&&
        !(this.state.landlord_unit ==='')&&
        !(this.state.landlord_city ==='')&&
        !(this.state.landlord_postal_code ==='')&&
        !(this.state.landlord_phone ==='')&&
        !(this.state.landlord_email ==='')&&
        !(this.state.emergency_name ==='')&&
        !(this.state.emergency_relation ==='')&&
        !(this.state.emergency_email ==='')&&
        !(this.state.emergency_phone ===''))
        if(this.props.state.global.current_user_type != 'tenant'){
            await this.setState({landlord_name: event.target.value, allSet:setFlag})
        }else{
            await this.setState({landlord_name: this.props.state.parties.landlord_name, allSet:this.props.state.parties.allSet})
        }
        let tempProps = this.props.state
        tempProps.parties.landlord_name = this.state.landlord_name
        tempProps.parties.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleTenantName(event){
        let setFlag = (!(this.state.landlord_name ==='')&&
        !(this.state.tenant_name ==='')&&
        !(this.state.landlord_address ==='')&&
        !(this.state.landlord_unit ==='')&&
        !(this.state.landlord_city ==='')&&
        !(this.state.landlord_postal_code ==='')&&
        !(this.state.landlord_phone ==='')&&
        !(this.state.landlord_email ==='')&&
        !(this.state.emergency_name ==='')&&
        !(this.state.emergency_relation ==='')&&
        !(this.state.emergency_email ==='')&&
        !(this.state.emergency_phone ===''))
        if(this.props.state.global.current_user_type != 'tenant'){
            await this.setState({tenant_name: event.target.value, allSet:setFlag})
        }else{
            await this.setState({tenant_name: this.props.state.parties.tenant_name, allSet:this.props.state.parties.allSet})
        }
        let tempProps = this.props.state
        tempProps.parties.tenant_name = this.state.tenant_name
        tempProps.parties.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleLandlordAddress(event){
       let setFlag = (!(this.state.landlord_name ==='')&&
        !(this.state.tenant_name ==='')&&
        !(this.state.landlord_address ==='')&&
        !(this.state.landlord_unit ==='')&&
        !(this.state.landlord_city ==='')&&
        !(this.state.landlord_postal_code ==='')&&
        !(this.state.landlord_phone ==='')&&
        !(this.state.landlord_email ==='')&&
        !(this.state.emergency_name ==='')&&
        !(this.state.emergency_relation ==='')&&
        !(this.state.emergency_email ==='')&&
        !(this.state.emergency_phone ===''))
        if(this.props.state.global.current_user_type != 'tenant'){
            await this.setState({landlord_address: event.target.value, allSet:setFlag})
        }else{
            await this.setState({landlord_address: this.props.state.parties.landlord_address, allSet:this.props.state.parties.allSet})
        }
        let tempProps = this.props.state
        tempProps.parties.landlord_address = this.state.landlord_address
        tempProps.parties.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleLandlordUnit(event){
        let setFlag = (!(this.state.landlord_name ==='')&&
        !(this.state.tenant_name ==='')&&
        !(this.state.landlord_address ==='')&&
        !(this.state.landlord_unit ==='')&&
        !(this.state.landlord_city ==='')&&
        !(this.state.landlord_postal_code ==='')&&
        !(this.state.landlord_phone ==='')&&
        !(this.state.landlord_email ==='')&&
        !(this.state.emergency_name ==='')&&
        !(this.state.emergency_relation ==='')&&
        !(this.state.emergency_email ==='')&&
        !(this.state.emergency_phone ===''))
        let tempProps = this.props.state
        if(this.props.state.global.current_user_type != 'tenant'){
            await this.setState({landlord_unit: event.target.value, allSet:setFlag})
        }else{
            await this.setState({landlord_unit: this.props.state.parties.landlord_unit, allSet:this.props.state.parties.allSet})
        }
        tempProps.parties.landlord_unit = this.state.landlord_unit
        tempProps.parties.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleLandlordCity(event){
        let setFlag = (!(this.state.landlord_name ==='')&&
        !(this.state.tenant_name ==='')&&
        !(this.state.landlord_address ==='')&&
        !(this.state.landlord_unit ==='')&&
        !(this.state.landlord_city ==='')&&
        !(this.state.landlord_postal_code ==='')&&
        !(this.state.landlord_phone ==='')&&
        !(this.state.landlord_email ==='')&&
        !(this.state.emergency_name ==='')&&
        !(this.state.emergency_relation ==='')&&
        !(this.state.emergency_email ==='')&&
        !(this.state.emergency_phone ===''))
        if(this.props.state.global.current_user_type != 'tenant'){
            await this.setState({landlord_city: event.target.value, allSet:setFlag})
        }else{
            await this.setState({landlord_city: this.props.state.parties.landlord_city, allSet:this.props.state.parties.allSet})
        }
        let tempProps = this.props.state
        tempProps.parties.landlord_city = this.state.landlord_city
        tempProps.parties.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleLandlordPostalCode(event){
        let setFlag = (!(this.state.landlord_name ==='')&&
        !(this.state.tenant_name ==='')&&
        !(this.state.landlord_address ==='')&&
        !(this.state.landlord_unit ==='')&&
        !(this.state.landlord_city ==='')&&
        !(this.state.landlord_postal_code ==='')&&
        !(this.state.landlord_phone ==='')&&
        !(this.state.landlord_email ==='')&&
        !(this.state.emergency_name ==='')&&
        !(this.state.emergency_relation ==='')&&
        !(this.state.emergency_email ==='')&&
        !(this.state.emergency_phone ===''))
        if(this.props.state.global.current_user_type != 'tenant'){
            await this.setState({landlord_postal_code: event.target.value, allSet:setFlag})
        }else{
            await this.setState({landlord_postal_code: this.props.state.parties.landlord_postal_code, allSet:this.props.state.parties.allSet})
        }
        let tempProps = this.props.state
        tempProps.parties.landlord_postal_code = this.state.landlord_postal_code
        tempProps.parties.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleLandlordPhone(event){
        let setFlag = (!(this.state.landlord_name ==='')&&
        !(this.state.tenant_name ==='')&&
        !(this.state.landlord_address ==='')&&
        !(this.state.landlord_unit ==='')&&
        !(this.state.landlord_city ==='')&&
        !(this.state.landlord_postal_code ==='')&&
        !(this.state.landlord_phone ==='')&&
        !(this.state.landlord_email ==='')&&
        !(this.state.emergency_name ==='')&&
        !(this.state.emergency_relation ==='')&&
        !(this.state.emergency_email ==='')&&
        !(this.state.emergency_phone ===''))
        if(this.props.state.global.current_user_type != 'tenant'){
            await this.setState({landlord_phone: event.target.value, allSet:setFlag})
        }else{
            await this.setState({landlord_phone: this.props.state.parties.landlord_phone, allSet:this.props.state.parties.allSet})
        }
        let tempProps = this.props.state
        tempProps.parties.landlord_phone = this.state.landlord_phone
        tempProps.parties.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleLandlordEmail(event){
        let setFlag = (!(this.state.landlord_name ==='')&&
        !(this.state.tenant_name ==='')&&
        !(this.state.landlord_address ==='')&&
        !(this.state.landlord_unit ==='')&&
        !(this.state.landlord_city ==='')&&
        !(this.state.landlord_postal_code ==='')&&
        !(this.state.landlord_phone ==='')&&
        !(this.state.landlord_email ==='')&&
        !(this.state.emergency_name ==='')&&
        !(this.state.emergency_relation ==='')&&
        !(this.state.emergency_email ==='')&&
        !(this.state.emergency_phone ===''))
        if(this.props.state.global.current_user_type != 'tenant'){
            await this.setState({landlord_email: event.target.value, allSet:setFlag})
        }else{
            await this.setState({landlord_email: this.props.state.parties.landlord_email, allSet:this.props.state.parties.allSet})
        }
        let tempProps = this.props.state
        tempProps.parties.landlord_email = this.state.landlord_email
        tempProps.parties.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleLandlordPhoneCheck(event){
        const currentState = this.state.phone_checked
        if(this.props.state.global.current_user_type != 'tenant'){
            await this.setState({phone_checked: !currentState})
        }else{
            await this.setState({phone_checked: this.props.state.parties.phone_checked})
        }
        let tempProps = this.props.state
        tempProps.parties.phone_checked = this.state.phone_checked
        this.props.handler(tempProps)
    }
    async handleLandlordEmailCheck(event){
        const currentState = this.state.email_checked
        if(this.props.state.global.current_user_type != 'tenant'){
            await this.setState({email_checked: !currentState})
        }else{
            await this.setState({email_checked: this.props.state.parties.email_checked})
        }
        let tempProps = this.props.state
        tempProps.parties.email_checked = this.state.email_checked
        this.props.handler(tempProps)
    }
    async handleEmergencyName(event){
        let setFlag = (!(this.state.landlord_name ==='')&&
        !(this.state.tenant_name ==='')&&
        !(this.state.landlord_address ==='')&&
        !(this.state.landlord_unit ==='')&&
        !(this.state.landlord_city ==='')&&
        !(this.state.landlord_postal_code ==='')&&
        !(this.state.landlord_phone ==='')&&
        !(this.state.landlord_email ==='')&&
        !(this.state.emergency_name ==='')&&
        !(this.state.emergency_relation ==='')&&
        !(this.state.emergency_email ==='')&&
        !(this.state.emergency_phone ===''))
        if(this.props.state.global.current_user_type == 'tenant'){
            await this.setState({emergency_name: event.target.value, allSet:setFlag})
        }else{
            await this.setState({emergency_name: this.props.state.parties.emergency_name, allSet:this.props.state.parties.allSet})
        }
        let tempProps = this.props.state
        tempProps.parties.emergency_name = this.state.emergency_name
        tempProps.parties.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleEmergencyRelation(event){
        let setFlag = (!(this.state.landlord_name ==='')&&
        !(this.state.tenant_name ==='')&&
        !(this.state.landlord_address ==='')&&
        !(this.state.landlord_unit ==='')&&
        !(this.state.landlord_city ==='')&&
        !(this.state.landlord_postal_code ==='')&&
        !(this.state.landlord_phone ==='')&&
        !(this.state.landlord_email ==='')&&
        !(this.state.emergency_name ==='')&&
        !(this.state.emergency_relation ==='')&&
        !(this.state.emergency_email ==='')&&
        !(this.state.emergency_phone ===''))
        if(this.props.state.global.current_user_type == 'tenant'){
            await this.setState({emergency_relation: event.target.value, allSet:setFlag})
        }else{
            await this.setState({emergency_relation: this.props.state.parties.emergency_relation, allSet:this.props.state.parties.allSet})
        }
        let tempProps = this.props.state
        tempProps.parties.emergency_relation = this.state.emergency_relation
        tempProps.parties.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleEmergencyPhone(event){
        let setFlag = (!(this.state.landlord_name ==='')&&
        !(this.state.tenant_name ==='')&&
        !(this.state.landlord_address ==='')&&
        !(this.state.landlord_unit ==='')&&
        !(this.state.landlord_city ==='')&&
        !(this.state.landlord_postal_code ==='')&&
        !(this.state.landlord_phone ==='')&&
        !(this.state.landlord_email ==='')&&
        !(this.state.emergency_name ==='')&&
        !(this.state.emergency_relation ==='')&&
        !(this.state.emergency_email ==='')&&
        !(this.state.emergency_phone ===''))
        if(this.props.state.global.current_user_type == 'tenant'){
            await this.setState({emergency_phone: event.target.value, allSet:setFlag})
        }else{
            await this.setState({emergency_phone: this.props.state.parties.emergency_phone, allSet:this.props.state.parties.allSet})
        }
        let tempProps = this.props.state
        tempProps.parties.emergency_phone = this.state.emergency_phone
        tempProps.parties.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async handleEmergencyEmail(event){
        let setFlag = (!(this.state.landlord_name ==='')&&
        !(this.state.tenant_name ==='')&&
        !(this.state.landlord_address ==='')&&
        !(this.state.landlord_unit ==='')&&
        !(this.state.landlord_city ==='')&&
        !(this.state.landlord_postal_code ==='')&&
        !(this.state.landlord_phone ==='')&&
        !(this.state.landlord_email ==='')&&
        !(this.state.emergency_name ==='')&&
        !(this.state.emergency_relation ==='')&&
        !(this.state.emergency_email ==='')&&
        !(this.state.emergency_phone ===''))
        if(this.props.state.global.current_user_type == 'tenant'){
            await this.setState({emergency_email: event.target.value, allSet:setFlag})
        }else{
            await this.setState({emergency_email: this.props.state.parties.emergency_email, allSet:this.props.state.parties.allSet})
        }
        let tempProps = this.props.state
        tempProps.parties.emergency_email = this.state.emergency_email
        tempProps.parties.allSet = this.state.allSet
        this.props.handler(tempProps)
    }
    async toggleClass1() {
        const currentState = this.state.add_tenant_active
        if(this.props.state.global.current_user_type != 'tenant'){
            await this.setState({ add_tenant_active: !currentState })
        }else{
            await this.setState({add_tenant_active: this.props.state.parties.add_tenant_active})
        }
        let tempProps = this.props.state
        tempProps.parties.add_tenant_active = this.state.add_tenant_active
        this.props.handler(tempProps)
    }
    async toggleClass2() {
        const currentState = this.state.add_building_manager_active
        if(this.props.state.global.current_user_type != 'tenant'){
            await this.setState({ add_building_manager_active: !currentState })
        }else{
            await this.setState({add_building_manager_active: this.props.state.parties.add_tenant_active})
        }
        let tempProps = this.props.state
        tempProps.parties.add_building_manager_active = this.state.add_building_manager_active
        this.props.handler(tempProps)
    }
    async toggleClass3() {
        const currentState = this.state.add_landlord_active
        if(this.props.state.global.current_user_type != 'tenant'){
            await this.setState({ add_landlord_active: !currentState })
        }else{
            await this.setState({add_landlord_active: this.props.state.parties.add_tenant_active})
        }
        let tempProps = this.props.state
        tempProps.parties.add_landlord_active = this.state.add_landlord_active
        this.props.handler(tempProps)
    }


    // this func is for the check box in nav bar,
    // when the page is fully filled, the check box will be checked by receiving the date "allSet" is true
    // update allSet when the page is fully filled !!!!!!!!!!!!!!!!
    CheckAllSet(e) {
        e.preventDefault();
        if (("aaaa is filled") && ("bbbb is filled") && ("cccc is filled")) {
            this.setState({
                allSet: true
            })
            let tempProps = this.props.state
            tempProps.allSet = this.state.allSet // true
            this.props.handler(tempProps)
        } else {
            this.setState({
                allSet: false
            })
        }
    }

    render() {


        return (
            <div>
                <PartiesView toggleClass1 = {this.toggleClass1} toggleClass2 = {this.toggleClass2} toggleClass3 = {this.toggleClass3} add_tenant_active = {this.state.add_tenant_active} add_building_manager_active = {this.state.add_building_manager_active} add_landlord_active = {this.state.add_landlord_active} phone_checked = {this.state.phone_checked} email_checked = {this.state.email_checked} landlord_name = {this.state.landlord_name} tenant_name = {this.state.tenant_name} landlord_address = {this.state.landlord_address} landlord_unit = {this.state.landlord_unit} landlord_city = {this.state.landlord_city} landlord_postal_code = {this.state.landlord_postal_code} landlord_phone = {this.state.landlord_phone} landlord_email = {this.state.landlord_email} emergency_name = {this.state.emergency_name} emergency_relation = {this.state.emergency_relation} emergency_email = {this.state.emergency_email} emergency_phone = {this.state.emergency_phone} handleLandlordName = {this.handleLandlordName} handleTenantName = {this.handleTenantName} handleLandlordAddress = {this.handleLandlordAddress} handleLandlordUnit = {this.handleLandlordUnit} handleLandlordCity = {this.handleLandlordCity} handleLandlordPostalCode = {this.handleLandlordPostalCode} handleLandlordPhone = {this.handleLandlordPhone} handleLandlordEmail = {this.handleLandlordEmail} handleLandlordPhoneCheck = {this.handleLandlordPhoneCheck} handleLandlordEmailCheck = {this.handleLandlordEmailCheck} handleEmergencyName = {this.handleEmergencyName} handleEmergencyRelation = {this.handleEmergencyRelation} handleEmergencyPhone = {this.handleEmergencyPhone} handleEmergencyEmail = {this.handleEmergencyEmail} />

            </div>
        )
    }
}

export default Parties
