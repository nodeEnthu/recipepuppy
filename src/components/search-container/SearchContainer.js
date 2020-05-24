import React from "react";
import Input from  "../input/Input";
import Button from "../button/Button";

class SearchContainer extends React.PureComponent {

  render() {
    const { fillSearchParams, searchEnabled, getRecipes } = this.props;
    return (
      <div className="SearchContainer">
        <div className="SearchContainer__main margin-botton-3">
          <Input name= "recipe" placeholder= "Search recipes" handleChange= { fillSearchParams }/>
        </div>
        
        <div className= "SearchContainer__sub">
          <Input name= "withIngredients" placeholder= "With ingredients " handleChange = { fillSearchParams }/>
          <Input name= "withoutIngredients" placeholder= "Without ingredients" handleChange = { fillSearchParams }/>
        </div>

        <div className= "SearchContainer__sub">
          <Button disabled = { !searchEnabled } onSubmit= { getRecipes }/>
        </div>
      </div>
    )
  }
}

export default SearchContainer;