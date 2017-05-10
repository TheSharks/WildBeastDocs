Welcome to the installation guide for WildBeast on Windows! In this guide, we'll walk you through the installation and deployment process for the WildBeast bot.

## Prerequisites

- Windows system
	- Most Windows systems can run this bot fine, unless you have a really low-end laptop.
	- OS: Windows 7 and up
	- Administrator access to the computer
- Programs
	- We will be installing programs that are directly related to the bot later on. They will not be listed here.
	- These programs are required pre-setup:
		- A code editor, i.e. [Notepad++](https://notepad-plus-plus.org/) or [Atom](https://atom.io) or [Brackets](http://brackets.io/)

## Installation

General note: Quite a few steps in this guide will be using administrative permissions. Therefore we recommend that you are logged into an administrator account to not have to type the admin password every time you perform something.

## Installing Node

Go to [the NodeJS download page](https://nodejs.org/en/download/) and download the version relevant to your OS bit version.

It's pretty straight forward, just make sure that the features tab looks like this.

![Node setup parts](https://s17.postimg.org/uyn914gq7/nodesetup.png)

When that's installed, it's time to retrieve the WB repository.

## Installing Git and retrieving WildBeast

Next we'll install Git to be able to download WildBeast.
Start off by going to [the Git download page](https://git-scm.com/downloads) and download the Windows installer.
![Git download](https://s14.postimg.org/97k1xob41/gitdl.png)
  
**NOTE:** The installation process of Git has to go exactly as described below, otherwise you will have to take longer ways around!

Once downloaded, run the installer. Read the license and continue. Once you get to the component selection, *make sure that it looks at least like this!*

![Component selection](https://s12.postimg.org/a0mn10p31/gitsetup1.png)

After selecting the start menu folder, this is where things get precise. **Make sure that you tick the boxes exactly as follows!**

![Git 1](https://s15.postimg.org/pvrcwsjor/2016_11_06_11_58_39_Git_2_10_2_Setup.png)
![Git 2](https://s10.postimg.org/7mutp1gmx/gitsetup3.png)
![Git 3](https://s10.postimg.org/auzb232wp/gitsetup4.png)
![Git 4](https://s10.postimg.org/e33sf4p6h/gitsetup5.png)

**And in text:**  
`Use Git from the Windows Command Prompt` (In *Adjusting your PATH environment*)  
`Checkout Windows-style, commit Unix-style endings` (In *Configure the line ending conversions*)  
`Use OpenSSH`(In *Choosing the SSH executable*)  
`Use MinTTY (the default terminal MSYS2)` (In *Configuring the terminal emulator to use with Git Bash*)  
When you've gotten that straight, **you've set up Git in the way we intend to use it!**		

Next, we'll retrieve the WildBeast GitHub repository, or clone in Git terms. This means that we download the bot using the Git SCM system. Now, you might ask: *Why are we doing this? Can't I just download a ZIP package?*  
The answer is: No. We're making it easier for you in the future to update WildBeast, just follow along for now.

You'd want to figure out where you want the bot to be downloaded. Something simple like the root of the C:\ drive (Possibly some other drive, though **NOT A FLASH DRIVE**) or optionally your Desktop could be fine.
When you've found the location of your choice, hit Shift+Right click and select `Git Bash here`. This will open the Git Bash console.
Type the following command into Git Bash:

```bash
git clone https://github.com/TheSharks/WildBeast.git -b master
```

Let it clone the Git repository. When it's done, you should have the following output.

![Successfully cloned](https://s16.postimg.org/uyuqfkmj9/gitclone.png)

**NOTE:** If you get any errors, see [the FAQ](faq.md) before asking questions!

Now, why did we do it this way? The reason is simple: Ease of updating. If we make a commit to the repository (Smaller update), you can apply that update to your bot in seconds *without having to redo anything*. If you downloaded a ZIP package, you would **have to redownload the entire ZIP package again before it's updated!**
That is the reason to why we use Git to download WildBeast.

You have now successfully cloned the WildBeast Git repository!

## Installing Python 2.7.12

From WildBeast version 4.0.0 onwards, the fibers package is used in the bot. This package requires Python 2.7 to install, and hence we will also install that.

[Click here](https://www.python.org/ftp/python/2.7.12/python-2.7.12.msi) to directly download the Python 2.7 installer. (Official source from python.org)

Open the installer. Other options don't matter that much, but these two screens are crucial to have **exactly as follows!**

![Python 2.7 install 1](https://i.imgur.com/GTU2Shh.png)

![Python 2.7 install 2](https://i.imgur.com/cu4SsNq.png)

It is especially important that you have all the boxes ticked in the latter image in order for this to work properly. Once you have completed this, proceed to the next step.

**Important note to anyone that is running Python 3.5:** The PATH variables will be duplicated but the one that was previously installed stays as the one that is referred to as `python`. So if you installed 3.5 before, you're cool. But if you intend on installing 3.5 and using it primarily after this, you need to make changes to the variables. If you want to do this and need help, you can come ask on our help server.

## Installing the Node dependencies

Now it's time to install the Node dependencies for the bot. These are smaller packages that WildBeast relies on to run.
Open a command prompt in the WildBeast folder (Shift+Right click) and select "Open command window here". This will open a command window.
Next, type in the following command into the command prompt:

```bash
npm install
```

This will download the dependencies. Wait until it completes, and when you are able to execute commands again the install has completed. The output is too huge to provide an image of, so you'll have to do without.

If you get errors that say `WARN` and yellow text, you can ignore those. If you however start getting red text, there might be a problem installing. Check that the WildBeast directory does not require admin permissions to execute stuff in. You may come and ask us [over at WildBot's Territory](https://discord.gg/wildbot) if you need help debugging these errors.

**NOTE:** The `fibers` package requires node-gyp to build. Node-gyp may fail on building `fibers` if a GCC compiler isn't installed on the system. If you get an error that resembles to this, you are having this issue.

```bash
gyp ERR! build error
gyp ERR! stack Error: C:\Windows\Microsoft.NET\Framework\v4.0.30319\msbuild.exe failed with exit code: 1
gyp ERR! stack     at ChildProcess.onExit (C:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\build.js:276:23)
gyp ERR! stack     at emitTwo (events.js:106:13)
gyp ERR! stack     at ChildProcess.emit (events.js:194:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:215:12)
gyp ERR! System Windows_NT 10.0.14393
gyp ERR! command "C:\Program Files\nodejs\node.exe" "C:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\bin\node-gyp.js" "rebuild" "--release"
gyp ERR! cwd %WildBeastDirectory%\node_modules\fibers
gyp ERR! node -v %NodeVersion%
gyp ERR! node-gyp -v %Node-gypVersion%
gyp ERR! not ok
```

To fix this, open an administrative command prompt (Start Menu -> Type 'cmd' -> Right click and Run as administrator) and run `npm install --global --production windows-build-tools`. After that do `npm install` again.

## Installing RethinkDB and creating the DB

As of WildBeast version 4.0.0, the bot uses RethinkDB to store server-specific data. This includes server owner, customize options and a whole bunch of other things.

**Important note before starting:** Do not fiddle with RethinkDB options or execute commands outside of the ones we tell you to unless you understand RethinkDB and can unbork it yourself. We will not start solving your database if you messed it up.

Click [this link](https://download.rethinkdb.com/windows/rethinkdb-2.3.5.zip) to download the RethinkDB executable. (No worries, that's the official download link)

When the file has downloaded, extract rethinkdb.exe to someplace suitable. We'd recommend creating a new folder on your C:\ drive and naming it RethinkDB, then just put the file in there. (**NOTE: WildBeast and RethinkDB have to be on the same drive in order to work**) Browse to the directory you put the executable in, then hit Shift+Right click and select "Open command window here". In the command prompt, type in the following command:

```bash
rethinkdb --bind all
```

The RethinkDB server will start up and list some addresses plus other things. When the output resembles to the one displayed below, you're good to go. Just leave the command window open or the server will shut down.

![RethinkDB successful](https://s10.postimg.org/cjv2od0k9/rethinkdb.png)

## Configuration

Find `config.example.json` on your PC and open it using Notepad++ or any other code editor. **Do not edit it with Windows Notepad, that will be a mess.**

## The config file

When opening the config file, you should have a file that looks like the [example config](https://github.com/TheSharks/WildBeast/blob/master/config.example.json) (The CSE is deprecated and likely to be removed, but the others are still needed)

We'll now walk you through the different sections in the config and what they do.
  
### Bot section
  
Property | Explanation | Notes |
-------- | ----------- | ----- |
isbot | If an OAuth bot account should be used. | Recommended to be true due to [Discord bot rules](https://discordapp.com/developers/docs/topics/oauth2#bot-vs-user-accounts). |
token | OAuth token for the bot. | Refer to the "Making the config" section. |
email | Email for normal user account that the bot will use. | **DO NOT** input your personal login details here. |
password | Password for the account mentioned above. | As above. |
oauth | The OAuth URL for the bot. | Refer to the "Making the config" section. |
  
### Database section
  
Property | Explanation | Notes |
-------- | ----------- | ----- |
host | Points to WildBeast's database, localhost by default. | Don't modify unless you have a remote database set up. |
port | Specifies which network port the RethinkDB server is running on. | As above. Default is 28015. |
password | Password to RethinkDB user. | Admin account has no password by default. Don't set a password for the admin account unless you want to have to edit this. |
user | RethinkDB user account to use for accessing the database. | Admin by default. Admin will have permission to all databases so it should stay like this. |
  
### Settings section
  
Property | Explanation | Notes |
-------- | ----------- | ----- |
prefix | The command prefix the bot will use. | Can be a special character like `/` etc. |
autodeletemsg | Automatically delete music-related messages after a while. | The time for this is possible to configure. Boolean. |
deleteTimeout | The amount of time after which to delete the messages. | Insert time in milliseconds, default 3000. |
deleteTimeoutLong | Same as above, but for messages that have a longer timeout.  | For now only [this message](https://github.com/TheSharks/WildBeast/blob/master/runtime/internal/voice.js#L204) uses the long timeout. In milliseconds, default 6000. |
maxvcslots | How many concurrent voice connections the bot can have until it won't join more. | Default limit is 10, depends on the beefyness of your system. |
  
### Bezerk section
  
**IMPORTANT NOTE:** Unless you use Bezerk, the WildBeast WSM, **do not modify anything here as it's for advanced users only!**
  
Property | Explanation | Notes |
-------- | ----------- | ----- |
use | Whether Bezerk shall be used or not. | Do not modify unless you use Bezerk. |
uri | Specifies the websocket address for the Bezerk server. | As above. Default is `ws://localhost:1337` |
  
### Elasticsearch section
  
**IMPORTANT NOTE:** Unless you use Elastic like we do, **don't modify this!** It's meant for large instances and hence advanced users only!
  
Property | Explanation | Notes |
-------- | ----------- | ----- |
use | Whether Elastic shall be used or not. | Do not modify unless you use Elastic. |
client/host | Specifies the address for the Elastic server. | As above. Default is `localhost:9200` |
  
### Permissions section
  
Property | Explanation | Notes |
-------- | ----------- | ----- |
master | The highest possible access level of 9. Full permissions. |  Only give this to yourself and maybe others you really trust. |
level1, level2, level3 | Settable access levels that give users access to certain commands. | Default access levels can be found in [the command files](https://github.com/SteamingMutt/WildBeast/tree/master/runtime/commands). |
  
Notice: By default, when WildBeast joins a server it will set the owner's access level to 5. This is to give them control over normal users. 
  
### API keys section
  
Property | Explanation | Notes |
-------- | ----------- | ----- |
imgflip | Your [imgflip](https://imgflip.com) login details. | Used in certain meme commands. |
google | For retrieving data from YouTube. | Refer to the "Making the config" section. |
mashape | For retrieving the Fortune Cow. | Refer to the "Making the config" section. |
twitchId | For retrieving status of whether a user on Twitch is streaming or not. | Refer to the "Making the config" section. |
imgur | For retrieving random memes from Imgur. | Refer to the "Making the config" section. |
cleverbot_user | Username to the cleverbot.io API, used in the cleverbot command. | Refer to the "Making the config" section. |
cleverbot_key | Key to the cleverbot.io API, used in the cleverbot command. | Refer to the "Making the config" section. |
  
## Making the config

- OAuth app
	1. We'll start off by creating an OAuth application in Discord's developer interface so that the bot can login.
		- Go to [the Discord Dev dashboard](https://discordapp.com/developers/applications/me) and create a new application.
		- Name it whatever you prefer and give it a fancy picture. Fill in a description if you want to, then click "Create application".
		- Now you'll have a more full-fledged app page. Click "Add Bot User" and confirm to make it a bot.
		- Here you'll get a Client ID and a token. Reveal the token (**Not the secret**) and replace "Bot token" with that in the config.
	2. If you completed the step above and want to comply with Discord rules, skip the email/password section and leave them be.
	3. Next we'll make an OAuth URL for the bot so it can be added to the server.
		- Just put this placeholder URL somewhere for now, *don't open it as it will not work*.
		`https://discordapp.com/oauth2/authorize?&client_id=CLIENTID&scope=bot&permissions=536345655`
		- Go back to the app page, and copy the Client ID.
		- Replace the `CLIENTID` placeholder in the URL above with the ID you just copied. You can open the URL to test that you did it right.
		- If the URL works as intended, copy it and replace "URL" in the config with the one you copied.
		- You can also open the URL and add your bot to the server at this point, so you don't forget it. It will have the permissions it wants precalculated due to the number after the `permissions` property. Just select your server from the dropdown list and add it. The bot won't do anything at this stage because we're not finished yet.
		- If you can't select your server, it might be that you lack Manage Server permissions.
- Prefix and other settings
	- Setting the command prefix isn't really [rocket science](http://takeb1nzyto.space). This can be any special character, for instance `/`, `?` and so forth.
	- You can also use multiple characters as a prefix, for instance `!!` and `++`.
	- Note that there is always a so-called global prefix: A mention. Saying `@BotName` in chat will function as a prefix as well. **This doesn't need to be specified in the config as it's always active.**
- The rest of the options are straight forward. `autodeletemsg` can be true or false, the message deletion times can be whatever you fancy in milliseconds and `maxvcslots` is just a number.
- Permissions
	- This is a section that has a very interesting gimmick to it.
		- WildBeast has a command named `setlevel` which will set the level of a user. **However**, that is written into a server-specific config. Which means that if you set the level of someone to 2 in Server1, they will not be level 2 in Server2, for example.
		- The permissions fields here are so-called **global permissions**, and will apply unless a server-specific level is set.
		- Use this to add technicians and others who need permissions regardless of where the bot is.
    - You can specify users here by adding their IDs into the fields. Only the master field is mandatory.
    	- You can get the ID of a user by either "backlash mentioning" them, which means to say typing `\@User` in chat or by enabling Developer Mode (Personal Settings -> Appearance -> Enable Developer Mode) and right-clicking on someone, subsequently selecting Copy ID from the list and pasting it in between the quotes.
    	- Remember to follow the example syntax in the master field when adding multiple users!
- API keys
	- General notice: Anything within these fields is sensitive and could do much harm if revealed to the public.
		- **Therefore it is imperative that you keep this to yourself.**
		- WildBeast maintainers will **NEVER** ask for your login details or API keys. Only show the config to trusted WildBeast maintainers with the `Staff` role in WildBot's Territory.
	- imgflip
		- The procedure for getting this isn't tricky. Just go to https://imgflip.com, create an account and input your username and password into the fields.
    - Google
    	- This API is used to retrieve data from YouTube, related to music playback.
    		1. Go to https://console.developers.google.com and create a new project. Name it whatever you fancy. Nothing else needs to be changed unless you want to change the project ID or the app engine location.
    		2. Wait a while as the project is being created.
    		3. When the creation process is completed, you'll get taken to the Dashboard screen of the project. In the sidebar on the left, click "Library".
    		4. This will take you to the API library. Select "YouTube Data API" as highlighted below.
			![YT Data API](https://s10.postimg.org/86fmqm6kp/googleapi_lib.png)
    		5. When the API page opens, click the "Enable" button in the top bar. Then you will get a notification saying that you need to create creditentials. That's exactly what we will do.
    		6. Click the "Go to creditentials" button. In the next dropdowns, make them look like following.
			![Creditentials](https://s21.postimg.org/ajmb4jah3/ytapi.png)
    		7. Hit "What creditentials do I need?" and the page will generate a Google API key for you. Copy the API key and replace the "A google key" placeholder with that key in the config.
    - Mashape
    	- This API is used with the `fortunecow` command.
		1. Go to [the Mashape site](https://market.mashape.com/login) and login as you prefer, GitHub login is supported.
		2. Navigate to the [Mashape APIs dashboard](https://market.mashape.com/dashboard) and add a new application. Name it as you wish.
		3. Once the app is created, click "Add API to your application" and search for `fortunecow`.
		4. Open the fortunecow API page and in one of the dropdowns on the left, change it to the application you just created and hit "Test Endpoint" on any you wish to test. Only one is required.
		5. This will add the API to your application. Navigate back to the dashboard and click on the app itself. It should now have an appearance that resembles to this.
		![Mashape App Page](https://s4.postimg.org/oounhvvj1/mashapeapp.png)
		6. Hit "Get the keys" in the top-right corner. In the drop-down menu that is opened, select "Production". This will be your Mashape API key for that application. Copy that and replace the "A mashape key" placeholder in the config with that key.
    - Twitch
        - This API is used with the `twitch` command. This will be the client ID the bot passes to Twitch when retrieving stream status.
			1. Go to the [Twitch Connections page](https://www.twitch.tv/settings/connections), scroll down to the bottom and click "Register new application".
			2. Fill in the fields. Name should be your app name, and set the Redirect URI to `http://localhost` unless you want something to function differently. Set the app type to "Chat Bot" as that's what you're basically doing here.
			![Twitch app](https://s4.postimg.org/gpvrfsebx/twitchapp.png)
			3. Click "Register". This will take you to the application management page. Down towards the bottom, there will be a section saying "Client ID".
			![Twitch app management](https://s22.postimg.org/tjz4qes69/twitchappmanage.png)
			4. Copy that character sequence and replace the "A twitch Client-ID" placeholder in the config with that ID.
    - Imgur
	    - This API is used in conjuction with the `randommeme` command to pull random memes from Imgur.
	    	1. Go to the [Imgur App Registration](https://api.imgur.com/oauth2/addclient).
	    	2. Fill in the application name you prefer to use. Set Authorization type to "Anonymous usage without user authentication" as no further auth will be needed for pulling memes.
	    	3. Fill in the email you fancy to receive notifications about this app in.
	    	4. Description... Well, anything you find useful there.
	    	5. You should end up with the below view.
	    	![Imgur app creation](http://i.imgur.com/cAAkBHl.png)
            6. Solve the CAPTCHA and hit "Submit" on the bottom of the page. This will take you to the page where you can see your client ID and secret.
            ![Imgur ID & secret](http://i.imgur.com/PUdSz6B.png)
            7. Copy the Client ID and replace the "A Imgur Client-ID" placeholder with that value.
    - Cleverbot
 	    - This API is used in conjuction with the `cleverbot` command to do cleverbot discussions.
 	    	1. Go to [cleverbot.io](https://cleverbot.io/keys) and login to get your API user and key.
 	    	2. After logging in, copy the contents of the "API User" and "API Key" fields and paste them into the appropriate fields in the config, API User to cleverbot_user and API Key to cleverbot_key.
			![Cleverbot Keys](http://i.imgur.com/Rn01Umh.png)

That's all, your config should now be ready to rock! Save it as `config.json` (**NOT** `config.example.json` as the bot will error if you do. TLDR: Don't hit Ctrl+S, hit Ctrl+Alt+S).

## Running the bot

Congratulations, your WildBeast instance should be ready to launch!

WildBeast has a system built in to create the required databases and tables for you without extra effort. To do this, open a command prompt in the bot folder (Shift + Right Click -> Open Command Window here) and execute this:

```bash
npm run-script dbcreate
```

The script will create the required databases. Wait for it to complete before continuing.

To start the bot after database creation, run the following command within the bot's folder:

```bash
node DougBot.js
```

If the bot runs without any errors, you have had success so far!

You can test simple functionality by running the `ping` command (With your desired prefix) in a text channel that the bot can see. If it answers "Pong!", then congratulations, *you have successfully set up WildBeast!*

Remember to keep the command window open, otherwise the bot will stop running! When you want to stop it, just close the command window.

**And that's it! You are now ready to start using your very own WildBeast instance!**

Keep in mind, if you have further questions or need help, we're around over at our official server! Link below.

On the behalf of the WildBeast team, *we hope you enjoy your bot!*
<p align="left">
  <a href="https://discord.gg/wildbot"><img src="https://discordapp.com/api/guilds/110462143152803840/widget.png?style=banner2" alt="Discord server"></a>
</p>
