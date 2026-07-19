# JavaScript Keywords

**Definition:** Keywords are reserved words in JavaScript that have special meaning to the language. They cannot be used as variable names, function names, or identifiers in your code.

---

## Comparison Table — Keyword Categories in JavaScript

| Category | Keywords | Purpose | Example |
|---|---|---|---|
| **Variable Declaration** | `var`, `let`, `const` | Declare variables with different scoping rules | `let x = 5;` |
| **Control Flow (Conditionals)** | `if`, `else`, `switch`, `case`, `default` | Execute code conditionally | `if (x > 0) { ... }` |
| **Looping** | `for`, `while`, `do`, `continue`, `break` | Repeat blocks of code | `for (let i = 0; i < 5; i++)` |
| **Function & Class** | `function`, `return`, `class`, `extends`, `super`, `new`, `this` | Define objects, classes, and their behavior | `class Dog extends Animal {}` |
| **Error Handling** | `try`, `catch`, `finally`, `throw` | Handle runtime errors gracefully | `try { risky(); } catch (e) {}` |
| **Boolean & Null Literals** | `true`, `false`, `null` | Represent truth values and empty/non-existent value | `let flag = true;` |
| **Operators / Checks** | `typeof`, `instanceof`, `in`, `delete`, `void` | Type checking, property checking, or deletion | `typeof x === "string"` |
| **Module System (ES6+)** | `import`, `export`, `default`, `from`, `as` | Split code across files | `export default class App {}` |
| **Async / Generators** | `async`, `await`, `yield`, `of` | Handle promises and generators | `await fetch(url)` |
| **Strict Mode Reserved** | `implements`, `interface`, `package`, `private`, `protected`, `public`, `static` | Reserved for future use in strict mode | `static count = 0;` (now actually used) |
| **Debugging** | `debugger` | Invokes breakpoint in dev tools | `debugger;` |
| **Special Identifiers** | `arguments`, `undefined`, `NaN`, `Infinity`, `this` | Built-in values available globally | `arguments.length` |
| **Deprecated / Avoid** | `with` | Extends scope chain (not recommended) | Avoid using |

---

## How Keywords Flow in JS Execution

```
Source Code (you write keywords)
        │
        ▼
   Lexical Analysis (Tokenization)
        │
        ▼
   Parser checks: Is this a valid keyword in this position?
        │  e.g., `const x = 5;` ✓ valid
        │  e.g., `const = 5;`   ✗ SyntaxError
        │
        ▼
   AST (Abstract Syntax Tree) — keyword becomes a node type
        │
        ▼
   V8 Ignition → Bytecode → V8 TurboFan → Machine Code
        │
        ▼
   Output: The behavior the keyword encodes (loop, assign, branch, etc.)
```

## Key Takeaways

1. **Keywords are reserved** — you cannot use them as variable/function names (`var`, `if`, `return`, etc.).
2. **`var`, `let`, `const`** — All declare variables, but with different scoping (`var` = function-scoped, `let`/`const` = block-scoped).
3. **`async`/`await` and `yield`** — Added in ES6/ES8; they're technically contextual keywords (only reserved in certain contexts).
4. **`with` is deprecated** — Avoid it in modern JavaScript.
5. **Strict mode adds more reserved words** — `implements`, `interface`, `package`, `private`, `protected`, `public`, `static` are reserved in strict mode only.
6. **Special identifiers (`undefined`, `NaN`, `Infinity`)** — technically not keywords but globals; they can be shadowed (bad practice).
