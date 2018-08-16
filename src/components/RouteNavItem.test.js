import React from "react";
import { MemoryRouter } from "react-router-dom";
import RouteNavItem from "./RouteNavItem";
import { mount } from "enzyme";

describe("RouteNavItem", () => {
  // defining a specific function to mount a RouteNavItem inside a memory router so that
  // there is a location.pathname set.
  const mountRouteNavItem = (pathname, props) => {
    return mount(
      <MemoryRouter initialEntries={[{ pathname, key: "testKey" }]}>
        <RouteNavItem {...props} />
      </MemoryRouter>
    );
  };

  it("should produce an li element when activeAtRoot prop is not passed", () => {
    const wrapper = mountRouteNavItem("/", {
      to: "/somewhere"
    });
    expect(wrapper.find("li")).not.toBe(null);
  });

  describe("for different routes", () => {
    it("should produce account li element with active class for empty route when activeAtRoot is true", () => {
      const wrapper = mountRouteNavItem("/", {
        to: "/account",
        activeAtRoot: true
      });
      expect(wrapper.find("li").hasClass("active")).toBe(true);
    });

    it("should produce account li element with no active class for empty route when activeAtRoot is false", () => {
      const wrapper = mountRouteNavItem("/", {
        to: "/account",
        activeAtRoot: false
      });
      expect(wrapper.find("li").hasClass("active")).toBe(false);
    });

    it("should produce account li element with active class for account route even if activeAtRoot is false", () => {
      const wrapper = mountRouteNavItem("/account", {
        to: "/account",
        activeAtRoot: false
      });
      expect(wrapper.find("li").hasClass("active")).toBe(true);
    });

    it("should produce account li element with no active class for policy route even if activeAtRoot is true", () => {
      const wrapper = mountRouteNavItem("/policy", {
        to: "/account",
        activeAtRoot: true
      });
      expect(wrapper.find("li").hasClass("active")).toBe(false);
    });
  });
});
