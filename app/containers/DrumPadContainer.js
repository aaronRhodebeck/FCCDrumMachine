import React from "react";
import { DrumPad } from "../PresentationComponents";

const drumSounds = {};

/**
 * Props expected: 
 * + id (the name of the sound produced)
 * + firingKey (the keyboard key that will fire the DrumPad)   
 */

export class DrumPadContainer extends React.Component {
  handleClick() {}
  render() {
    return (
      <DrumPad id={this.props.id} className="drum-pad" onClick="">
        {this.props.firingKey}
        <audio
          id={this.props.firingKey}
          className="clip"
          src="c:\Users\Rhodie\Documents\Repos\FreeCodeCamp\FCCDrumMachine\app\assets\drumSounds\clap.mp3"
          type="audio/mpeg"
          preload="auto"
        />
      </DrumPad>
    );
  }
}
