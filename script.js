document.addEventListener("DOMContentLoaded", function() {
    const offers = document.querySelectorAll(".offers");
    let lastScrollY = window.scrollY;
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (window.scrollY > lastScrollY) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        } else {
          if (window.scrollY < lastScrollY) {
            entry.target.classList.remove("visible");
          }
        }
      });
      lastScrollY = window.scrollY;
    }, {
      threshold: 0.5
    });
  
    offers.forEach(offer => {
      observer.observe(offer);
    });
  });
  