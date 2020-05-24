import React from "react";
import Card from "../card/Card";
class CardsList extends React.PureComponent {

  render() {
    const {cards} = this.props;
    return (
      <div className ="CardsList">
        {
          cards.map( (card, i) => {
            return <Card key={i}  card = {card} ></Card>
          })
        }
      </div>
    )
  }
}

export default CardsList;