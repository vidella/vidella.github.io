const widget = document.querySelector("#mailWidget");
const card = document.querySelector("#mailCard");
const later = document.querySelector("#later");
const emailLink = document.querySelector("#emailLink");

function setOpen(open) {
  widget.classList.toggle("is-open", open);
  widget.classList.toggle("is-jumping", !open);

  card.setAttribute("aria-expanded", String(open));
  card.setAttribute(
    "aria-label",
    open ? "Close Vidella's note" : "Open Vidella's note",
  );
}

// Start jumping as soon as the page loads
requestAnimationFrame(() => {
  widget.classList.add("is-jumping");
});

card.addEventListener("click", () => {
  setOpen(!widget.classList.contains("is-open"));
});

later.addEventListener("click", (event) => {
  event.stopPropagation();
  setOpen(false);
});

emailLink.addEventListener("click", (event) => {
  event.stopPropagation();
});

card.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    setOpen(!widget.classList.contains("is-open"));
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setOpen(false);
});
