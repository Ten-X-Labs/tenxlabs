const nav = document.querySelector(".navbar");
const navLinks = nav.querySelectorAll("li a");
const currentURL = window.location.href;
navLinks.forEach((link) => {
if (link.href === currentURL) {
    link.classList.add("active");
}
});
