import styled from "styled-components";
import React from "react";

export const appColors = {
  lightPurple: "rgb(111, 124, 178)",
  gray: "rgb(230, 235, 225)",
  lightBlueGreen: "rgb(91, 159, 159)",
  blue: "rgb(64, 81, 151)",
  darkBlue: "rgb(29, 49, 132)",
  lightGreen: "rgb(110, 190, 124)"
};

export const DrumMachineShell = styled.div`
  height: 70vh;
  width: 90vh;
  border: 3px solid ${appColors.darkBlue};
  border-radius: 5px;
  box-shadow: 1px 0px 10px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #444;
`;

export const Display = styled.div`
  background-color: ${appColors.gray};
  margin: 5px;
  height: 10%;
  width: 70%;
  box-shadow: inset 0 0 5px #111;
  text-align: center;
  vertical-align: middle;
  font-family: VT323, monospace;
  font-weight: ;
  font-size: 1.7em;
  color: #444;
`;

export const DrumPadArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  flex: 1;
  background-color: #444;
  width: 100%;
`;

export const DrumPad = styled.button`
  background-color: ${appColors.lightBlueGreen};
  border-radius: 3px;
  flex: 1 0 auto;
  width: 25%;
  margin: 10px;
  text-align: center;
  box-shadow: 2px 2px 4px #666;
  border-color: #dca;
  outline: none;
  font-size: 1.5em;
  color: ${appColors.darkBlue};
  font-weight: bold;

  &:active {
    transform: translateY(4px) translateX(2px);
    box-shadow: invert 4px 4px 2px #888;
    background: ${appColors.lightGreen};
    color: ${appColors.lightPurple};
  }
`;
