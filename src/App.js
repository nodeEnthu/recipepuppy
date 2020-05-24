import React from 'react';
import Header from  "./components/header/Header"
import ScreenOverlay from "./components/screen-overlay/ScreenOverlay";
import SearchContainer from "./components/search-container/SearchContainer";
import { SEARCH_API, PROXY_URL } from "./constants/apis";
import {constructQueryParams, resolveTitle} from "./utils/utils";
import "./styles/components/app.scss";
import CardsList from "./components/cards-list/CardsList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchOverlayActive: false,
      recipe: "",
      withIngredients: "",
      withoutIngredients: "",
      recipeResults: "",
      searchText: "Search food recipes"
    }
  }

  toggleSearchOverlay = () => {
    this.setState( state => {
      return { searchOverlayActive : !state.searchOverlayActive };
    });
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
    this.toggleSearchOverlay();
    const { recipe, withIngredients, withoutIngredients } = this.state;
    const queryParams = constructQueryParams(recipe, withIngredients, withoutIngredients);
    const targetUrl = `${SEARCH_API}${queryParams}`;
    const searchText = resolveTitle(recipe, withIngredients, withoutIngredients);

    fetch(`${PROXY_URL}${targetUrl}`)
      .then(data => data.json())
      .then(res => {
        this.setState({
          recipeResults: res.results,
          searchText
        })
      })
  }

  render() {
    const { searchOverlayActive, recipe, recipeResults, searchText } = this.state
    return (
      <div className="App">
        <Header text= {searchText} toggleSearchOverlay = {this.toggleSearchOverlay}/>
        <ScreenOverlay active= {searchOverlayActive} 
          toggleSearchOverlay = {this.toggleSearchOverlay}
        >
          <SearchContainer fillSearchParams = { this.fillSearchParams } 
            searchEnabled = { recipe }
            getRecipes = { this.getRecipes }
          />
        </ScreenOverlay>
        <div className="margin-top-3">
        {
          recipeResults && Array.isArray(recipeResults) &&
          <CardsList cards = {recipeResults}/>
        }
        </div>
      </div>
    );
  }
  
}

export default App;
