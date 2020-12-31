/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

export class MySlider extends Component {
    render() {
        const sliderBarStyle = {
            border: "1px solid #9EF5E0",
            height: "16px",
            width: "16px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)"
        }
        const sliderTrackStyle = { backgroundColor: "#7BF1D4" }
        return (

            <Slider handleStyle={sliderBarStyle}
                            trackStyle={sliderTrackStyle}/>
        )
    }
}

export default MySlider
