/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class SignUpSuccessTenant extends Component {
    render() {

        return (
            <div>
                <h1>Thanks for Signing up!</h1>
                <br></br>
                <p>
                    You have successfully created a profile. Please sign in with your email<br/>
                    address and password next time.
                </p>
                <br></br>
                <Link to="/timeline" className="button"><button id="startTheWizard" >START THE WIZARD</button></Link>
            </div>
        )
    }
}

export default SignUpSuccessTenant
