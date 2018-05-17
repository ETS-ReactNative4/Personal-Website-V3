import React, { Component } from 'react';
import './App.css';
import './Global.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Home from './Home';
import AboutMe from './AboutMe';
import Education from './Education';
import Expereince from './Experience';
import Portfolio from './Portfolio';

// eslint-disable-next-line
class Drawer extends Component {

// eslint-disable-next-line
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div>
        <div className="spaceFill"></div>
        <div className="menuItem" onClick={() => this.props.changePage('home')}>
          <h4 className="menuText">Home</h4>
        </div>
        <div className="menuSeperators"></div>
        <div className="menuItem" onClick={() => this.props.changePage('about_me')}>
          <h4 className="menuText">About Me</h4>
        </div>
        <div className="menuSeperators"></div>
        <div className="menuItem" onClick={() => this.props.changePage('portfolio')}>
          <h4 className="menuText">Portfolio</h4>
        </div>
        <div className="menuSeperators"></div>
        <div className="menuItem" onClick={() => this.props.changePage('experience')}>
          <h4 className="menuText">Experience</h4>
        </div>
        <div className="menuSeperators"></div>
        <div className="menuItem" onClick={() => this.props.changePage('education')}>
          <h4 className="menuText">Education</h4>
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = ({
      currPage: 'home',
      menuOpen: false,
    });
  }
  changePage(page) {
    let width = window.innerWidth;
    if(width < 640)
    {
      this.setState({currPage:page, menuOpen: false});
      return;
    }
    this.setState({currPage:page});
  }
  componentWillMount() {
    let width = window.innerWidth;
    if(width <= 640)
      this.setState({menuOpen: false});
    else 
      this.setState({menuOpen: true});
  }
  render() {
    return (
      <div className="App">
        <div className="drawer">
          <ReactCSSTransitionGroup
            transitionName="sideMenu"
            transitionEnterTimeout={0}
            transitionLeaveTimeout={0}
          >
            {this.state.menuOpen &&
              <Drawer changePage={(page) => this.changePage(page)}/>
            }
          </ReactCSSTransitionGroup>
          <div onClick={() => this.setState({menuOpen: !this.state.menuOpen})} className="drawerExpand">
            <img className="menuArrows" src={require('./assets/menuArrow.png')} alt=""/>
            <img className="menuArrows" src={require('./assets/menuArrow.png')} alt=""/>
            <img className="menuArrows" src={require('./assets/menuArrow.png')} alt=""/>
            <img className="menuArrows" src={require('./assets/menuArrow.png')} alt=""/>
          </div>
        </div>
        {(this.state.currPage === 'about_me') ? (
          <AboutMe changePage={(page) => this.changePage(page)}/>
        ) :
        (this.state.currPage === 'portfolio') ? (
          <Portfolio changePage={(page) => this.changePage(page)}/>
        ) :
        (this.state.currPage === 'experience') ? (
          <Expereince changePage={(page) => this.changePage(page)}/>
        ) :
        (this.state.currPage === 'education') ? (
          <Education changePage={(page) => this.changePage(page)}/>
        ) :
        (
          <Home changePage={(page) => this.changePage(page)}/>
        )}
      </div>
    );
  }
}

export default App;
