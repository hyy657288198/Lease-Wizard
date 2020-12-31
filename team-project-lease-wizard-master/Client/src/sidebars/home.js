/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import { ListItem } from '../sidebars/components.js'
import DefaultSidebar from './default_side_bar_content.js'

import AdditionalSideBar from '../pages/allPagesContents/sideBar/a_terms_side_bar_content'
import GeneralPkgSideBar from '../pages/allPagesContents/sideBar/g_package_side_bar_content.js'
import BuildSidebar from '../pages/allPagesContents/sideBar/build_side_bar_content'
import ProhibitSidebar from '../pages/allPagesContents/sideBar/p_terms_side_bar_content'
import ConcernsSidebar from '../pages/allPagesContents/sideBar/concerns_side_bar_content'
import EndSidebar from '../pages/allPagesContents/sideBar/end_side_bar_content'
import LegalSidebar from '../pages/allPagesContents/sideBar/legal_requirement_side_bar_content'
import DatesSidebar from '../pages/allPagesContents/sideBar/dates_side_bar_content'
import DepositSidebar from '../pages/allPagesContents/sideBar/deposit_side_bar_content'
import RentSidebar from '../pages/allPagesContents/sideBar/rent_side_bar_content'
import UtilitySidebar from '../pages/allPagesContents/sideBar/utility_side_bar_content'
import PaymentMethodSidebar from '../pages/allPagesContents/sideBar/payment_method_side_bar_content'
import ChangeToPartiesSidebar from '../pages/allPagesContents/sideBar/change_to_parties_side_bar_content.js'
import PartiesSidebar from '../pages/allPagesContents/sideBar/parties_side_bar_content'
import SignUpSidebar from '../pages/allPagesContents/sideBar/sign_up_side_bar_content'
import QASidebar from '../pages/allPagesContents/sideBar/q_and_a_side_bar_content'
import TimelineSidebar from '../pages/allPagesContents/sideBar/timeline_side_bar_content'
import { uid } from 'react-uid'

export class sidebarHome extends Component {
     constructor(props) {
        super(props)
        this.state = {
            active: false,
            default_sb: DefaultSidebar,
            a_terms_sb: AdditionalSideBar,
            g_pkg_sb: GeneralPkgSideBar,
            bld_sb: BuildSidebar,
            p_terms_sb: ProhibitSidebar,
            concerns_sb: ConcernsSidebar,
            end_sb: EndSidebar,
            legal_sb: LegalSidebar,
            dates_sb: DatesSidebar,
            deposit_sb: DepositSidebar,
            rent_sb: RentSidebar,
            utility_sb: UtilitySidebar,
            payment_sb: PaymentMethodSidebar,
            change_sb: ChangeToPartiesSidebar,
            parties_sb: PartiesSidebar,
            sign_up_sb: SignUpSidebar,
            q_a_sb: QASidebar,
            timeline_sb: TimelineSidebar
        }

    }
    render() {
        let sublist = (window.location.pathname === "/additional_terms" ? this.state.a_terms_sb :
            window.location.pathname ==="/general_package" ?this.state.g_pkg_sb:
            window.location.pathname ==="/build_package" ?this.state.bld_sb:
            window.location.pathname ==="/prohibit_terms" ?this.state.p_terms_sb:
            window.location.pathname ==="/concerns" ?this.state.concerns_sb:
            window.location.pathname ==="/end" ?this.state.end_sb:
            window.location.pathname ==="/legal_requirements" ?this.state.legal_sb:
            window.location.pathname ==="/dates" ?this.state.dates_sb:
            window.location.pathname ==="/deposits" ?this.state.deposit_sb:
            window.location.pathname ==="/rent" ?this.state.rent_sb:
            window.location.pathname ==="/utility_and_service" ?this.state.utility_sb:
            window.location.pathname ==="/payment_method" ?this.state.payment_sb:
            window.location.pathname ==="/parties_change" ?this.state.change_sb:
            window.location.pathname ==="/parties" ?this.state.parties_sb:
            window.location.pathname ==="/sign_up" ?this.state.sign_up_sb:
            window.location.pathname ==="/timeline_QandA" ?this.state.q_a_sb:
            window.location.pathname ==="/timeline" ?this.state.timeline_sb:this.state.default_sb)
        return (
            <div>
                <ul>{sublist.map((item, key) =>
                    <ListItem key={key} text={item.text} detail={item.detail}/>)}
                </ul>
            </div>
        )
    }
}

export default sidebarHome
