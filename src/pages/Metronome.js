import React, { Component } from 'react'
import { urls } from '../common/constants'

class Metronome extends Component {
    goToTest = () => {
        this.props.history.push(urls.fretboardTests);
    }
    render () {
        return (
            <div className='view'>
                <div className="horizontally-padded-container">
                <h1>Metronome Page</h1>
                </div>
                <div className='horizontally-padded-container'>
                    <p className='page-description'>This will host a metronome tool</p>
                </div>
                <div className='horizontally-padded-container'>
                    <button className='challenge-button' onClick={this.goToTest}>Fretboard Test</button>
                </div>
            </div>
        )
    }
}

export default Metronome;