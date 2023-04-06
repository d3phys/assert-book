# C - Performance

## LLVM IR Compiler
It generates LLVM IR. You can run all possible optimizations that llvm supports.

## Legacy Compiler
Of course, there are *some* performance issues.
Let's compare the performance of the C compiler and the Assert compiler using the factorial as an example.

```
#include <stdio.h>
#include <stdint.h>

int64_t factorial(int64_t x)
{
        if (x <= 1)
                return 1;
                
        return x * factorial(x - 1);
}

int main()
{
        printf("%ld", factorial(20));
        for (size_t i = 100000000; i > 0; i--)
                factorial(20);
        
        return 0;
}
```

```console
$ g++ -o factorial_O0 -O0 factorial.cpp
$ g++ -o factorial_O1 -O1 factorial.cpp
```

Study the Assert code here:
```
dump factorial(x) {
        if (x <= 0)
                return 1;

        return x * factorial(x - 1);
}

dump main() {
        assert(x = 100000000);
        assert(out(factorial(20)));
        while (x > 0) {
                assert(factorial(20));
                assert(x = x - 1);
        }
        
        return 0;
}
```


Here is the C code and compiler optimization flags below:

```console
$ ./tr factorial.ass factorial.tree
$ ./cum factorial.tree factorial.o
$ ld -o factorial factorial.o asslib.o /lib64/libc.so.6 -I/lib64/ld-linux-x86-64.so.2 
```

Linux [perf](https://perf.wiki.kernel.org/index.php/Main_Page) unility gives the following results:
```
 Performance counter stats for './factorial':

          5 843,50 msec task-clock:u              #    0,999 CPUs utilized          
                 0      context-switches:u        #    0,000 /sec                   
                 0      cpu-migrations:u          #    0,000 /sec                   
                55      page-faults:u             #    9,412 /sec                   
    26 042 804 818      cycles:u                  #    4,457 GHz                    
    55 400 158 492      instructions:u            #    2,13  insn per cycle         
     6 500 036 070      branches:u                #    1,112 G/sec                  
       184 308 574      branch-misses:u           #    2,84% of all branches        

       5,848005098 seconds time elapsed

       5,841837000 seconds user
       0,000000000 seconds sys

```

```
Performance counter stats for './factorial_O0':

          5 839,94 msec task-clock:u              #    0,999 CPUs utilized          
                 0      context-switches:u        #    0,000 /sec                   
                 0      cpu-migrations:u          #    0,000 /sec                   
               114      page-faults:u             #   19,521 /sec                   
    26 115 713 798      cycles:u                  #    4,472 GHz                    
    26 203 004 347      instructions:u            #    1,00  insn per cycle         
     6 200 471 267      branches:u                #    1,062 G/sec                  
       220 171 781      branch-misses:u           #    3,55% of all branches        

       5,846114561 seconds time elapsed

       5,835352000 seconds user
       0,003325000 seconds sys
```

```
 Performance counter stats for './factorial_O1':

          4 124,80 msec task-clock:u              #    1,000 CPUs utilized          
                 0      context-switches:u        #    0,000 /sec                   
                 0      cpu-migrations:u          #    0,000 /sec                   
               113      page-faults:u             #   27,395 /sec                   
    18 127 811 023      cycles:u                  #    4,395 GHz                    
    19 803 003 158      instructions:u            #    1,09  insn per cycle         
     6 100 470 116      branches:u                #    1,479 G/sec                  
       400 124 522      branch-misses:u           #    6,56% of all branches        

       4,125413963 seconds time elapsed

       4,123597000 seconds user
       0,000000000 seconds sys
```

Performance is generally a complex thing. But we can conclude 
that the compiler generates code comparable to the `-O0` `g++` option.
