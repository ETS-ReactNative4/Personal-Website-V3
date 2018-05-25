import React, { Component } from 'react';
import './Home.css';
import './Global.css';
import './Portfolio.css'
import Loading from './Loading';
import Globals from './Vars';
import './Experience.css';
import Linkify from 'linkifyjs/react';
var _ = require('lodash');

class PortfolioItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			item: null,
			loaded: false,
		};
	}
	componentDidMount() {
		//Fetches data for particular portfolio item.
		fetch(Globals.apiEndPoint + 'GetPortfolioItem', {
		  method: 'POST',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
		    _id: this.props.item._id 
		  })
		})
    .then((response) => response.json())
    .then((responseJson) => {
    	this.setState({
    		item: responseJson, 
    		loaded: true
    	});
    })
	}
	dynamicWidth() {
		//Dynamic width of portfolio item screen. ie. should be full on phones and about 60vw on desktop.
		let width = window.innerWidth;
		let winWidth = width < 640 ? width-22 + 'px' : '60vw';
		return {
			width: winWidth,
		}
	}
	render() {
		return(
			<div style={this.dynamicWidth()} className='portfolioItemOuter'>
				<img onClick={() => this.props.close()} alt='back' className='backIcon' src='data:image/png;base64,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'/>
				{(this.state.loaded) ? (
					<div className='portfolioItemContent'>
						<h2 className='portfolioItemTitle'>{this.state.item.name}</h2>
						{this.state.item.desc.map((para, index) => (
							<Linkify tagName="p" key={index}>{para}</Linkify>
						))}
						{this.state.item.images &&
							<div>
								{this.state.item.images.map((pic, index) => (
									<div className='portfolioItemImages'>
										<img key={index} src={pic} alt={index} className='portfolioItemImage'/>
									</div>
								))}
							</div>
						}
						{this.state.item.videos &&
							<div>
								{this.state.item.videos.map((vid, index) => (
									<iframe key={index} title={this.state.item.name+'video'} className='portfolioItemVideo' src={vid} frameborder="0" allowfullscreen></iframe>
								))}
							</div>
						}
						<div className='portfolioSpacer'></div>
					</div>
				) : (
  				<div className='portfolioLoad'>
  					<img className="loadIcon" src={'data:image/png;base64,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'} alt="loading"/>
  					<h4 className="loadText">Loading</h4>
  				</div>
				)}
			</div>
		);
	}
} 

class Portfolio extends Component {
	constructor(props){
		super(props);
		this.state = {
			items: null,
			dspItem: null,
			loaded: false,
		};
	}
	componentDidMount() {
		//Gets list of all items.
		fetch(Globals.apiEndPoint + 'GetPortfolioList',{
		  method: "GET",
		  headers: {
		    "Accept": "application/json"
		  }
    })
    .then((response) => response.json())
    .then((responseJson) => {
    	//Sorts array into objects grouped by year. Then sets each grouping into array position.
    	let temp = _.groupBy(responseJson, 'year');
    	let tempArr = [];
    	for(let obj in temp)
    	{
    		tempArr.push(temp[obj]);
    	}
    	tempArr.reverse();
    	this.setState({
    		items: tempArr,
    		loaded: true
    	});
    })
	}
	openItem(item)
	{
		//If click on item it sets dspItem unless something is already open.
		if(this.state.dspItem) return;
		this.setState({dspItem: item});
	}
	closeItem()
	{
		//Closes
		this.setState({dspItem: null});
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
		    	<h1>Portfolio</h1>
	  		</div>
	  		<div className='portfolioContent'>
	  			{this.state.items.map((year, indexI) => (
	  				<div key={indexI}>
		  				<h2>{year[0].year}</h2>
		  				<div className='portfolioByYearContent'>
			  				{year.map((portfolioItem, indexJ) => (
			  					<div key={indexJ} onClick={() => this.openItem(portfolioItem)} className='portfolioItem'>
			  						<img className='portfolioImg' src={portfolioItem.dspImg} alt={portfolioItem.name}/>
			  						<p className='portfolioTitle'>{portfolioItem.name}</p>
			  					</div>
			  				))}
		  				</div>
		  			</div>
	  			))}
  			</div>
  			{this.state.dspItem &&
  				<PortfolioItem item={this.state.dspItem} close={() => this.closeItem()}/>
  			}
      </div>
    );
  }
}

export default Portfolio;
