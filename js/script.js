const navbar = document.querySelector(".navbar");
const up = document.querySelector("#up");
const toggle = document.querySelector(".toggle");
const navbarmenue = document.querySelector(".navbar-menue");
const icon = document.querySelector(".toggle i");

window.onscroll = () => {
    if (window.scrollY >= 458) {
        // navbar.classList.add("fixed");
        // navbar.classList.add("fixed", "animate_ _ fadeInDown")
        navbar.classList.add("fixed", "animate_ _ fadeInDown");
    } else {
        navbar.classList.remove("fixed");
        navbar.classList.remove("animate_ _fadeInDown")
    }
}
if (window.scrollY >= 800) {
    fbtn.
}
up.onclick = () => {
    window.scrollTo(0, 0);
    // //window.scrollTo({
    //     top:0,behavior:"smooth",
    // })
}
up.onclick = () => {

}
toggle.onclick = () => {
    navbarmenue.classList.toggle('active');
    icon.classList.toggle("fa-xmark");
}