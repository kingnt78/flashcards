import React, { Component } from 'react';
import './flipButton.css';

class flipCard extends Component{
	constructor(props){
		super(props);

		this.flipCard = this.flipCard.bind(this);
	}

	flipButton(){
		this.props.flipCard();
	}

	render(props){
		return(
			<div className="buttonContainer">
				<button className="btn">onCLick={this.flipCard}>flipCard</button>
			</div>
		)
	}
}
export default flipCard