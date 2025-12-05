// Split a coma separated string into multiple elements:
// Text string should have an attribute of data-split, and be wrapped in a div with the class .split-wrapper

const items = document.querySelectorAll("[data-split]");

items.forEach((item) => {
  const wrapper = item.closest(".split-wrapper");
  const classes = item.classList;
  const split = item.textContent.split(",").map((item) => item.trim());
  split.forEach((item) => {
    const el = document.createElement("div");
    el.textContent = item;
    classes.forEach((className) => el.classList.add(className));
    wrapper.appendChild(el);
  });
  item.remove();
});
