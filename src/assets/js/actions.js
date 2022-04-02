document.addEventListener("DOMContentLoaded",() => {
    const the_button = document.querySelector(".popup-btn")
    the_button.addEventListener("click", handleClick)
})

function handleClick(event) {
    const modal = document.querySelector(".modal")
    const closeBtn = document.querySelector(".close")
    modal.style.display = "block";
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    })
}