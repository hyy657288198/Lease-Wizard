/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Disclaimer extends Component {
    constructor() {
        super()
        this.state = {
            checked: false
        }
    }
    render() {
        return (
            <div className="disclaimer">
                <h3>You’re almost ready to get started! Please read our terms of use below. </h3>
                <p>Legal Disclaimer: this tool does not provide legal advice and does not guarantee compliance with the Residential Tenancies Act, 2006.</p>
                <p>The information you enter in this wizard will be strictly protected. Please read our Privacy Policy. </p>
                <p>By clicking “I agree”, you agree with the terms of our Privacy Policy and agree not to hold us liable for any disputes arising from the lease you create or review using this tool.</p>
                <p><label htmlFor="iagree"><input id="iagree" type="checkbox" checked={this.state.checked} onChange={() => { this.setState({ checked: !this.state.checked }); }} /> I agree</label></p>
                <Link className={this.state.checked ? null : 'disabledLink'} to="/concerns"><button disabled={!this.state.checked}>Next</button></Link>
            </div>
        )
    }
}

export default Disclaimer
