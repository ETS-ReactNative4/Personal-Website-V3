import React, { Component } from 'react';
import './AboutMe.css';
import './Global.css';
import Loading from './Loading';
import Globals from './Vars';

class AboutMe extends Component {
	constructor(props){
		super(props);
		this.state = {
			description: [],
			image: null,
			loaded: false,
		};
	}
	componentDidMount() {
		fetch(Globals.apiEndPoint + 'GetAbout',{
		  //mode: "no-cors",
		  method: "GET",
		  headers: {
		    "Accept": "application/json"
		  }
    })
    .then((response) => response.json())
    .then((responseJson) => {
    	this.setState({
    		description: responseJson.desc,
    		image: responseJson.img,
    		loaded: true
    	});
    })
	}
	dynamicStyle() {
    let width = window.innerWidth;
    let flex = '';
    if(width < 640)
    	flex = 'column-reverse';
    else  
    	flex = 'row';
    return {
    	flexDirection: flex,
    }
	}
	picDynamic() { 
		let width = window.innerWidth;
    if(width < 640)
	    return {
	    	height: window.innerHeight/2 + 'px',
	    }
    else  
	    return {
	    	height: window.innerHeight/1.5 + 'px',
	    }
	}
	picContainerDynamic() {
		if(window.innderWidth < 640)
		{
			return {
				height: window.innerHeight/2 + 'px'
			}
		}
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
				<div className='titleHead'>
					<h1>About Me</h1>
				</div>
				<div className='contentBox' style={this.dynamicStyle()}>
					<div className='contentLeft'>
						{this.state.description.map((para,index) => (
							<p key={index}>{para}</p>
	          ))}
						<div>
							<h3 className='contactTitle'>Contact Me</h3>	
							<p>
                E-Mail: <a href="mailto:alistairfink@gmail.com">alistairfink@gmail.com</a><br />
								Resume: <a href="https://drive.google.com/open?id=12KtoofbXqJj4QFBQ4gzA0PMsdmMH5wpj">My Resume</a><br />
								Github: <a href="https://github.com/alistairfink">My Github</a><br />
								LinkedIn: <a href="https://www.linkedin.com/in/alistairfink/">My LinkedIn</a><br /><br /><br />
							</p>
						</div>
					</div>
					<div className='contentRight'>
						<div className='contentRightInner'>
						<img className='profileImage' src={this.state.image} alt='profileImage' style={this.picDynamic()}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutMe;
