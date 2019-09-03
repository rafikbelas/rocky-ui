import React, { Component } from "react";
import ServicesTable from "./services";
import Time from "../components/time";

const URL = process.env.REACT_APP_API_URL;

class Report extends Component {
  state = {
    report: null,
    ws: new WebSocket(URL)
  };

  componentDidMount() {
    // call getReport() method in fakeReportService to get fake data instead.

    const ws = this.state.ws;

    ws.onopen = () => {
      // on connecting, do nothing but log it to the console.
      console.log("connected");
    };

    ws.onmessage = event => {
      // on receiving a message, add it to the list of messages.
      const report = JSON.parse(event.data);
      this.setState({ report });
    };

    ws.onerror = error => {
      // on error, log the error to the console and reset the report to null.
      console.log(error);
      this.setState({ report: null });
    };

    ws.onclose = () => {
      console.log("disconnected");
      this.setState({
        report: null,
        ws: new WebSocket(URL)
      });
    };
  }

  render() {
    const report = this.state.report;
    if (report === null) return <h5>There is no report yet.</h5>;

    return (
      <React.Fragment>
        <Time time={report.time}></Time>
        <ServicesTable services={report.services} />
      </React.Fragment>
    );
  }
}

export default Report;
