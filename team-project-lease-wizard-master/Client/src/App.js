/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react';
import './App.scss';
import Header from './components/header'
import Navigation from './components/navigation/navigation'
import Content from './components/content/content'
import Footer from './components/footer'
import GeneralSub from './pages/allPagesContents/mainContent/g_package_sub'
import buildContent from './pages/allPagesContents/mainContent/build_content'
import UtilityContent from './pages/allPagesContents/mainContent/utility_content'

class App extends Component {
    constructor() {
        super()
        // The handler is passed down as a prop method for children to manipulate parent state. Here, the handler is bound to App.js context.
        this.handler = this.handler.bind(this)
    }
    state = {
        "login":{
            email: '',
            password: '',
            match: false,
            is_landlord:false
        },
        "global":{
            all_users:[],
            all_users_profile:[],
            all_tenants_profile:[],
            all_landlords_profile:[],
            AllEmails: [],
            AllLandlords: [],
            AllTenants: ["tenant1@outlook.com", "tenant2@outlook.com"],
            current_user: '',
            current_user_name:'',
            current_user_type:'',
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
            yes_start_date: "mm/dd/yyyy",
            yes_end_date: "mm/dd/yyyy",
            no_start_date: "mm/dd/yyyy",
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
            pkg_add: -1
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
        },
        "utility_and_service" : {
            table_content: UtilityContent,
            numRow: UtilityContent.TableRowLabel.length,
            allSet: false,
            checkedNum: 0,
            data: {
                'Electricity': ["false", "false", "false", ""], 
                'Heat': ["false", "false", "false", ""], 
                'Gas': ["false", "false", "false", ""], 
                'Water': ["false", "false", "false", ""], 
                'Air_Conditioning': ["false", "false", "false", ""], 
                'WasherOrDryer': ["false", "false", "false", ""], 
                'Internet': ["false", "false", "false", ""], 
                'Landline': ["false", "false", "false", ""], 
                'Cable': ["false", "false", "false", ""], 
                'Tenant_Parking': ["false", "false", "false", ""], 
                'Guest_Parking': ["false", "false", "false", ""], 
                'Lawn_Care': ["false", "false", "false", ""], 
                'Snow_Removal': ["false", "false", "false", ""], 
                'Tenant_Insurance': ["false", "false", "false", ""], 
                'Cleaning_Services': ["false", "false", "false", ""]
            },
            input_value: ""
        },
    }
    // You pass the handler the full state to update each time. This means the child needs to call the current state as an object into a temporary variable, make changes, and then pass in the variable as the update here. See an example in pages/concerns.js:14 for what that looks like. For us, here. it just means we pass the state as a property down the component tree.
    handler(update) {
        this.setState(update)
    }

    render() {
        return (
            <div className="App">
        <Header handler={this.handler} state={this.state}/>
        <div className="AppGrid">
          <Navigation state={this.state}/>
          <Content handler={this.handler} state={this.state}/>
          <Footer handler={this.handler} state={this.state}/>
      </div>
    </div>
        );
    }
}

export default App;
