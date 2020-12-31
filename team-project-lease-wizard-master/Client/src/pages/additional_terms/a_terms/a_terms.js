/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React, { Component } from 'react'
import 'rc-slider/assets/index.css'
import  AdditionalTermsView from './a_terms_view.js'
import { Link } from 'react-router-dom'

export class AddtionalTerms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allSet: this.props.state.a_terms.allSet,
            a_checked: this.props.state.a_terms.a_checked,
            g_checked: this.props.state.a_terms.g_checked,
            b_checked: this.props.state.a_terms.b_checked,
            next_page: this.props.state.a_terms.next_page,
            pkg_add: this.props.state.a_terms.pkg_add
        }
    }

    updatePkgChoice(e){
        let tempProps = this.props.state
        tempProps.a_terms = this.state
        this.props.handler(tempProps)
    }
    render() {
        return (
            <div>
                < AdditionalTermsView/>
                <form>
                    <input type="radio" name="without" id="without"
                    value="without"  checked={this.state.a_checked} onChange={()=>{}}
                    onClick={() => {this.setState({   g_checked: false,
                                        b_checked: false, a_checked: !this.state.a_checked, next_page: "/end", pkg_add: 1, allSet: true}); this.updatePkgChoice.bind(this)}}/>
                    <label htmlFor="without"> Continue without additional terms</label>
                </form>
                <form>
                    <input type="radio" name="general" id="general"
                    value="general" checked={this.state.g_checked} onChange={()=>{}}
                    onClick={() => {this.setState({  a_checked: false,
                                        b_checked: false, g_checked: !this.state.g_checked, next_page: "/general_package", pkg_add: 1 , allSet: !this.state.allSet}); this.updatePkgChoice.bind(this)}}/>
                    <label htmlFor="general"> Attach general package</label>
                </form>
                <form>
                    <input type="radio" name="scratch" id="scratch"
                    value="scratch" checked={this.state.b_checked} onChange={()=>{}}
                    onClick={() => {this.setState({  g_checked: false, a_checked: false,
                                        b_checked: !this.state.b_checked, next_page: "/build_package", pkg_add: 2 , allSet: !this.state.allSet}); this.updatePkgChoice.bind(this)}}/>
                    <label htmlFor="scratch"> Build from scratch</label>
                </form>
                <Link id = "a_terms_next" to={this.state.next_page}><button id = "a_terms_butt"
                        disabled={!(this.state.a_checked|this.state.b_checked|this.state.g_checked)} onClick={this.updatePkgChoice.bind(this)} >Next</button>
                </Link>
            </div>
        )
    }
}

export default AddtionalTerms
