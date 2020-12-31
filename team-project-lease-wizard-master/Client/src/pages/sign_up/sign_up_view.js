/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import 'rc-slider/assets/index.css'
import { Link } from 'react-router-dom'
import signUpContent from '../allPagesContents/mainContent/sign_up_content'

export class SignUpView extends Component {
    render() {
        const {first_name, last_name, address, city, postal_code, number_of_Rental_Units, email_address, password, password_confirmation, is_landlord, is_tenant, password_match,
        handleFirstName, handleLastName, handleAddress, handleCity, handlePostalCode, handleNumUnits, handleEmailAddress, handlePassword, handlePasswordConfirmation, handleIsLandlord, handleIsTenant, handlePasswordMatch} = this.props
        let divStyle = {
            hidden: {
                visibility: "hidden",
                height: 0,
                opacity: 0
            },
            visible: {
                visibility: "visible",
                height: "auto",
                opacity: 1
            }
        }
        return (
            <div>
                    <h3>{signUpContent.Title}</h3>
                    <p>{signUpContent.Introduction[0]}</p><p>{signUpContent.Introduction[1]}</p>
                    <p><input type="text"  value={first_name} placeholder="First Name" onChange={handleFirstName}/> <input type="text" value={last_name} placeholder="Last Name" onChange={handleLastName}/></p>
                    <p><input type="text"  className="signup" value={address} placeholder="Address" onChange={handleAddress}/></p>
                    <p><input type="text"  value={city} placeholder="City" onChange={handleCity}/> <input type="text" value={postal_code} placeholder="Postal Code" onChange={handlePostalCode}/></p>
                    <p><input type="text"  className="signup" value={number_of_Rental_Units} placeholder="Number of Rental Units" onChange={handleNumUnits}/></p>
                    <p><input type="text"  className="signup" value={email_address} placeholder="Email address" onChange={handleEmailAddress}/></p>
                    <p><input type="password"  className="signup" value={password} placeholder="Password(Must be at least 8 characters)" onChange={handlePassword}/></p>
                    <p><input type="password"  className="signup" value={password_confirmation} placeholder="Password Confirmation" onChange={handlePasswordConfirmation}/></p>
                    <h2 style = {{display: "inline-block", padding: 18}}>You are:</h2>
                <form style = {{display: "inline-block", padding: 5}}> <label><input type="radio"  checked={is_landlord} onClick={handleIsLandlord} onChange={()=>{}}/> Landlord</label>    </form>
                <form style = {{display: "inline-block", padding: 5}}><label><input type="radio" checked={is_tenant} onClick={handleIsTenant} onChange={()=>{}}/>Tenant</label>    </form>
                <br/>
                <Link to={(is_tenant)?"/sign_up_success_tenant":"/sign_up_success_landlord"} className="button"><button id = "sign_up_button" checked={password_match} onClick={handlePasswordMatch}>Sign Up</button></Link>
            </div>
        )
    }
}

export default SignUpView
