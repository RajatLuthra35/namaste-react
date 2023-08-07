// import User from "./User";
import React from "react";
import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is About Us Page</h2>
        <div>
          Logged in User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        {/* <User name={"Rajat Luthra(function)"} /> */}
        <UserClass name={"Rajat Luthra(class)"} location={"Patiala (class)"} />
      </div>
    );
  }
}

export default About;
