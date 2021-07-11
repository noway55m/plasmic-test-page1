
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['u3F3zrUzVgu1GQGBDanezt'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  