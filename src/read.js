const args = require('minimist')(process.argv.slice(2));

const GITHUB_TOKEN = args.token;

console.log(GITHUB_TOKEN);