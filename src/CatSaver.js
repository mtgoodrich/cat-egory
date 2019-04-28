import React, { Component } from "react";
import "./CatSaver.css";

export default class CatSaver extends Component {
  state = {
    categoryName: ""
  };

  onFormSubmit = e => {
    e.preventDefault();

    const categoryName = this.state.categoryName || "un-CAT-egorized";

    this.props.submitName(categoryName);
  };

  render() {
    return (
      <form className="cat-saver__form" onSubmit={this.onFormSubmit}>
        <div className="row">
          <div className="col-sm-8">
            <label htmlFor="category" className="cat-saver__form--label">
              <input
                aria-describedby="categoryHelp"
                className="form-control"
                type="text"
                name="categoryName"
                id="categoryName"
                onChange={e =>
                  this.setState({ categoryName: e.target.value.toString() })
                }
                placeholder="add a category"
                value={this.state.categoryName}
              />
              <small id="categoryHelp" className="form-text text-muted">
                Type a category to revisit your furry friend later
              </small>
            </label>
          </div>
          <div className="col-sm-4">
            <button
              className="btn btn-success cat-saver__form--btn"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    );
  }
}
