import React from "react";
import "./CatList.css";

export class CatList extends React.Component {
  renderCatList() {
    const { categories, currentCategory } = this.props;
    const currentList = categories.filter(
      cat => cat.catName === currentCategory
    );

    return currentList.map((item, i) => {
      return (
        <div key={i} className="cat-list__image-wrapper col-sm-6">
          <img
            src={item.imageUrl}
            alt={`Here's another ${item.catName} cat`}
            className="cat-list__image-wrapper--image"
          />
        </div>
      );
    });
  }

  displayCurrentCount() {
    const { categories, currentCategory } = this.props;
    const currentList = categories.filter(
      cat => cat.catName === currentCategory
    );

    return currentList.length || null;
  }

  renderCategoryList() {
    if (this.displayCurrentCount()) {
      return (
        <div>
          <div className="bordered cat-list">
            <div className="bordered-body">
              <strong>{this.props.currentCategory}</strong>
              <span className="float-right">{this.displayCurrentCount()}</span>
            </div>
          </div>
          <div className="row">{this.renderCatList()}</div>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderCategoryList()}</div>;
  }
}
