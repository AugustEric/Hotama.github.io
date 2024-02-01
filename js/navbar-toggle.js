document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleBtn");
  const closeBtn = document.getElementById("closeBtn");
  const sidebar = document.getElementById("sidebar");

  toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("-translate-x-full");
    sidebar.classList.toggle("visible");
  });

  closeBtn.addEventListener("click", function () {
    sidebar.classList.add("-translate-x-full");
  });
});
