/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SignUpView from './sign_up_view.js'


export class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            address: '',
            city: '',
            postal_code: '',
            number_of_Rental_Units: '',
            email_address: '',
            password: '',
            password_confirmation: '',
            is_landlord: false,
            is_tenant: false,
            password_match: false
        }
        this.handleFirstName = this.handleFirstName.bind(this)
        this.handleLastName = this.handleLastName.bind(this)
        this.handleAddress = this.handleAddress.bind(this)
        this.handleCity = this.handleCity.bind(this)
        this.handlePostalCode = this.handlePostalCode.bind(this)
        this.handleNumUnits = this.handleNumUnits.bind(this)
        this.handleEmailAddress = this.handleEmailAddress.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handlePasswordConfirmation = this.handlePasswordConfirmation.bind(this)
        this.handleIsLandlord = this.handleIsLandlord.bind(this)
        this.handleIsTenant = this.handleIsTenant.bind(this)
        this.handlePasswordMatch = this.handlePasswordMatch.bind(this)
    }

    async handleFirstName(event){
        await this.setState({first_name: event.target.value})
        let tempProps = this.props.state
        tempProps.sign_up.first_name = this.state.first_name
        this.props.handler(tempProps)
    }

    async handleLastName(event){
        await this.setState({last_name: event.target.value})
        let tempProps = this.props.state
        tempProps.sign_up.last_name = this.state.last_name
        this.props.handler(tempProps)
    }

    async handleAddress(event){
        await this.setState({address: event.target.value})
        let tempProps = this.props.state
        tempProps.sign_up.address = this.state.address
        this.props.handler(tempProps)
    }

    async handleCity(event){
        await this.setState({city: event.target.value})
        let tempProps = this.props.state
        tempProps.sign_up.city = this.state.city
        this.props.handler(tempProps)
    }

    async handlePostalCode(event){
        await this.setState({postal_code: event.target.value})
        let tempProps = this.props.state
        tempProps.sign_up.postal_code = this.state.postal_code
        this.props.handler(tempProps)
    }

    async handleNumUnits(event){
        await this.setState({number_of_Rental_Units: event.target.value})
        let tempProps = this.props.state
        tempProps.sign_up.number_of_Rental_Units = this.state.number_of_Rental_Units
        this.props.handler(tempProps)
    }

    async handleEmailAddress(event){
        await this.setState({email_address: event.target.value})
        let tempProps = this.props.state
        tempProps.sign_up.email_address = this.state.email_address
        this.props.handler(tempProps)
    }

    async handlePassword(event){
        await this.setState({password: event.target.value})
        let tempProps = this.props.state
        tempProps.sign_up.password = this.state.password
        this.props.handler(tempProps)
    }

    async handlePasswordConfirmation(event){
        await this.setState({password_confirmation: event.target.value})
        let tempProps = this.props.state
        tempProps.sign_up.password_confirmation = this.state.password_confirmation
        this.props.handler(tempProps)
    }

    async handleIsLandlord(event){
        await this.setState({is_tenant: false, is_landlord: !this.state.is_landlord})
        let tempProps = this.props.state
        tempProps.sign_up.is_landlord = this.state.is_landlord
        this.props.handler(tempProps)
        console.log(this.state)
    }

    async handleIsTenant(event){
        await this.setState({is_landlord: false, is_tenant: !this.state.is_tenant})
        let tempProps = this.props.state
        tempProps.sign_up.is_tenant = this.state.is_tenant
        this.props.handler(tempProps)
        console.log(this.state)
    }

    async handlePasswordMatch(event){
        let tempProps = this.props.state
        let AllEmails = this.props.state.global.AllEmails
        console.log(AllEmails)
        if(AllEmails.includes(this.state.email_address)){
            let index = tempProps.global.all_users.indexOf(this.state.email_address)
            console.log(index)
            if(this.state.is_landlord == tempProps.global.all_users_profile[index].is_landlord && this.state.is_tenant == tempProps.global.all_users_profile[index].is_tenant){
                alert("account exists.");
                event.preventDefault();
            }else{
                let index1 = tempProps.global.all_users.lastIndexOf(this.state.email_address)
                if(index1 != index){
                    alert("account exists.");
                    event.preventDefault()
                }
            }
        }
        if((this.state.first_name == '') | (this.state.last_name == '')){
            alert("Please enter your name");
            event.preventDefault();
        }
        else if(this.state.email_address == ''){
            alert("Email can not be empty");
            event.preventDefault();
        }
        else if((!this.state.is_landlord) && (!this.state.is_tenant)){
            alert("Please choose your identity");
            event.preventDefault();
        }
        else if(this.state.password.length < 8){
            alert("Password must be at least 8 characters");
            event.preventDefault();
        }
        else if(this.state.password != this.state.password_confirmation){
            alert("Passwords do not match");
            event.preventDefault();
        }
        else {
            await this.setState({password_match: true})
            tempProps.sign_up = this.state
            tempProps.global.current_user=this.state.email_address
            tempProps.global.current_user_name=this.state.first_name
            tempProps.global.all_users_profile.push(this.state)
            tempProps.global.all_users.push(this.state.email_address)
            tempProps.global.AllEmails.push(this.state.email_address)
            if(this.state.is_tenant){
                tempProps.global.AllTenants.push(this.state.email_address)
                tempProps.global.current_user_type = 'tenant'
                tempProps.global.all_tenants_profile.push(this.state)
            }else{
                tempProps.global.AllLandlords.push(this.state.email_address)
                tempProps.global.current_user_type = 'landlord'
                tempProps.global.all_landlords_profile.push(this.state)
            }
            await this.props.handler(tempProps)
            console.log(this.state)
            console.log(this.props.state.global)
        }
    }



    render() {
        return (
            <div>
                <SignUpView first_name = {this.state.first_name} last_name = {this.state.last_name} address = {this.state.address} city = {this.state.city}
                 postal_code = {this.state.postal_code} number_of_Rental_Units = {this.state.number_of_Rental_Units} email_address = {this.state.email_address}
                 password = {this.state.password} password_confirmation = {this.state.password_confirmation} is_landlord = {this.state.is_landlord}
                 is_tenant = {this.state.is_tenant} password_match = {this.state.password_match}
                 handleFirstName = {this.handleFirstName} handleLastName = {this.handleLastName} handleAddress = {this.handleAddress} handleCity = {this.handleCity}
                 handlePostalCode = {this.handlePostalCode} handleNumUnits = {this.handleNumUnits} handleEmailAddress = {this.handleEmailAddress} handlePassword = {this.handlePassword}
                 handlePasswordConfirmation = {this.handlePasswordConfirmation} handleIsLandlord = {this.handleIsLandlord} handleIsTenant = {this.handleIsTenant} handlePasswordMatch = {this.handlePasswordMatch} />
            </div>
        )
    }
}

export default SignUp
