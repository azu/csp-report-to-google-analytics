# csp-report-to-google-analytics

[Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy "Content-Security-Policy")(CSP) report to Google Analytics.

## Usage

This library should be used with [analytics.js](https://developers.google.com/analytics/devguides/collection/analyticsjs/ "analytics.js").
This library does not work with `gtag.js`. Please see [gtag.js API? · Issue #202 · googleanalytics/autotrack](https://github.com/googleanalytics/autotrack/issues/202 "gtag.js API? · Issue #202 · googleanalytics/autotrack").

You can load this library from [unpkg](https://unpkg.com/ "unpkg") CDN.

- <https://unpkg.com/csp-report-to-google-analytics/dist/csp-report-to-google-analytics.min.js>

```html
<!-- Google Analytics -->
<script>
window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga('create', 'UA-XXXXX-Y', 'auto');
ga('send', 'pageview');
// require csp-report-to-google-analytics plugin
ga('require', 'csp-report');
</script>
<script async src='https://www.google-analytics.com/analytics.js'></script>
<!-- End Google Analytics -->
<!-- Load csp-report-to-google-analytics plugin -->
<script async src='https://unpkg.com/csp-report-to-google-analytics@latest'></script>
```

You have already introduced `analytics.js`, then add these to existing analytic setting.

- `ga('require', 'csp-report');`
- `<script async src='https://unpkg.com/csp-report-to-google-analytics@latest'></script>`

### CSP

You need to enable CSP on your site.

The [Content-Security-Policy-Report-Only](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only "Content-Security-Policy-Report-Only") HTTP Header is useful to found mixed contents on your site.

```
Content-Security-Policy-Report-Only: default-src https:;
```

Also, `<meta>` tag can enable `Content-Security-Policy`, but `<meta>` tag does not support ``Content-Security-Policy-Report-Only` header.

```html
<!-- Work -->
<meta http-equiv="Content-Security-Policy" content="default-src https:">
<!-- Not Work -->
<meta http-equiv="Content-Security-Policy-Report-Only" content="default-src https:">
```

## Options

- `debug`: boolean
    - Default: `false`

```Js
ga('require', 'csp-report', {
    debug: true
});
```

## Default field values

| Field                                                        | Value                                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [`hitType`](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#hitType) | `'pageview'`                                                 |
| [`eventCategory`](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#eventCategory) | `'CSP'`                                                      |
| [`eventAction`](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#eventAction) | [`SecurityPolicyViolationEvent.violatedDirective`](https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/violatedDirective "SecurityPolicyViolationEvent.violatedDirective")                                                   |
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
