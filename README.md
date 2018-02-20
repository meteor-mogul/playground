# playground

## What

Meteor Mogul playground for testing packages.

## Why

For developing a meteor package you need a playground (i.e., empty app) to test it in.  Meteor allows you to develop your own package code in a packages directory.  Any code found in that local directory overrides a remote package.

## How

Get the empty playground app working:

```
$ git clone https://github.com/meteor-mogul/playground.git
$ cd playground
$ meteor npm install
$ meteor
```

Then you can develop packages in the local packages directory.

```
$ mkdir packages
$ cd packages
$ git clone <package repo>
```
