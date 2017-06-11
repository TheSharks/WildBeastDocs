# Compilation guide

This is a guide for installing the required dependencies to modify the WildBeast documentation and compile it for your pull request.

**Note:** Only Windows installation of these dependencies is supported as we assume you to be editing with this OS. If you are a Linux user, we suggest you lookup MkDocs usage on Linux somewhere.

## Initial setup

When you have cloned the repository, you need to install the dependencies before making modifications.

These dependencies will use Python to install, and your Python installation has to comply with requirements for the MkDocs documentation generator engine. If you haven't setup it on your system, follow [MkDocs' guide](http://www.mkdocs.org/#installing-python) to do so.

A file named `install_reqs.bat` is provided along with the repository. Run it when you have cloned the repo. It will install two packages: `mkdocs` (The docgen engine) and `mkdocs-material` (The theme we use). Optionally, you can install these dependencies manually with `pip`.
  
You are now ready to make your modifications.

----

## Editing

Before you start making changes to the documents, open a command window in the repository folder and run the command `mkdocs serve`. This will start the MkDocs test server.

When the test environment is running, you can open the URL `http://localhost:8000` in your browser to preview your changes. Every time you save a document, the page will automatically refresh and display changes. Perform constant quality control while writing, so nothing looks broken.

**Important note:** If you add any pages, you need to add the page name and document into `mkdocs.yml` under the Sitemap section or the page will not be added to the navbar. **New pages must always be added to the navbar!**

![New page](http://images.lwtechgaming.me/UA4NCfM.png)

We do not suggest making other changes to `mkdocs.yml` lest you mess something up. Additionally, the configuration should not be changed otherwise except by TheSharks staff.

## Making a pull request

When you have made the changes you want, you can shut down the MkDocs test server by hitting Ctrl+C in the command prompt. Then you can feel free to make your pull request.
