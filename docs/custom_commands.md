title: Custom commands
description: WildBeast custom command reference
path: tree/master/docs
source: custom_commands.md

This document outlines the procedure for writing custom commands for WildBeast.

!!! bug "Migrating from versions preceding v6"
    In WildBeast versions 3 and 4, commands were declared in a very different way - namely, the commands were indexed into files based on category (Whereas version 6 indexes commands individually). The syntax was also vastly different. If you wish to write commands for pre-v6 versions, the [Legacy custom commands](/legacy_custom_commands) page details the old approach.

!!! failure "Custom command support"
    Some basic JavaScript knowledge is required to write custom commands. Support for doing this will not be provided in addition to what is listed on this page, if the issue does not specifically concern WildBeast.

## General notes

- Command files are placed into **~/src/commands**.
- Each command is declared in a separate file, preferably with the command name. (I.e if your command is named **dankmeme**, name the file **dankmeme.js**.)
- Commands cannot share names - each must have a name of its own.

## Property declaration

The exported command data describes the command in various ways. Here are the properties that can be defined.

A command object consists of a **meta** object and an **fn** function. The function gets executed when the command gets ran, while the meta object provides information and modifiers to the command. Both the meta and fn properties must be defined on a command object.

### Meta object structure

**Note:** An empty **Value** column implies that there are no specific formatting requirements for the particular property.

| Property | Description | Value | Type | Required |
| -------- | ----------- | ----- | ---- | -------- |
| level | The permission level required to run the command. | 0-10/Infinity | Number | Yes |
| help | A brief description of what the command does. |  | String | Yes |
| alias | A list of aliases[^1] (Alternative command names) to run the command. |  | Array<String> | No |
| usage | An example of how to use the command. |  | String | No |
| module | A category to which the command belongs. |  | String | No |
| noDM | Whether the command can be used in direct message context or not. |  | Boolean | No |
| timeout | A time in milliseconds for which the command will be on cooldown between uses. |  | Number | No |
| nsfw | Whether the command is NSFW or not. If set, restricts the command usage scope to NSFW channels only. |  | Boolean | No |
| addons | Addendums to the command's help message. |  | String | No |
| permAddons | Additional Discord permissions that are required to run the command. | Discord permission name (Manage Roles etc.) | Array<String> | No |


!!! tip "Testing your commands"
    To verify that your commands pass the above requirements, you can run **npm test**. 

## Example

```js
module.exports = {
  meta: {
    level: 0,
    help: 'I\'ll say hello to you!',
    alias: [ 'hi', 'hey' ],
    usage: 'sayhello <name>',
    module: 'Fun',
    noDM: false, // Can be omitted
    timeout: 0, // Can be omitted
    nsfw: false, // Can be omitted
    addons: 'This command can also be used in Direct Messages.',
    permAddons: [] // Can be omitted
  },
  fn: function (msg, suffix) {
    if (suffix) msg.channel.createMessage(`Hello ${suffix}!`)
    else msg.channel.createMessage('Hello!')
  }
}
```

And that's how easy it is to create your own commands for WildBeast. Good luck in making your commands, and tinker to your heart's desire!

[^1]: Aliases must not overwrite existing command names or aliases.
