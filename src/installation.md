# Installation

The following steps install the latest stable version of the Assert compiler. 
I can't ensure that all the examples in the book that compile will 
continue to compile with newer compiler versions. The output might differ strongly 
between versions, because **I can change everything at any moment**.

> ## Command Line Notation
> In this chapter, we’ll show some commands used in the terminal. 
> Lines that you should enter in a terminal all start with `$`. 
> You don’t need to type in the `$` character; it indicates the start of each command. 
> Lines that don’t start with `$` typically show the output of the previous command. 

## Installing compilers on Linux

Clone the official Assert repository:
```console
$ git clone https://github.com/d3phys/assert-lang
$ cd assert-lang
```

Checkout `stable` branch:
```console
$ git checkout stable
```

Build sources:
```console
$ make
```

Now you have three applications in your current folder:
* `./tr`  - front-end **code** to **AST** compiler.
* `./cum` - back-end **AST** to **AMD x86-64** compiler. 
* `./rev` - front-end **AST** to **code** decompiler. 

Check [Hello, World!](hello-world.md) example to learn how to use them.

## Updating and Uninstalling

After you’ve installed Assert via git, **updating** to the latest version is easy. 
Pull the updates and run make again.
```console
$ git pull
$ make
```

To **uninstall** Assert remove assert-lang local repository from your PC:
```console
$ ls
... ... assert-lang ... ...
$ rm -R assert-lang
```
