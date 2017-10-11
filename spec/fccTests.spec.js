//#region imports
import ReactTestUtils from "react-dom/test-utils";
import TestRenderer from "react-test-renderer";
import React from "react";
import { DrumMachine } from "../app/containers/DrumMachine";
//#endregion

describe("freeCodeCamp Testable Project tests", () => {
  // Load drum machine into memory to run tests against it
  var testRenderer = TestRenderer.create(<DrumMachine />);
  var drumMachine = testRenderer.root;

  describe("Drum Machine", () => {
    it("should have an outer container with a corresponding id='drum-machine' that contains all other elements", () => {
      // Unable to test for elements contained by, not sure of the syntax:
      // drumMachine.children returns unexpected results.
      expect(drumMachine.findByProps({ id: "drum-machine" })).toBeTruthy();
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
    var audioClips = drumPads.map(drumPad => drumPad.findByType("audio"));

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
      pending(
        "This test requires a full rendering of the components instead of the test render, need a different tool"
      );
      let validLetters = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
      let drumPadsInnerText = drumPads.map(drumPad => drumPad.props);
      for (let i = 0, len = drumPadsInnerText.length; i < len; i++) {
        expect(validLetters.includes(drumPadsInnerText[i])).toBe(true);
      }
    });
    it("should have an HTML5 Audio element", () => {
      expect(audioClips.length).toEqual(drumPads.length);
    });
    it("the audio clip should have a src attribute pointing to an audio clip", () => {
      audioClips.forEach(clip => expect(clip.props.src).toMatch(/\.(mp3|wav)$/));
    });
    it("should play the audio clip when I click the drum pad", () => {
      pending("A separate testing library required to enable clicking on elements");
      expect(drumPads[0].props.onClick).not.toBe(undefined);
    });
    it("should play the audio clip when I press the key associated with the pad", () => {
      pending(
        "A separate testing library required to enable checking for testing the document scripts"
      );
    });
  });
});
