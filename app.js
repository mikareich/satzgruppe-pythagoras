const sections = [...document.querySelectorAll("section")];
const scrollingMode = "fade-up";
const scrollbar = document.querySelector(".scrollbar");
const links = document.querySelectorAll(".nav__link");
// set scrolling mode
sections.forEach((section) => section.setAttribute("data-aos", scrollingMode));

AOS.init();

window.onscroll = updateScrollbar;

function updateScrollbar() {
  // get progress
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.body.scrollHeight - document.body.clientHeight;
  const scrolled = (winScroll / height) * 100;
  // get current element
  const currentSection = sections.find((section) => {
    if (
      winScroll <= section.clientHeight + document.body.clientHeight &&
      winScroll >= section.clientHeight
    ) {
      return section;
    }
  });
  // update link
  console.log(links[sections.indexOf(currentSection)]);
  // display progress
  scrollbar.style.cssText = `--progress: ${scrolled}%`;
}

updateScrollbar();
