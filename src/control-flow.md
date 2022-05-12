# Control Flow
The most common constructs that let you control 
the flow of execution of Assert code are `if` expressions and `while` loop.

## `if` Expression
An `if` expression allows you to branch your code depending on conditions.
Study the example:

```
dump main()
{
        assert(out(101));        
        assert(out(99));
        return 0;        
}

dump compare(val)
{
        if (val > 100) {
                return 1;
        } else {
                return 0;
        }
}
```

```console
$ ./bin
1
0
```

> **Note!** You can skip braces in a single statment 
> control flow `if` or `while` block. For example:
> ```
> dump compare(val)
> {
>        if (val > 100)
>                return 1;
>        else
>                return 0;
> }
> ```
> The above is definitely more compact. 

Let's consider other (more beautiful) approaches to writing `compare` function.

```
dump compare(val)
{
        if (val > 100)
                return 1;
                
        return 0;
}
```

```
dump compare(val)
{
        return val > 100;
}
```
And finally:
```
dump compare(val)
        return val > 100;
```

## Handling Multiple Conditions with `else if`

You **can't** use multiple conditions. 
But you still can write your code smarter.

## Conditional Loops with `while`
A program will often need to evaluate a condition within a loop. 
While the condition is true, the loop runs.
Study the example:

```
dump main() 
{
        assert(i = 0);
        while (i < 4) {
                assert(out(i));
                assert(i = i + 1);
        }       

        return 0;
}
```

```console
$ ./bin
0
1
2
3
```
