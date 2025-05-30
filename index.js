document.addEventListener("DOMContentLoaded", main);

function main() {
    const ham = document.querySelector("#ham-svg");
    const cross = document.querySelector("#close-svg");
    const nav = document.querySelector("#nav-list");
    document.querySelector("#menu-button").onclick = function() {
        if(ham.style.display === "block") {
            ham.style.display = "none";
            cross.style.display = "block";
            nav.style.display = "flex";
        }
        else {
            ham.style.display = "block";
            cross.style.display = "none";
            nav.style.display = "none";
        }
    };
}