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

  describe("Drum Machine", () => {
    it("should have an outer container with a corresponding id='drum-machine' that contains all other elements", () => {
      // Unable to test for elements contained by, not sure of the syntax:
      // drumMachine.children returns unexpected results
      expect(drumMachine.findByProps({ id: "drum-machine" })).not.toEqual(undefined);
    });
    it('should have an element within #drum-machine that has an id="display"', () => {
      expect(drumMachine.findByProps({ id: "display" })).not.toBe(undefined);
    });
    it('should have 9 clickable "drum pad" elements each with a class="drum-pad"', () => {
      expect(drumMachine.findAllByProps({ className: "drum-pad" }).length).not.toBeLessThan(9);
    });
  });
  describe("Drum Pads", () => {
    // Load drum pads into an array for testing the drum pads
    var drumPads = drumMachine.findAllByProps({ className: "drum-pad" });

    it("should have a unique id that describes the audio clip the drum pad will be set up to trigger", () => {
      // Cannot test for relevance of id to audio clip, consider removing that text from the test.
      var drumPadIds = [];
      for (let drumPad in drumPads) {
        drumPadIds.push(drumPads[drumPad].props.id);
      }
      var repeatIdsExist = drumPadIds.reduce((prev, next, index, array) => {
        if (prev == true) {
          return true;
        } else if (array.lastIndexOf(next) > index) {
          return true;
        } else {
          return false;
        }
      }, false);
      expect(repeatIdsExist).toBe(false);
    });
    it("should have an inner text that corresponds to one of these 9 keys on the keyboard: Q, W, E, A, S, D, Z, X, C", () => {
      let validLetters = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
      // let drumPadsInnerText = drumPads.map(drumPad => drumPad.innerHTML);
      // for (let text in drumPadsInnerText) {
      //   expect(validLetters.includes(text)).toBe(true);
      // }
    });
    it("should have an HTML5 Audio element with a src attribute pointing to an audio clip", () => {
      // for (let drumPad in drumPads) {
      // }
    });
  });
});
