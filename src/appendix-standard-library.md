# F - Standard Library

Assert Standard Library (or **asslib**) is an interface between 
an abstract Assert language and an operating system.
With its help, the execution of some [keywords](appendix-keywords.md) is implemented.

If you dump a compiled file, you can see standard names in the 
ELF-symtab section (6-7 in the output below):
```console
$ readelf -s compiled.o

Symbol table '.symtab' contains 9 entries:
   Num:    Value          Size Type    Bind   Vis      Ndx Name
     0: 0000000000000000     0 NOTYPE  LOCAL  DEFAULT  UND 
     1: 0000000000000000     0 FILE    LOCAL  DEFAULT  ABS hello.o
     2: 0000000000000000     0 SECTION LOCAL  DEFAULT    1 .text
     3: 0000000000000000     0 SECTION LOCAL  DEFAULT    2 .rodata
     4: 0000000000000000     0 SECTION LOCAL  DEFAULT    3 .data
     5: 0000000000000000     0 SECTION LOCAL  DEFAULT    4 .bss
     6: 0000000000000000     0 NOTYPE  GLOBAL DEFAULT  UND __ass_print
     7: 0000000000000000     0 NOTYPE  GLOBAL DEFAULT  UND __ass_scan
     8: 0000000000000038     0 NOTYPE  GLOBAL DEFAULT    1 _start
```

## Sources
You can find the source code in the official Assert repository:

* [asslib.s](https://github.com/d3phys/assert-lang/blob/master/asslib.s) - standard library implementation for legacy backend
* [asslib-llvm.c](https://github.com/d3phys/assert-lang/blob/master/asslib-llvm.c) - standard library implementation for llvm backend
* [STDLIB](https://github.com/d3phys/assert-lang/blob/master/STDLIB)   - ELF64 configuration file.

