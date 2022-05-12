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
## Arrays
Assert **supports** arrays. It uses a simple and clear syntax.
You can't *declare* array. But you can access any element of it like this:
```
assert(arr[10] = 101);
```

If you are accessing an element **for the first time**, the compiler 
will allocate minimum possible memory in the *stack frame* or in the *bss section* (read [Scoping rules](scoping-rules.md)).
Study the example below:

```
assert(GLOBAL[12] = 0);
dump main()
{
        assert(local[3] = 1);
        return 0;
}
```

* `assert(GLOBAL[12] = 0);` creates **13-bytes** array and initializes **12th** element with 0.
* `assert(local[3] = 0);` creates **4-bytes** array and initializes **3rd** element with 0.

## Overflow control
The language **does not** control overflow in any way.
