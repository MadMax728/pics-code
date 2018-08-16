import "./testPolyfills";
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import "jest-localstorage-mock";

// Initializes test environment.
// Automatically executed before running tests.

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

// Runs before every test globally. If local beforeEach, this runs first.
beforeEach(() => {
  localStorage.clear();
});

// Runs after every test globally. If local afterEach, this runs last.
afterEach(() => {
  localStorage.clear();
});
