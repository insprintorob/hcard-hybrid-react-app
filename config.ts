/**
 * Config that supports environment specific overrides, such as for development/uat/staging servers
 */
const fs = require('fs');
const toml = require('toml');
const deepmerge = require('deepmerge');

let config = toml.parse(fs.readFileSync('config.toml'));

// Merge in environment/instance specific config if present
// This file is not committed to git and ideally should be automatically generated for each environment using CI/CD or a Configuration Management System like puppet/chef/ansible.
if (fs.existsSync('config-instance.toml')) {
    const instanceConfig = toml.parse(fs.readFileSync('config-instance.toml'));
    config = deepmerge(config, instanceConfig);
}

export default config;