import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {urls} from '../common/constants';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    window.onclick = function(event) {
      if (!event.target.matches('.brgr-wrapper')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show-dropdown')) {
            openDropdown.classList.remove('show-dropdown');
            document.getElementById('root').classList.toggle('show-modal');
          }
        }
        return;
      }
    }
  }
  openMenu = (e) => {
    document.getElementById('widget').classList.toggle('show-dropdown');
    document.getElementById('root').classList.toggle('show-modal');
  }
  logoClicked = () => {
    if (document.location.pathname !== urls.home){
      this.props.history.push(urls.home);
    }
  }
  logout = () => {
    document.getElementById('root').classList.remove('show-modal');
    this.props.history.push(urls.login);
  }

  render() {
    return (
      <div className='sticky-header'>
        <img src='../images/white_h_transparent_bg.png' height='30px' alt='Haas Logo' style={{cursor: 'pointer', display: this.props.user && this.props.user.iduser ? 'inline-block' : 'none'}} onClick={this.logoClicked}/>
        <h1 className={'site-header ' + (this.props.user && this.props.user.iduser ? '' : 'login-header')} onClick={this.logoClicked}>Haas CG</h1>
        {
          this.props.user && this.props.user.iduser ? 
            <span>
              <button id='wrapper' className='brgr-wrapper fa fa-bars' onClick={this.openMenu} style={{color: 'white', fontSize: '22px', backgroundColor: 'transparent', border: 'none', boxShadow: 'none', outline: 'none'}}/>
              <div id='widget' className='dropdown-content'>
                <a className='nav-link' href={urls.home}>Home</a>
                <a className='nav-link' href={urls.profile}>Profile</a>
              </div>
            </span>
            :
            null
        }
      </div>
    )
  }
}
export default Header;
