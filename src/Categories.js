import React from "react";

export class Categories extends React.Component {
  onCategoryChange = e => {
    e.preventDefault();

    const newCategory = e.target.innerText;

    this.props.changeCategory(newCategory);
  };

  render() {
    const { categories } = this.props;

    // match each unique name to a new array and keep a count on the same index
    const uniqueCategoryCount = categories.reduce((cat, i) => {
      cat[i.catName] = cat[i.catName] + 1 || 1;
      return cat;
    }, []);

    const categoryContent = Object.keys(uniqueCategoryCount).map(name => {
      return (
        <div className="list-group list-group-flush" key={name}>
          <li className="list-group-item">
            <a href={name} onClick={this.onCategoryChange}>
              {name}
            </a>
            <span className="float-right">{uniqueCategoryCount[name]}</span>
          </li>
        </div>
      );
    });

    return (
      <div className="card">
        <div className="card-header">
          <strong>Cat-egories</strong>
        </div>
        <div className="card-body">{categoryContent}</div>
      </div>
    );
  }
}
