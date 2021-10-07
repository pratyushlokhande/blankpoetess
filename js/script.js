gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".work-content img").forEach((img, i) => {
  gsap.fromTo(
    img,
    { y: 0 },
    {
      scrollTrigger: {
        trigger: img,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      y: "25%",
    }
  );
});

gsap.utils.toArray(".cln-content img").forEach((img, i) => {
  gsap.fromTo(
    img,
    { y: 0 },
    {
      scrollTrigger: {
        trigger: img,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      y: "25%",
      duration: 1,
    }
  );
});

gsap.from(".f-bg", {
  scrollTrigger: {
    trigger: "#contact",
    start: "bottom bottom",
    end: "bottom top",
    scrub: true,
  },
  scaleX: 1.5,
  scaleY: 1.5,
  duration: 1,
});

const navSwitch = document.querySelector("#nav-switch");
console.log(navSwitch);
let isOpen = false;

navSwitch.addEventListener("click", () => {
  var nav = document.querySelector("#main-nav");
  nav.classList.toggle("nav-active");
});
