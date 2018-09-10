// Toggle application features on and off - https://martinfowler.com/bliki/FeatureToggle.html
const featureToggles = {
  account: true
};

if (process.env.NODE_ENV !== "production") {
  // Global so can be changed in console at runtime. Still need to trigger render by changing route, etc.
  window.featureToggles = featureToggles;
}

export default featureToggles;
