import styled from "styled-components";
import React from "react";
import { appColors } from "../PresentationComponents";
import { DrumMachineShell, Display, DrumPadArea } from "../PresentationComponents";
import { DrumPadContainer } from "./DrumPadContainer";
import { drumKitSounds } from "../drumKitSounds";

let padSounds = Object.getOwnPropertyNames(drumKitSounds);
export class DrumMachine extends React.Component {
  render() {
    return (
      <DrumMachineShell id="drum-machine">
        <Display id="display" />
        <DrumPadArea>
          <DrumPadContainer id={padSounds[0]} firingKey="Q" />
          <DrumPadContainer id={padSounds[1]} firingKey="W" />
          <DrumPadContainer id={padSounds[2]} firingKey="E" />
          <DrumPadContainer id={padSounds[3]} firingKey="A" />
          <DrumPadContainer id={padSounds[4]} firingKey="S" />
          <DrumPadContainer id={padSounds[5]} firingKey="D" />
          <DrumPadContainer id={padSounds[6]} firingKey="Z" />
          <DrumPadContainer id={padSounds[7]} firingKey="X" />
          <DrumPadContainer id={padSounds[8]} firingKey="C" />
        </DrumPadArea>
      </DrumMachineShell>
    );
  }
}
