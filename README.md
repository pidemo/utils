# utils

Scripts to be reused accross multiple projects

## split.js

This script splits a comma-separated string into multiple `div` elements.

### How it works

1.  It selects all elements that have the `data-split` attribute.
2.  The script takes the text content of these elements and splits it into an array based on commas.
3.  For each item in the array, it creates a new `div` element.
4.  The classes from the original element are copied to each new `div`.
5.  These new `div`s are appended to the closest parent element with the class `.split-wrapper`.
6.  The original element with the `data-split` attribute is removed from the DOM.

### Usage

To use this script, you need to structure your HTML in a specific way. The text string you want to split should have a `data-split` attribute (no values needed), and this element should be wrapped in a `div` with the class `.split-wrapper`.

**Example:**

```html
<div class="split-wrapper">
  <div class="tag" data-split>Apple, Banana, Orange</div>
</div>
```

After the script runs, the HTML will be transformed into:

```html
<div class="split-wrapper">
  <div class="tag">Apple</div>
  <div class="tag">Banana</div>
  <div class="tag">Orange</div>
</div>
```
