import React, { Component } from 'react';
import './Home.css';
import './Global.css';
import Loading from './Loading';

class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			loaded: false,
		};
	}
	render() {
		if(!this.state.loaded)
		{
			return (
				<Loading/>
			);
		}
		return (
			<div className='mainBackground'>
				<div>
					<h1>About Me</h1>
				</div>
			</div>
		);
	}
}

export default Home;
