import React, { Component } from 'react';
import './App.css';
import './Global.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Home from './Home';
import AboutMe from './AboutMe';
import Education from './Education';
import Expereince from './Experience';
import Portfolio from './Portfolio';




class Drawer extends Component {//Drawer Buttons
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
//Base64 for menu bar imgae
let imgSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAADwCAYAAAC3zX77AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4xNkRpr/UAAALUSURBVHhe7dqhAcMAEMPAjFxa1NHTBTyB/sARYUM/7/tC3oxQMyPUzAg1M0LNjFAzI9TMCDUzQs2MUDMj1MwINTNCzYxQMyPUzAg1M0LNjFAzI9TMCDUzQs2MUPN8vr8X6gydEwydEwydEwydEwydEwydEwydEwydEwydEwydEwydEwydEwydEwydE+Z3F2pmhJoZoWZGqJkRamaEmhmhZkaomRFqZoSaGaFmRqiZEWpmhJoZoWZGqJkRamaEmhmhZkaomRFqZoSaGaFmRqiZEWpmhJoZoWZGqJkRamaEmhmhZkaomRFqZoSaGaFmRqiZEWpmhJoZoWZGqJkRamaEmhmhZkaomRFqns/390KdoXOCoXOCoXOCoXOCoXOCoXOCoXOCoXOCoXOCoXOCoXOCoXOCoXOCoXPC/O5CzYxQMyPUzAg1M0LNjFAzI9TMCDUzQs2MUDMj1MwINTNCzYxQMyPUzAg1M0LNjFAzI9TMCDUzQs2MUDMj1MwINTNCzYxQMyPUzAg1M0LNjFAzI9TMCDUzQs2MUDMj1MwINTNCzYxQMyPUzAg1M0LNjFAzI9TMCDUzQs3z+f5eqDN0TjB0TjB0TjB0TjB0TjB0TjB0TjB0TjB0TjB0TjB0TjB0TjB0TjB0TpjfXaiZEWpmhJoZoWZGqJkRamaEmhmhZkaomRFqZoSaGaFmRqiZEWpmhJoZoWZGqJkRamaEmhmhZkaomRFqZoSaGaFmRqiZEWpmhJoZoWZGqJkRamaEmhmhZkaomRFqZoSaGaFmRqiZEWpmhJoZoWZGqJkRamaEmhmhZkaoeT7f3wt1hs4Jhs4Jhs4Jhs4Jhs4Jhs4Jhs4Jhs4Jhs4Jhs4Jhs4Jhs4Jhs4Jhs4J87sLNTNCzYxQMyPUzAg1M0LNjFAzI9TMCDUzQs2MUDMj1MwINTNCzYxQMyPUzAg1M0LNjFAzI9TMCDUzQs2M0PI+f9yAptLgkPPvAAAAAElFTkSuQmCC';
let iconSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAA8CAYAAADFXvyQAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAABrJQAAayUBmMRuGAAAABt0RVh0VGl0bGUASGFtYnVyZ2VyIChNZW51KSBJY29uiySdswAAABR0RVh0QXV0aG9yAERhbmllbCBGb3dsZXInSwyjAAAAqXRFWHREZXNjcmlwdGlvbgBBIHNpbXBsZSBhbmQgYmFzaWMgaGFtYnVyZ2VyIChtZW51KSBpY29uLiBJdCBvcmlnaW5hdGVzIGZyb20gWGVyb3ggIlN0YXIiIHdvcmtzdGF0aW9ucyBvZiB0aGUgMTk4MCdzIGJ1dCBpcyBub3cgcG9wdWxhciB0byBoaWRlL3Nob3cgbWVudXMgb24gbW9iaWxlIGRldmljZXMuY1+gygAAAFh0RVh0Q29weXJpZ2h0AENDMCBQdWJsaWMgRG9tYWluIERlZGljYXRpb24gaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvcHVibGljZG9tYWluL3plcm8vMS4wL8bjvfkAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTM0A1t6AAAC3klEQVR4Xu2bP2sUQRiHL8neRQMRjSlE7AQh2FmYTsugtoLY2FmopNLGSpuAiBrFfABNBCMiKMSAFp6gqOAl8UscKET3BP/ksrt3PjPzbi6bcKnEwvd94Oc7OzMW8zB37u54pW60Wq3+er0+oCHtdrsiy96aRqMxlKbp+SzLFkjMX2xoCJshJu9Y+2nqDtFRhIl7GHxPWrRVwtITymsyLFoCbuc4OX6W0ebTM0fpfOyQc07zztkIKjJyTPR4QR9lzBDYRY+9HNoV+UI21oGTJUrkBPVx8dn3Gmvg5AOl1+8iLp6EbiMHJze8HAffQUfJDxlTDy7cfdF+0eO/hyJyDWurfoZicNBEziWaPaInQEeZO8lxJvzyMxXC2peRc4ZmJFo2w4R9iLrA5Eky9b+H9d6l3qKeJUOiwTAMwzAMwzAM45/Bs0h/kiQnqJNkjmeUF0ri1nqdNR/hQbUsOoowMMykp0xS+8qDtf/GwQzNXaIlwMCg2zFhmoGke5TOKw/knCTu0MwABK3CYdHjBb2RMUNA0rSXQ7uMoK+h28jByQIlKtVqtTK2lkO3kYOTGqXP7yIu5kO3kcMOmvJyHFwcJ+pPNHJwsUIOih7/PTRAh/v33wA+Ubcp4eOVQ0cFSTeJynN61u34gpyrXHa9m46YdIhcJNNkVknuk3EygoPizjEMwzAMwzAM42/CLXcP6VWS4v9H3AqeRw6QCfeOiLxUkvk0Ta+w7r2iYTMMbmfiBLWJUZWw9u+Iukxzm2gJiJyH1CxM1YtzAHdodp7q6RwjK2GKgaCf+BgRPf6d9HMZMwSchHfStCMu7FRjAzgJpxr84c7FvvleYw2cLFLC8TO23oZuIwcnD7wcB7ZOETubF3DhftAyKnq8oEGMvZJx9eBillL8QQuSdpNnRO29EGtvOjlxHO8ULUWY487GxpIkecTEJdqflGSR9c5QR3HQ/adQ63ETnTANqVarXaSUSn8ArVYfzmVnZ4AAAAAASUVORK5CYII=';
class App extends Component {
  constructor(props){
    super(props);
    this.state = ({
      currPage: 'home',
      menuOpen: false,
      mobile: false
    });
  }
  changePage(page) {
    //Closes menu for phones if an option is chosen
    let width = window.innerWidth;
    if(width < 640)
    {
      this.setState({currPage:page, menuOpen: false});
      return;
    }
    this.setState({currPage:page});
  }
  componentWillMount() {
    //Defualt menu open for desktop and closed for phones
    let width = window.innerWidth;
    if(width <= 640)
      this.setState({menuOpen: false, mobile: true});
    else 
      this.setState({menuOpen: true});
  }
  render() {
    return (
      <div className="App">
        <div className="drawer" style={{zIndex:2}}>
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
            <img className="menuArrows" src={imgSrc} alt=""/>
            <img className="menuArrows" src={imgSrc} alt=""/>
            <img className="menuArrows" src={imgSrc} alt=""/>
            <img className="menuArrows" src={imgSrc} alt=""/>
          </div>
        </div>
        {
          (this.state.currPage === 'about_me') ? (
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
          )
        }
        {this.state.mobile &&
          <img onClick={() => this.setState({menuOpen: !this.state.menuOpen})} className="menuIcon" style={{zIndex:1}} src={iconSrc} alt="menuIcon" />
        }
      </div>
    );
  }
}

export default App;
