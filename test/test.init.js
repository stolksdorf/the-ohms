'use strict';

const path = require('path');

const rootPath = path.resolve(`${__dirname}/..`);
require('app-module-path').addPath(rootPath);

// initialize config
const configPath = path.resolve(`${rootPath}/config`);
const config = require('nconf')
	.argv()
	.env({ lowerCase: true, separator: ':' })
	.file('testing', { file: `${rootPath}/test/config/testing.json` })
	.file('environment', { file: `${configPath}/${process.env.NODE_ENV}.json` })
	.file('defaults', { file: `${configPath}/default.json` });

// other libs
const should = require('chai').use(require('chai-as-promised')).should();

module.exports = {
	config: config,
	should: should,
};
