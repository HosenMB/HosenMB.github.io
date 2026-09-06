/* Mobile navigation: inject an accessible hamburger toggle into each
   navbar and open/close the menu on small screens. Progressive
   enhancement — the menu is fully usable without JS on desktop. */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("nav.navbar").forEach(function (nav) {
    var list = nav.querySelector(".navbar-list");
    if (!list) return;

    if (!list.id) list.id = "primary-menu";

    var btn = document.createElement("button");
    btn.className = "menu-toggle";
    btn.type = "button";
    btn.setAttribute("aria-label", "Toggle navigation menu");
    btn.setAttribute("aria-controls", list.id);
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = '<ion-icon name="menu-outline"></ion-icon>';

    nav.insertBefore(btn, list);

    btn.addEventListener("click", function () {
      var open = list.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.innerHTML = open
        ? '<ion-icon name="close-outline"></ion-icon>'
        : '<ion-icon name="menu-outline"></ion-icon>';
    });

    // Close the menu after a link is tapped (mobile).
    list.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        list.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        btn.innerHTML = '<ion-icon name="menu-outline"></ion-icon>';
      });
    });
  });
});
