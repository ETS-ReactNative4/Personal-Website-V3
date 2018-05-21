import React, { Component } from 'react';
import './Global.css';
import Loading from './Loading';
import Globals from './Vars';
import './Experience.css';


class Experience extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			items: [],
		};
	}
	componentDidMount() {
		fetch(Globals.apiEndPoint + 'GetExperience',{
		  //mode: "no-cors",
		  method: "GET",
		  headers: {
		    "Accept": "application/json"
		  }
    })
    .then((response) => response.json())
    .then((responseJson) => {
    	responseJson.reverse();
    	this.setState({
    		items: responseJson,
    		loaded: true
    	});
    })
	}
	dynamicStyle() {
    let width = window.innerWidth;
    let flex = '';
    if(width < 640)
    	flex = 'column';
    else  
    	flex = 'row';
    return {
    	flexDirection: flex,
    }
	}
	imgDynamic() {
    let width = window.innerWidth;
    if(width < 640)
	    return {
	    	width: width/2 + 'px',
	    }
    else  
	    return {
	    	width: width/5 + 'px',
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
	      <div className='titleHead titleHeadExp'>
	      	<h1 className='titleText'>Experience</h1>
      	</div>
      	{this.state.items.map((item, index) => (
      		<div key={index} className='itemOuter' style={this.dynamicStyle()}>
      			<div className='contentLeft'>
      				<img style={this.imgDynamic()} className='logoImg' src={item.img} alt={item.img}/>
      			</div>
      			<div className='contentRight'>
      				<h3>{item.position}</h3>
      				<p className='paragraph'>
      					{item.start} - {item.end}<br/>
      					{item.comp}<br/>
      					{item.location}<br/>
              </p>
							<ul>
      					{item.data.map((dataPoint, i) => (
      						<li key={i}>{dataPoint}</li>
      					))}
      				</ul>
      			</div>
      		</div>
      	))}
      </div>
    );
  }
}

export default Experience;
