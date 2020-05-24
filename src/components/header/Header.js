import React from "react";

class Header extends React.Component {

  render() {
    return <header>
    <div className="Header">
      <h3>{this.props.text}</h3>
      <div className="Header__search-wrapper" onClick={this.props.toggleSearchOverlay}>
        <img alt="search" className="Header__search-image" src= "/utils/search.png"></img>
      </div>
    </div>
  </header>
  }
  
}

export default Header;