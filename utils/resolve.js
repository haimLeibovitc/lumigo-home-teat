const path = require('path');

const DEFAULT_ROOT = process.cwd();

/**
 * Resolves all paths in the provided configuration object
 * relative to the provided root.
 *
 * If no root is provided the `path.resolve(__dirname, '../../')
 * is used instead.
 *
 * @param {Object} config the configuration object with paths
 * @param {String} root root to resolve to
 */
module.exports = function resolve(config, root = DEFAULT_ROOT) {
  const result = {};

  Object.keys(config).forEach(filePath => {
    result[filePath] = path.resolve(root, config[filePath]);
  });

  return result;
};
