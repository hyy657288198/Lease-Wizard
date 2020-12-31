/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import 'rc-slider/assets/index.css'
import additionalTermViewContent from '../../allPagesContents/mainContent/a_terms_view_content'
export class AdditionalTermsView extends Component {

    render() {
        return (

            <div>
                <h1>{additionalTermViewContent.heading}</h1>
                {additionalTermViewContent.lines.map((item, key) => <p key={key}>{item}</p>)}
            </div>
        )
    }
}

export default AdditionalTermsView
