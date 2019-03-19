#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const boxen = require('boxen');

const { name: pkgName } = require('./package');
const data = require('./data');

const enhancedData = {
  name: chalk.white(`               ${data.name}`),
  handle: chalk.white(data.twitter),
  work: chalk.white(data.work),
  opensource: chalk.white(data.opensource),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan(data.twitter),
  github: chalk.gray('https://github.com/') + chalk.green(data.github),
  blog: chalk.gray('https://medium.com/') + chalk.black('@' + data.blog),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue(data.linkedin),
  web: chalk.cyan(data.web),
  npx: chalk.red('npx') + ' ' + chalk.white(pkgName),
};

const result = `
${enhancedData.name}


${chalk.white.bold('       Work:')}  ${enhancedData.work}

${chalk.white.bold('     GitHub:')}  ${enhancedData.github}
${chalk.white.bold('       Blog:')}  ${enhancedData.blog}
${chalk.white.bold('   LinkedIn:')}  ${enhancedData.linkedin}
${chalk.white.bold('        Web:')}  ${enhancedData.web}

${chalk.white.bold('       Card:')}  ${enhancedData.npx}
`;

const card = boxen(result, {
  padding: 1,
  margin: {
    left: 2,
    right: 2,
    top: 3,
    bottom: 3,
  },
  borderStyle: 'round',
  borderColor: 'green',
});

fs.writeFileSync(path.join(__dirname, 'bin', 'output'), card);
