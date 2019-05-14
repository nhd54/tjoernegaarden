document.addEventListener("DOMContentLoaded", () => {
  let position = 0;
  let allImages = document.querySelectorAll(".splash__image");

  setInterval(function() {
    position = position - 100;

    if (position == -300) {
      position = 0;
    }
    allImages[0].style.transform = `translate(${position}%)`;
    allImages[1].style.transform = `translate(${position}%)`;
    allImages[2].style.transform = `translate(${position}%)`;
  }, 5000);

  let betingelser = document.querySelector("body");
  let logo = document.querySelector(".logo");
  let contentBox = document.querySelectorAll(".content__box");
  let scrollHeight = betingelser.scrollHeight - 550;
  let currentScrollHeight = 0;
  let reachButtom = false;
  betingelser.onscroll = documentRead;

  function documentRead(event) {
    currentScrollHeight = Math.floor(event.target.scrollingElement.scrollTop);
    console.log(currentScrollHeight);

    if (currentScrollHeight >= 290) {
      logo.classList.add("menu--scrolled");
    } else {
      logo.classList.remove("menu--scrolled");
    }

    if (currentScrollHeight >= 120) {
      contentBox[0].classList.remove("content--hidden");
    }
  }
});

//greensock animation

let leftbox = document.querySelector(".content__junk");

leftbox.addEventListener("mouseover", () => {
  console.log("ind");

  staggerPoints(
    ".focus--left .cls-1",
    0.5,
    { points: "909.76 348.4 0 348.4 0 348.4 909.76 348.4" },
    0
  );
});

leftbox.addEventListener("mouseleave", () => {
  console.log("ud");
  staggerPoints(
    ".focus--left .cls-1",
    0.5,
    { points: "909.76 348.4 0 0 0 348.4 909.76 348.4" },
    0
  );
});

//all the work is done in this one function that spits back a TimelineLite.
function staggerPoints(selector, duration, vars, stagger, onCompleteAll) {
  var numbersExp = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
    element = document.querySelector(selector),
    startPoints = element.getAttribute("points").match(numbersExp),
    endPoints = vars.points.match(numbersExp),
    applyPoints = function() {
      element.setAttribute("points", startPoints.join(","));
    },
    copy = function(obj) {
      var o = {},
        p;
      for (p in obj) {
        if (p !== "points") {
          o[p] = obj[p];
        }
      }
      return o;
    },
    tl = new TimelineLite({ onUpdate: applyPoints, onComplete: onCompleteAll }),
    l = startPoints.length,
    obj,
    i;
  if (l !== endPoints.length) {
    console.log("Error: point quantities don't match");
  }
  for (i = 0; i < l; i += 2) {
    obj = copy(vars);
    obj[i] = parseFloat(endPoints[i]); //note: we need to make sure the values are converted from strings to numbers.
    obj[i + 1] = parseFloat(endPoints[i + 1]);
    startPoints[i] = parseFloat(startPoints[i]);
    startPoints[i + 1] = parseFloat(startPoints[i + 1]);
    tl.to(startPoints, duration, obj, stagger * i);
  }
  return tl;
}
