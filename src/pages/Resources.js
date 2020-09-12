import React, { Component } from 'react'
import { urls } from '../common/constants'

class Resources extends Component {
    goToTest = () => {
        this.props.history.push(urls.fretboardTests);
    }
    render () {
        return (
            <div className='view'>
                <div className="horizontally-padded-container">
                <h1>Resources Page</h1>
                </div>
                <div className='horizontally-padded-container'>
                    <p className='page-description'>This will show external resources if the path is only "/resources". It will show embeded content if that content is set up with a slug on the site.</p>
                </div>
                <div className='horizontally-padded-container'>
                    <button className='challenge-button' onClick={this.goToTest}>Fretboard Test</button>
                </div>
            </div>
        )
    }
}

export default Resources;