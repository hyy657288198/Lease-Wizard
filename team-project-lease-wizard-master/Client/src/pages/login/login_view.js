/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import 'rc-slider/assets/index.css'
import { Link } from 'react-router-dom'
import loginContent from '../allPagesContents/mainContent/login_content'

export class LoginView extends Component {

    render() {
        const {email, password, match, is_landlord, is_tenant, handleEmail, handlePassword, handleMatch, handleIsLandlord, handleIsTenant} = this.props
        return (
            <div>
                <div className="loginLeft">
                    <h3>{loginContent.Title[0]}</h3>
                    <p>{loginContent.Introduction[0]}</p>
                    <Link to="/sign_up" className="button"><button>Sign Up</button></Link>
                    <h3 className="signIn">{loginContent.Title[1]}</h3>
                    <input type="text" className = "login" value={email} placeholder="Email address" onChange={handleEmail}/>
                    <input type="password" className = "login" value={password} placeholder="Password" onChange={handlePassword}/>
                    <form style = {{display: "inline-block", padding: 5}}><label><input type="radio"  checked={is_landlord} onClick={handleIsLandlord} onChange={()=>{}}/>  Landlord</label>    </form>
                <form style = {{display: "inline-block", padding: 5}}><label><input type="radio" checked={is_tenant} onClick={handleIsTenant} onChange={()=>{}}/>Tenant</label>    </form>
                    <p><Link to={(is_tenant)?"/timeline":"/rent"} className="button"><button id = "login_button" checked={match} onClick={handleMatch}>Login</button></Link></p>
                </div>
                <div className="loginRight">
                    <h3>{loginContent.Title[2]}</h3>
                    <p>{loginContent.Introduction[1]}</p>
                    <Link to="/disclaimer" className="button"><button>Next</button></Link>
                </div>
            </div>
        )
    }
}

export default LoginView
