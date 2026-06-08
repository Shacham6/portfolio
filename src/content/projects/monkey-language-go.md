---
title: "Monkey Programming Language in Go"
description: "Full implementation of the Monkey interpreter from Thorsten Ball's book — lexer, parser, evaluator, REPL and VM."
tags: ["golang", "compiler", "interpreter", "handmade"]
date: 2025-05-15 # TODO(AI): We'll have to fix the dates
featured: true
---

<a href="https://github.com/Shacham6/monkeylang" class="repo-link" target="_blank" rel="noopener">
  <svg viewBox="0 0 16 16" width="14" height="14"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
  github.com/Shacham6/monkeylang
</a>

**Thirteen months** building a programming language from **total scratch**. A huge project that included the development of:

- Lexer
- Pratt parser
- Tree-walking interpreter
- Bytecode compiler
- Stack-based VM
- And *even* a macro system!

This project is based on Thorsten Ball's "Writing an Interpreter in Go" and "Writing a Compiler in Go". Both execution engines (tree and VM) are available side by side.

```monkey
let my_map = {
    "one": fn(x) { x + 1 },
    "one1": fn() { puts("this is so cool") }
}

puts("This is my programming language")
let result_one = my_map["one"]("one")
my_map[result_one]()
```

```sh
> go run main.go -file myscript.monkey
This is my programming language
this is so cool
```

The macro system lets you write code that writes code:

```monkey
let unless = macro(condition, consequence, alternative) {
    quote(if (!(unquote(condition))) {
        unquote(consequence);
    } else {
        unquote(alternative);
    });
}

unless(10 > 5, puts("not greater"), puts("greater"));
```

