import React, { Component } from 'react';
import './Home.css';
import './Global.css';
//import Globals from './Vars';

class Home extends Component {
	dynamicLinkStyle() {
		let width = window.innerWidth;
    let flex = '';
    if(width < 640) flex = 'column';
    else flex = 'row';
    return {
    	flexDirection: flex, 
    }
	}
  render() {
    return (
      <div className='mainBackground'>
	    <div>	
      	<div className='nameTitle'>
	      	<h1 className='name'>Alistair Fink</h1>
	      	<h2 className='job'>Software Developer</h2>
		  	</div>
		  	<div className='links' style={this.dynamicLinkStyle()}>
		  		<h3 className='innerLink'><a href="https://drive.google.com/open?id=12KtoofbXqJj4QFBQ4gzA0PMsdmMH5wpj">Resume</a></h3>
					<h3 className='innerLink'><a href="https://github.com/alistairfink">Github</a></h3>
					<h3 className='innerLink'><a href="https://www.linkedin.com/in/alistairfink/">LinkedIn</a></h3>
		  	</div>
		  	<div className='buttonRow'>
	      		<div onClick={() => this.props.changePage('about_me')} className='button'>
	      			<h3 className="buttonText">About Me</h3>      	
	      		</div>
	      		<div onClick={() => this.props.changePage('portfolio')} className='button'>
	      			<h3 className="buttonText">Portfolio</h3>      	
	      		</div>
	      		<div onClick={() => this.props.changePage('experience')} className='button'>
	      			<h3 className="buttonText">Experience</h3>      	
	      		</div>
	      		<div onClick={() => this.props.changePage('education')} className='button'>
	      			<h3 className="buttonText">Education</h3>      	
	      		</div>
	      	</div>
	  	</div>
      </div>
    );
  }
}

export default Home;
