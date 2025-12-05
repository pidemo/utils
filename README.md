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

Steps to use this script:

1. Add the following script to the <head> of the Website:

```html
<script
  src="https://cdn.jsdelivr.net/gh/pidemo/utils@2c55bc5/split.min.js"
  type="text/javascript"
  defer
></script>
```

2. Add a `data-split` attribute to your text element with the string to split (no values needed for the attribute)

3. Add the classes that you'll want on each split text on the coma separated string. Those will be applied to each split item.

4. Wrap the coma separated string into a div with a class of `.split-wrapper`

**Example:**

```html
<div class="split-wrapper">
  <div class="tag other-combo-class" data-split>Apple, Banana, Orange</div>
</div>
```

After the script runs, the HTML will be transformed into:

```html
<div class="split-wrapper">
  <div class="tag other-combo-class">Apple</div>
  <div class="tag other-combo-class">Banana</div>
  <div class="tag other-combo-class">Orange</div>
</div>
```
