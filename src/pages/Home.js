import React, { Component } from 'react'
import { urls } from '../common/constants'

class Home extends Component {
    goToTest = () => {
        this.props.history.push(urls.fretboardTests);
    }
    render () {
        return (
            <div className='view'>
                <div className="horizontally-padded-container">
                <h1>Welcome</h1>
                </div>
                <div className='horizontally-padded-container'>
                    <button className='challenge-button' onClick={this.goToTest}>Fretboard Test</button>
                </div>
            </div>
        )
    }
}

export default Home;