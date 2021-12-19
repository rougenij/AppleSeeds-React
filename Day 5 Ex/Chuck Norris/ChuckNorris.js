import React from "react";
import axios from "axios";

class ChuckNorris extends React.Component {
  state = {
    dailyJoke: "",
    categories: [],
    categoryJoke: "",
    searchBarData: "",
  };

  fetchJoke = async () => {
    await axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((response) => this.setState({ dailyJoke: response.data.value }));
  };
  fetchViaCategory = async () => {
    const response = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );
    const data = response.data;
    this.setState({ categories: data });
  };
  renderCategory = () => {
    return this.state.categories.map((category, i) => {
      return (
        <div key={i}>
          <button onClick={() => this.fetchViaCategoryJoke(category)}>
            {category}
          </button>
        </div>
      );
    });
  };
  fetchViaCategoryJoke = async (category) => {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    this.setState({ categoryJoke: response.data.value });
  };

  //   fetchViaSearchBar = async (query) => {
  //     const response = await axios.get(
  //       `https://api.chucknorris.io/jokes/search?query=${query}`
  //     );
  //     const data = response.data.result;
  //     const firstTen = data.slice(0, 10);
  //     this.setState({ searchBarData: firstTen });
  // return firstTen.map((joke, i) => {
  //   return <div key={i}>{firstTen[joke]}</div>;
  // });
  //   };
  render() {
    return (
      <div>
        <button onClick={this.fetchJoke}>Random Joke</button>
        <p>{this.state.dailyJoke}</p>
        <button onClick={this.fetchViaCategory}>
          Display the list of Joke categories
        </button>
        {this.renderCategory()}
        <p>{this.state.categoryJoke}</p>
        {/* <button onClick={this.fetchViaSearchBar}>Serach Button</button>
        <input onChange={(e) => this.fetchViaSearchBar(e.target.value)}></input>
        <p></p> */}
      </div>
    );
  }
}

export default ChuckNorris;
