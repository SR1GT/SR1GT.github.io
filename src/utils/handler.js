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
      text: "<p style='text-indent: 2em'>2020 年，我的高中信息课教授了我们一些基础的计算机知识（如二进制等），以及 Python 编程。另外，在高中同学的影响下，我接触到信息竞赛，了解并上手实现了简单的 C++ 程序 <code>Hello World</code>，之后逐步了解到洛谷等 OJ 平台，并尝试在其中提交我的代码，从此打开了新世界的大门。</p>",
      icon: "https://skillicons.dev/icons?i=py,cpp",
    },
    {
      text: "<p style='text-indent: 2em'>2021 年，我怀揣着对未来的憧憬与梦想，踏上了高考的征途。在那个决定人生方向的重要时刻，我深思熟虑，不仅基于自己长久以来对信息技术领域的浓厚兴趣，还紧密关注了当前及未来行业发展的趋势与前景，最终在填报志愿时选择了<strong>计算机科学与技术</strong>这一充满挑战与机遇的专业。</p><p style='text-indent: 2em'>进入大学后，我迅速被计算机科学与技术专业的广阔天地所吸引。得益于高中时期培养的逻辑思维能力和积累的初级编程经验，我能够较为轻松地跟上课程进度，并在课堂学习与课外实践中展现出良好的适应能力。</p><p style='text-indent: 2em'>基于 C++ 编程，实现了简易的<span class='underline'>计算器</span>程序，包括基础的四则运算、时间运算、方程运算等功能。</p>",
      icon: "https://skillicons.dev/icons?i=c,cpp",
    },
    {
      text: "<p style='text-indent: 2em'>2022 年，在职业生涯与发展规划课程中，<strong>前端开发</strong>吸引了我的注意。通过这门课程，我首次接触到了网页设计的魅力与可能性，并在 3 月 26 日这一天，凭借自学与尝试，成功制作了我的第一个网页。这个小小的成就不仅激发了我对前端开发的兴趣，也为我后续的学习之路奠定了坚实的基础。</p><p style='text-indent: 2em'>在下半年，我有幸加入了学校的通信电子创新基地，在创新基地的学长的帮助与指导下，我系统地完成了 HTML、CSS 以及 JavaScript 的基础学习，并且掌握了 Vue2 的基本用法，包括组件化开发、数据绑定、指令使用等。</p><p style='text-indent: 2em'>此外，根据学校课程安排，我还学习了基于 C# 的可视化程序设计，并制作了<span class='underline'>个人记事本</span>程序。</p>",
      icon: "https://skillicons.dev/icons?i=html,css,js,vue,cs,md",
    },
    {
      text: "<p style='text-indent: 2em'>2023 年初，我参与了字节跳动第五届青训营前端营，初步构建了一条系统性的学习路径。</p><p style='text-indent: 2em'>这一年，我积极投身于基地比赛项目的实践中，在与团队成员共同努力下，荣获多项省级奖项。</p><p style='text-indent: 2em'>同时，我也开展广泛的学习，编程语言包括 Java、Python、Rust、Golang、PHP 等，框架与依赖包括 Spring、Django(DRF)、ThinkPHP 等后端框架； Tkinter、Scrapy、Selenium、Appium 等桌面应用、爬虫与自动化测试工具； Git、Docker、Nginx 等辅助工具的使用； MySQL、Redis、MongoDB 等数据库的管理。此外，结合计算机网络课程内容以及在青少年 CTF 、攻防世界等平台上的刷题经验，让我对网络安全有了更深刻的认识。</p><p style='text-indent: 2em'>在比赛项目中制作了<span class='underline'>基于 Vue2 + ECharts 的蔬菜大棚种植环境数据可视化平台</span>、<span class='underline'>“碳达峰碳中和”科普平台</span>移动端移植，以及个人项目，包括<span class='underline'>基于 Tkinter 的机场调度管理平台</span>、<span class='underline'>基于 Vue2 + ElementUI + DRF 的综合素质测评管理平台</span>、<span class='underline'>基于 Vue2 + ThinkPHP 的科研信息管理平台</span>等。</p>",
      icon: "https://skillicons.dev/icons?i=java,py,rust,go,php,spring,django,selenium,androidstudio,git,github,docker,nginx,mysql,redis,mongodb&perline=8",
    },
    {
      text: "<p style='text-indent: 2em'>2024 年，我巩固了 Vue3 结合 TypeScript 的实战能力，深入探索了 Tailwind CSS、Less、SVG、Ajax、SEO 等前沿技术与优化策略。同时，我也对 ArkTS 与 ArkUI 这一华为推出的前端框架进行了初步探索。另外，我还扩展到 React 框架及其衍生框架与依赖。我不仅掌握了 React 以及 Redux 基本用法，还深入学习了 NextJS 框架。</p><p style='text-indent: 2em'>除了前端技术外，我还拓宽了自己的技能树。我学习了 Vim 文本编辑器与正则表达式的使用方法。同时，我也掌握了基于 Golang 的 Web 框架—— Gin ，以及 Bash 脚本编程。此外，我还学习了 NodeJS 与 Express 框架，为我构建全栈应用提供了有力支持。</p><p style='text-indent: 2em'>上半年期间，制作了<span class='underline'>基于 Vue3 + TailwindCSS 的乌有银行储蓄系统(前端部分)</span>、<span class='underline'>基于 ArkTS + ArkUI 的鸿蒙原生应用——人力资源管理系统</span>等。</p>",
      icon: "https://skillicons.dev/icons?i=vue,tailwind,less,svg,react,nextjs,electron,vim,bash,powershell,windows,regex,nodejs,express&perline=7",
    },
  ];
  function buttonEvent(index) {
    buttons.forEach((oButton) => (oButton.style.backgroundColor = "#201b19"));
    buttons[index].style.backgroundColor = "#dedede";
    document.getElementById("descriptions").querySelector("div").innerHTML =
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
