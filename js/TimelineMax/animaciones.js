const logo = document.querySelector("#logo");
const tl = new TimelineMax({});
tl.fromTo(logo, 1, { height: "0%" }, { height: "90%", Ease: Power2.easeInOut });