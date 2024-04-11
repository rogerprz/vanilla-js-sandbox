document.addEventListener("DOMContentLoaded", () => {
  function tabFunction() {
    console.log("HERE");
  }
});

function tabFunction(button) {
  const language = button.innerHTML.toLowerCase();

  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    console.log("T:", tab.innerHTML);
    if (tab.innerHTML.toLowerCase() === language) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  const pages = document.querySelectorAll(".page-container section");

  pages.forEach((page) => {
    console.log("P:", page.classList);
    if (page.classList.contains(`${language}-container`)) {
      page.style.display = "block";
    } else {
      page.style.display = "none";
    }
  });
}
