function openModal() {
  document.getElementById("modal").classList.add("active");
}

function closeModal() {
  document.getElementById("modal").classList.remove("active");
}

document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target.id === "modal") {
    closeModal();
  }
});

function openModal2() {
  document.getElementById("modal2").classList.add("active");
}

function closeModal2() {
  document.getElementById("modal2").classList.remove("active");
}

document.getElementById("modal2").addEventListener("click", (e) => {
  if (e.target.id === "modal2") {
    closeModal();
  }
});