const cursor = document.querySelector(".cursor");
const tooltip = document.querySelector(".cursor-tooltip");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  tooltip.style.left = e.clientX + 15 + "px";
  tooltip.style.top = e.clientY + 15 + "px";
});

/* Show ideas on hover */
document.addEventListener("mouseover", () => {
  tooltip.style.opacity = 1;
});

document.addEventListener("mouseout", () => {
  tooltip.style.opacity = 0;
});
