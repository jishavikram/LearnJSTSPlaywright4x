# JavaScript Arrays – `map()` and `filter()`

In JavaScript, `map()` and `filter()` are built-in Array methods used to process array elements without modifying the original array.

The main difference is:

- **`map()`** → Transforms every element in an array.
- **`filter()`** → Selects only the elements that satisfy a condition.

---

## `map()`

The `map()` method creates a new array by applying a function to every element of the original array. It always returns a new array with the same number of elements as the original array.

**Example:**

```javascript
let scores = [45, 82, 91, 60, 73];
```

### Using `map()` – Convert Scores into Grades

```javascript
let grades = scores.map(item_score => item_score > 70 ? "Pass" : "Fail");
console.log(grades);
```

### How does it work?

The `map()` method takes each score and checks this condition:

```javascript
item_score > 70 ? "Pass" : "Fail"
```

This is a **ternary operator**, which is a shorter way of writing an `if...else` statement.

- If score is greater than 70 → `"Pass"`
- Otherwise → `"Fail"`

**Output:**

```javascript
["Fail", "Pass", "Pass", "Fail", "Pass"]
```

---

## `filter()`

The `filter()` method creates a new array containing only the elements that satisfy a given condition.

If the condition returns `true`, the element is included. Otherwise, it is excluded.

**Example:**

```javascript
let passing = scores.filter(s => s >= 70);
console.log(passing);
```

### How does it work?

Here, `s` represents each score in the array. The condition is `s >= 70`. It checks whether the score is greater than or equal to 70.

**Output:**

```javascript
[82, 91, 73]
```

The `filter()` method returns only the scores that meet the condition.

---

## Summary

`map()` transforms every element, whereas `filter()` selects elements based on a condition. Both return new arrays without modifying the original array.
