import styled from "styled-components";
import React from "react";

export const appColors = {
  lightPurple: "rgb(111, 124, 178)",
  gray: "rgb(216, 225, 225)",
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
  box-shadow: 3px 3px 10px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Display = styled.div`
  background-color: ${appColors.gray};
  margin: 5px;
  height: 10%;
  width: 70%;
  box-shadow: inset 0 0 5px #111;
`;

export const DrumPadArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  flex: 1;
  background-color: ${appColors.darkBlue};
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
  border-color: #ddd;
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
