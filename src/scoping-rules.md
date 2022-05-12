# Scoping Rules

Assert scoping rules are pretty straight-forward:

> #### Global overrides local.

The main reason is that the Assert [AST](appendix-abstract-syntax-tree.md) **does not** support variable declarations.
Let's study the example below:
```
assert(GLOBAL = 228);
dump main()
{
        assert(out(GLOBAL));
        
        assert(GLOBAL = 1337);
        assert(out(GLOBAL));
        return 0;
}
```

```console
$ ./bin
228
1337
```

## Memory allocation
Assert compiler `./cum` allocates:

* **Local** variables in **stack frame**.
* **Global** variables in **bss** segment.

