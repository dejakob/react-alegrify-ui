const fs = require('fs');
const { argv } = require('yargs');
const [ strFrom, strTo, file ] = argv._;

const fileContents = fs.readFileSync(file).toString();
const updatedContents = fileContents.split(strFrom).join(strTo);

fs.writeFileSync(file, updatedContents);