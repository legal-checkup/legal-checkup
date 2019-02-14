const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/782333/Desktop/legal-checkup/.cache/dev-404-page.js"))),
  "component---src-pages-about-index-js": hot(preferDefault(require("/Users/782333/Desktop/legal-checkup/src/pages/about/index.js"))),
  "component---src-pages-checkup-index-js": hot(preferDefault(require("/Users/782333/Desktop/legal-checkup/src/pages/checkup/index.js"))),
  "component---src-pages-help-index-js": hot(preferDefault(require("/Users/782333/Desktop/legal-checkup/src/pages/help/index.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/782333/Desktop/legal-checkup/src/pages/index.js"))),
  "component---src-pages-privacy-policy-index-js": hot(preferDefault(require("/Users/782333/Desktop/legal-checkup/src/pages/privacy-policy/index.js"))),
  "component---src-pages-results-index-js": hot(preferDefault(require("/Users/782333/Desktop/legal-checkup/src/pages/results/index.js"))),
  "component---src-pages-terms-of-use-index-js": hot(preferDefault(require("/Users/782333/Desktop/legal-checkup/src/pages/terms-of-use/index.js")))
}

