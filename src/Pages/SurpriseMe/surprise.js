import React from "react";
import Nav from "../../Shared/nav";
import UserLocation from "../../Shared/user-location";
import Redsults from "./results";

class SurpriseMe extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav selected="surpriseme" />
        <Redsults />
      </div>
    );
  }
}

export default SurpriseMe;
