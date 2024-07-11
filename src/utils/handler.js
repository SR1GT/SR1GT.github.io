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
    return scrollPosition > (viewportHeight * 2) / 3;
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

export const blogListHandler = () => {
  const blogLinks = [
    "https://www.cnblogs.com/SRIGT/p/18062140",
    "https://www.cnblogs.com/SRIGT/p/18159320",
    "https://www.cnblogs.com/SRIGT/p/18257837",
    "https://www.cnblogs.com/SRIGT/p/18278118",
    "https://www.cnblogs.com/SRIGT/p/18077515",
    "https://www.cnblogs.com/SRIGT/p/18257856",
  ];
  const blogButtons = document
    .getElementById("blog-list")
    .querySelectorAll("li");
  blogButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      window.open(blogLinks[index]);
    });
  });
};

export const timeAxisHandler = () => {
  let counter = 0;
  const buttons = document
    .getElementById("time-axis")
    .querySelectorAll("button");
  const descriptions = [
    {
      text: "2020 年，我的高中信息课教授了我们一些基础的计算机知识（如二进制等），以及 Python 编程。另外，在高中同学的影响下，我接触到信息竞赛，了解并上手实现了简单的 C++ 程序 <code>Hello World</code>，之后逐步了解到洛谷等 OJ 平台，并尝试在其中提交我的代码，从此打开了新世界的大门。",
      icon: "https://skillicons.dev/icons?i=py,cpp",
    },
    {
      text: "2021 年，参加了高考，在填报志愿时，我根据我的兴趣爱好，以及行业发展状况，选择了<strong>计算机科学与技术</strong>专业。进入大学，我凭借着在过去积累的计算机知识以及高中时期的编程经验，很快便适应了大学的学习，并开始尝试离开舒适圈，拓展我的能力。",
      icon: "https://skillicons.dev/icons?i=css",
    },
    {
      text: "2022, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore laudantium fugiat doloribus nobis, molestias assumenda quibusdam veniam excepturi ipsum vel, unde est illo veritatis ducimus non commodi sint culpa dolore!",
      icon: "https://skillicons.dev/icons?i=html",
    },
    {
      text: "2023, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore laudantium fugiat doloribus nobis, molestias assumenda quibusdam veniam excepturi ipsum vel, unde est illo veritatis ducimus non commodi sint culpa dolore!",
      icon: "https://skillicons.dev/icons?i=java",
    },
    {
      text: "2024, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore laudantium fugiat doloribus nobis, molestias assumenda quibusdam veniam excepturi ipsum vel, unde est illo veritatis ducimus non commodi sint culpa dolore!",
      icon: "https://skillicons.dev/icons?i=vue",
    },
  ];
  function buttonEvent(index) {
    buttons.forEach((oButton) => (oButton.style.backgroundColor = "#201b19"));
    buttons[index].style.backgroundColor = "#dedede";
    document.getElementById("descriptions").querySelector("p").innerHTML =
      descriptions[index].text;
    document.getElementById("descriptions").querySelector("img").src =
      descriptions[index].icon;
  }

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      counter = index;
      buttonEvent(index);
    });
  });
  const loop = () => {
    buttonEvent(counter);
    counter++;
    if (counter === 5) counter = 0;
    setTimeout(loop, 10000);
  };
  loop();
};
