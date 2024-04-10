document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM");

  const accordions = document.querySelectorAll(".accordion");
  const multiSelect = document.getElementById("multiselect");

  accordions.forEach((accordion, key) => {
    accordion.addEventListener("click", () => {
      const title = accordion.querySelector(".title-section");
      const expandIcon = title.querySelector(".expand-icon");
      const collapseIcon = title.querySelector(".collapse-icon");
      const description = accordion.querySelector(".description");
      const displayDescription = expandIcon.style.display === "none";

      if (multiSelect.checked) {
        if (displayDescription) {
          title.classList.add("expanded");
          expandIcon.style.display = "flex";
          collapseIcon.style.display = "none";

          description.style.display = "none";
        } else {
          title.classList.remove("expanded");
          expandIcon.style.display = "none";
          collapseIcon.style.display = "flex";

          description.style.display = "block";
        }
      }

      if (!multiSelect.checked) {
        if (accordion.classList.contains("expanded")) {
          accordion.classList.remove("expanded");
          expandIcon.style.display = "flex";
          collapseIcon.style.display = "none";
          description.style.display = "none";
        } else {
          accordion.classList.add("expanded");
          expandIcon.style.display = "none";
          collapseIcon.style.display = "flex";
          description.style.display = "block";
        }

        accordions.forEach((acc, index) => {
          if (index !== key) {
            acc.classList.remove("expanded");
            acc.querySelector(".expand-icon").style.display = "flex";
            acc.querySelector(".collapse-icon").style.display = "none";
            acc.querySelector(".description").style.display = "none";
          }
        });
      }
    });
  });
});
