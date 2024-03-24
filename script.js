document.querySelector('video').playbackRate = 1.10;

var tl = gsap.timeline()
tl.to("#yellow1",{
    top:"-100%",
    delay:0.5,
    duration:0.6,
    ease:"expo.out"
})

tl.from("#yellow2",{
    top:"100%",
    delay:0.3,
    duration:0.8,
    ease:"expo.in",
    opacity:0.8,
},"anime")

tl.from("#loader h1",{
    delay:0.7,
    duration:0.5,
    ease:"expo.out",
    opacity:0,
},"anime")

tl.to("#loader h1",{
    opacity:1,
},"anime")

tl.to("#yellow2",{
    opacity:1,
},"anime")

tl.to("#loader h1",{
    delay:1,
    duration:0.4,
    color:"black",
    ease:"bounce.out",
},"anime")

tl.to("#loader",{
    display:"none"
})
tl.to("#loader",{
    opacity:0
})

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const elem = document.querySelectorAll(".elem");
const page2 = document.querySelector("#page2");
elem.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    console.log(el);
    console.log(el.getAttribute("data-image"));
    console.log(page2);
    page2.style.backgroundImage = `url(${el.getAttribute("data-img")})`;
  });
});

document.querySelector("#footer svg").addEventListener("click", () => {
  scroll.scrollTo(0);
});
document.querySelector("#option-1").addEventListener("click", () => {
  scroll.scrollTo(0);
});
document.querySelector("#option-2").addEventListener("click", () => {
  scroll.scrollTo(document.querySelector("#page2"));
});
document.querySelector("#option-3").addEventListener("click", () => {
  scroll.scrollTo(document.querySelector("#page3"));
});
document.querySelector("#page1-down-arrow").addEventListener("click", () => {
  scroll.scrollTo(document.querySelector("#page2"));
})
document.querySelector("#page2-down-arrow").addEventListener("click", () => {
  scroll.scrollTo(document.querySelector("#page3"));
})
const navLinks = document.querySelectorAll("#nav-links ul li");
const plusButton = document.getElementById("plus-button");
const navLinksContainer = document.getElementById("nav-links");
const navContainer = document.getElementsByTagName("nav");
let buttonFlag = false;
console.log(plusButton);
plusButton.addEventListener("click", () => {
  buttonFlag = !buttonFlag;
  plusButton.style.transform = buttonFlag ? "rotate(-135deg)" : "rotate(0)";
  console.log(navLinksContainer);
  navLinksContainer.style.display = buttonFlag ? "block" : "none";
  navLinksContainer.style.animation = buttonFlag
    ? "expand 1.5s forwards"
    : "shrink 1.3s forwards";
});
