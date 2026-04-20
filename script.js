const sections = document.querySelectorAll(".container");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

sections.forEach(sec => {
  sec.classList.add("fade");
  observer.observe(sec);
});
