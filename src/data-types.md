# Data Types
Each value in Assert is a `signed 64-bit integer`.
Formally, we can say that Assert is a statically typed language.
But the language supports working with numbers as boolean variables.
I.e. the language **normalizes** (makes `0` or `1`) the result of logical operations.
For example:

```
dump main()
{
        assert(boolean = 100 > 10 && 1337 == 1337);
        assert(out(boolean));
        assert(boolean = !boolean);
        assert(out(boolean));
        return 0;
}
```

```console
$ ./boolean
1
0
```

## Overflow control
The language **does not** control overflow in any way.
