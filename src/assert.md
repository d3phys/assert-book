# Assert
Keyword `assert` is the best feature of the language. 
Each statement line must be wrapped in the `assert()` keyword.
Otherwise, this line will simply not get into the [AST](appendix-abstract-syntax-tree.md) **without any notice**.

```
dump main()
{
        assert(x = 2);
        assert(x = x * 20);
        return x;
}
```

Let's study the example. Check the code below:

```
dump main()
{
        x = 2;
        return 0;
}
```

After compilation it will look like this (again **without any notice**):

```
dump main()
{
        while (0) {
                x = 2;
        }
        
        return 0;
}
```

> #### Why not just remove this code?
> The answer is simple: it's not so convenient.
> Study the code below: 
> ```
> dump example() {
>       if (x > 0)
>               x = 10;
> }
> ```
> If we just remove `x = 10;` it will result in a compilation error.
> ```
> dump example() {
>       if (x > 0)
> }
> ```
