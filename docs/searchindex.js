Object.assign(window.search, {"doc_urls":["title-page.html#assert-programming-language","introduction.html#introduction","getting-started.html#getting-started","installation.html#installation","hello-world.html#hello-world","common-programming-concepts.html#common-programming-concepts","assert.html#assert","data-types.html#data-types","how-functions-work.html#functions","comments.html#comments","control-flow.html#control-flow","appendix.html#appendix","examples-factorial.html#factorial","examples-quadratic-equation.html#quadratic-equation","appendix.html#appendix","appendix-grammar.html#a---keywords","appendix-abstract-syntax-tree.html#b---abstract-syntax-tree","appendix-performance.html#c---performance","appendix-supported-architectures.html#b---supported-architectures"],"index":{"documentStore":{"docInfo":{"0":{"body":2,"breadcrumbs":6,"title":3},"1":{"body":0,"breadcrumbs":2,"title":1},"10":{"body":0,"breadcrumbs":7,"title":2},"11":{"body":0,"breadcrumbs":2,"title":1},"12":{"body":0,"breadcrumbs":3,"title":1},"13":{"body":0,"breadcrumbs":5,"title":2},"14":{"body":0,"breadcrumbs":2,"title":1},"15":{"body":0,"breadcrumbs":3,"title":1},"16":{"body":0,"breadcrumbs":9,"title":4},"17":{"body":0,"breadcrumbs":5,"title":2},"18":{"body":0,"breadcrumbs":7,"title":3},"2":{"body":0,"breadcrumbs":4,"title":2},"3":{"body":0,"breadcrumbs":4,"title":1},"4":{"body":0,"breadcrumbs":6,"title":2},"5":{"body":26,"breadcrumbs":6,"title":3},"6":{"body":75,"breadcrumbs":5,"title":1},"7":{"body":0,"breadcrumbs":7,"title":2},"8":{"body":0,"breadcrumbs":5,"title":1},"9":{"body":0,"breadcrumbs":5,"title":1}},"docs":{"0":{"body":"by Denis Dedkov","breadcrumbs":"Assert Programming Language » Assert Programming Language","id":"0","title":"Assert Programming Language"},"1":{"body":"","breadcrumbs":"Introduction » Introduction","id":"1","title":"Introduction"},"10":{"body":"","breadcrumbs":"Common Programming Concepts » Control Flow » Control Flow","id":"10","title":"Control Flow"},"11":{"body":"","breadcrumbs":"Examples » Appendix","id":"11","title":"Appendix"},"12":{"body":"","breadcrumbs":"Examples » Factorial » Factorial","id":"12","title":"Factorial"},"13":{"body":"","breadcrumbs":"Examples » Quadratic Equation » Quadratic Equation","id":"13","title":"Quadratic Equation"},"14":{"body":"","breadcrumbs":"Appendix » Appendix","id":"14","title":"Appendix"},"15":{"body":"","breadcrumbs":"Appendix » A - Grammar » A - Keywords","id":"15","title":"A - Keywords"},"16":{"body":"","breadcrumbs":"Appendix » B - Abstract Syntax Tree » B - Abstract Syntax Tree","id":"16","title":"B - Abstract Syntax Tree"},"17":{"body":"","breadcrumbs":"Appendix » C - Performance » C - Performance","id":"17","title":"C - Performance"},"18":{"body":"","breadcrumbs":"Appendix » D - Supported Architectures » B - Supported Architectures","id":"18","title":"B - Supported Architectures"},"2":{"body":"","breadcrumbs":"Getting Started » Getting Started","id":"2","title":"Getting Started"},"3":{"body":"","breadcrumbs":"Getting Started » Installation » Installation","id":"3","title":"Installation"},"4":{"body":"","breadcrumbs":"Getting Started » Hello, World! » Hello, World!","id":"4","title":"Hello, World!"},"5":{"body":"Specifically, you’ll learn about variables, basic types, functions, comments, and control flow. These basics will give you a strong starting point. Assertion Failed! However, the Assert language has a distinctive feature - the keyword assert. Read about assert keyword .","breadcrumbs":"Common Programming Concepts » Common Programming Concepts","id":"5","title":"Common Programming Concepts"},"6":{"body":"Keyword assert is the best feature of the language. Each statement line must be wrapped in the assert() keyword. Otherwise, this line will simply not get into the AST without any notice . dump main()\n{ assert(x = 2); assert(x = x * 20); return x;\n} Let's study the example. Check the code below: dump main()\n{ x = 2; return 0;\n} After compilation it will look like this (again without any notice ): dump main()\n{ while (0) { x = 2; } return 0;\n} Why not just remove this code? The answer is simple: it's not so convenient. Study the code below: dump example() { if (x > 0) x = 10;\n} If we just remove x = 10; it will result in a compilation error. dump example() { if (x > 0)\n}","breadcrumbs":"Common Programming Concepts » Assert » Assert","id":"6","title":"Assert"},"7":{"body":"","breadcrumbs":"Common Programming Concepts » Data Types » Data Types","id":"7","title":"Data Types"},"8":{"body":"","breadcrumbs":"Common Programming Concepts » Functions » Functions","id":"8","title":"Functions"},"9":{"body":"","breadcrumbs":"Common Programming Concepts » Comments » Comments","id":"9","title":"Comments"}},"length":19,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{"df":1,"docs":{"6":{"tf":2.23606797749979}}},"1":{"0":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"2":{"0":{"df":1,"docs":{"6":{"tf":1.0}}},"df":1,"docs":{"6":{"tf":1.7320508075688772}}},"a":{"b":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"16":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":2,"docs":{"11":{"tf":1.0},"14":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"18":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"(":{"df":0,"docs":{},"x":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"df":3,"docs":{"0":{"tf":1.0},"5":{"tf":2.0},"6":{"tf":1.7320508075688772}}}}}},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}},"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":2,"docs":{"16":{"tf":1.0},"18":{"tf":1.0}},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"c":{"df":1,"docs":{"17":{"tf":1.0}},"h":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":2,"docs":{"5":{"tf":1.0},"9":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}},"n":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":2,"docs":{"10":{"tf":1.0},"5":{"tf":1.0}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"k":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":1,"docs":{"6":{"tf":2.23606797749979}}}}}},"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"13":{"tf":1.0}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}}}},"df":0,"docs":{}}},"f":{"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"12":{"tf":1.0}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}}}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":2,"docs":{"10":{"tf":1.0},"5":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":2,"docs":{"5":{"tf":1.0},"8":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"t":{"'":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":3,"docs":{"15":{"tf":1.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"g":{"df":3,"docs":{"0":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{},"t":{"'":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"17":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":2,"docs":{"0":{"tf":1.0},"5":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"q":{"df":0,"docs":{},"u":{"a":{"d":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"13":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}},"i":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.0},"5":{"tf":1.0}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"u":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"18":{"tf":1.0}}}}}}}},"y":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"x":{"df":1,"docs":{"16":{"tf":1.0}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"16":{"tf":1.0}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":2,"docs":{"5":{"tf":1.0},"7":{"tf":1.0}}}}}},"v":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}},"r":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"x":{"df":1,"docs":{"6":{"tf":2.8284271247461903}}},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"’":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}}},"breadcrumbs":{"root":{"0":{"df":1,"docs":{"6":{"tf":2.23606797749979}}},"1":{"0":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"2":{"0":{"df":1,"docs":{"6":{"tf":1.0}}},"df":1,"docs":{"6":{"tf":1.7320508075688772}}},"a":{"b":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"16":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":6,"docs":{"11":{"tf":1.4142135623730951},"14":{"tf":1.7320508075688772},"15":{"tf":1.0},"16":{"tf":1.0},"17":{"tf":1.0},"18":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"18":{"tf":1.7320508075688772}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"(":{"df":0,"docs":{},"x":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"df":3,"docs":{"0":{"tf":1.7320508075688772},"5":{"tf":2.0},"6":{"tf":2.23606797749979}}}}}},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}},"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":2,"docs":{"16":{"tf":1.7320508075688772},"18":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"c":{"df":1,"docs":{"17":{"tf":1.7320508075688772}},"h":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":2,"docs":{"5":{"tf":1.0},"9":{"tf":1.7320508075688772}}}}},"o":{"df":0,"docs":{},"n":{"df":6,"docs":{"10":{"tf":1.0},"5":{"tf":1.7320508075688772},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}},"n":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":6,"docs":{"10":{"tf":1.0},"5":{"tf":1.7320508075688772},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":2,"docs":{"10":{"tf":1.7320508075688772},"5":{"tf":1.0}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"7":{"tf":1.7320508075688772}}},"df":0,"docs":{}}},"df":1,"docs":{"18":{"tf":1.0}},"e":{"d":{"df":0,"docs":{},"k":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":1,"docs":{"6":{"tf":2.23606797749979}}}}}},"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"13":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":4,"docs":{"11":{"tf":1.0},"12":{"tf":1.0},"13":{"tf":1.0},"6":{"tf":1.7320508075688772}}}}}},"df":0,"docs":{}}},"f":{"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"12":{"tf":1.7320508075688772}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}}}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":2,"docs":{"10":{"tf":1.7320508075688772},"5":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":2,"docs":{"5":{"tf":1.0},"8":{"tf":1.7320508075688772}}}}}}},"df":0,"docs":{}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":3,"docs":{"2":{"tf":1.7320508075688772},"3":{"tf":1.0},"4":{"tf":1.0}}}},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}}},"r":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"15":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"t":{"'":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":3,"docs":{"15":{"tf":1.4142135623730951},"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"g":{"df":3,"docs":{"0":{"tf":1.7320508075688772},"5":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{},"t":{"'":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"17":{"tf":1.7320508075688772}}}}}}}},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":7,"docs":{"0":{"tf":1.7320508075688772},"10":{"tf":1.0},"5":{"tf":1.7320508075688772},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"q":{"df":0,"docs":{},"u":{"a":{"d":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"13":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}},"i":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":4,"docs":{"2":{"tf":1.7320508075688772},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"u":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"18":{"tf":1.7320508075688772}}}}}}}},"y":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"x":{"df":1,"docs":{"16":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"16":{"tf":1.7320508075688772}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":2,"docs":{"5":{"tf":1.0},"7":{"tf":1.7320508075688772}}}}}},"v":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}},"df":0,"docs":{}}}},"r":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"x":{"df":1,"docs":{"6":{"tf":2.8284271247461903}}},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"’":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}}},"title":{"root":{"a":{"b":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"16":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":2,"docs":{"11":{"tf":1.0},"14":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"18":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"6":{"tf":1.0}}}}}}}},"b":{"df":2,"docs":{"16":{"tf":1.0},"18":{"tf":1.0}}},"c":{"df":1,"docs":{"17":{"tf":1.0}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"n":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"10":{"tf":1.0}}}}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"13":{"tf":1.0}}}},"df":0,"docs":{}}}},"f":{"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"12":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"10":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"8":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"15":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"17":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":2,"docs":{"0":{"tf":1.0},"5":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"q":{"df":0,"docs":{},"u":{"a":{"d":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"13":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"18":{"tf":1.0}}}}}}}},"y":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"x":{"df":1,"docs":{"16":{"tf":1.0}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"16":{"tf":1.0}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});