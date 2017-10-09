import styled from "styled-components";
import React from "react";

export const appColors = {
  lightPurple: "rgb(111, 124, 178)",
  gray: "rgb(216, 225, 225)",
  lightBlueGreen: "rgb(91, 159, 159)",
  blue: "rgb(64, 81, 151)",
  darkBlue: "rgb(29, 49, 132)",
  lightGreen: "rgb(143, 217, 124)"
};

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

export const DrumPad = styled.div`
  background-color: ${appColors.lightBlueGreen};
  border-radius: 3px;
  flex: 1 0 auto;
  width: 25%;
  margin: 10px;
  box-shadow: 1px 1px 10px #111;
`;
