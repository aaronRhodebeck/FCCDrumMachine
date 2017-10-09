import ReactTestUtils from "react-dom/test-utils";
import TestRenderer from "react-test-renderer";
import React from "react";
// Elements from the app required for testing
import { Display } from "../app/PresentationComponents";
import { DrumMachine } from "../app/containers/DrumMachine";

describe("freeCodeCamp Testable Project tests", () => {
  // Load drum machine into memory to run tests against it
  var testRenderer = TestRenderer.create(<DrumMachine />);
  var drumMachine = testRenderer.root;
  it("should have an outer container with a corresponding id='drum-machine' that contains all other elements", () => {
    expect(drumMachine.findByProps({ id: "drum-machine" })).not.toEqual(undefined);
  });
  it('should have an element within #drum-machine that has an id="display"', () => {
    expect(drumMachine.findByProps({ id: "display" })).not.toBe(undefined);
  });
  it('should have 9 clickable "drum pad" elements each with a class="drum-pad"', () => {
    expect(drumMachine.findAllByProps({ className: "drum-pad" }).length).not.toBeLessThan(9);
  });
});
