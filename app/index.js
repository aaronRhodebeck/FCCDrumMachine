import React from "react";
import ReactDOM from "react-dom";
import { appColors } from "./PresentationComponents";
import { DrumMachine } from "./containers/DrumMachine";

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: appColors.lightPurple,
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <DrumMachine id="drum-machine" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
