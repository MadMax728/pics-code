import ReactGA from "react-ga";

let diagnosticsEnabled = false;

/**
 * Initializes the logger(s). Call at application startup
 * before calling any other logger function.
 * @param {string} ga_tracking_id - Google Analytics tracking id
 * @param {boolean} ga_debug - Google Analytics debug setting
 * @param {boolean} enable_diagnostics - true for developers
 * @returns {void}
 */
export const initialize = (ga_tracking_id, ga_debug, enable_diagnostics) => {
  ReactGA.initialize(ga_tracking_id, {
    debug: ga_debug
  });
  diagnosticsEnabled = enable_diagnostics;
};

/**
 * Logs a message if diagnostics are enabled.
 * @param {string} message - The message
 * @returns {void}
 */
export const log = message => {
  if (diagnosticsEnabled) {
    console.log(message);
  }
};

/**
 * Logs a pageview.
 * @param {string} path - A relative URL path
 * @returns {void}
 */
export const pageview = path => {
  ReactGA.pageview(path);
};

/**
 * Logs a modal view (like a pageview but without a change in URL).
 * @param {string} modalName - A name representing the modal view
 * @returns {void}
 */
export const modalview = modalName => {
  ReactGA.modalview(modalName);
};

/**
 * @typedef {Object} Event
 * @property {string} category - A top level category for these events
 * @property {string} action - A description of the behaviour
 * @property {string=} label - Optional; more precise labelling of the related action
 * @property {number=} value - Optional integer; a means of recording a numerical value against an event
 * @property {boolean=} nonInteraction - Optional; true if event is triggered by code (e.g. page load) rather than by user interaction
 * @property {string=} transport - Optional; transport mechanism ("beacon", "xhr", or "image")
 */

/**
 * Logs an in-page event (a user interaction that does not trigger a
 * change in URL).
 * @param {Event} args - An object describing the event
 * @returns {void}
 */
export const event = args => {
  ReactGA.event(args);
};

/**
 * @typedef {Object} Exception
 * @property {string=} description - Optional; error message or description
 * @property {boolean=} fatal - Optional; true if exception was fatal
 */

/**
 * Logs an error/exception.
 * @param {Exception} args - An object describing the exception
 * @returns {void}
 */
export const error = args => {
  ReactGA.exception(args);
  log(args.description);
};

/**
 * Record GA API call times.
 * @param {Date} startTime - api start time
 * @returns {void}
 */
export const apiEndTime = startTime => {
  if (startTime) {
    const requestTime = Date.now() - startTime;
    ReactGA.timing({
      category: "API Call",
      //variable: key,
      value: requestTime // in milliseconds
    });
  }
};
