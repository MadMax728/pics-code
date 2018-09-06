import { Translations } from "./translations";

describe("Translation tests", () => {
  it("test a single level item", () => {
    expect(Translations.app_name).toEqual("Policy Holder");
  });

  it("should return the current language", () => {
    expect(Translations.getLanguage()).toEqual("en");
  });
});
