import React, { Component } from 'react';
import { Helpers } from '../utilities';

const notes = {
  letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
  chromatic_flats: ['A♭', 'A', 'B♭', 'B', 'C', 'D♭', 'D', 'E♭', 'E', 'F', 'G♭', 'G'], //♭
  chromatic_sharps: ['A', 'A♯', 'B', 'C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯'], //♯
  chromatic_all: ['A♭', 'A', 'A♯', 'B♭', 'B', 'C', 'C♯', 'D♭', 'D', 'D♯', 'E♭', 'E', 'F', 'F♯', 'G♭', 'G', 'G♯']
};

class FretboardTest extends Component {
    constructor(props){
      super(props);
      this.state = {
        note: 'A',
        showAnswers: true,
        string: Helpers.GetRandomInt(1, 6),
        useChromatic: true
      }
    }
    // LIFECYCLE
    componentDidMount = () => {
      // console.log('mounted');
    }
  
    //METHODS
    changeNotes = () => {
      if (this.state.showAnswers){
        let nthString = Helpers.GetNthInt(this.state.string);
        alert(`${this.state.note} is on the ${this.calculateFret()} fret of the ${nthString} string`);
      }
  
      let string = Helpers.GetRandomInt(1, 6);
      let note = this.getRandomNote();
  
      this.setState({note, string});
    }
    getRandomNote = () => {
      if (this.state.useChromatic){
        return notes.chromatic_all[Helpers.GetRandomInt(0, notes.chromatic_all.length - 1)];
      }
  
      return notes.letters[Helpers.GetRandomInt(0, notes.letters.length - 1)];
    }
    calculateFret = () => {
      return this.findFret();
  
      //TODO: Calculate !
    }
    findFret = () => {
      let arr = [];
      if (this.state.note.indexOf('♭') > 0){
        arr = notes.chromatic_flats;
      } else if (this.state.note.indexOf('♯') > 0){
        arr = notes.chromatic_sharps;
      } else {
        arr = notes.chromatic_sharps;
      }
  
      let openNote = this.getOpenNote(this.state.string);
  
      while (arr[0] !== openNote){
        let note = arr.shift();
        arr.push(note);
      }
  
      let fret = arr.indexOf(this.state.note);
  
      return Helpers.GetNthInt(fret);
    }
    getOpenNote = (n) => {
      switch (n) {
        case 1:
        case 6: return 'E';
        case 2: return 'B';
        case 3: return 'G';
        case 4: return 'D';
        case 5: return 'A';
        default: return 'X';
      }
    }
  
    //EVENTS
    toggleOption = (name) => {
      if (this.state[name] === undefined){
        return;
      }
  
      this.setState({[name]: !this.state[name]});
    }
  
    //THE RENDER FUNCTION
    render() {
      return (
        <div className="view">
          {/* title */}
          <div className="horizontally-padded-container">
            <h1>Guitar Practice</h1>
          </div>
    
          <div className='card-container'>
            {/* left card */}
            <div className='rounded-card'>
              <div className='card-header-container'>
                <h2>Note to find</h2>
              </div>
              <div className='card-data-container'>
                <h3>{this.state.note}</h3>
              </div>
            </div>
    
            {/* right card */}
            <div className='rounded-card'>
              <div className='card-header-container'>
                <h2>String</h2>
              </div>
              <div className='card-data-container'>
                <h3>{this.state.string}</h3>
              </div>
            </div>
          </div>
  
          {/* change button */}
          <div className='horizontally-padded-container'>
            <button className='challenge-button' onClick={this.changeNotes}>Next Note</button>
          </div>
  
          {/* options */}
          <div className='options-container'>
            <h4>Options</h4>
            {/* reveal answers on note change */}
            <div className='temp-checkbox-line'>
              <input type='checkbox' name='showAnswersCb' checked={this.state.showAnswers} onChange={() => this.toggleOption('showAnswers')} className='neat-checkbox'/>
              <p className='checkbox-text'>Show answers when changing notes</p>
            </div>
            {/* use chromatic notes TODO: sharps, flats, or all */}
            <div className='temp-checkbox-line'>
              <input type='checkbox' name='useChromaticCb' checked={this.state.useChromatic} onChange={() => this.toggleOption('useChromatic')} className='neat-checkbox'/>
              <p className='checkbox-text'>Use chromatic notes</p>
            </div>
            {/* show timer */}
          </div>
        </div>
      );
    }
  }

export default FretboardTest;