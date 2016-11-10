This is the cheat sheet for the WildBeast command framework. Using these elements, you can build the command you really want to get into your own instance.

**NOTE:** Do not come to us with questions on how to write custom commands, some basic JavaScript and programming knowledge is required. We won't give you assistance in writing your commands beyond what is listed on this page!

## Custom Commands
Starting at version 3.0.0, WildBeast allows for the addition of user created .js files with commands, given that they are written in the **exact** same format as default files. This page provides you with the tools you need to create your own commands.

## Important notes
1. Files need to declare commands to an array, and the array **needs** to be exported as `Commands`. 
2. Your command files must be in the `custom` folder within the `commands` folder. The path would therefore be `WildBeast/runtime/commands/custom`.
3. Commands are **objects** added to an **array**, not the other way around!

## Property declaration
Command objects consist of different *properties* which define how the command runs.
Some properties are mandatory, some aren't. Properties marked with `[M]` are mandatory.

Property list:

- `name`: Command name. This is tied the name of the command's help module and **not** its callback name. [M]
- `help`: Defines the message displayed when `help <command>` is ran. [M]
- `level`: Defines minimum access level a user needs to execute this command, set to `master` to restrict usage to masters only. [M]
- `fn`: Defines the Discordie function to execute. [M]
- `noDM`: If set to true, disallows usage in direct messages.
- `timeout`: Defines how many seconds the command will be on timeout for. These are server specific.
- `usage`: Defines what will displayed as the example of its usage in the help command.
- `overwrite`: If true, overwrite existing default commands with code of the custom one. If you forget to set this to true, the bot will abort the execution process!
- `aliases`: Array of hard coded aliases for this command. This means to tsay that the command will trigger from multiple names. For instance, `ping` can have an alias named `pingbot` and the bot will respond the same to both.
- `hidden`: If set to true, will hide the command from the help list. Useful for some soopah seekret commands.

## Command
```js
// New file is created
var Commands = [] // Declaration of the command array

Commands.ping = {
  name: 'ping',
  help: 'Check if I still live.'
  timeout: 10,
  usage: '<pong>',
  overwrite: true, // WildBeast already has a command called ping, will overwrite with this
  aliases: ['pong'],
  level: 0,
  fn: function(msg, suffix, bot) {
    msg.channel.sendMessage('I LIVE')
  }
}

exports.Commands = Commands // Expose the commands to the commandcontrol module
```

And that's how easy it is to create your own commands for WildBeast. Good luck in making your commands, and tinker to your heart's desire!