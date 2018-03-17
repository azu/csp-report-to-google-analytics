# csp-report-to-google-analytics

CSP report to Google Analytics.

## Install

Install with [npm](https://www.npmjs.com/):

    npm install csp-report-to-google-analytics

## Usage


| Field                                                        | Value                                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [`hitType`](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#hitType) | `'pageview'`                                                 |
| [`eventCategory`](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#eventCategory) | `'CSP'`                                                      |
| [`eventAction`](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#eventAction) | `'track'`                                                    |
| [`eventLabel`](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#eventLabel) | [SecurityPolicyViolationEvent.blockedURI](https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/blockedURI "SecurityPolicyViolationEvent.blockedURI") |
| [`nonInteraction`](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#nonInteraction) | `true`                                                       |

## Changelog

See [Releases page](https://github.com/azu/csp-report-to-google-analytics/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/csp-report-to-google-analytics/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
