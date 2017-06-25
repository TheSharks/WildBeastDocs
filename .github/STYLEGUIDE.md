## Hi and good to see that you're interested in contributing to the WildBeast documentation!

This document will provide you a style guide to follow when writing. The general Markdown syntax is to be followed, but images that need to be centered are allowed to use the HMTL syntax. Additionally, markdownlint syntax should be followed.

## Headers

Documents do not contain a main header. The page name is specified in `mkdocs.yml` before compiling. This will act as the main header.
Section headers use the H2 size.
Sub-section headers use the H3 size.
Sub-section subheaders use the H4 size.

Example:

```bash
## Section header
### Sub header
#### Sub subheader
```

## Code blocks

Code blocks use need a language specification with the exception of this document that displays MD syntax. You can look up the language list [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code-and-syntax-highlighting).

**Note:** All console commands, be they Windows or Linux, use the `bash` language identifier.

## Tables

Tables are used to demonstrate multiple concepts. Column headers are separated by a line of dashes and symmetrical pipes. However, the value lines do not have to be symmetrical with the two above pipes, just spaced with one whitespace.

Example:

```
| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Value 1 | Longervalue 2 | Value 3 |
```

## Bulleted lists

Bulleted lists are indented with a tab, not multiple spaces. The bullet text is separated from the bullet with one whitespace.

Example:

```bash
- Bullet 1
    - Bullet 2
```

## Additional formatting

Our MkDocs theme also uses 4 extensions that allow for additional syntax to be passed in the markdown files. Those extensions are:

- [Admonition](http://squidfunk.github.io/mkdocs-material/extensions/admonition)
    - Adds differently colored and indicated intermissionary boxes to the files.
    - Identifier: `!!! boxtype`
    - Example: `!!! tip`
- [CodeHilite](http://squidfunk.github.io/mkdocs-material/extensions/codehilite)
    - Adds syntax highlighting for code blocks (Three-backtick).
    - Has no identifier, functions in the background and highlights full-size code blocks.
- [PyMdown.InlineHilite](http://squidfunk.github.io/mkdocs-material/extensions/pymdown/#inlinehilite)
    - Adds syntax highlighting for inline code blocks (One-backtick).
    - Identifier: `#!lang`
    - Example: `#!bash cd WildBeast`
- [PyMdown.Critic](http://squidfunk.github.io/mkdocs-material/extensions/pymdown/#critic)
    - Adds Critic formatting to the documentation pages. You can look up the syntax from the link above.

Hope this styleguide will prove useful. Good luck in writing!
