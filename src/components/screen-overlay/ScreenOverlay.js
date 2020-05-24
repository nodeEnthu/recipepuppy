import React from "react";
import classNames from "classnames";
import Cross from "./cross.svg";
class ScreenOverlay extends React.Component {

  render() {
    const {children, active } = this.props;
    return (
      <React.Fragment>
        <div className={classNames("ScreenOverlay", {"ScreenOverlay--isActive": active})}>
        {children}
        </div>
        <span className= {classNames({"ScreenOverlay__close": active, "display-none": !active})} onClick={this.props.toggleSearchOverlay}>
          <img src= { Cross } alt="React Logo" />
        </span>
      </React.Fragment>
    );
  }
  
}

export default ScreenOverlay;