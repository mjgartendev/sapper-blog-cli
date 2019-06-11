oclif-demo
==========

getting started demo of oclif

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
$ npm install -g oclif-demo
$ oclif-demo COMMAND
running command...
$ oclif-demo (-v|--version|version)
oclif-demo/0.0.0 win32-x64 node-v10.1.0
$ oclif-demo --help [COMMAND]
USAGE
  $ oclif-demo COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclif-demo add [FILE]`](#oclif-demo-add-file)
* [`oclif-demo hello [FILE]`](#oclif-demo-hello-file)
* [`oclif-demo help [COMMAND]`](#oclif-demo-help-command)

## `oclif-demo add [FILE]`

describe the command here

```
USAGE
  $ oclif-demo add [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src\commands\add.ts](https://github.com/mjgartendev/oclif-demo/blob/v0.0.0/src\commands\add.ts)_

## `oclif-demo hello [FILE]`

describe the command here

```
USAGE
  $ oclif-demo hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ oclif-demo hello
  hello world from ./src/hello.ts!
```

_See code: [src\commands\hello.ts](https://github.com/mjgartendev/oclif-demo/blob/v0.0.0/src\commands\hello.ts)_

## `oclif-demo help [COMMAND]`

display help for oclif-demo

```
USAGE
  $ oclif-demo help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src\commands\help.ts)_
<!-- commandsstop -->
