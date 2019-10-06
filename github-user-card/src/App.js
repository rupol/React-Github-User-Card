import React from "react";
import axios from "axios";
import "./App.css";

import GitCard from "./components/GitCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.fetchGithubData();
  }

  fetchGithubData = () => {
    axios
      .get("https://api.github.com/users/rupol/following")
      .then(response => {
        // network request resolved
        // create following array from response data
        this.setState({
          users: response.data
        });
        console.log(this.state.users);
      })
      .catch(error => {
        // network request rejected
        console.log("Network request was unsuccessful");
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <img src="./assets/lambdalogo.png" alt="Lambda Logo" />
        <p>❤️'s</p>
        <img src="./assets/githublogo.png" alt="GitHub Logo" />
        <div>
          {this.state.users.map(user => (
            <GitCard key={user.id} user={user} />
          ))}
        </div>
      </>
    );
  }
}

export default App;
