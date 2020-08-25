#!/usr/bin/env node
//thanks to "chmod +x todo"

const commands = require('./commands')

const cmd = process.argv[2]
const note = process.argv[3]

switch (cmd) {
  case 'list':
    commands.list()
    break

  default:
    console.log(`I don't understand that command: ${cmd}`)
}
