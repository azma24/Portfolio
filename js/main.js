// Topへ戻るボタン
const btn = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btn.classList.add("is-visible");
  } else {
    btn.classList.remove("is-visible");
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// スクロール発火アニメーション
const targets = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-active");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  },
);

targets.forEach((target) => {
  observer.observe(target);
});

/*
const EMAIL = "your@email.com";
const el = document.querySelector(".email-copy");

el.addEventListener("click", () => {
  navigator.clipboard.writeText(EMAIL).then(() => {
    el.classList.add("is-copied");
  });
});

el.addEventListener("mouseleave", () => {
  el.classList.remove("is-copied");
});
*/
