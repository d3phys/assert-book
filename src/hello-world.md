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

Now you have to choose appropriate back-end compiler.

## Legacy Compiler
To use legacy compiler compile the binary with `./cum`:
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


## LLVM IR compiler
To use llvm compiler run the following command:
```console
$ ./cum-llvm hello.tree hello.ir
```

`hello.ir` is generated [LLVM IR](https://llvm.org/docs/LangRef.html). Possible output is listed below:
```console
$ cat hello.ir
; ModuleID = 'hello.ir'
source_filename = "hello.ir"

define void @__ass_globals_init() {
.entry:
  ret void
}

declare i64 @__ass_print(i64)

declare i64 @__ass_scan()

define i64 @main() {
.entry:
  %0 = call i64 @__ass_print(i64 448378203247)
  ret i64 0
}
```

Then you can compile it with [llc](https://llvm.org/docs/CommandGuide/llc.html):
```console
$ llc hello.ir -O2 -o hello.o
```

Next link `hello.o` with standard Assert libarary:
```console
$ gcc hello.o asslib-llvm.o -o hello
```

## Running program
That's it! We can run `./hello` program:
```console
$ ./hello
448378203247
``` 
