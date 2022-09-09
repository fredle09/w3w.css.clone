// For Button buy tickers
const buyBtns = document.querySelectorAll(".js-buy-ticker");
const modal = document.querySelector(".js-modal");
const modalCloses = document.querySelectorAll(".js-modal-btn-close");

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", () => {
    modal.classList.add("open");
  });

  for (const modalClose of modalCloses) {
    modalClose.addEventListener("click", () => {
      modal.classList.remove("open");
    });
  }
}
