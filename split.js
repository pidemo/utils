// Split a coma separated string into multiple elements:
// Text string should have an attribute of data-split, and be wrapped in a div with the class .split-wrapper

const items = document.querySelectorAll("[data-split]");

if (items.length > 0) {
  items.forEach((item) => {
    const wrapper = item.closest(".split-wrapper");
    if (!wrapper) return;
    const classes = item.classList;
    // Determine the separator: use the value of data-split if present, otherwise default to ","
    const separator = item.getAttribute("data-split") || ",";
    const split = item.textContent
      .split(separator)
      .map((piece) => piece.trim());
    split.forEach((piece) => {
      const el = document.createElement("div");
      el.textContent = piece;
      classes.forEach((className) => el.classList.add(className));
      wrapper.appendChild(el);
    });
    item.remove();
  });
}
