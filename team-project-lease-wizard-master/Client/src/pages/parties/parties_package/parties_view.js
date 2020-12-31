/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import 'rc-slider/assets/index.css'
import partiesViewContent from '../../allPagesContents/mainContent/parties_view_content'

export class PartiesView extends Component {


    render() {
        const {toggleClass1, toggleClass2, toggleClass3, add_tenant_active, add_building_manager_active, add_landlord_active, phone_checked, email_checked, landlord_name, tenant_name, landlord_address, landlord_unit, landlord_city, landlord_postal_code, landlord_phone, landlord_email, emergency_name, emergency_relation, emergency_email, emergency_phone, handleLandlordName, handleTenantName, handleLandlordAddress, handleLandlordUnit, handleLandlordCity, handleLandlordPostalCode, handleLandlordPhone, handleLandlordEmail, handleLandlordPhoneCheck, handleLandlordEmailCheck, handleEmergencyName, handleEmergencyRelation, handleEmergencyPhone, handleEmergencyEmail} = this.props
        let divStyle = {
            hidden: {
                visibility: "hidden",
                height: 0,
                opacity: 0
            },
            visible: {
                visibility: "visible",
                height: "auto",
                opacity: 1
            }
        }
        let tenant_symbol = " ➖ "
        if (!add_tenant_active) {
            tenant_symbol = " ➕ "
        }
        let building_manager_symbol = " ➖ "
        if (!add_building_manager_active) {
            building_manager_symbol = " ➕ "
        }
        let landlord_symbol = " ➖ "
        if (!add_landlord_active) {
            landlord_symbol = " ➕ "
        }

        return (
            <div>
                <h1>{partiesViewContent.heading}</h1>
                <h2> {partiesViewContent.names_heading} </h2>
                <p><input type="text" className = "parties" value={landlord_name} placeholder="Legal Name of Landlord"  onChange={handleLandlordName} />
                &nbsp;&nbsp;&nbsp;&nbsp; and &nbsp;&nbsp;&nbsp;&nbsp; <input type="text" className = "parties" value={tenant_name} placeholder="Legal Name of Tenant"  onChange={handleTenantName} /> </p>
                <span onClick={toggleClass1} style = {{display: "inline-block", padding: 18}}> {tenant_symbol} Add Tenant</span>
                <div style={add_tenant_active ? divStyle.visible : divStyle.hidden}>
                <p> &nbsp; &nbsp; {partiesViewContent.add_tenant} </p>
                </div>

                <h2>{partiesViewContent.landlord_contact_heading}</h2>
                <p><input type="text" className = "parties" value={landlord_address} placeholder="Address"  onChange={handleLandlordAddress} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" className = "parties" value={landlord_unit} placeholder="Unit"  onChange={handleLandlordUnit} /> </p>
                <p><input type="text" className = "parties" value={landlord_city} placeholder="City/Town"  onChange={handleLandlordCity} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" className = "parties" value={landlord_postal_code} placeholder="Postal Code"  onChange={handleLandlordPostalCode} /> </p>
                <p><input type="text" className = "parties" value={landlord_phone} placeholder="Phone Number"  onChange={handleLandlordPhone} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label><input type="checkbox" checked={phone_checked} onChange={handleLandlordPhoneCheck} /> Can contact by phone</label> </p>
                <p><input type="text" className = "parties" value={landlord_email} placeholder="Email"  onChange={handleLandlordEmail} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label><input type="checkbox" checked={email_checked} onChange={handleLandlordEmailCheck} /> Can contact by email</label> </p>
                <span onClick={toggleClass2} style = {{display: "inline-block", padding: 18}}> {building_manager_symbol} Add Building Manager</span>
                <div style={add_building_manager_active ? divStyle.visible : divStyle.hidden}>
                <p> &nbsp; &nbsp; {partiesViewContent.landlord_add_building_manager} </p>
                </div>
                <span onClick={toggleClass3} style = {{display: "inline-block", padding: 18}}> {landlord_symbol} Add Landlord</span>
                <div style={add_landlord_active ? divStyle.visible : divStyle.hidden}>
                <p> &nbsp; &nbsp; {partiesViewContent.landlord_add_landlord} </p>
                </div>

                <h2> {partiesViewContent.tenant_emergency_heading} </h2>
                <p><input type="text" className = "parties" value={emergency_name} placeholder="Name"  onChange={handleEmergencyName} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" className = "parties" value={emergency_relation} placeholder="Relation"  onChange={handleEmergencyRelation} /> </p>
                <p><input type="text" className = "parties" value={emergency_email} placeholder="Email"  onChange={handleEmergencyEmail} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" className = "parties" value={emergency_phone} placeholder="Phone"  onChange={handleEmergencyPhone} /> </p>
            </div>
        )
    }
}

export default PartiesView
