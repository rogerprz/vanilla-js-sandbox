document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM");
  const multiSelect = document.getElementById("multiselect").checked;

  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    console.log("B:", accordion);
    accordion.addEventListener("click", () => {
      const title = accordion.querySelector(".title-section");
      console.log("T:", title);
      const expandIcon = title.querySelector(".expand-icon");
      const collapseIcon = title.querySelector(".collapse-icon");
      const description = accordion.querySelector(".description");

      const displayDescription = expandIcon.style.display === "none";

      console.log("EX", expandIcon.style);
      //   expandIcon styles display none
      if (displayDescription) {
        expandIcon.style.display = "flex";
        collapseIcon.style.display = "none";

        description.style.display = "none";
      } else {
        expandIcon.style.display = "none";
        collapseIcon.style.display = "flex";

        description.style.display = "block";
      }
    });
  });
});
