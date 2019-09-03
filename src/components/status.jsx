import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

class Status extends Component {
  renderColor = upstate => {
    return upstate ? "green" : "red";
  };

  render() {
    const { upstate } = this.props;
    return (
      <FontAwesomeIcon icon={faCircle} color={this.renderColor(upstate)} />
    );
  }
}

export default Status;
