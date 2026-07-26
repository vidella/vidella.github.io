/*
  Replace the empty values with your public project URLs and email.
*/
const SITE_LINKS = {
  bag: "https://tipandtale.gumroad.com/l/scrunchie?layout=profile",
  willow: "https://askthewillow.netlify.app",
  chrome: "https://chromestudio.netlify.app",
  cellfie: "https://cellfie.netlify.app",
  email: "videllabeans@gmail.com",
};

const envelopeButton = document.querySelector("#envelopeButton");
const notePanel = document.querySelector("#notePanel");
const closeNote = document.querySelector("#closeNote");
const emailLink = document.querySelector("#emailLink");
const projectLinks = document.querySelectorAll("[data-link]");

function setNoteOpen(open) {
  notePanel.classList.toggle("is-open", open);
  notePanel.setAttribute("aria-hidden", String(!open));
  envelopeButton.setAttribute("aria-expanded", String(open));
  envelopeButton.setAttribute(
    "aria-label",
    open ? "Close Vidella's note" : "Open Vidella's note",
  );
}

envelopeButton.addEventListener("click", () => {
  setNoteOpen(!notePanel.classList.contains("is-open"));
});

closeNote.addEventListener("click", () => {
  setNoteOpen(false);
  envelopeButton.focus();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setNoteOpen(false);
});

projectLinks.forEach((link) => {
  const url = SITE_LINKS[link.dataset.link];

  if (url) {
    link.href = url;
    link.target = "_blank";
    link.rel = "noreferrer";
    return;
  }

  link.addEventListener("click", (event) => {
    event.preventDefault();
    window.alert("Add this project’s link in script.js first ♡");
  });
});

if (SITE_LINKS.email && SITE_LINKS.email !== "YOUR_EMAIL_HERE") {
  emailLink.href = `mailto:${SITE_LINKS.email}`;
}
