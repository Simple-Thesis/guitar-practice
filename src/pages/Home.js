import React, { Component } from 'react'
import { urls } from '../common/constants'

class Home extends Component {
    goTo = (url) => {
        this.props.history.push(url)
    }
    render () {
        return (
            <div className='view'>
                <div className="horizontally-padded-container">
                <h1>Welcome</h1>
                </div>
                <div className='horizontally-padded-container'>
                    <button className='challenge-button' onClick={() => this.goTo(urls.fretboardTests)}>Fretboard Test</button>
                </div>
                <div className='horizontally-padded-container'>
                    <button className='challenge-button' onClick={() => this.goTo(urls.blog)}>Blog</button>
                </div>
                <div className='horizontally-padded-container'>
                    <button className='challenge-button' onClick={() => this.goTo(urls.metronome)}>Metronome</button>
                </div>
                <div className='horizontally-padded-container'>
                    <button className='challenge-button' onClick={() => this.goTo(urls.resources)}>Resources</button>
                </div>
                <div className='horizontally-padded-container'>
                    <button className='challenge-button' onClick={() => this.goTo(urls.tuner)}>Tuner</button>
                </div>
            </div>
        )
    }
}

export default Home;