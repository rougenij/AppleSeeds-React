import React, { Component } from "react";
import axios from "axios";

class Weather extends Component {
  handleFetch = async () => {
    try {
      const response = await axios.get("https://api.fbi.gov/wanted/v1/list");
      console.log(response);
    } catch (e) {
      console.log("error", e);
    }
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handleFetch()}>Click me</button>
      </div>
    );
  }
}

export default Weather;
