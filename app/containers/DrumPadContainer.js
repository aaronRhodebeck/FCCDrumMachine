import React from "react";
import { DrumPad, appColors } from "../PresentationComponents";

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

  handleClick() {
    this.playAudioClip();
    this.animateButton();
  }

  animateButton() {
    // store the DrumPad that should be animated
    var thisPad = document.getElementById(this.props.id);
    // Store the original css of the button to reset after animation
    var styleBeforePress = thisPad.style;

    // Copied from the css in the button :active psudeo class
    var buttonClickStyleChanges = {
      transform: "translateY(4px) translateX(2px)",
      boxShadow: "invert 4px 4px 2px #888",
      background: appColors.lightGreen,
      color: appColors.lightPurple
    };

    // Iterate through the styles and set each style property of the Drum Pad
    for (let styleToChange in buttonClickStyleChanges) {
      thisPad.style[styleToChange] = buttonClickStyleChanges[styleToChange];
    }
    // Reset the css back to the original style
    setTimeout(() => (thisPad.style = styleBeforePress), 20);
  }

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
