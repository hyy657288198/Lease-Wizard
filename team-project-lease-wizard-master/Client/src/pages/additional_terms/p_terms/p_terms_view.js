/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import ProhibitTerms from './p_terms.js'
import prohibitTermsViewContent from '../../allPagesContents/mainContent/p_terms_view_content'


export class ProhibitTermView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allSet: true
        }
    }
    render() {
        const bld_pkg_pets = {
                  id: 'Pets',
                  desc: this.props.state.buildPkg.data.Pets,
                  checked: false
}
const bld_pkg_Parking = {
                  id: 'Parking',
                  desc: this.props.state.buildPkg.data.Parking,
                  checked: false
}
const bld_pkg_Dmg = {
                  id: 'Damages',
                  desc: this.props.state.buildPkg.data.Damages,
                  checked: false
}
        let bld_pkg = [bld_pkg_pets, bld_pkg_Parking, bld_pkg_Dmg]
        let data_lst = this.props.state.a_terms.pkg_add ===2? bld_pkg:this.props.state.g_pkg.data
        return (

            <div>
                <h1> {prohibitTermsViewContent.heading} </h1>
                <p> {prohibitTermsViewContent.information} </p>
                <nav>
                <ul>
                    <ProhibitTerms id="Parking" name="The Tenant must get the Landlord's permission to have guests" data={data_lst} state = {this.state}/>
                    <ProhibitTerms id="Pets" name="The Tenant is prohibited from having pets." data={data_lst} state = {this.state}/>
                    <ProhibitTerms id="Damages" name="The Tenant must get the Landlord's permission to decorate." data={data_lst} state = {this.state}/>
                </ul>
                </nav>
            </div>

        )
    }
}

export default ProhibitTermView
