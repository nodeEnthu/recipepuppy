import React from "react";

class Header extends React.PureComponent {

  render() {
    return <header>
    <div className="Header" onClick={this.props.toggleSearchOverlay}>
      <h3>{this.props.text}</h3>
      <div className="Header__search-wrapper">
        <img alt="search" className="Header__search-image" src= "/utils/search.png"></img>
      </div>
    </div>
  </header>
  }
  
}

export default Header;