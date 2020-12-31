/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import buildContent from '../additional_terms/build/build'
import GeneralSub from '../allPagesContents/mainContent/g_package_sub'
import SendPopupWindow from './send_to_tenant/send_popupWindow'
import SendPopupSuccess from './send_to_tenant/send_ popupSuccess'
const log = console.log

export class EndView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "login":{
                email: '',
                password: '',
                match: false,
                is_landlord:false
            },
            "global":{
                all_users:this.props.state.global.all_users,
                all_users_profile:this.props.state.global.all_users_profile,
                all_tenants_profile:this.props.state.global.all_tenants_profile,
                all_landlords_profile:this.props.state.global.all_landlords_profile,
                AllEmails: this.props.state.global.AllEmails,
                AllLandlords: this.props.state.global.AllLandlords,
                AllTenants: this.props.state.global.AllTenants,
                current_user: this.props.state.global.current_user,
                current_user_name:this.props.state.global.current_user_name,
                current_user_type:this.props.state.global.current_user_type,
                close: false
            },
            "sign_up":{
                first_name: '',
                last_name: '',
                address: '',
                city: '',
                postal_code: '',
                number_of_Rental_Units: '',
                email_address: '',
                password: '',
                password_confirmation: '',
                is_landlord: false,
                is_tenant: false,
                password_match: false
            },
            "concerns": {
                "rent": 0,
                "utilities": 0,
                "maintenance": 0,
                "guests": 0,
                "lengthOfTenancy": 0,
                "subletting": 0,
                "additional": []
            },
            "deposits":{
                allSet: false,
                rent_required_checked: false,
                rent_not_required_checked: false,
                key_required_checked: false,
                key_not_required_checked: false,
                last_month_deposit_amount: '',
                last_month_deposit_date: '',
                key_deposit_amount: '',
                key_deposit_date:''
            },
            "dates": {
                allSet: false,
                active: false,
                all_true: "",
                movein_date: '',
                start_fixed_date: '',
                pro_rated_start_date: '',
                pro_rated_end_date: '',
                pro_rated_due_date: '',
                pro_rated_amount: ''
            },
            "rents": {
                allSet: false,
                yes_checked: false,
                no_checked: false,
                m_checked: false,
                w_checked: false,
                o_checked: false,
                yes_start_date: '',
                yes_end_date: '',
                no_start_date: '',
                base_amount:''
            },
            "payment_method": {
                email_checked: false,
                cheque_checked: false,
                cash_checked: false,
                paypal_checked: false,
                other_checked: false,
                email: '',
                other: '',
                yes_checked: false,
                no_checked: false
            },
            "parties": {
                allSet: false,
                add_tenant_active: false,
                add_building_manager_active: false,
                add_landlord_active: false,
                phone_checked: false,
                email_checked: false,
                all_true: "",
                landlord_name: '',
                tenant_name: '',
                landlord_address: '',
                landlord_unit: '',
                landlord_city: '',
                landlord_postal_code: '',
                landlord_phone: '',
                landlord_email: '',
                emergency_name: '',
                emergency_relation: '',
                emergency_email: '',
                emergency_phone: ''
            },
            "requirements": {
                 allSet: false,
                smoke_allowed_checked : false,
                smoke_not_allowed_checked: true
            },
            "a_terms":{
                allSet: false,
               a_checked: false,
                g_checked: false,
                b_checked: false,
                next_page: "/",
                pkg_add: 0
            },
            "g_pkg": {
                data: GeneralSub,
                allSet: false,
                'Parking': GeneralSub[0].desc,
                'Damages': GeneralSub[1].desc,
                'Pets': GeneralSub[2].desc
            },
            "buildPkg" : {
                allSet: false,
                active: {'Parking': false, 'Damages': false, 'Pets': false},
                right_content: buildContent,
                input_value: "",
                inputAcc: 0,
                currentSection: "",
                data: {'Parking': [],
                        'Damages': [],
                        'Pets': []
                },
                popupState: "",
            }
        }
        this.Send = this.Send.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleRestart = this.handleRestart.bind(this)
        this.GetPDF = this.GetPDF.bind(this)
        this.Export = this.Export.bind(this)
        this.Download = this.Download.bind(this)
        this.View = this.View.bind(this)
    }

    handleClose(event){
        let tempProps = this.props.state
        tempProps.global.close = true
        tempProps.global.current_user = ''
        tempProps.global.current_user_name = ''
        tempProps.global.current_user_type = ''
        this.props.handler(tempProps)
    }

    handleRestart(event){
        let tempProps = this.props.state
        tempProps = this.state
        this.props.handler(tempProps)
    }

    Send(e) {
        e.preventDefault();
        const popup_window = e.target.parentElement.parentElement.parentElement.parentElement.querySelectorAll("#sendBox")[0]
        popup_window.classList.remove('hide')
    }

    Export(download) {
        const url = "/pdf";
        // Create our request constructor with all the parameters we need
        const request = new Request(url, {
            method: "post",
            body: JSON.stringify(this.props.state),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        });
        // Send the request with fetch()
        fetch(request).then(function (res) {
            // Handle response we get from the API.
            // Usually check the error codes to see what happened.
            if (res.status === 200) {
                // If student was added successfully, tell the user.
                return res.json()
            } else {
                console.log('Export Fail')
            }
        }).then((json) => {
            log(json)
            this.GetPDF(json.fileId, download)
        }).catch((error) => {
            log(error)
        })
    }

    GetPDF = (id, download) => {
        // Create our request constructor with all the parameters we need
        const url = "/pdf/" + id
        const request = new Request(url, {
            method: "GET",
            headers: {
                Accept: "application/pdf"
            }
        });
        fetch(request)
            .then((res) => {
                if (res.status === 200) {
                    return res.text()
                } else {
                    log("Export Fails")
                }
            })
            .then((id) => {  // the resolved promise with the JSON body
                if (download) {
                    window.open(url + "/download")
                } else {
                    window.open(url + "/view")
                }
            }).catch((error) => {
                console.log(error)
            })
    };

    Download(e) {
        e.preventDefault();
        this.Export(true)
    }

    View(e) {
        e.preventDefault();
        this.Export(false)
    }

    render() {
        const LinkStyle = {
            color: "black",
            textDecoration: "none"
        }
        const emailEmoji = "✉️"
        const printEmoji = "🖨️"
        const saveEmoji = "💾"
        const restartEmoji = "♻️"
        return (
            // <object data="a.pdf" type="application/pdf" width="95%" height="700px"></object>
            // <object width="800" height="600" data="go_to_your_pdf_path.pdf" type="application/pdf">
            //     <param name="src" value="go_to_your_pdf_path.pdf"/>>
            // </object>
            <div>
                <SendPopupWindow AllTenants={this.props.state.global.AllTenants}/>
                <SendPopupSuccess />
                <h1>You are almost done!</h1><button className="end" onClick={this.View}>PREVIEW</button>
                <p>Thank you for filling out all the sections. Now you can view a copy of your lease and send it to your tenant for review. Please note we recommend printing out the PDF, then review and sign with your tenant.</p>
                <p><br /></p>
                <h2>Here's a few options for you:</h2>
                <div>
                    <ul>
                        <li><p onClick={this.View}>→ Print your release {printEmoji} </p></li>
                        <li><p onClick={this.Export}>→ Save as PDF {saveEmoji} </p></li>
                        <li><Link style={LinkStyle} to='/disclaimer' color="black"><p onClick={this.handleRestart}>→ Restart the process {restartEmoji} </p></Link></li>
                        <li>
                            <p onClick={this.Send}>→ Send to tenant to review {emailEmoji}</p>
                        </li>
                    </ul>
                </div>
                <div>
                <h1>Thank you for choosing the Ontario Standard Lease Wizard!</h1>
                <Link to="/login" className="button"><button onClick={this.handleClose}>Close</button></Link>
                </div>
            </div>

        )
    }
}

export default EndView
