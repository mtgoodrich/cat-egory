import React, { Component } from "react";
import "./App.css";
import CatLoader from "./CatLoader";
import { Categories } from "./Categories";
import { CatList } from "./CatList";

class App extends Component {
  state = {
    categories: JSON.parse(localStorage.getItem("categories")) || [],
    currentCategory: JSON.parse(localStorage.getItem("currentCategory")) || ""
  };

  onCategorySubmit = category => {
    this.setState(
      {
        categories: [...this.state.categories, category]
      },
      () =>
        localStorage.setItem(
          "categories",
          JSON.stringify(this.state.categories)
        )
    );
  };

  onCategoryChange = category => {
    this.setState(
      {
        currentCategory: category
      },
      () =>
        localStorage.setItem(
          "currentCategory",
          JSON.stringify(this.state.currentCategory)
        )
    );
  };

  render() {
    return (
      <div className="container mx-auto">
        <h2>Cat-egory</h2>
        <CatLoader submitCategory={this.onCategorySubmit} />
        <Categories
          categories={this.state.categories}
          changeCategory={this.onCategoryChange}
        />
        <CatList
          categories={this.state.categories}
          currentCategory={this.state.currentCategory}
        />
      </div>
    );
  }
}

export default App;
