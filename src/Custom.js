const Custom = () => {
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;
    if (header && scrollPos > 0) {
      // Check if header is not null/undefined
      header.classList.add("scrolled");
    } else if (header) {
      // Check if header is not null/undefined
      header.classList.remove("scrolled");
    }
  });
};

export default Custom;
