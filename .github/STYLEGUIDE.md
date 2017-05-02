# Hi and good to see that you're interested in contributing to the WildBeast documentation!

This document will provide you a style guide to follow when writing.

Documents do not contain a main header. The page name is specified in mkdocs.yml before compiling. This will act as the main header.

The general Markdown syntax is to be followed, but images that need to be centered are allowed to use the HMTL syntax. Additionally, markdownlint syntax should be followed.

## Headers

Section headers use the H2 size.
Sub-section headers use the H3 size.
There is no space after the header markers.

Example:

```bash
## Section header
### Sub header
```

## Code blocks

Code blocks use need a language specification with the exception of this document that displays MD syntax. You can look up the language list [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code-and-syntax-highlighting).

**Note:** All console commands, be they Windows or Linux, use the `bash` language identifier.

## Tables

Tables are used to demonstrate multiple concepts. They do not contain an opening or closing pipe. Column headers are separated by a line of dashes and symmetrical pipes.
However, the value lines do not have to be symmetrical with the two above pipes, just spaced with one whitespace.

Example:

```
Column 1 | Column 2 | Column 3
-------- | -------- | --------
Value 1 | Longervalue 2 | Value 3
```

## Bulleted lists

Bulleted lists are indented with a tab, not multiple spaces. The bullet text is separated from the bullet with one whitespace.

Example:

```bash
- Bullet 1
    - Bullet 2
```


Hope this styleguide will prove useful. Good luck in writing!
