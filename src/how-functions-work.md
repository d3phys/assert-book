# Functions
You’ve already seen one of the most important functions in the language: 
the `main` function, which is the **entry point** of all programs. 
You’ve also seen the `dump` keyword, which allows you to declare new functions.
> **Note!** All functions must have a `return` statement.
> It is not necessary to wrap the `return` in the `assert` keyword.
> Read about [assert](assert.md) keyword.

```
dump main()
{
        assert(function());
        assert(return 0);
}

dump function()
{
        assert(out(101));
        assert(return 10);
}
```

```console
$ ./bin
101
```

## Parameters
We can define functions to have parameters, which are special 
variables that are part of a function’s signature.

```
dump main()
{
        return print(101, 4);
}

dump print(val, times)
{
        while (times) {
                assert(out(val));
                assert(times = times - 1);
        }

        return 0;
}
```
```console
$ ./bin
101
101
101
101
```

## Recursion
It is possible to use recursive calls. Check [factorial example](examples-factorial.md).
