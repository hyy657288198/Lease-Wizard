/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import React from 'react'
/* Component for the List of Expenses */


export class PopupEdit extends React.Component {
    constructor(props) {
        super(props)
        this.Cancel = this.Cancel.bind(this)
    }

    Cancel(e) {
        e.preventDefault();
        const info = e.target.parentElement.parentElement
        info.classList.add('hide');
    }


    render() {
        const {addOrEditInDataBase, attr, deleteNote} = this.props
        return (
                <div id="editBox" className='sendBox popup hide'>
                    <span>
                        <h1 id="addTitle"> Edit Note</h1>
                        <span id="closeButton" className="toRight" onClick={this.Cancel}>Close ❌</span>
                        <br></br>
                        <br></br>
                        <br></br>
                        <span id="tag">{attr}</span>
                        <p>Edit or delete your note.</p>
                        <textarea className="emailContent toLeft" placeholder="Add notes for the tenant here"
                        cols="60" rows="10">
                        </textarea>
                    </span>
                    <br></br>
                    <button type="button" className="toLeft" onClick={addOrEditInDataBase}>SAVE</button>
                    <button id="deleteButton" type="button" className="toLeft" onClick={deleteNote}>DELETE</button>
                </div>
                )
            }
}


export default PopupEdit
