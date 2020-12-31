/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React from 'react'
import SingleAgreement from './build_singleAgreement.js'
import AddCustomAgreement from './build_addCustomAgreement'
import './build_style.css'

/* Component for the List of Expenses */
export class BuildCustom extends React.Component {
    render() {
        const {category, categoryFlag, buildContent, Show, AddToDataBase, DelFromDataBase} = this.props
        return (
                <table className={categoryFlag? '': 'hide'}>
                    <tbody id="agreementBox">
                        {buildContent[category].map((agreement) => {
                            return (
                                <SingleAgreement key={(agreement)}
                                    agreement = {agreement}
                                    AddToDataBase={AddToDataBase}
                                    DelFromDataBase={DelFromDataBase}/>
                            )
                        })}
                        <AddCustomAgreement Show={Show}/>
                    </tbody>
                </table>
                )
            }
}


export default BuildCustom
