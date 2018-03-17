// MIT © 2018 azu
"use strict";

export class CSPReportPlugin {
    constructor(tracker, config) {
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
            eventCategory: 'CSP',
            eventAction: event.violatedDirective,
            eventLabel: event.blockedURI,
        };
        console.log("defaultFields", defaultFields);
        this.tracker.send("event", defaultFields);
    };
}
