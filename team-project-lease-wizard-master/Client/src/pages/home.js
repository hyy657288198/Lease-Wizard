/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Home extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to the Ontario Lease Wizard!<br/>Let's get started!</h1>
                <h3>Here's an overview of the process</h3>
                <ol>
                    <li>1. Sign in or Create a new Lease</li>
                    <li>2. Share your Concerns</li>
                    <li>3. Review & Add Terms</li>
                    <li>4. View & Print</li>
                </ol>
                <Link to="/login" className="button"><button id="getStarted">Get Started</button></Link>
            </div>
        )
    }
}

export default Home
