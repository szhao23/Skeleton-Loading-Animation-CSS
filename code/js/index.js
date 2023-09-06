// JavaScript

// Select Skeleton from HTML and Store in Variable
const skeleton = document.querySelectorAll(".skeleton");

// For Each Loop
const loadingData = () => {
  skeleton.forEach((item) => {
    item.classList.remove("skeleton");
  });
};
setTimeout(loadingData, 2500);
