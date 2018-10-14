/**
 * Config that supports environment specific overrides, such as for development/uat/staging servers
 */
const fs = require('fs');
const toml = require('toml');
const deepmerge = require('deepmerge');

let config = toml.parse(fs.readFileSync('config.toml'));
const instanceConfig = toml.parse(fs.readFileSync('config-instance.toml'));
config = deepmerge(config, instanceConfig);

export default config;