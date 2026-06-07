const btn = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btn.classList.add("is-show");
  } else {
    btn.classList.remove("is-show");
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
