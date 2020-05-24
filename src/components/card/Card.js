import React from "react";
const DEFAULT_IMG_SRC = "http://via.placeholder.com/300";
class Card extends React.Component {

  render() {
    const {card}  = this.props;

    return <div className= "Card">
      <div className="Card__image-wrapper">
        <img className="Card__image" src={card.thumbnail || DEFAULT_IMG_SRC}/>
      </div>
      <div className="Card__title margin-bottom-1">
        {card.title}
      </div>
      <div className="Card__content">
      {card.ingredients}
      </div>
    </div>
  }
}
export default Card