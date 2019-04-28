import React from "react";
import { fetchRandomCat } from "./catApi";
import "./CatLoader.css";
import Spinner from "./Spinner";
import CatSaver from "./CatSaver";

export default class CatLoader extends React.Component {
  state = {
    randomCatUrl: ""
  };

  componentDidMount() {
    // loads your first new potential best friend (or worst enemey)
    this.getRandomCat();
  }

  addToCategoryList = categoryName => {
    const newCategory = {
      catName: categoryName,
      imageUrl: this.state.randomCatUrl
    };

    this.props.submitCategory(newCategory);
  };

  getRandomCat = async () => {
    const response = await fetchRandomCat();

    this.setState({
      randomCatUrl: response.file
    });
  };

  renderContent() {
    if (!this.state.randomCatUrl) {
      return <Spinner message="Getting you a random cat" />;
    }
    return (
      <div>
        <div className="cat-loader">
          <div className="cat-loader__img-wrapper">
            <img src={this.state.randomCatUrl} alt="Cat-egory cats" />
          </div>
          <div className="row">
            <div className="col-sm-4 offset-sm-8">
              <div
                className="btn btn-primary cat-loader__btn"
                onClick={this.getRandomCat}
                title="click to see another random cat"
              >
                next image &raquo;
              </div>
            </div>
          </div>
        </div>
        <CatSaver submitName={this.addToCategoryList} />
      </div>
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}
