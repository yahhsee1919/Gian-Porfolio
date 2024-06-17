const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

const text = document.querySelector(".text p");

btn.addEventListener("click", navToggle);
menu.addEventListener("click", closeMenu);

function closeMenu() {
  menu.classList.toggle("hidden");
}

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

// Tabs menu event listener

tabs.forEach((tab) => {
  tab.addEventListener("click", onTabClick);
});

function onTabClick(e) {
  // Deactive all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-red-400",
      "border-b-4",
      "md:border-b-0"
    );
  });

  // hide all panels
  panels.forEach((panel) => {
    panel.classList.add("hidden");
  });

  // active a new tab & panel base on the target
  e.target.classList.add("border-red-400", "border-b-4");

  const classString = e.target.getAttribute("data-target");
  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden");
}

// Circular text

text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) =>
      `<span style = "transform:rotate(${i * 8.3}deg)" >${char}</span>`
  )
  .join("");
