import React from "react";

const Header = () => {
  return (
    <div className="header">
      <img src="./assets/lambdalogo.png" alt="Lambda Logo" />
      <span className="heart" role="img" aria-label="heart">
        ❤️'s
      </span>
      <img src="./assets/githublogo.png" alt="GitHub Logo" />
    </div>
  );
};

export default Header;
