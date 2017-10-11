import React from "react";
import { DrumPad } from "../PresentationComponents";

/**
 * Props expected: 
 * + id (the name of the sound produced)
 * + firingKey (the keyboard key that will fire the DrumPad)
 * + audioFile (the source file that will be fired)   
 */

export class DrumPadContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.playAudioClip = this.playAudioClip.bind(this);
    this.animateButton = this.animateButton.bind(this);
  }

  handleClick(e) {
    this.playAudioClip();
    this.animateButton();
  }

  animateButton() {}

  playAudioClip() {
    let audio = document.getElementById(this.props.firingKey);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  }

  render() {
    return (
      <DrumPad id={this.props.id} className="drum-pad" onClick={this.handleClick}>
        {this.props.firingKey}
        <audio
          id={this.props.firingKey}
          className="clip"
          src={this.props.audioFile}
          type="audio/mpeg"
          preload="auto"
        />
      </DrumPad>
    );
  }
}
