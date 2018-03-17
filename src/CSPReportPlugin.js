// MIT © 2018 azu
"use strict";

export class CSPReportPlugin {
    constructor(tracker, config = {}) {
        if (config.debug) {
            console.log("CSPReportPlugin: Initialize", config);
        }
        this.tracker = tracker;
        this.config = config;
        this.onSecurityPolicyViolation(this.report);
    }

    onSecurityPolicyViolation = (handler) => {
        document.addEventListener("securitypolicyviolation", handler);
    };

    /**
     * @param {SecurityPolicyViolationEvent} event
     * @see https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent
     */
    report = (event) => {
        const defaultFields = {
            hitType: 'event',
            eventCategory: 'CSP Report',
            eventAction: event.violatedDirective,
            eventLabel: event.blockedURI,
            nonInteraction: true,
        };
        if (this.config.debug) {
            console.log("CSPReportPlugin: send", defaultFields);
        }
        this.tracker.send("event", defaultFields);
    };
}
