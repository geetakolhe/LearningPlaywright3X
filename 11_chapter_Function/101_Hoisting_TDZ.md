# Hoisting and TDZ (Temporal Dead Zone)

## 1. What is Hoisting?

Hoisting means JavaScript moves variable and function declarations to the top of their scope during the compilation phase.

But it does not mean values are available before initialization in all cases.

### Example with var
```javascript
console.log(name);   // undefined
var name = "Pramod";
console.log(name);   // Pramod
```

Why?
- `var name` is hoisted
- Memory is allocated
- It is initialized to `undefined`
- Later, the value is assigned as `"Pramod"`

---

## 2. `var` vs `let` vs `const`

### `var`
```javascript
console.log(a); // undefined
var a = 10;
console.log(a); // 10
```

- hoisted
- initialized with `undefined`
- can be accessed before declaration

### `let`
```javascript
console.log(b); // ReferenceError
let b = 20;
```

- hoisted
- but not initialized immediately
- it stays in the Temporal Dead Zone (TDZ)

### `const`
```javascript
console.log(c); // ReferenceError
const c = 30;
```

- same behavior as `let`
- must be initialized at declaration time

---

## 3. Temporal Dead Zone (TDZ)

The Temporal Dead Zone is the time between the start of the block and the actual declaration of a `let` or `const` variable.

During this period, JavaScript does not allow access to the variable.

```javascript
let userName = "Pramod";
console.log(userName); // Pramod
```

But this gives error:

```javascript
console.log(userName); // ReferenceError
let userName = "Pramod";
```

This happens because `userName` is hoisted but remains in TDZ until execution reaches the declaration line.

---

## 4. Important Rule

### Correct usage
```javascript
let name = "Pramod";
console.log(name); // Pramod
```

### Wrong usage
```javascript
console.log(name); // ReferenceError
let name = "Pramod";
```

---

## 5. Real-life understanding

Think of `let` like this:
- the variable exists in memory
- but it is not ready to use yet
- it becomes usable only after the declaration line is executed

`var` is different:
- it is created early
- assigned `undefined`
- so it can be used before its value is assigned

---

## 6. Quick Summary

- `var` → hoisted and initialized to `undefined`
- `let` → hoisted but in TDZ until declaration
- `const` → same as `let`, but must be initialized immediately

```javascript
var x = 5;    // works
let y = 6;    // works
const z = 7;  // works
```

---

## 7. Interview-friendly one-line answer

"Hoisting is the behavior where variable declarations are moved to the top of the scope, but `let` and `const` are kept in the Temporal Dead Zone until initialization, which causes a ReferenceError if accessed before declaration."

---

## 8. Practice Questions

```javascript
console.log(a);
var a = 10;
```

Output: `undefined`

```javascript
console.log(b);
let b = 20;
```

Output: `ReferenceError`

```javascript
const c = 30;
console.log(c);
```

Output: `30`

---

## 9. Final Note

Always prefer `let` and `const` over `var` in modern JavaScript because they are safer and avoid unexpected undefined behavior.
