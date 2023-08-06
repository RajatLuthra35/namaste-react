// import User from "./User";
import React from "react";
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
        {/* <User name={"Rajat Luthra(function)"} /> */}
        <UserClass name={"Rajat Luthra(class)"} location={"Patiala (class)"} />
      </div>
    );
  }
}

export default About;
