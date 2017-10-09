import styled from "styled-components";
import React from "react";
import { appColors } from "../PresentationComponents";
import { Display, DrumPadArea, DrumPad } from "../PresentationComponents";

const DrumMachineShell = styled.div`
  height: 70vh;
  width: 90vh;
  border: 3px solid ${appColors.darkBlue};
  border-radius: 5px;
  box-shadow: 3px 3px 10px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export class DrumMachine extends React.Component {
  render() {
    return (
      <DrumMachineShell id="drum-machine">
        <Display id="display" />
        <DrumPadArea>
          <DrumPad className="drum-pad" />
        </DrumPadArea>
      </DrumMachineShell>
    );
  }
}
