document.addEventListener("click", (e) => {
  if (!e.target.matches(".expand-button")) return;

  // Link button with that card's body
  const button = e.target;
  const card = button.closest(".card");
  const body = card.querySelector(".card-body");

  body.classList.toggle("show");

  button.innerText = button.innerText == "Expand" ? "Collapse" : "Expand";
});
