# JavaScript String Methods - Complete Cheatsheet (SDET)

All outputs are verified on Node.js v22. Strings are immutable: every string method returns a new string.

```javascript
let s = "abc";
s[0] = "z";
console.log(s); // "abc" - silently unchanged
```

## 1. Length and Character Access

| Method | Purpose | Example | Result |
| --- | --- | --- | --- |
| `.length` | Character count (property, not a method) | `"Playwright".length` | `10` |
| `.charAt(i)` | Character at an index | `"Playwright".charAt(4)` | `"w"` |
| `[i]` | Character at an index | `"Playwright"[4]` | `"w"` |
| `.at(i)` | Character at an index; supports negative indexes | `"Playwright".at(-1)` | `"t"` |
| `.charCodeAt(i)` | UTF-16 code unit | `"A".charCodeAt(0)` | `65` |
| `.codePointAt(i)` | Full Unicode code point | `"😀".codePointAt(0)` | `128512` |

Out-of-range behavior differs:

```javascript
"abc".charAt(99); // ""
"abc".at(99);     // undefined
```

## 2. Searching

| Method | Returns | Example | Result |
| --- | --- | --- | --- |
| `.indexOf(sub, from?)` | First index, or `-1` if absent | `"Login Successful".indexOf("Success")` | `6` |
| `.lastIndexOf(sub, from?)` | Last index | `"a-b-a".lastIndexOf("a")` | `4` |
| `.includes(sub, pos?)` | `true` or `false` | `"Login Successful".includes("Login")` | `true` |
| `.startsWith(sub, pos?)` | `true` or `false` | `"https://qa.com".startsWith("https")` | `true` |
| `.endsWith(sub, len?)` | `true` or `false` | `"report.pdf".endsWith(".pdf")` | `true` |
| `.search(regex)` | Index of first regex match, or `-1` | `"Order #10245".search(/\d+/)` | `7` |
| `.match(regex)` | Array of matches, or `null` | `"Order #10245".match(/#(\d+)/)` | `["#10245", "10245"]` |
| `.matchAll(regex)` | Iterator of all matches; requires `/g` | `[...]` | All matches |

```javascript
[..."a1b2".matchAll(/([a-z])(\d)/g)].map(match => match[0]);
// ["a1", "b2"]
```

Important notes:

- String searches are case-sensitive. `"Login Successful".includes("login")` is `false`.
- `.match()` returns `null` when there is no match. Use `"abc".match(/\d/)?.[0]` when appropriate.
- With the global flag, `.match()` returns only full matches, not capture groups:

```javascript
"a1b2c3".match(/\d/g); // ["1", "2", "3"]
```

## 3. Extracting Substrings

| Method | Negative index | Swaps arguments | Example | Result |
| --- | --- | --- | --- | --- |
| `.slice(start, end?)` | Yes | No | `"JavaScript".slice(-6)` | `"Script"` |
| `.substring(start, end?)` | Clamps to `0` | Yes | `"JavaScript".substring(-6)` | `"JavaScript"` |
| `.substr(start, length)` | Yes | No | `"JavaScript".substr(4, 6)` | `"Script"` |

`.substr()` is deprecated. Use `.slice()` by default because its behavior is the most predictable.

```javascript
"JavaScript".slice(0, 4);      // "Java"
"JavaScript".slice(4, 0);      // ""
"JavaScript".substring(4, 0);  // "Java" - arguments are swapped
```

## 4. Splitting and Joining

```javascript
"a,b,c".split(",");             // ["a", "b", "c"]
"a,b,c".split(",", 2);          // ["a", "b"] - limit
"abc".split("");                // ["a", "b", "c"]
"abc".split();                  // ["abc"] - no separator
"a1b22c".split(/\d+/);          // ["a", "b", "c"]
"a1b2".split(/(\d)/);           // ["a", "1", "b", "2", ""]

[..."hey"];                     // ["h", "e", "y"]
Array.from("hey");              // ["h", "e", "y"]
["a", "b"].join(" | ");        // "a | b"
"abc".split("").reverse().join(""); // "cba"
```

For emoji, use the spread operator or `Array.from()` instead of `split("")`:

```javascript
"😀".split(""); // Breaks the surrogate pair
[..."😀"];       // ["😀"]
```

## 5. Case and Whitespace

| Method | Example | Result |
| --- | --- | --- |
| `.toUpperCase()` | `"qa".toUpperCase()` | `"QA"` |
| `.toLowerCase()` | `"QA".toLowerCase()` | `"qa"` |
| `.toLocaleUpperCase(locale)` | `"i".toLocaleUpperCase("tr-TR")` | `"İ"` |
| `.toLocaleLowerCase(locale)` | Locale-aware lowercase | Depends on locale |
| `.trim()` | `" QA ".trim()` | `"QA"` |
| `.trimStart()` | `" QA ".trimStart()` | `"QA "` |
| `.trimEnd()` | `" QA ".trimEnd()` | `" QA"` |

`trimLeft()` and `trimRight()` are legacy aliases. Prefer `trimStart()` and `trimEnd()`.

## 6. Padding, Repeating, and Concatenating

```javascript
"7".padStart(3, "0");       // "007"
"Name".padEnd(10, ".");    // "Name......"
"abcdef".padStart(3, "0");  // "abcdef" - no-op when already long enough
"ab".repeat(3);             // "ababab"
"ab".repeat(0);             // ""
"a".concat("b", "c");       // "abc"
```

The `+` operator is usually clearer for simple concatenation.

## 7. Replacing Text

| Method | Behavior | Example | Result |
| --- | --- | --- | --- |
| `.replace(string, new)` | Replaces the first occurrence | `"banana".replace("a", "X")` | `"bXnana"` |
| `.replace(/regex/g, new)` | Replaces all regex matches | `"banana".replace(/a/g, "X")` | `"bXnXnX"` |
| `.replaceAll(string, new)` | Replaces all occurrences | `"banana".replaceAll("a", "X")` | `"bXnXnX"` |

Replacement patterns:

```javascript
"abc".replace(/b/, "[$&]");
// "a[b]c" - $& means the whole match

"2026-07-25".replace(/(\d+)-(\d+)-(\d+)/, "$3/$2/$1");
// "25/07/2026"

"a1b2".replace(/\d/g, digit => digit * 2);
// "a2b4"
```

`.replaceAll()` with a regular expression requires the `g` flag or it throws a `TypeError`.

## 8. Comparing and Sorting

```javascript
"abc" === "abc"; // true
"a" < "b";       // true
"10" < "9";       // true - lexicographic, not numeric

["b", "a", "C"].sort();
// ["C", "a", "b"] - uppercase sorts first by code unit

["b", "a", "C"].sort((x, y) => x.localeCompare(y));
// ["a", "b", "C"]

"a".localeCompare("b"); // Negative: a comes before b
```

Natural numeric sorting is useful for IDs such as `item2` and `item10`:

```javascript
["item10", "item9"].sort((a, b) =>
	a.localeCompare(b, undefined, { numeric: true })
);
// ["item9", "item10"]

"ABC".localeCompare("abc", undefined, { sensitivity: "base" });
// 0 - case-insensitive equality
```

Use `.normalize("NFC")` before comparing text from different sources when visually identical accented characters may have different Unicode representations.

## 9. Template Literals

```javascript
const name = "Pramod";
const count = 3;

`User ${name} ran ${count} test${count > 1 ? "s" : ""}`;
// "User Pramod ran 3 tests"

`line1
line2`; // Multi-line string; preserves the newline
```

Tagged template example:

```javascript
function tag(strings, ...values) {
	return strings.raw.join("|") + " :: " + values.join(",");
}

tag`a${1}b${2}c`;
// "a|b|c :: 1,2"
```

## 10. Static Methods and Conversions

| Call | Purpose | Result |
| --- | --- | --- |
| `String.fromCharCode(72, 105)` | Code units to string | `"Hi"` |
| `String.fromCodePoint(128512)` | Code points to string | `"😀"` |
| `` String.raw`C:\new\test` `` | Ignore escape sequences | `"C:\\new\\test"` |
| `String(123)` | Convert any value to a string | `"123"` |
| `(255).toString(16)` | Number to base-N string | `"ff"` |

```javascript
Number("12");       // 12
Number("12px");     // NaN - strict
Number("");         // 0 - be careful
parseInt("12px", 10); // 12 - stops at the first invalid character
parseFloat("12.5px"); // 12.5
             
 +"42";              // 42 - unary plus; same conversion rules as Number()
"5" + 3;             // "53" - concatenation
"5" - 3;             // 2 - numeric conversion
```

Only the `+` operator is overloaded for both string concatenation and numeric addition.

## 11. Rarely Needed Methods

| Method | Note |
| --- | --- |
| `.isWellFormed()` | Returns `false` if the string has lone surrogates |
| `.toWellFormed()` | Replaces lone surrogates with `�` |
| `.normalize(form)` | Unicode normalization: `NFC`, `NFD`, `NFKC`, or `NFKD` |
| `.valueOf()` / `.toString()` | Returns the primitive string value |
| `.anchor()`, `.big()`, `.blink()`, `.bold()`, `.fixed()`, `.fontcolor()`, `.fontsize()`, `.italics()`, `.link()`, `.small()`, `.strike()`, `.sub()`, `.sup()` | Legacy HTML wrappers; do not use |

## 12. SDET Recipes

### Normalize UI text before asserting

```javascript
const normalize = value => value.replace(/\s+/g, " ").trim().toLowerCase();

normalize("  LOGIN   Successful\n");
// "login successful"
```

### Convert currency text to a number

```javascript
const money = value => parseFloat(value.replace(/[^0-9.]/g, ""));

money("₹1,299.50"); // 1299.5
```

### Extract an ID from a URL

```javascript
"https://shop.com/order/10245?ref=x".match(/\/order\/(\d+)/)[1];
// "10245"
```

### Extract the first number from a label

```javascript
"Order #10245".match(/\d+/)[0]; // "10245"
```

### Validate a format

```javascript
/^\d{4}-\d{2}-\d{2}$/.test("2026-07-25"); // true
```

### Mask sensitive test data in logs

```javascript
const mask = value =>
	value.slice(0, 2) + "*".repeat(Math.max(0, value.length - 4)) + value.slice(-2);

mask("4111111111111111"); // "41************11"
```

### Create a slug for screenshots or test artifacts

```javascript
const slug = value =>
	value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

slug("  Add to Cart! Test #3 "); // "add-to-cart-test-3"
```

### Truncate long failure messages

```javascript
const truncate = (value, length) =>
	value.length > length ? value.slice(0, length - 1) + "..." : value;

truncate("Element not visible on page", 15); // "Element not vi..."
```

### Clean a CSV-like row

```javascript
"a, b ,c".split(",").map(value => value.trim());
// ["a", "b", "c"]
```

### Count occurrences

```javascript
("a-b-a-c".match(/a/g) || []).length; // 2
```

### Convert text to title case

```javascript
"login page".replace(/\b\w/g, character => character.toUpperCase());
// "Login Page"
```

## Gotcha Summary

| Trap | Reality |
| --- | --- |
| `s[0] = "z"` | Silently does nothing; strings are immutable |
| `.replace("a", "X")` | Replaces only the first match; use `.replaceAll()` or `/g` |
| `.includes("Login")` | Case-sensitive |
| `"JavaScript".substring(-6)` | Clamps to `0`; use `.slice(-6)` for negative indexes |
| `"10" < "9"` | `true`; this is string comparison, not numeric comparison |
| `["b", "a", "C"].sort()` | Uppercase sorts first; use `localeCompare()` when needed |
| `.match(/x/)` with no match | Returns `null`, not `[]` |
| `Number("12px")` | Returns `NaN`; use `parseInt()` when appropriate |
| `Number("")` | Returns `0`, not `NaN` |
| `"5" + 3` | Returns `"53"`; other arithmetic operators coerce to numbers |
| `split("")` on emoji | Can split a surrogate pair; use `[...string]` |
| `.charAt(99)` vs `.at(99)` | Returns `""` vs `undefined` |

All snippets in this cheatsheet target modern JavaScript and were verified against Node.js v22.
