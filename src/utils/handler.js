export const navigationHandler = () => {
  document.querySelectorAll("nav ul li").forEach((item, index) => {
    item.addEventListener("click", () => {
      const section = document.querySelectorAll("section")[index];
      section.scrollIntoView({ behavior: "smooth" });
    });
  });
};

export const scrollHandler = () => {
  const button = document.getElementById("gotoTop");
  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  const isScrolledToBottom = () => {
    const viewportHeight = window.innerHeight;
    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    return scrollPosition > viewportHeight;
  };
  window.addEventListener("scroll", () => {
    if (isScrolledToBottom()) {
      button.classList.remove("hidden");
    } else {
      button.classList.add("hidden");
    }
  });
};
