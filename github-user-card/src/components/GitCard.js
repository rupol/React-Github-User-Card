import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitCard = props => {
  return (
    <div className="card">
      <img src={props.user.imageUrl} alt={props.user.name} />
      <div className="card-info">
        <h3 className="name">{props.user.name}</h3>
        <p className="username">{props.user.login}</p>
        <p>Location: {props.user.location}</p>
        <p>
          Profile: &nbsp;
          <a href={props.user.profileUrl}>{props.user.profileUrl}</a>
        </p>
        <p>Followers: {props.user.followers}</p>
        <p>Following: {props.user.following}</p>
        <p>Bio: {props.user.bio}</p>
      </div>
      <GitHubCalendar username={props.user.login} />
    </div>
  );
};

export default GitCard;
