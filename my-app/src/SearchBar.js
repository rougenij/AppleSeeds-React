import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  componentDidMount() {
    this.nameInput.focus();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search Input</label>
            <input
              ref={(input) => {
                this.nameInput = input;
              }}
              defaultValue={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              placeholder="Search..."
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
