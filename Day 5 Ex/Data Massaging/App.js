import React from "react";
import data from "./data";
import Name from "./name";
import Card from "./card";

class App extends React.Component {
  state = { names: [], beforeNinety: [] };

  componentDidMount() {
    this.setState({
      names: this.getNames(),
      beforeNinety: this.beforeNinety(),
    });
  }

  displayNames = () => {
    return this.state.names.map((personName, i) => {
      return <Name key={i} name={personName} />;
    });
  };

  displayBeforeNinety = () => {
    return this.state.beforeNinety.map((person, i) => {
      return <Card key={i} data={person} />;
    });
  };

  getNames = () => {
    return data.map(function (data) {
      return data.name;
    });
  };

  beforeNinety = () => {
    const nArr = [];
    data.forEach((person) => {
      if (person.birthday.split("-")[2] < 1990) {
        nArr.push(person);
      }
    });
    return nArr;
  };

  render() {
    return (
      <div className="App">
        <div className="names-container">{this.displayNames()}</div>
        <div className="people-container">{this.displayBeforeNinety()}</div>
      </div>
    );
  }
}

export default App;
