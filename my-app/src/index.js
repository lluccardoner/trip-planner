import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

class Calendar extends React.Component {
  render() {
    const weeks = [<Week />, <Week />, <Week />, <Week />];
    return <div>{weeks}</div>;
  }
}

class Week extends React.Component {
  render() {
    const days = [
      <Day />,
      <Day />,
      <Day />,
      <Day />,
      <Day />,
      <Day />,
      <Day />,
    ];
    return <div className="week">{days}</div>;
  }
}

class Day extends React.Component {
  render() {
    return (
      <div className="day">
        <div>
          <DayTitle />
        </div>
        <div>
          <DayInfo />
        </div>
      </div>
    );
  }
}

class DayTitle extends React.Component {
  render() {
    return <p class="daytitle">Day Title</p>;
  }
}

class DayInfo extends React.Component {
  render() {
    return "Events here";
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Calendar />);
