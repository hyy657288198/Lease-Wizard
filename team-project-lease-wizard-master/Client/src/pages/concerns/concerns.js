/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import 'rc-slider/assets/index.css'
import ConcernsView from './concerns_view'

export class Concerns extends Component {
    constructor(props) {
        super(props)
        this.state = {
            concernText: ""
        }
        this.updateConcernInput = this.updateConcernInput.bind(this);
        this.sendAdditionalConcern = this.sendAdditionalConcern.bind(this);
    }
    // Changes the pre-existing state value (integer) for how much they're concerned.
    sliderChange = (name, value) => {
        let tempState = this.props.state
        tempState.concerns[name] = value
        this.props.handler(tempState)
    }
    // If they have an additional concern, we keep a component-scoped state to store what they're typing.
    updateConcernInput(event) {
        this.setState({ concernText: event.target.value })
    }
    // This pushes the additional concern as a string to an array called "additional" in the parent state.
    sendAdditionalConcern = (e) => {
        e.preventDefault()
        let concernTextValue = this.state.concernText
        let tempState = this.props.state
        tempState.concerns["additional"].push(concernTextValue)
        this.setState({ concernText: "" })
        this.props.handler(tempState)
    }

    render() {
        return (
            <ConcernsView>
                <concern_rent value={this.props.state.concerns.rent}
                onChange={(value) => this.sliderChange("rent", value)}/>
                <concern_utilities value={this.props.state.concerns.utilities}
                    onChange={(value) => this.sliderChange("utilities", value)}/>
                <concern_maintenance value={this.props.state.concerns.maintenance}
                    onChange={(value) => this.sliderChange("maintenance", value)}/>
                <concern_guests value={this.props.state.concerns.guests}
                    onChange={(value) => this.sliderChange("guests", value)}/>
                <concern_tenancy value={this.props.state.concerns.lengthOfTenancy}
                    onChange={(value) => this.sliderChange("lengthOfTenancy", value)}/>
                <concern_airbnb value={this.props.state.concerns.subletting}
                    onChange={(value) => this.sliderChange("subletting", value)}/>
                <additionalConcernTextIn value={this.state.concernText} onChange={this.updateConcernInput} />
                <sendAdditionalConcernIn  onClick={this.sendAdditionalConcern}/>
            </ConcernsView>
        )
    }
}

export default Concerns
