const Tags = () => {
  const initTags = () => {
    let navItems = document.querySelectorAll(".tags .nav-items a");
    if (navItems.length > 0) {
      navItems[0].classList.add("active");
      document
        .querySelector(navItems[0].getAttribute("href"))
        .classList.add("active");
    }
  };

  const resetTags = () => {
    let navItems = document.querySelectorAll(".tags .nav-items a");
    if (navItems.length > 0) {
      navItems.forEach((el) => {
        el.classList.remove("active");
        document
          .querySelector(el.getAttribute("href"))
          .classList.remove("active");
      });
      navItems[0].classList.add("active");
      document
        .querySelector(navItems[0].getAttribute("href"))
        .classList.add("active");
    }
  };

  const initEventsTags = (e) => {
    let navItems = document.querySelectorAll(".tags .nav-items a");
    navItems.forEach((el) => {
      el.classList.remove("active");
      document
        .querySelector(el.getAttribute("href"))
        .classList.remove("active");
    });
    e.target.classList.add("active");
    document
      .querySelector(e.target.getAttribute("href"))
      .classList.add("active");
  };

  return { initTags, resetTags, initEventsTags };
};

export default Tags;
