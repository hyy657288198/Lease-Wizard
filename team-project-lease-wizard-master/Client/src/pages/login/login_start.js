/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LoginView from './login_view.js'

export class LoginProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            match: false,
            is_landlord: false,
            is_tenant: false
        }
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleMatch = this.handleMatch.bind(this)
        this.handleIsLandlord = this.handleIsLandlord.bind(this)
        this.handleIsTenant = this.handleIsTenant.bind(this)
    }

    async handleEmail(event){
        await this.setState({email: event.target.value})
        let tempProps = this.props.state
        tempProps.login.email = this.state.email
        this.props.handler(tempProps)
    }

    async handlePassword(event){
        await this.setState({password: event.target.value})
        let tempProps = this.props.state
        tempProps.login.password = this.state.password
        this.props.handler(tempProps)
    }

    async handleIsLandlord(event){
        await this.setState({is_tenant: false, is_landlord: !this.state.is_landlord})
        let tempProps = this.props.state
        tempProps.login.is_landlord = this.state.is_landlord
        this.props.handler(tempProps)
        console.log(this.state)
    }

    async handleIsTenant(event){
        await this.setState({is_landlord: false, is_tenant: !this.state.is_tenant})
        let tempProps = this.props.state
        tempProps.login.is_tenant = this.state.is_tenant
        this.props.handler(tempProps)
        console.log(this.state)
        console.log(tempProps)
    }

    async handleMatch(event){
        let tempProps = this.props.state
        console.log(tempProps.global.AllEmails.includes(this.state.email))
        if (tempProps.global.AllEmails.includes(this.state.email) == false || this.state.email == '') {
            alert("Email does not exist");
            event.preventDefault();
        } else {
            if(this.state.is_tenant && tempProps.global.AllTenants.includes(this.state.email)){
                let index = tempProps.global.AllTenants.indexOf(this.state.email)
                console.log(index)
                if (this.state.password != tempProps.global.all_tenants_profile[index].password) {
                    alert("Password is incorrect");
                    event.preventDefault();
                }else{
                    await this.setState({match: true})
                    tempProps.global.current_user = this.state.email
                    tempProps.global.current_user_name = tempProps.global.all_tenants_profile[index].first_name
                    tempProps.global.current_user_type = 'tenant'
                }
            }else if(this.state.is_landlord && tempProps.global.AllLandlords.includes(this.state.email)){
                let index = tempProps.global.AllLandlords.indexOf(this.state.email)
                if (this.state.password != tempProps.global.all_landlords_profile[index].password) {
                    alert("Password is incorrect");
                    event.preventDefault();
                }else{
                    await this.setState({match: true})
                    tempProps.global.current_user = this.state.email
                    tempProps.global.current_user_name = tempProps.global.all_landlords_profile[index].first_name
                    tempProps.global.current_user_type = 'landlord'
                }
            }else{
                alert("Email does not exist");
                event.preventDefault();
            }

        }


        tempProps.login = this.state
        this.props.handler(tempProps)
    }



    render() {
        return (
            <div>
                <LoginView  email={this.state.email} password={this.state.password} match={this.state.match} is_landlord={this.state.is_landlord} is_tenant={this.state.is_tenant} handleEmail={this.handleEmail} handlePassword={this.handlePassword} handleMatch={this.handleMatch} handleIsLandlord={this.handleIsLandlord} handleIsTenant={this.handleIsTenant}/>
            </div>
        )
    }
}

export default LoginProfile
