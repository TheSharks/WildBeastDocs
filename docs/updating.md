This is a short instruction on how to keep your WildBeast instance up to date.

##Updating the bot
When an update is made to the WildBeast source code, this becomes known as a Git [commit](https://github.com/SteamingMutt/WildBeast/commits/master). Smaller hotfixes and commits happen all the time which are then compiled into larger [releases](https://github.com/SteamingMutt/WildBeast/releases). These releases mark larger milestones within the bot's history, for instance 2.0.0 and 3.0.0 which represent major releases.
A couple notes:
 - Commits can be made at any rate, the commit names and descriptions (At least on the ones not made by Doug) will tell whether it's worth implementing this into your instance right away.
 - Releases (AKA minor releases) represent larger patches, and it is recommended to update the bot when these releases are made.
 - Major releases are breaking changes in the code. These are really major reworks that change the way the entire bot functions. Updating at these points is near to a must.

So, now that we have the update structure laid out, let's get to the gist of updating WildBeast. Updating this bot is fairly simple, regardless of system being used. **However, this requires you to have downloaded the bot via Git in order to work!**
When updating the bot, run the following command in CMD (Windows) or console (Linux) **with the working directory pointed to the WildBeast folder:**
```bash
git pull
```
This will retrieve the latest changes directly from GitHub.
**NOTE:** If you have made changes to the files, you might get an error saying that the local changes would be overwritten by the merge. In this case, you either have to manually insert changes into the code (By copying the changes from the commit, release or whatever) or discarding your local changes. If you go for the latter, you can do it with the following command:
```bash
git fetch --all && git reset --hard
```
##Updating the dependencies
Dependencies, or deps for short, are utilities that WildBeast relies on to work. These all come in form of Node packages which are kept in one big repository over at the [NPM website](https://www.npmjs.com).
The retrieving and installation of these packages has been largely automated due to the existence of `package.json`. This file specifies what to retrieve and update when the need arises. You can update the bot's dependencies at will, but doing so at regular intervals is recommended.
The regular thing for using administrative commands applies here as well: Sudo is recommended for updating these modules, for good measure.
To update the dependencies, execute the following command **with the working directory pointed to the WildBeast folder:**
```bash
npm install
```
This will install any updates to the NPM packages the bot uses.
##Final note
If the bot breaks and won't function as it should, **try updating the bot and the dependencies before coming to our Discord server with questions on fixing it.** If it stays borked after this, feel free to come and ask questions then.
####With these resources, your bot should be all fine as long as they are up to date!