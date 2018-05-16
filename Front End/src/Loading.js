import React, { Component } from 'react';
import './Global.css';

class Home extends Component {
  render() {
    return (
      <div className='mainBackground'>
	   	<div>
				<div className='loadScreen'>
					<img className="loadIcon" src={require('./assets/loadIcon.png')} alt="loading"/>
					<h4 className="loadText">Loading</h4>
				</div>
  			</div>
      </div>
    );
  }
}

export default Home;
