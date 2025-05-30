document.addEventListener("DOMContentLoaded", main);

function main() {
    document.querySelector(".menu").onclick = function() {
        document.querySelector("ul").style.display = 
            document.querySelector("ul").style.display === "none" ? "flex": "none";
        if(document.querySelector(".ham-menu").style.display === "block") {
            document.querySelector(".ham-menu").style.display = "none";
            document.querySelector(".close-menu").style.display = "block";
        }
        else {
            document.querySelector(".ham-menu").style.display = "block";
            document.querySelector(".close-menu").style.display = "none";
        }
    };
}