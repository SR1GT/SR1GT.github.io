export const navigationHandler = () => {
  document.querySelectorAll("nav ul li").forEach((item, index) => {
    item.addEventListener("click", () => {
      const section = document.querySelectorAll("section")[index];
      section.scrollIntoView({ behavior: "smooth" });
    });
  });
};

export const scrollHandler = () => {
  const isScrolledToBottom = () => {
    const viewportHeight = window.innerHeight;
    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    return scrollPosition > viewportHeight * 2 / 3;
  };
  const button = document.getElementById("gotoTop");
  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  window.addEventListener("scroll", () => {
    if (isScrolledToBottom()) {
      button.style.opacity = 1;
    } else {
      button.style.opacity = 0;
    }
  });
};

export const imageHandler = () => {
  const images = document.querySelectorAll("img");
  images.forEach((image) => {
    image.addEventListener("load", () => (image.style.opacity = 1));
    if (image.complete) {
      image.style.opacity = 1;
    }
  });
};
