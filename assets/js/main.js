// For Button buy tickers
const buyBtns = document.querySelectorAll(".js-buy-ticker");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-modal-close");

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", () => {
    modal.classList.add("open");
  });

  modalClose.addEventListener("click", () => {
    modal.classList.remove("open");
  });
}
