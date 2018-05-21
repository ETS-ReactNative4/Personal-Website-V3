import React, { Component } from 'react';
import './Global.css';
import Loading from './Loading';
import Globals from './Vars';
import './Experience.css';


class Education extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			items: [],
		};
	}
	componentDidMount() {
    //Fetches Edu data
		fetch(Globals.apiEndPoint + 'GetEducation',{
		  //mode: "no-cors",
		  method: "GET",
		  headers: {
		    "Accept": "application/json"
		  }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      //DB stores from oldest to newest so need to reverse order of array
    	responseJson.reverse();
    	this.setState({
    		items: responseJson,
    		loaded: true
    	});
    })
	}
	dynamicStyle() {
    //Similar dynamic stuff. Makes things nice on phone
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
    //Img dynamic stuff for phones and stuff.
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
	      	<h1 className='titleText'>Education</h1>
      	</div>
      	{this.state.items.map((item, index) => (
      		<div key={index} className='itemOuter' style={this.dynamicStyle()}>
      			<div className='contentLeft'>
      				<img style={this.imgDynamic()} className='logoImg' src={item.img} alt={item.img}/>
      			</div>
      			<div className='contentRight'>
      				<h3>{item.school}</h3>
      				<p className='paragraph'>
      					{item.start} - {item.end}<br/>
      					{item.title}<br/>
      					{item.location}<br/>
              </p>
    					{item.scholarships.length > 0 &&
    						<div>
    							<p className='paragraph subTitle'>Scholarships</p>
    							<ul>
    								{item.scholarships.map((scholarship, i) => (
    									<li key={i}>{scholarship}</li>
    								))}
    							</ul>
    						</div>
    					}
    					{item.awards.length > 0 &&
    						<div>
    							<p className='paragraph subTitle'>Awards</p>
    							<ul>
    								{item.awards.map((award, i) => (
    									<li key={i}>{award}</li>
    								))}
    							</ul>
    						</div>
    					}
    					{item.notableProj.length > 0 &&
    						<div>
    							<p className='paragraph subTitle'>Notable Projects</p>
    							<ul>
    								{item.notableProj.map((proj, i) => (
    									<li key={i}>{proj}</li>
    								))}
    							</ul>
    						</div>
    					}
    					{item.extraCuric.length > 0 &&
    						<div>
    							<p className='paragraph subTitle'>Extra Curriculars</p>
    							<ul>
    								{item.extraCuric.map((item, i) => (
    									<li key={i}>{item}</li>
    								))}
    							</ul>
    						</div>
    					}
      			</div>
      		</div>
      	))}
      </div>
    );
  }
}

export default Education;
