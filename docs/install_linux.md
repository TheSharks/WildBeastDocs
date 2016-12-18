Welcome to the installation guide for WildBeast on Linux! In this guide, we'll walk you through the installation and deployment process for the WildBeast bot.

##Prerequisites
- A Linux server
	-  Type: VPS is enough to run WB, dedicated is a bit overshooting unless you have something else running there as well.
	-  OS: Ubuntu LTS or latest, optionally Debian 8
	-  RAM: May work on 256 MB, 512MB is recommended. If you plan on having it on just a few servers. Scale up if necessary.
	-  Processor: Single core @ 2.60 GHz or higher will work just fine, as above.
	-  SSH access to the server.
- Programs
	- SSH client, i.e. [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html) or [BitVise](https://www.bitvise.com/ssh-client-download) for executing commands on the server
	- SFTP program, i.e. [FileZilla](https://filezilla-project.org/) or [WinSCP](https://winscp.net/eng/index.php) for quick editing and upload of files
	- A code editor, i.e. [Notepad++](https://notepad-plus-plus.org/) or [Atom](https://atom.io) or [Brackets](http://brackets.io/)

##Pre-setup
We highly recommend that you go through a basic Linux server setup before starting this, which includes adding a new user, disabling root login (If you feel so) and adding key authentication for logins. If you have no idea what we mean by this, see the [Digital Ocean guide for initial server setup](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-14-04). When this is complete, you can proceed to the next step.

##Installation
General note: During installation, some administrative tasks will be executed. For these to work (Especially installations), **you need to run these commands as sudo**! They might error if you don't.
Luckily, the process of executing as sudo isn't that complicated. Just put `sudo` ahead of every install command or other administrative equivalent.
You will be asked for a password when doing the command, that's all that really is added.
**Keep this in mind when setting up, so you don't waste our time with errors that stem from lacking permissions!**
While you may think running the following commands as the root user is easy, we advice against it due to the security risks involved when using such a powerful user, instead please use `sudo`.
##Installing Node
First off, we'll install Node.JS, the runtime WildBeast uses. The current 6.x.x version works fine.
```bash
sudo apt-get install -y curl
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y build-essential
```
After that is completed, you can check your Node version by executing the following:
```bash
node -v
```
The output should then be this or close to that.
```bash
v6.9.1
```
##Retrieving WildBeast
Now we'll retrieve the WildBeast files via Git. Install it with the following command:
```bash
sudo apt-get install -y git
```
When the install completes, the following set of commands will download the necessary files to run WildBeast and change into the newly created directory.
```bash
git clone https://github.com/TheSharks/WildBeast.git && cd WildBeast
```
If you mess something up during the installation process, you can delete the directory with `rm -d -f -r ~/WildBeast` and reclone the Git repo.
##Installing additional dependencies
Now it's time to install the rest of the dependencies for WildBeast.

Next, we will install FFMPEG. **This is a crucial step if you want to use music playback, so pay attention!**

 <details>
 <summary>**Commands to install FFMPEG on Ubuntu 14.04** (click here)</summary><p>
```bash
sudo add-apt-repository ppa:mc3man/trusty-media && sudo apt-get update && sudo apt-get install ffmpeg -y
```
  </p></details>
  
 <details>
 <summary>**Commands to install FFMPEG on Ubuntu 16.04** (click here)</summary><p>
```bash
sudo apt-get install -y ffmpeg
```
  </p></details>
  
  <details>
  <summary>**Commands to install FFMPEG on Debian 8** (click here)</summary><p>
Edit **/etc/apt/sources.list** from the terminal using vi or nano, this will require the use of `sudo`. Alternatively edit this file using SFTP with the methods described later in this guide.
Enable the non-free repo by finding and changing the following or similar line: 
```bash
deb http://mirror.us.leaseweb.net/debian/ jessie main
```
to look like this now: 
```bash
deb http://mirror.us.leaseweb.net/debian/ jessie main non-free
```
Enable the backports repo by adding this line at the bottom of the file: 
```bash
deb http://mirror.us.leaseweb.net/debian/ jessie-backports main contrib non-free
```
Now run the following commands to update the repo information and install FFMPEG
```bash
sudo apt-get update && sudo apt-get install -y ffmpeg
```
  </p></details>

Without changing workdir, we'll now install the Node modules required for usage in WildBeast. Execute the following:
```bash
npm install
```
This will likely take a while as it has a lot to retrieve. If you get warns (Yellow text) you can ignore them as long as the output resembles to the following.
```bash
WildBeast@4.0.0 /home/(yourhomedir)
+-- cleverbot-node@0.2.2
| +-- crypto@0.0.3
| `-- http@0.0.0
+-- discordie@0.8.1
...
```

##Installing RethinkDB and creating the DB
As of WildBeast version 4.0.0, RethinkDB is used to store server-specific data. This includes server owner, customize options and a whole bunch of other things.

**Important note before starting:** Do not fiddle with RethinkDB options or execute commands outside of the ones we tell you to unless you understand RethinkDB and can unbork it yourself. We will not start solving your database if you messed it up.

Run the following commands one at a time.

NOTE: The first command is **a single command**. If it takes up multiple lines here in the docs, that is due to physical screen size. **Make sure to paste it in as a whole!**

 <details>
 <summary>**Commands to install RethinkDB on Ubuntu** (click here)</summary><p>
```bash
source /etc/lsb-release && echo "deb http://download.rethinkdb.com/apt $DISTRIB_CODENAME main" | sudo tee /etc/apt/sources.list.d/rethinkdb.list
wget -qO- https://download.rethinkdb.com/apt/pubkey.gpg | sudo apt-key add -
sudo apt-get update
sudo apt-get install rethinkdb
```
  </p></details>
  
 <details>
 <summary>**Commands to install RethinkDB on Debian** (click here)</summary><p>
```bash
echo "deb http://download.rethinkdb.com/apt `lsb_release -cs` main" | sudo tee /etc/apt/sources.list.d/rethinkdb.list
wget -qO- https://download.rethinkdb.com/apt/pubkey.gpg | sudo apt-key add -
sudo apt-get update
sudo apt-get install rethinkdb
```
  </p></details>

When RethinkDB has installed, run the following command. Keep in mind if you restart your server you will need to run this again to start the database service:
```bash
rethinkdb --daemon
```
If RethinkDB runs without errors, you should be good to go.

##Configuration
##Setting up SFTP
Next we'll make a config file for WildBeast. Unless you love your command line and editing stuff that way, this is the step where we'd advise you to bring out FileZilla. Using this program, you can transfer files from and to the server. This speeds up the editing process.

Start up FileZilla and open the server manager by hitting Ctrl+S. Click "New Site" and name it whatever you prefer. Then fill in the server's IP address. By default, SFTP (SSH File Transfer Protocol) connections go to port 22.
In the dropdown menu below, select SFTP. **Using normal FTP will initiate [maximum borkdrive](https://cdn.discordapp.com/attachments/196995089858297857/209314092844974080/1468724776872.jpg) so don't use that.**
In the field below, you'll be setting the login method. Depending on the level of privacy or ease you want, you can select either *Normal* or *Ask for password*. Fill in your login details accordingly.

Unless you know what you are doing, **don't touch the rest of the tabs**. They are fine as they are.

Your site should be something like the example below.

![FileZilla site](https://s22.postimg.org/75w8ta65d/filezilla.png)
##Retrieving the example config
Connect to the server in FileZilla. You should now see the so-called remote site in FileZilla. Open the WildBeast directory. In here you can find a file named `config.example.json`.
Right click that file and select "Download". This will download the file to your computer for editing. On the left-hand side of the screen, you can see where the file was downloaded.
Find `config.example.json` on your PC and open it using Notepad++ or any other code editor. **Do not edit it with Windows Notepad, that will be a mess.**
##The config file
When opening the config file, you should have a file that looks like the [example config](https://github.com/TheSharks/WildBeast/blob/master/config.example.json) (The CSE is deprecated and likely to be removed, but the others are still needed)

We'll now walk you through the different sections in the config and what they do.
  
###Bot section
  
Property | Explanation | Notes
-------- | ----------- | -----
isbot | If an OAuth bot account should be used. | Recommended to be true due to [Discord bot rules](https://discordapp.com/developers/docs/topics/oauth2#bot-vs-user-accounts).
token | OAuth token for the bot. | Refer to the "Making the config" section.
email | Email for normal user account that the bot will use. | **DO NOT** input your personal login details here.
password | Password for the account mentioned above. | As above.
oauth | The OAuth URL for the bot. | Refer to the "Making the config" section.
  
###Database section
  
Property | Explanation | Notes
-------- | ----------- | -----
host | Points to WildBeast's database, localhost by default. | Don't modify unless you have a remote database set up.
port | Specifies which network port the RethinkDB server is running on. | As above. Default is 28015.
password | Password to RethinkDB user. | Admin account has no password by default. Don't set a password for the admin account unless you want to have to edit this.
user | RethinkDB user account to use for accessing the database. | Admin by default. Admin will have permission to all databases so it should stay like this.
  
###Settings section
  
Property | Explanation | Notes
-------- | ----------- | -----
prefix | The command prefix the bot will use. | Can be a special character like `/` etc.
autodeletemsg | Automatically delete music-related messages after a while. | The time for this is possible to configure. Boolean.
deleteTimeout | The amount of time after which to delete the messages. | Insert time in milliseconds, default 3000.
deleteTimeoutLong | Same as above, but for messages that have a longer timeout.  | For now only [this message](https://github.com/TheSharks/WildBeast/blob/master/runtime/internal/voice.js#L204) uses the long timeout. In milliseconds, default 6000.
maxvcslots | How many concurrent voice connections the bot can have until it won't join more. | Default limit is 10, depends on the beefyness of your system.
  
###Permissions section
  
Property | Explanation | Notes
-------- | ----------- | -----
master | The highest possible access level of 9. Full permissions. |  Only give this to yourself and maybe others you really trust.
level1, level2, level3 | Settable access levels that give users access to certain commands. | Default access levels can be found in [command reference](http://docs.thesharks.xyz/commands/).
Notice: By default, when WildBeast joins a server it will set the owner's access level to 5. This is to give them control over normal users.
  
###API keys section
  
Property | Explanation | Notes
-------- | ----------- | -----
imgflip | Your [imgflip](https://imgflip.com) login details. | Used in certain meme commands.
google | For retrieving data from YouTube. | Refer to the "Making the config" section.
mashape | For retrieving the Fortune Cow. | Refer to the "Making the config" section.
cse | Deprecated and not required, don't bother with this. | This will be removed at some point.
twitchId | For retrieving status of whether a user on Twitch is streaming or not. | Refer to the "Making the config" section.
  
##Making the config
- OAuth app
	1. We'll start off by creating an OAuth application in Discord's developer interface so that the bot can login.
		- Go to https://discordapp.com/developers/applications/me and create a new application.
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
		7. Hit "Get the keys" in the top-right corner. In the drop-down menu that is opened, select "Production". This will be your Mashape API key for that application. Copy that and replace the "A mashape key" placeholder in the config with that key.
    - CSE
    	- This option isn't required anymore and can safely be left alone. If you really want to get one you can, but it won't do anything and you'll have to do that yourself.
    - Twitch
        - This API is used with the `twitch` command. This will be the client ID the bot passes to Twitch when retrieving stream status.
			1. Go to the [Twitch Connections page](https://www.twitch.tv/settings/connections), scroll down to the bottom and click "Register new application".
			2. Fill in the fields. Name should be your app name, and set the Redirect URI to `http://localhost` unless you want something to function differently. Set the app type to "Chat Bot" as that's what you're basically doing here.
			![Twitch app](https://s4.postimg.org/gpvrfsebx/twitchapp.png)
			3. Click "Register". This will take you to the application management page. Down towards the bottom, there will be a section saying "Client ID".
			![Twitch app management](https://s22.postimg.org/tjz4qes69/twitchappmanage.png)
			4. Copy that character sequence and replace the "A twitch Client-ID" placeholder in the config with that ID.

That's all, your config should now be ready to rock! Save it as `config.json` (**NOT** `config.example.json` as the bot will error if you do. TLDR: Don't hit Ctrl+S, hit Ctrl+Alt+S) and upload it to the server via FileZilla.

##Running the bot
Congratulations, your WildBeast instance should be ready to launch!

WildBeast has a system built in to create the required databases and tables for you without extra effort. To do this, execute this:
```bash
npm run-script dbcreate
```
After this has finished, it will tell you if the necessary database and tables have been created or already existed. To test if you've done everything correctly, you can do a "test run" with the bot. This means not making it permanently available, just testing if any errors are spat out when running.

Run the following command within the bot's folder:
```bash
node DougBot.js
```

If the bot runs without any errors, you have had success so far!

You can test simple functionality by running the `ping` command (With your desired prefix) in a text channel that the bot can see. If it answers "Pong!", then congratulations, *you have successfully set up WildBeast!*

##RethinkDB Dashboard
**The following information is for those who need to access the RethinkDB web interface to create, delete or edit the database contents. This is for users that want maximum control and are familiar with database engines, so skip this if you don't meet those criteria.**

Should you need to access the RethinkDB dashboard remotely to create, delete or edit the information stored within.
You may create a tunnel using SSH to forward traffic from your browser to the server or run RethinkDB using the `--bind all` option with firewall rules to only allow your IP address to connect. This guide will not provide the required information to do this.

To create an SSH tunnel in PuTTY follow these steps.
Fill in the IP or FQDN in the "Host name (or IP address)" field or load an already saved profile by clicking on it once then the load button. Under the category box you will see `Connection`, go to SSH and click the `+` sign, under this go to `Tunnels`. `Source port` can be anything but this guide assumes 8080. `Destination` is `127.0.0.1:8080`, the radio buttons below are `Local` and `Auto`, it should look like the following [example image](http://i.imgur.com/NBIxQzh.png). Now you must click on the `Add` button then click Open to start the SSH session. You will be prompted for your server's username and password. Now open your favorite browser and go to `http://127.0.0.1:8080` and this should open the RethinkDB dashboard.


[RethinkDB Dashboard](http://i.imgur.com/OFSk91K.png)

##Background running WildBeast
With the current system that we described above, the bot will run until the SSH session is closed or an error occurs that ends the process. How can we combat this? The answer is: PM2!

PM2, short of Process Manager 2, is a Node app intended to run and manage multiple apps running on one account in a Linux environment, which enables more than one process running at a time.

Our official instance, namely WildBot uses PM2, so this resource is a good one to use!
##Installing PM2 and starting the bot
Before doing this, hit Ctrl+C (Close command) to shut down WildBeast if it's still running.

You can install PM2 by using the following command:
```bash
sudo npm install pm2 -g
```
When PM2 is installed, navigate to the WildBeast install directory (`cd ~/Wildbeast` if you are in the server root). Then execute the following command:
```bash
pm2 start DougBot.js
```
It should then start the process and return a small process table with DougBot.js listed. The bot should now be online in your server as well.

You can find out more about PM2 by typing `pm2` into the console.

###And that's it! You are now ready to start using your very own WildBeast instance!
Keep in mind, if you have further questions or need help, we're around over at our official server! Link below.

On the behalf of the WildBeast team, *we hope you enjoy your bot!*
<p align="left">
  <a href="https://discord.gg/0cFoiR5QVh5LZlQO"><img src="https://discordapp.com/api/guilds/110462143152803840/widget.png?style=banner2" alt="Discord server"></a>
</p>
