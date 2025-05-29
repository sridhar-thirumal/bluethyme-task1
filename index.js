document.addEventListener("DOMContentLoaded", main);

function main() {
    document.querySelector(".ham-menu").onclick = function() {
        document.querySelector("ul").style.display = 
            document.querySelector("ul").style.display === "none" ? "flex": "none";
    };
}