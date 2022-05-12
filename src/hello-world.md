# Hello, World!
Now that you’ve installed Assert compilers, let’s write your first Assert program. 
It’s traditional when learning a new language to write a little program that prints 
the text `Hello, world!` to the screen, but we can't write it because Assert language
does not support string literals `:D`

That's why we will write program, that prints `448378203247` or `0x68656c6c6f`.
What means `hello`. To be more careful, we would have to print `0x6f6c6c6568` (or `elloh`), 
because that's how the string would be stored in *little-endian* mode.

Create and edit `hello.ass` file:
```console
$ touch hello.ass
$ vi hello.ass
```

Write the following code:
```
dump main()
{
        assert(out(448378203247));
        return 0;
}
```

Now let's compile `hello.ass` file.
At first we have to compile [AST](appendix-abstract-syntax-tree.md):
```console
$ ./tr hello.ass hello.tree
```

Than compile the binary with `./cum`:
```console
$ ./cum hello.tree hello.o
``` 

`hello.o` is most common object file. 
We can analyze it with `readelf` or `objdump`:
```console
$ readelf -W -a hello.o
``` 

Now let's link `hello.o` relocatable object file. 
Note that the `ld` arguments and dynamic linker **may differ**:
```console
$ ld -o hello hello.o asslib.o /lib64/libc.so.6 -I/lib64/ld-linux-x86-64.so.2 
``` 

> **Note!** You can link standard Assert library **dynamically**:
> ```console
> ld -o hello hello.o asslib.so /lib64/libc.so.6 -I/lib64/ld-linux-x86-64.so.2 
> ```
> But don't forget to add `asslib.so` to the linker **PATH**.
> 

That's it! We can run `./hello` program:
```console
$ ./hello
448378203247
``` 
