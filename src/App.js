import React, { Component } from 'react';
import Card from './Card/Card';

class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      cards: [
      {id: 1, flipSide: "Java's last name"}, 
      {id: 2, side: "Grants last name"}, 
      {id: 3, sideC: "Framework for managing state and React"}, 
      {id: 4, sideD: "Script"}, 
      {id: 5, sideE: "Chirpus"}, 
      {id: 6, sideF: "Redux"}, 
      ],
      currentCard: {}
    }
  }
  componentWillMount(){
    const currentCards =this.state.cards;

    this.this.state({
      cards=currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }

  getRandomCard(currentCards){
    var card = currentCards[Math.floor(Math.random() * currentCards.length)]
    return (card);
  }



  render() {
    return (
      <div className="App">
        <Card id=(this.state.currentCard.id 
              />
      </div>
    );
  }
}

export default App;
