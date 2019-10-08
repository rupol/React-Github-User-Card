import React from "react";
import axios from "axios";
import "./App.css";

import Header from "./components/Header";
import GitCards from "./components/GitCards";

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
        // create following array from response data
        const followingArray = response.data;

        // create array of following urls
        const followingUrl = followingArray.map(item => {
          return item.url;
        });

        // iterate over following urls
        followingUrl.map(item => {
          axios
            // requesting data for each user
            .get(item)
            .then(response => {
              const newUser = {
                id: response.data.id,
                imageUrl: response.data.avatar_url,
                name: response.data.name,
                login: response.data.login,
                location: response.data.location,
                profileUrl: response.data.html_url,
                followers: response.data.followers,
                following: response.data.following,
                bio: response.data.bio
              };
              this.setState({
                users: [...this.state.users, newUser]
              });
            })
            .catch(error => {
              console.log("Users Network request was unsuccessful");
              console.log(error);
            });
        });
      })
      .catch(error => {
        console.log("Following Network request was unsuccessful");
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <GitCards users={this.state.users} />
      </div>
    );
  }
}

export default App;
