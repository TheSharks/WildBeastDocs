For you who are running the Windows 10 Creators Update, there is a certain negative thing that comes with this update that you may already have noticed. When you try to open a command prompt in a folder from the context menu, PowerShell has replaced the base CMD in Windows. Not even changing the setting is guaranteed to help. And our guide instructs using base CMD.
  
No worries though! We don't like this either and are hence instructing you how to revert this change. Or, well, work around it.

## Before you begin

**Very important notice:** What you're going to start messing with isn't a toy, it's serious business. The registry editor has a lot of power and can properly screw up your computer if you do this wrong. If tech isn't your strong suit, make sure to follow very carefully.

Also, if somebody else is using your computer or governing over it, perhaps ask them for permission to tweak the registry before you do this! You might give your systems administrator (Whomever it may be) gray hairs, a semi-severe heart attack and anxiety if you don't.

## First steps

Open the registry editor by pressing Win + R, typing `regedit` and hitting Enter.

As a good safety measure, before you start, export your registry settings somewhere so you can revert to a working config if and when things go haywire. Open the File menu, select Export and put them into a safe place.

You should be good to start hacking around in the registry now.

## Creating permission overrides

### Main context menu

Move to `HKEY_CLASSES_ROOT\Directory\shell\Powershell`. Then right-click the Powershell key in the bar to the left and select Permissions. In the window that opens, click Advanced which will open the permissions editor.

![Permissions 1](http://images.lwtechgaming.me/ozg74Ck.png)

![Permissions 2](http://images.lwtechgaming.me/8jS6VF6.png)

In the permissions editor, click Change at the top of the window in the Owner field. In the following window enter your current username in the text box, click Check Names and if it passes click OK.

Then tick "Replace owner on subcontainers and objects" after which hit OK to close the window.

Check the GIF below if you want to see how this should be done.

![Permissions GIF](http://images.lwtechgaming.me/topTnHl.gif)

