import React from "react";
import Input from  "../input/Input";
import Button from "../button/Button";

class SearchContainer extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      recipe: "",
      withIngredients: "",
      withoutIngredients: ""
    }
  }

  fillSearchParams = (e) => {
    const key = e.target.name;
    const value =  e.target.value;
    const newVal = value ? value.split(" ") : "";
    this.setState({
      ...this.state,
      [key]: newVal
    })
  }

  getRecipes = () => {
    const { recipe, withIngredients, withoutIngredients } = this.state;
    this.props.getRecipes(recipe, withIngredients, withoutIngredients);
  }

  render() {
    const { fillSearchParams } = this;
    const { recipe } = this.state;
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
          <Button disabled = { !recipe } onSubmit= { this.getRecipes }/>
        </div>
      </div>
    )
  }
}

export default SearchContainer;