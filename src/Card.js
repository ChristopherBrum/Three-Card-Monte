import React from 'react'
const Queen1 = '/cards/queen1.jpg'
const Queen2 = '/cards/queen2.png'
const King = '/cards/king1.png'
const Back = '/cards/card-back.jpg'
const cards = {queen2: Queen2, queen1: Queen1, king: King}


class Card extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        facingUp: true,
        type: cards[props.face]
      }
    }

  flip(){
      this.setState({facingUp: !this.state.facingUp})
    }  

    render() {
        let image;
        if (this.state.facingUp){
            image = this.state.type
        } else {
            image = Back
        }
        return (
                <img src={image} className="card-front" 
                 onClick={() => this.flip()}/>
      )
    }
  }

export default Card;
