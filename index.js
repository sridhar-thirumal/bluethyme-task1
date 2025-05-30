document.addEventListener("DOMContentLoaded", main);

function main() {
    document.querySelector(".menu").onclick = function() {
        if(document.querySelector(".ham-menu").style.display === "block") {
            document.querySelector(".ham-menu").style.display = "none";
            document.querySelector(".close-menu").style.display = "block";
            document.querySelector("ul").style.display = "flex";
        }
        else {
            document.querySelector(".ham-menu").style.display = "block";
            document.querySelector(".close-menu").style.display = "none";
            document.querySelector("ul").style.display = "none";
        }
    };
}