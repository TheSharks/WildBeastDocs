This is the cheat sheet for the WildBeast command framework. Using these elements, you can build the command you really want to get into your own instance.

**NOTE:** Do not come to us with questions on how to write custom commands, some basic JavaScript and programming knowledge is required. We won't give you assistance in writing your commands beyond what is listed on this page!

##Custom Commands
Starting at version 3.0.0, WildBeast allows for the addition of user created .js files with commands, given that they are written in the **exact** same format as default files. This page provides you with the tools you need to create your own commands.

##Important notes
1. Files need to declare commands to an array, and the array **needs** to be exported as `Commands`. 
2. Your command files must be in the `custom` folder within the `commands` folder. The path would therefore be `WildBeast/runtime/commands/custom`.
3. Commands are **objects** added to an **array**, not the other way around!
4. Aliases **can not** be shared between commands, meaning that a custom command can't have the same alias as a default. The bot will stop itself from running and spit out an error if this happens for safety reasons.
5. Any functions that use for instance config fields and so forth need to be imported in the format `../../file.ext` or `../file.ext` depending on what folder the file is in.

##Property declaration
Command objects consist of different properties which define how the command runs. There are mandatory properties and non-mandatory, divided into their own lists.

The command callback name is decided by the `cmdname` placeholder in `Commands.cmdname`.

**Property list:**

*Mandatory*

- `name`: Defines command name. This is the name of the command's help module and **not** its callback name. See above for callback name definition.
- `help`: Defines the message displayed when `help <command>` is ran.
- `level`: Defines minimum access level a user needs to execute this command, set to `master` to restrict usage to masters only.
- `fn`: Defines the Discordie function to execute.

*Optional*

- `noDM`: If set to true, disallows usage in direct messages.
- `timeout`: Defines how many seconds the command will be on timeout for before it can be used again.
- `usage`: Defines what will displayed as the example of its usage in the help command.
- `overwrite`: If true, overwrite existing default commands with code of the custom one. If you forget to set this to true, the bot will abort the execution process!
- `aliases`: Array of hard coded aliases for this command. This means to say that the command will trigger from multiple names. Note that aliases can't be shared between commands as explained earlier!
- `hidden`: If set to true, will hide the command from the help list.

##Example structure
Example for plain text command:
```js
var Commands = [] // Declaration of the command array

Commands.ping = {
  name: 'ping',
  help: 'Check if I still live.'
  timeout: 10,
  usage: '<pong>', // Avoid alias duplication
  overwrite: true, // WildBeast already has a command called ping, will overwrite with this
  aliases: ['pong'],
  level: 0,
  fn: function(msg, suffix, bot) {
    msg.channel.sendMessage('I LIVE')
  }
}

exports.Commands = Commands // Expose the commands to the commandcontrol module
```
Example for command with import:
```js
var Commands = [] // Declaration of the command array
var config = require('../../config.json') // Import config

Commands.isbot = {
  name: 'isbot',
  help: 'Retrieve if bot is running with token.'
  timeout: 30,
  // No overwrites or so forth, so not included
  aliases: ['bot'],
  level: 'master',
  fn: function(msg, suffix, bot) {
  	if (config.isbot === true) {
    	msg.channel.sendMessage('I am currently running on a bot account.')
	}
	else {
		msg.channel.sendMessage('I am currently not running on a bot account.')
	}
  }
}

exports.Commands = Commands // Expose the commands to the commandcontrol module
```

And that's how easy it is to create your own commands for WildBeast. Good luck in making your commands, and tinker to your heart's desire!
