// No JS required for alternate CSS motion marquee; animation handled by CSS
// If you need to pause on hover, you can add these lines:
const marquee = document.getElementById('moving-links');
if (marquee) {
    marquee.addEventListener('mouseover', () => marquee.style.animationPlayState = 'paused');
    marquee.addEventListener('mouseout', () => marquee.style.animationPlayState = 'running');
}
// Back button behavior control

document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname;
  const isHomePage = currentPath.endsWith("index.html")  currentPath === "/index.html";

  // If it's a subpage (not home), modify back behavior
  if (!isHomePage) {
    // On subpages — replace history so BACK returns to index
    window.history.pushState({}, "", currentPath);
    window.history.replaceState({}, "", currentPath);
    window.addEventListener("popstate", function () {
      // Redirect back to homepage on back press
      window.location.href = "index.html"; // Adjust if homepage is at another path
    });
  } else {
    // On home page — allow browser to go "outside" with back
    window.history.pushState({}, "", currentPath);
    window.addEventListener("popstate", function () {
      window.history.back(); // Exits site normally
    });
  }
});

