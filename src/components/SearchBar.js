import React, { Component } from "react";
import "./styles.css";

class SearchBar extends Component {
  state = { term: "" };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui placeholder center aligned segment">
        <form onSubmit={this.onFormSubmit} className="ui form ">
          <div className="ui icon header">
            <i className="youtube icon" />
            Search YouTube
          </div>
          <div className="field">
            <div className="ui search">
              <div className="ui icon input">
                <input
                  onChange={this.onInputChange}
                  type="text"
                  name="term"
                  value={this.state.term}
                  placeholder="Enter a search term..."
                />
                <i className="search icon" />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
