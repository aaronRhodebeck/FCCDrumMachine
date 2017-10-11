import styled from "styled-components";
import React from "react";
import { appColors } from "../PresentationComponents";
import { DrumMachineShell, Display, DrumPadArea } from "../PresentationComponents";
import { DrumPadContainer } from "./DrumPadContainer";
import { drumKitSoundsList } from "../drumKitSoundsList";

let currentPadSounds = drumKitSoundsList;
let padSoundsKeys = Object.getOwnPropertyNames(drumKitSoundsList);
export class DrumMachine extends React.Component {
  render() {
    return (
      <DrumMachineShell id="drum-machine">
        <Display id="display" />
        <DrumPadArea>
          <DrumPadContainer
            id={padSoundsKeys[0]}
            firingKey="Q"
            audioFile={currentPadSounds[padSoundsKeys[0]]}
          />
          <DrumPadContainer
            id={padSoundsKeys[1]}
            firingKey="W"
            audioFile={currentPadSounds[padSoundsKeys[1]]}
          />
          <DrumPadContainer
            id={padSoundsKeys[2]}
            firingKey="E"
            audioFile={currentPadSounds[padSoundsKeys[2]]}
          />
          <DrumPadContainer
            id={padSoundsKeys[3]}
            firingKey="A"
            audioFile={currentPadSounds[padSoundsKeys[3]]}
          />
          <DrumPadContainer
            id={padSoundsKeys[4]}
            firingKey="S"
            audioFile={currentPadSounds[padSoundsKeys[4]]}
          />
          <DrumPadContainer
            id={padSoundsKeys[5]}
            firingKey="D"
            audioFile={currentPadSounds[padSoundsKeys[5]]}
          />
          <DrumPadContainer
            id={padSoundsKeys[6]}
            firingKey="Z"
            audioFile={currentPadSounds[padSoundsKeys[6]]}
          />
          <DrumPadContainer
            id={padSoundsKeys[7]}
            firingKey="X"
            audioFile={currentPadSounds[padSoundsKeys[7]]}
          />
          <DrumPadContainer
            id={padSoundsKeys[8]}
            firingKey="C"
            audioFile={currentPadSounds[padSoundsKeys[8]]}
          />
        </DrumPadArea>
      </DrumMachineShell>
    );
  }
}
