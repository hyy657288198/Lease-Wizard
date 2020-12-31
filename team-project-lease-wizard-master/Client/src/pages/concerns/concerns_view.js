/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import 'rc-slider/assets/index.css'
import MySlider from '../shared_elements/my_slider.js'
import concernsViewContent from '../allPagesContents/mainContent/concerns_view_content'

export class ConcernsView extends Component {

    render() {
        const sliderContainer = {
            width: "60%",
            height: "39px",
            margin: 0,
            display: "table-cell"
        }

        return (

            <div>
                <h1> {concernsViewContent.heading} </h1>
                {concernsViewContent.info_lines.map((item, key) => <p key={key}>{item}</p>)}

                <div className="sliderTable">
                    <span className="sliderLabelLeft">Not Concerned</span>
                    <span className="sliderLabelRight">Very Concerned</span>
                    <div className="sliderRow" >
                        <div className="sliderLabel"> {concernsViewContent.concerns_list[0]} </div>
                        <div style={sliderContainer}>
                            <MySlider id="concern_rent"/>
                        </div>
                    </div>
                    <div className="sliderRow">
                        <div className="sliderLabel"> {concernsViewContent.concerns_list[1]} </div>
                        <div style={sliderContainer}>
                            <MySlider id="concern_utilities"/>
                        </div>
                    </div>
                    <div className="sliderRow">
                        <div className="sliderLabel"> {concernsViewContent.concerns_list[2]} </div>
                        <div style={sliderContainer}>
                            <MySlider id="concern_maintenance"/>
                        </div>
                    </div>
                    <div className="sliderRow">
                        <div className="sliderLabel"> {concernsViewContent.concerns_list[3]} </div>
                        <div style={sliderContainer}>
                            <MySlider id="concern_guests"/>
                        </div>
                    </div>
                    <div className="sliderRow">
                        <div className="sliderLabel"> {concernsViewContent.concerns_list[4]} </div>
                        <div style={sliderContainer}>
                            <MySlider id="concern_tenancy"/>
                        </div>
                    </div>
                    <div className="sliderRow">
                        <div className="sliderLabel"> {concernsViewContent.concerns_list[5]} </div>
                        <div style={sliderContainer}>
                            <MySlider id="concern_airbnb"/>
                        </div>
                    </div>
                </div>

                <p>{concernsViewContent.other}</p>
                <form>
                <input id = 'additionalConcernTextIn' type="text" placeholder="Type here..."/>
                <input id = 'sendAdditionalConcernIn' type="submit"/>
                </form>
                </div>

        )
    }
}

export default ConcernsView
