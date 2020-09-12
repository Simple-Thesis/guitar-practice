import React, { Component } from 'react'
import { urls } from '../common/constants'

class Blog extends Component {
    goToTest = () => {
        this.props.history.push(urls.fretboardTests);
    }
    render () {
        return (
            <div className='view'>
                <div className="horizontally-padded-container">
                <h1>Blog Page</h1>
                </div>
                <div className='horizontally-padded-container'>
                    <p className='page-description'>This will show recent and popular pages if the path is only "/blog". It will render the articles at "/blog/article-name"</p>
                </div>
                <div className='horizontally-padded-container'>
                    <button className='challenge-button' onClick={this.goToTest}>Fretboard Test</button>
                </div>
            </div>
        )
    }
}

export default Blog;