import React from "react";
import axios from "axios";
import Btn from "./components/Btn";
import UsersList from "./components/UserList";
import "./style.css";

class App extends React.Component {
  state = { data: [], users: [] };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const results = await axios.get("https://randomuser.me/api/?results=20");
    console.log(results.data.results);
    this.setState({ data: results.data.results, users: results.data.results });
  };

  filterUsers = (value) => {
    const newUsers = this.state.data.filter(
      (user) =>
        (user.name.first + " " + user.name.last)
          .toUpperCase()
          .slice(0, value.length) === value.toUpperCase()
    );
    this.setState({ users: newUsers });
  };

  render() {
    return (
      <div className="App">
        <div className="search-container">
          <input
            onChange={(e) => {
              this.filterUsers(e.target.value);
            }}
          ></input>
          <Btn text="Filter" />
        </div>
        <div className="users-container">
          <UsersList users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
