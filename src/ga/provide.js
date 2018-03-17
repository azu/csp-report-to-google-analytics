// MIT © 2018 azu
"use strict";
/**
 * Provides a plugin name and constructor function to analytics.js.
 * @param {string} pluginName
 * @param {Function} pluginConstructor
 */
export function providePlugin(pluginName, pluginConstructor) {
    const ga = window[window['GoogleAnalyticsObject'] || 'ga'];
    if (typeof ga === 'function') {
        ga('provide', pluginName, pluginConstructor);
    }
}
