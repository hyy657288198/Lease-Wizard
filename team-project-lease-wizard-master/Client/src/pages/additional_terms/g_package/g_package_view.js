/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import GeneralPackage from './g_package.js'
import GeneralSub from '../../allPagesContents/mainContent/g_package_sub'
import generalPackageViewContent from '../../allPagesContents/mainContent/g_package_view_content'

export class GeneralPackageView extends Component {
    constructor(props) {         // added by Quan
        super(props)             // added by Quan
        this.state = {
            data: GeneralSub,
            allSet: this.props.state.g_pkg.allSet
        }
    }

    render() {

        return (

            <div>
                <h1> {generalPackageViewContent.heading} </h1>
                <p style = {{marginRight: 20}}> {generalPackageViewContent.information} </p>
                <nav>
                <ul>
                    <GeneralPackage id="Pets" name="Pets" />
                    <GeneralPackage id="Parking" name="Parking" />
                    <GeneralPackage id="Damages" name="Damages" />
                </ul>
                </nav>
            </div>

        )
    }
}

export default GeneralPackageView
