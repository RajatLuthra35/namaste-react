import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        //initial state
        name: "Dummy",
        location: "Default location",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/RajatLuthra35");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    // const { name, location } = this.props;
    const { login, type, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {login}</h2>
        <h3>Location: {type}</h3>
        <h4>Contact: rajat@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
