
let cursor = document.getElementById("cursor");
let cursorBlur = document.getElementById("cursor-blur");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    cursorBlur.style.left = e.clientX + "px";
    cursorBlur.style.top = e.clientY + "px";

});


function handlemenu() {
  const menu = document.getElementById("mobile-menu");

  menu.classList.toggle("hidden");
}














gsap.registerPlugin(ScrollTrigger);


gsap.to("#navbar", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "100px",

    scrollTrigger: {
        trigger: "#page2",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
    }
});


gsap.to("#hero", {
    backgroundColor: "#000",
    duration: 1,
    scrollTrigger: {
        trigger: "#page2",
        start: "top 80%",
        end: "top 30%",

        scrub: 2,
    }
});




let marquee = gsap.to(".scroller-track", {
  xPercent: -100,
  repeat: -1,
  duration: 30,
  ease: "linear",
});


ScrollTrigger.create({
  trigger: "#scroller",
  start: "top bottom",
  end: "bottom top",
  scrub: 1,
  onUpdate: (self) => {
   
    marquee.timeScale(self.direction * 1);
  },
});


document.addEventListener("touchmove", (e) => {
  let touch = e.touches[0];

  cursor.style.left = touch.clientX + "px";
  cursor.style.top = touch.clientY + "px";

  cursorBlur.style.left = touch.clientX + "px";
  cursorBlur.style.top = touch.clientY + "px";
});
