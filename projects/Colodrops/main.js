let navToggle = document.querySelector(".toggle");
let mobileNav = document.querySelector(".mobile-nav");
let closeToggle = document.querySelector(".mobile-close");
let overlay = document.querySelector(".overlay");

console.log(closeToggle);

navToggle.addEventListener("click", () => {
  mobileNav.classList.add("mobile-open");
  overlay.classList.add("show");
  document.body.style.overflow = "hidden";
});
overlay.addEventListener("click", () => {
  mobileNav.classList.toggle("mobile-open");
  overlay.classList.remove("show");
  document.body.style.overflow = "auto";
});
closeToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("mobile-open");
  overlay.classList.remove("show");
  document.body.style.overflow = "auto";
});

let projectTitle = document.querySelectorAll(".project-title");
let projectInfo = document.querySelectorAll(".project-info");

function textShortener(text, charsCount) {
  let textArray = [...text];
  if (textArray.length > charsCount) {
    textArray.length = charsCount;
    let result = `${textArray.join("").trim("")}...`;
    console.log(1);
    return result;
  } else {
    let result = textArray.join("");
    console.log(2);
    return result;
  }
}

for (let i = 0; i < projectTitle.length; i++) {
  projectTitle[i].innerText = textShortener(projectTitle[i].textContent, 30);
}
