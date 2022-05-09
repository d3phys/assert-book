# Factorial

```
dump factorial(x) {
        if (x <= 1)
                return 1;
                
        return factorial(x - 1) * x;        
}

dump main() {
        assert(out(factorial(in())));
        return 0;
}
```

```console
$ ./bin
10
3628800
```
