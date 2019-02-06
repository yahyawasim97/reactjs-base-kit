import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import NotFound from "../src/containers/not-found";

let notFound;

describe("NotFound Component", () => {
  beforeEach(() => {
    notFound = shallow(<NotFound />);
  });

  describe("When no props passed", () => {
    it("should render classname '.route-not-found-header' with 'Not found'", () => {
      expect(notFound.find(".route-not-found-header").text()).to.equal("Not found");
    });

    it(`should render class "route-not-found-message" with text 
      "We are sorry but the page you are looking for does not exist."`, () => {
      expect(notFound.find(".route-not-found-message").text()).to.equal(
        "We are sorry but the page you are looking for does not exist."
      );
    });
  });

  describe("When props passed", () => {
    beforeEach(() => {
      const props = {
        message: "Invalid route",
        title: "Not Found"
      };

      notFound = shallow(<NotFound {...props} />);
    });

    it("should render class '.route-not-found-header' with text 'Not Found'", () => {
      expect(notFound.find(".route-not-found-header").text()).of.equal("Not Found");
    });

    it("should render class 'route-not-found-message' with text 'Invalid route'", () => {
      expect(notFound.find(".route-not-found-message").text()).to.equals("Invalid route");
    });
  });
});
