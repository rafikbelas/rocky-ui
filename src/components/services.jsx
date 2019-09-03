import React, { Component } from "react";
import Service from "./service";

class Services extends Component {
  render() {
    const { services } = this.props;
    return (
      <div className="list-group">
        {services.map(service => (
          <Service service={service} key={service.name}></Service>
        ))}
      </div>
    );
  }
}

export default Services;
