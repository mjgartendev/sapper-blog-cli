sapper-blog-cli
==========

sapper blog management cli created with oclif

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-demo.svg)](https://npmjs.org/package/oclif-demo)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-demo.svg)](https://npmjs.org/package/oclif-demo)
[![License](https://img.shields.io/npm/l/oclif-demo.svg)](https://github.com/mjgartendev/oclif-demo/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g sapper-blog-cli
or
$ git clone https://github.com/mjgartendev/sapper-blog-cli.git
$ npm link

$ sapper-blog-cli COMMAND
running command...
$ sapper-blog-cli (-v|--version|version)
sapper-blog-cli/0.0.0 win32-x64 node-v10.1.0
$ sapper-blog-cli --help [COMMAND]
USAGE
  $ sapper-blog-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`sapper-blog-cli add NAME`](#sapper-blog-cli-add-name)
* [`sapper-blog-cli hello [FILE]`](#sapper-blog-cli-hello-file)
* [`sapper-blog-cli help [COMMAND]`](#sapper-blog-cli-help-command)

## `sapper-blog-cli add NAME`

add new md file in current directory

```
USAGE
  $ sapper-blog-cli add NAME

ARGUMENTS
  NAME  note name to add, .md can be omitted

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\add.ts](https://github.com/mjgartendev/sapper-blog-cli/blob/v0.0.0/src\commands\add.ts)_

## `sapper-blog-cli hello [FILE]`

describe the command here

```
USAGE
  $ sapper-blog-cli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ oclif-demo hello
  hello world from ./src/hello.ts!
```

_See code: [src\commands\hello.ts](https://github.com/mjgartendev/sapper-blog-cli/blob/v0.0.0/src\commands\hello.ts)_

## `sapper-blog-cli help [COMMAND]`

display help for sapper-blog-cli

```
USAGE
  $ sapper-blog-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src\commands\help.ts)_
<!-- commandsstop -->
