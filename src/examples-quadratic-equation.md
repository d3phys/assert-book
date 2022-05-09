# Quadratic Equation

You can find the complete code in the Assert [examples](examples.md).
Here I will comment on some of the tricks that I used when writing the code.
Due to the fact that the language does not support real data types, I had to write
[integer square root](https://en.wikipedia.org/wiki/Integer_square_root) `sqrt` function.
```
dump sqrt(n) 
{
        if (n <= 0)
                return 0;
                
        assert(sol = -404);
        assert(x   =  n/2 || 1);

        while (x != sol && x != sol + 1) {
                assert(sol = x);
                assert(x = (x + n/x) / 2);
        }

        return sol;
}
```

