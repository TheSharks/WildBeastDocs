Welcome to the installation guide for WildBeast on Docker! In this guide, we'll walk you through the installation and deployment process for the WildBeast bot.
  
This guide allows for WildBeast to be installed on a Windows or Mac system. We will be instructing this on Windows, but if you're Mac savvy you should be able to do it yourself.
##Prerequisites
**Docker has very specific system requirements, be sure to check them out below before proceeding.**

- Windows
	- OS: 64 bit Windows 10 Pro, Enterprise or Education
		- **NOTE:** If you don't have one of these versions, you need to use Toolbox which we will not instruct the usage of
	- Specs wise you should be able to run this on anything else than a low-end laptop
	- Administrator access to the computer
- Mac
	- OS: OS X El Capitan 10.11 or newer macOS release
	- Model: 2010 or newer
	- The system must have Intel’s hardware support for MMU virtualization
	- Administrator access to the computer
- Programs
	- We will be installing programs that are directly related to the bot later on. They will not be listed here.
	- These programs are required pre-setup:
		- A code editor, i.e. [Notepad++](https://notepad-plus-plus.org/) or [Atom](https://atom.io) or [Brackets](http://brackets.io/)

##Preamble
Installing WildBeast on Docker is a suitable idea for someone that doesn't want to mess with the technical stuff a whole lot and just get it installed the easiest way possible. If this is your way, feel free to use this. If you want better control and modifiability, use the regular Windows installation guide!
##Downloading Docker Toolbox & Hyper-V
Go to [the Docker download site](https://www.docker.com/products/overview). Download the Windows version from the button you find by scrolling down. The installation is a one-click procedure, complete it.

Allow Docker to launch from the installer or launch it from the start menu. You will be greeted by this screen if Microsoft Hyper-V isn't enabled. **Before you press OK however, read up on the next section and prepare to do it** as the Hyper-V enabling will result in the computer being restarted which enables you to do the next steps at the same time

![Docker Hyper-V](http://i.imgur.com/Imhdo5c.png)

##Enabling BIOS features
**The following steps are heavily variable due to differences in BIOS systems. We will not provide specific assistance on doing this via our support, you need to Google and find out specifics yourself.**

Restart the computer and wait for the boot logo to come up. When it does, press the key specified in the lower-left corner of the screen to enter BIOS setup. You might have to Google around to find what key to press on your system to enter BIOS setup.

When you manage to open BIOS setup, look around for something like Device Options. Then make sure that tickboxes that resemble to "Data Execution Protection" and "Virtualization Technology" are ticked. Then save your changes and exit BIOS setup.

On the test system at TheSharks which we use for testing and as a base for these guides (HP Elitebook 840 G2), we went through the following procedure.

We hit F2 to enter BIOS setup, then looked up Device Options under the Advanced tab in the BIOS and ticked the two boxes specified above.

![BIOS 1](http://i.imgur.com/nS9wZgq.jpg)

![BIOS 2](http://i.imgur.com/9mGJSC1.jpg)

Then we hit Exit and saved the changes in the following dialog.

When the computer boots up next time, Docker will autostart when the system starts. You will get a system notification when it's ready to use. In the meantime, you can go to the [Windows guide](install_windows.md) and follow the guide on installing Git there if it's not installed on your system already.

##Retrieving WildBeast
When Docker announces it's ready to use, open Windows PowerShell. You can now retrieve the WildBeast repository. Type the following command into the terminal:
```bash
git clone https://github.com/TheSharks/WildBeast
```
When it completes, do `cd WildBeast` to get into the WildBeast folder. Then run the following command:
```bash
docker-compose up
```
The Docker composition will take a good while so go make yourself a coffee or something while waiting for it to complete. (Trust me, I went to the sauna while it crunched around and it was still going when I came back)

When it completes, the system might start attempting to connect to the Discord gateway. Hit Ctrl+C when this happens to stop it, because that is for later. You still need to configure the bot.

##Configuration
##Installing Kitematic
Check for the Docker icon in the taskbar, right click it and select "Open Kitematic". This will present you with an option to download Kitematic.

![Kitematic DL](http://i.imgur.com/3bydLyW.png)

Click Download. You will have a ZIP package downloaded. Extract the contents to the folder specified in the download window, per default `%ProgramFiles%\Docker\Kitematic`.

Right click on Docker again and select "Open Kinematic". You may get an error now. If that happens, just click "Use VirtualBox" in the error message. This will take you to the login screen for Docker Hub. If you don't already have an account, create one now.

After having logged in, you will see two containers on the left side of the screen, `wildbeast` and `wildbeast-rethink`.

![Containers](http://i.imgur.com/IbhxzsA.png)

##Configuring WildBeast in Kitematic
We'll now go over configuration in Kitematic. Click on `wildbeast` in the sidebar and browse over to the Settings tab in the right corner.

We'll now walk you through the different sections in the config and what they do. Settings on Docker are a bit different as their prefix tells what they relate to. They can be in a messy order, but configure them in the order explained later.
  
###BOT options
  
Option | Explanation | Notes
------ | ----------- | -----
isbot | If an OAuth bot account should be used. | Recommended to be true due to [Discord bot rules](https://discordapp.com/developers/docs/topics/oauth2#bot-vs-user-accounts).
token | OAuth token for the bot. | Refer to the "Editing the settings" section.
email | Email for normal user account that the bot will use. | **DO NOT** input your personal login details here.
password | Password for the account mentioned above. | As above.
oauth | The OAuth URL for the bot. | Refer to the "Editing the settings" section.
  
###DATABASE options
  
Option | Explanation | Notes
------ | ----------- | -----
host | Points to WildBeast's database, localhost by default. | Don't modify unless you have a remote database set up.
port | Specifies which network port the RethinkDB server is running on. | As above. Default is 28015.
password | Password to RethinkDB user. | Admin account has no password by default. Don't set a password for the admin account unless you want to have to edit this.
user | RethinkDB user account to use for accessing the database. | Admin by default. Admin will have permission to all databases so it should stay like this.
  
###SETTINGS options
  
Option | Explanation | Notes
------ | ----------- | -----
prefix | The command prefix the bot will use. | Can be a special character like `/` etc.
autodeletemsg | Automatically delete music-related messages after a while. | The time for this is possible to configure. Boolean.
deleteTimeout | The amount of time after which to delete the messages. | Insert time in milliseconds, default 3000.
deleteTimeoutLong | Same as above, but for messages that have a longer timeout.  | For now only [this message](https://github.com/TheSharks/WildBeast/blob/master/runtime/internal/voice.js#L204) uses the long timeout. In milliseconds, default 6000.
maxvcslots | How many concurrent voice connections the bot can have until it won't join more. | Default limit is 10, depends on the beefyness of your system.
  
###PERMISSIONS options
  
Option | Explanation | Notes
------ | ----------- | -----
master | The highest possible access level of 9. Full permissions. |  Only give this to yourself and maybe others you really trust.
level1, level2, level3 | Settable access levels that give users access to certain commands. | Default access levels can be found in [command reference](http://docs.thesharks.xyz/commands/).
Notice: By default, when WildBeast joins a server it will set the owner's access level to 5. This is to give them control over normal users.
  
###API_KEYS options
  
Option | Explanation | Notes
------ | ----------- | -----
imgflip | Your [imgflip](https://imgflip.com) login details. | Used in certain meme commands.
google | For retrieving data from YouTube. | Refer to the "Editing the settings" section.
mashape | For retrieving the Fortune Cow. | Refer to the "Editing the settings" section.
twitchId | For retrieving status of whether a user on Twitch is streaming or not. | Refer to the "Editing the settings" section.

##Editing the settings
When performing the tasks instructed here, remember that when it is completed you need to apply what you've done (Usually paste) in the settings. This means that the progress needs to be put into the **Value** field. **DO NOT modify the names of the environment variables in the Key section or add anything there!**

**NOTE:** There are some environment variables in the settings which aren't explained here. If you stumble upon them, **DO NOT modify them** unless told to by WildBeast staff! This can cause unexpected behavior to the bot and you'll have to fix it yourself.

With the danger zone clarified, let's proceed to configuration.

- OAuth app
	1. We'll start off by creating an OAuth application in Discord's developer interface so that the bot can login.
		- Go to https://discordapp.com/developers/applications/me and create a new application.
		- Name it whatever you prefer and give it a fancy picture. Fill in a description if you want to, then click "Create application".
		- Now you'll have a more full-fledged app page. Click "Add Bot User" and confirm to make it a bot.
		- Here you'll get a Client ID and a token. Reveal the token (**Not the secret**) and apply it to the `BOT_TOKEN` option.
	2. If you completed the step above and want to comply with Discord rules, skip `BOT_EMAIL` and `BOT_PASSWORD` as they will not be a thing if you don't modify the `BOT_ISBOT` option.
	3. Next we'll make an OAuth URL for the bot so it can be added to the server.
		- Just put this placeholder URL somewhere for now, *don't open it as it will not work*.
		`https://discordapp.com/oauth2/authorize?&client_id=CLIENTID&scope=bot&permissions=536345655`
		- Go back to the app page, and copy the Client ID.
		- Replace the `CLIENTID` placeholder in the URL above with the ID you just copied. You can open the URL to test that you did it right.
		- If the URL works as intended, apply it to the `BOT_OAUTH` option.
		- You can also open the URL and add your bot to the server at this point, so you don't forget it. It will have the permissions it wants precalculated due to the number after the `permissions` property. Just select your server from the dropdown list and add it. The bot won't do anything at this stage because we're not finished yet.
		- If you can't select your server, it might be that you lack Manage Server permissions.
- Prefix and other settings
	- Setting the command prefix isn't really [rocket science](http://takeb1nzyto.space). This can be any special character, for instance `/`, `?` and so forth. When you have decided what prefix you want, just apply it to the `SETTINGS_PREFIX` option.
	- You can also use multiple characters as a prefix, for instance `!!` and `++`.
	- Note that there is always a so-called global prefix: A mention. Saying `@BotName` in chat will function as a prefix as well. **This doesn't need to be specified in the options as it's always active.**
	- The rest of the `SETTINGS` options are straight forward. `SETTINGS_AUTODELETEMSG` can be true or false, the message deletion times (`SETTINGS_DELETE_TIMEOUT` and `SETTINGS_DELETE_TIMEOUT_LONG`)can be whatever you want in milliseconds and `SETTINGS_MAXVCSLOTS` is just a number.
- Permissions
	- This is a section that has a very interesting gimmick to it.
		- WildBeast has a command named `setlevel` which will set the level of a user. **However**, that is written into a server-specific config. Which means that if you set the level of someone to 2 in Server1, they will not be level 2 in Server2, for example.
		- The permissions fields here are so-called **global permissions**, and will apply unless a server-specific level is set.
		- Use this to add technicians and others who need permissions regardless of where the bot is.
    - You can specify user permissions by adding their IDs into the `PERMISSIONS_MASTER`, `PERMISSIONS_LEVEL1`, `PERMISSIONS_LEVEL2` and `PERMISSIONS_LEVEL3` options. Only the master option is mandatory.
    	- You can get the ID of a user by either "backlash mentioning" them, which means to say typing `\@User` in chat or by enabling Developer Mode (Personal Settings -> Appearance -> Enable Developer Mode) and right-clicking on someone, subsequently selecting Copy ID from the list and applying it to the option.
    	- Remember that when adding multiple user IDs, you need to separate them with commas. So do it like `id1,id2,id3` **without spaces**!
- API keys
	- General notice: Anything within these fields is sensitive and could do much harm if revealed to the public.
		- **Therefore it is imperative that you keep this to yourself.**
		- WildBeast maintainers will **NEVER** ask for your login details or API keys. Only show the options to trusted WildBeast maintainers with the `Staff` role in WildBot's Territory.
	- imgflip
		- The procedure for getting this isn't tricky. Just go to https://imgflip.com, create an account and input your username and password into the `API_KEYS_IMGFLIP_USERNAME` and `API_KEYS_IMGFLIP_PASSWORD` options.
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
    		7. Hit "What creditentials do I need?" and the page will generate a Google API key for you. Copy the API key and apply it to the `API_KEYS_GOOGLE` option.
    - Mashape
    	- This API is used with the `fortunecow` command.
		1. Go to [the Mashape site](https://market.mashape.com/login) and login as you prefer, GitHub login is supported.
		2. Navigate to the [Mashape APIs dashboard](https://market.mashape.com/dashboard) and add a new application. Name it as you wish.
		3. Once the app is created, click "Add API to your application" and search for `fortunecow`.
		4. Open the fortunecow API page and in one of the dropdowns on the left, change it to the application you just created and hit "Test Endpoint" on any you wish to test. Only one is required.
		5. This will add the API to your application. Navigate back to the dashboard and click on the app itself. It should now have an appearance that resembles to this.
		![Mashape App Page](https://s4.postimg.org/oounhvvj1/mashapeapp.png)
		7. Hit "Get the keys" in the top-right corner. In the drop-down menu that is opened, select "Production". This will be your Mashape API key for that application. Copy that and apply it to the `API_KEYS_MASHAPE` option.
    - Twitch
        - This API is used with the `twitch` command. This will be the client ID the bot passes to Twitch when retrieving stream status.
			1. Go to the [Twitch Connections page](https://www.twitch.tv/settings/connections), scroll down to the bottom and click "Register new application".
			2. Fill in the fields. Name should be your app name, and set the Redirect URI to `http://localhost` unless you want something to function differently. Set the app type to "Chat Bot" as that's what you're basically doing here.
			![Twitch app](https://s4.postimg.org/gpvrfsebx/twitchapp.png)
			3. Click "Register". This will take you to the application management page. Down towards the bottom, there will be a section saying "Client ID".
			![Twitch app management](https://s22.postimg.org/tjz4qes69/twitchappmanage.png)
			4. Copy that character sequence and apply it to the `API_KEYS_TWITCH` option.

When you're done configuring, hit Save below the environment variables.

![Save](http://i.imgur.com/WLBk1mt.png)

##Running the bot
Congratulations, your WildBeast instance should be ready to launch! When installing, all required database tables and other prerequisistes to run the bot were installed so you are good to go out of the box.

To start the bot, browse back to Kitematic. Click on `wildbeast-rethink` and hit Start in the top left corner. It is crucial to start it first as the database engine needs to be running before any actions are performed.

When `wildbeast-rethink` is running, browse to `wildbeast` and start it too. If the bot runs without any errors, you have had success so far!

You can test simple functionality by running the `ping` command (With your desired prefix) in a text channel that the bot can see. If it answers "Pong!", then congratulations, *you have successfully set up WildBeast on Docker!*

When you want to stop the bot, you can browse back to Kitematic and stop `wildbeast`, subsequently stop `wildbeast-rethink`. **Remember to do it in this order to not cause corruptions or other issues with the database!**

###And that's it! You are now ready to start using your very own WildBeast instance!
Keep in mind, if you have further questions or need help, we're around over at our official server! Link below.

On the behalf of the WildBeast team, *we hope you enjoy your bot!*
<p align="left">
  <a href="https://discord.gg/0cFoiR5QVh5LZlQO"><img src="https://discordapp.com/api/guilds/110462143152803840/widget.png?style=banner2" alt="Discord server"></a>
</p>