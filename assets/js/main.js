// For Button buy tickers
const buyBtns = document.querySelectorAll(".js-buy-ticker");
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");
const modalCloses = document.querySelectorAll(".js-modal-btn-close");

// Open the modal when the user clicks the buy-ticker button
for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", () => {
    modal.classList.add("open");
  });
}

// Close the modal when the user clicks on the close-btn
for (const modalClose of modalCloses) {
  modalClose.addEventListener("click", () => {
    modal.classList.remove("open");
  });
}

// Close the modal when the user clicks outside of the modal-container
modal.addEventListener("click", () => {
  modal.classList.remove("open");
});

modalContainer.addEventListener("click", (event) => {
  event.stopPropagation();
});
