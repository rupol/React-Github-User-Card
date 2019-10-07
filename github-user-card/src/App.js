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

  // fetchGithubData = () => {
  //   axios
  //     .get("https://api.github.com/users/rupol/following")
  //     .then(response => {
  //       // network request resolved
  //       // create following array from response data
  //       this.setState({
  //         users: response.data
  //       });
  //       console.log(this.state.users);
  //     })
  //     .catch(error => {
  //       // network request rejected
  //       console.log("Network request was unsuccessful");
  //       console.log(error);
  //     });
  // };

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
      <div class="container">
        <div class="header">
          <img src="./assets/lambdalogo.png" alt="Lambda Logo" />
          <p>❤️'s</p>
          <img src="./assets/githublogo.png" alt="GitHub Logo" />
        </div>
        <div class="cards">
          {console.log(this.state.users)}
          {this.state.users.map(user => (
            <GitCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
