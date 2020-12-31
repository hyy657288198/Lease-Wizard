/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React from 'react'
/* Component for the List of Expenses */


export class PopupAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.Cancel = this.Cancel.bind(this)

    }

    Cancel(e) {
        e.preventDefault();
        const info = e.target.parentElement.parentElement
        info.classList.add('hide');
    }


    render() {
        const {addOrEditInDataBase, attr} = this.props
        return (
                <div id="addBox" className='sendBox popup hide'>
                    <span>
                        <h1 id="addTitle"> Add Note</h1>
                        <span id="closeButton" className="toRight" onClick={this.Cancel}>Close ❌</span>
                        
                        <br></br>
                        <br></br>                        
                        <br></br>
                        <span id="tag">{attr}</span>
                        <p>What would you like the tenant to know?</p>
                        <textarea className="emailContent toLeft" placeholder="Add notes for the tenant here"
                        cols="60" rows="10">
                        </textarea>
                    </span>
                    <button type="button" className="toLeft" onClick={addOrEditInDataBase}>ADD</button>
                </div>
                )
            }
}


export default PopupAdd
