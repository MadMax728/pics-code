import "./testPolyfills";
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import "jest-localstorage-mock";
import * as ReactGA from "react-ga";

// Initializes test environment.
// Automatically executed before running tests.

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

// Stub ReactGA - https://stackoverflow.com/questions/40465047/how-can-i-mock-an-es6-module-import-using-jest
ReactGA.default = jest.fn();
ReactGA.default.exception = jest.fn();

// Runs before every test globally. If local beforeEach, this runs first.
beforeEach(() => {
  localStorage.clear();
});

// Runs after every test globally. If local afterEach, this runs last.
afterEach(() => {
  localStorage.clear();
});
