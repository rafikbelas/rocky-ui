import React, { Component } from "react";
import Status from "./status";
import Services from "./services";

class Service extends Component {
  getClasses = service => {
    let classes =
      "list-group-item d-flex justify-content-between align-items-center";

    if (service.subs !== undefined) {
      classes += " list-group-item-primary";
    }
    return classes;
  };

  renderStatus = service => {
    if (service.subs === undefined) {
      return <Status upstate={service.status}></Status>;
    }
  };

  renderChildren = service => {
    if (service.subs !== undefined) {
      return <Services services={service.subs} />;
    }
  };

  render() {
    const { service } = this.props;

    return (
      <React.Fragment>
        <div className={this.getClasses(service)}>
          {service.name}
          {this.renderStatus(service)}
        </div>
        {this.renderChildren(service)}
      </React.Fragment>
    );
  }
}

export default Service;
