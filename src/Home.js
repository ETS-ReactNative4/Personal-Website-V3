import React, { Component } from 'react';
import './Home.css';
import './Global.css';

class Home extends Component {
  render() {
    return (
      <div className='mainBackground'>
	    <div>
	      	<div className='nameTitle'>
		      	<h1 className='name'>Alistair Fink</h1>
		      	<h2 className='job'>Software Developer</h2>
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
