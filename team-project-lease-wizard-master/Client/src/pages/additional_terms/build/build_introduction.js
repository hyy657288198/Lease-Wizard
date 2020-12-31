/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import buildContent from '../../allPagesContents/mainContent/build_content'

export class BuildIntroduction extends Component {

    render() {
        return (

            <div>
                <h1>{buildContent.Title}</h1>
                <p>{buildContent.Introduction}</p>
            </div>
        )
    }
}

export default BuildIntroduction
