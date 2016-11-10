This page will provide solutions for most common installation issues for WildBeast. **Please read this before asking questions in our Discord server!**

##Git issues

Q. `fatal: could not create work tree dir 'WildBeast': Permission denied`  

A. You're trying to install WildBeast in a location that requires administrative permissions on Windows. This can be circumvented by running Git Bash as admin or switching install directory.

Q. Git complains about that local changes would be overwritten by a merge and will not pull the repository.  

A. You have most likely made changes to files that the merge would overwrite and therefore it will not do it as it protects your work from being destroyed. Do `git reset --hard` in the bot's folder and try again. **Note:** This will discard your local changes!

##WildBeast issues

Q. I get an error saying "No config file found, make one using the example and restart WildBeast", what should I do?

A. You've likely misconfigured something. Verify that you've followed the syntax and filled it in properly.