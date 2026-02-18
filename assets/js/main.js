import { Home } from "../../pages/home.js";
import { Explore } from "../../pages/explore.js";

const routes = {
  "": Home,
  "#/explore": Explore,
};

function router() {
  const path = window.location.hash;
  const page = routes[path] || Home;
  document.getElementById("app").innerHTML = page();
}

document.addEventListener("DOMContentLoaded", () => {

  router();

  // back/forward navigation
  window.addEventListener("popstate", router);

  // loader logic raaah
  setTimeout(() => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
      loader.style.display = "none";
      document.getElementById("app").classList.remove("hidden");
    }, 500);

  }, 800);
});