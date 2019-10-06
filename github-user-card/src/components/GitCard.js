import React from "react";

const GitCard = props => {
  return (
    <div className="card">
      <img src={props.user.avatar_url} />
      <div className="card-info">
        <h3 className="name">{props.user.login}</h3>
      </div>
    </div>
  );
};

export default GitCard;
