
const navbar = document.querySelector("#p-nevbar");
const shopFooter = document.querySelector("#h-p-1");
const shopFooterBox = document.querySelector(".footer-box");

const sectionOne = document.querySelector(".footer-box");
const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      navbar.classList.add("nav-scrolled");
      shopFooter.classList.add("C-Contraido");
      shopFooterBox.classList.add("C-Contraido-footer-box");
    } else {
      navbar.classList.remove("nav-scrolled");
      shopFooter.classList.remove("C-Contraido");
      shopFooterBox.classList.remove("C-Contraido-footer-box");
    }
  });
},sectionOneOptions);
sectionOneObserver.observe(sectionOne);



