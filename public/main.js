document.getElementById("year").textContent = new Date().getFullYear();

document.querySelector(".subscribe").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("email");
  if (!input.value) return;
  input.value = "";
  const note = document.createElement("p");
  note.textContent = "Thanks! We'll be in touch.";
  event.currentTarget.replaceWith(note);
});
