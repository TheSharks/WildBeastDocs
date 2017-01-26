This is the command reference for WildBeast. You can find more elaborative information here on each of the commands currently implemented.
  
If you have need for any further info, you can send the message `{prefix}help <command>` to the bot to get info about timeouts and so forth. For lengthier explanations on the usage of the commands, check out #le-guide in [WildBot's Territory](https://discord.gg/0cFoiR5QVh5LZlQO).
  
The prefix is not specified in this reference. You have to apply your own prefix to the commands. If you don't know the prefix, type `@<botname> prefix` in the server you're using.
  
##Command reference
Name | Description | Usage | Level 
---- | ----------- | ----- | ----- 
**General commands** |
ban | Ban a user from the server. | ban @User `<days of messages to delete>`| Ban permission required. 
customize | Customize the bot's behavior in the server. | See the table below. | 3 
eval | Evaluate Discordie code. | eval `<code>` | master 
globalban | Disallow users from using the bot in any servers it's in. | globalban `<ban/unban/status>` `<userid>` | master 
hello | Make the bot greet you. |  | 0 
info | Print information on the bot. |  | 0 
join-server | Tell the bot to join a server. | join-server `<invite-link>` | 0 
kick | Kick a user from the server. | kick @User | Kick permission required.
killswitch | Close the bot process. |  | master 
leave-server | Leave a server. |  | 3 
namechanges | Detect name changes from a user. | namechanges @User | 0 
ping | Ping the bot to test responsiveness. |  | 0 
plaineval | Same as eval, just with a different scope. | plaineval `<code>` | master 
prefix | Make the bot return its current prefix. |  | 0 
purge | Delete a specified count of messages. | purge `<amount>` | Manage Messages permission required. 
rankup | Bump a user's permission level up by one notch. | rankup @User | 3 
say | Make the bot say something you specify. | say `<message>` | 0  
server-info | Print information on the server. |  | 0 
setlevel | Set the level of a user or role. | setlevel `<@User/@Role/@everyone>` `<-1/0/1/2/3>` | 3 
setnsfw | Change NSFW allowance in a channel. | setnsfw `<on/off>` | 3 
setstatus | Change the bot's playing status. | setstatus `<message>` | master 
twitch | Return if a Twitch streamer is live or not. |  | 0 
userinfo | Print info on a user. |  | 0 
**Fun commands** | 
advice | Ask for some advice from the bot. |  | 0 
cleverbot | Talk to the bot, and it will respond. | cleverbot `<message>` | 0 
dice | Roll the dice. |  | 0 
e621 | Image searching from e621. | e621 `<searchwords>` | 0 (NSFW)
fact | Return a random fact. |  | 0 
fancyinsult | Insult someone in a fancy manner. | fancyinsult `<name>` | 0 
fortunecow | Return a fortune cow. |  | 0 
gif | Search for a GIF. | gif `<searchwords>` | 0 
leetspeak | Encode a message to 1337sp3ak. | leetspeak `<message>` | 0 
magic8ball | Ask for a decision from the magic 8 ball. |  | 0 
meme | Make a meme. [Meme types here](https://github.com/TheSharks/WildBeast/blob/master/runtime/commands/memes.json) | meme `<memetype>` `"<Upper line>"` `"<Bottom line>"` | 0 
randomcat | Return a random cat picture. |  | 0 
randommeme | Get a random meme from Imgur. |  | 0 
rip | Posts a ripme.xyz about someone. | rip `<name>` | 0 
rule34 | Search for an image via rule34. | rule34 `<searchwords>` | 0 (NSFW)
stroke | Stroke someone's ego. | stroke `<name>` | 0 
urbandictionary | Search for a definition from the Urban Dictionary. | urbandictionary `<searchwords>` | 0 
xkcd | Search for XKCD comics. Use nothing for random, current for latest or a number to get that one. | xkcd `<(nothing)/current/(number)>` | 0
yesno | Return a yes or no GIF. |  | 0 
yomomma | Yo momma is so fat that... You know the drill. |  | 0 
**Music commands** | 
leave-voice | Leave the voice channel. |  | 1 
music | Pause or resume music playing. |  | 1 
playlist | Print the current playlist. If the delete subcommand is passed, remove a song from the playlist. Number specifies track to remove. | playlist OR playlist delete `<position>` | 0 
request | Request a song to add to the playlist. | request `<url/searchwords>` | 1 
shuffle | Shuffle the current playlist. |  | 2 
voice | Make the bot join the voice channel. |  | 1 
volume | Adjust player volume by providing a number. Return the current volume by not returning a parameter. | volume `<0-100>` OR nothing | 1 
voteskip | Vote to skip a song. |  | 1 
**Tag commands** | 
tag | Base command for tags. Returns a tag if specified. | tag `<subcommand/name>` | 0 (Also subcommands)
tag create | Create a tag. | tag create `<name>` `<content>` | 
tag edit | Edit an existing tag. | tag edit `<name>` `<newcontent>` | 
tag list | Retrieve a list of tags you created or which someone else did. | tag list `<nothing/mention>` | 
tag random | Get a random tag from the database. |  | 
tag raw | Return the raw data of a tag. | tag raw `<name>` | 
tag owner | Return the owner of a tag. | tag owner `<name>` | 
tag delete | Delete a tag. | tag delete `<name>` | 

##Customize command
The customize command is a multifaceted command that needs its own table to illustrate how it works.
  
The customize command makes changes to the server-specific database of WildBeast. It allows you to set a custom member join announcement and tweak some responses. You need a permission level of 3 to use the customize command.   

Name | Description | Usage | Note 
---- | ----------- | ----- | ----- 
customize | Base command for the customizer. | customize `<method>` `<parameter/content>` | See below for the methods.
prefix | Change the command prefix. Enclose the prefix in double quotes. | customize prefix "`<prefix>` | 
permissions | Change response given when users don't have permissions to execute a command. | customize permissions `<message>` | 
timeout | Change response given when a command is still on cooldown. | customize timeout `<message>` | 
welcoming| Changes whether the bot should send a welcome message when a new member joins. | customize welcoming `<off/channel/private>` | 
welcome | Changes the welcome message specified above. | customize welcome `<message>` | 
nsfw | Change the response given when a channel doesn't have NSFW commands allowed. | customize nsfw `<message>` | 
volume | Change the default volume the bot will assume when joining a voice channel. Anti-earrape measure. | customize volume `<0-100>` | 

All commands except for the option-based ones (`welcoming` and `prefix`) support certain variables in the messages. The variables start with `%` and are the following.

Variable | Description | Usable responses 
-------- | ----------- | ---------------- 
user | Username of the user that triggered the response. | All | 
server | Name of the server. | All | 
channel | Name of the channel the response was triggered in. | All except `welcome` | 
timeout | Amount of seconds the command is on cooldown. | Only `timeout` | 
ulevel | Short of user level, the user's current permission level. | Only `permissions` | 
nlevel | Short of need level, permission level required to execute the command. | Only `permissions` | 
