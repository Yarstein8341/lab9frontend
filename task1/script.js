const openButton = document.getElementById("openBtn");
const modal = document.getElementById("myModal");
const closeButton = document.getElementById("closeBtn");

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
modal.addEventListener("click", outsideClick);

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

function outsideClick(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
}