# JavaScript: Keywords and Identifiers

## 1. Keywords

Keywords are reserved words that are part of the syntax in a programming language. You cannot use them as ordinary variable or function names.

For example:

```javascript
const a = 'hello';
```

Here, `const` is a keyword that declares `a` as a constant binding.

**Keywords cannot be used as ordinary identifiers.**

### Rules for Keywords (Reserved Words)

Keywords are predefined tokens that JavaScript uses to perform operations and define program structure.

- You cannot use reserved keywords as variable names.
- JavaScript is case-sensitive: `if` is a keyword, but `IF` is not the same keyword.
- Some words have special restrictions depending on context, so not every word that looks important is forbidden in every situation.

**Examples**

Valid:

```javascript
let userName = "Alex";
let score = 100;
```

Invalid:

```javascript
let if = 10;
let class = "LoginPage";
```

Examples of common keywords include:

`break`, `case`, `catch`, `class`, `const`, `continue`, `else`, `false`, `for`, `function`, `if`, `import`, `let`, `new`, `return`, `this`, `true`, `typeof`, `var`, and `while`.

---

## 2. Identifiers

Identifiers form the core vocabulary of your source code. They are names you create for variables, functions, classes, and other program elements.

**Example**

```javascript
let userName = "Alex";
const accountBalance = 5000;

function loginUser() {
    return true;
}

class LoginPage {
}
```

In this example:

- `userName` — variable identifier
- `accountBalance` — variable identifier
- `loginUser` — function identifier
- `LoginPage` — class identifier

### Rules for Identifiers

#### Rule 1: Must start with a letter, underscore, or dollar sign

Valid:

- `userName`
- `_count`
- `$price`

Invalid:

- `1user`
- `9count`

#### Rule 2: Can contain letters, digits, underscores, and dollar signs

Valid:

- `user1`
- `test_case`
- `$total`

Invalid:

- `user-name`
- `test case`
- `user@name`

#### Rule 3: Identifiers are case-sensitive

```javascript
let userName = "Alex";
let username = "Sam";
```

`userName` and `username` are two different identifiers because JavaScript is case-sensitive.

#### Rule 4: Cannot be a reserved keyword

Invalid:

```javascript
let let = 10;
```

Valid:

```javascript
let letCount = 10;
```

#### Rule 5: Spaces and hyphens are not allowed

Valid:

- `firstName`
- `first_name`

Invalid:

- `first name`
- `first-name`