document.addEventListener("DOMContentLoaded", main);

function main() {
    const ham = document.getElementById("ham-svg");
    const cross = document.getElementById("close-svg");
    const nav = document.getElementById("nav-list");

    document.getElementById("menu-button").addEventListener("click", displayNavList);
    const scrollButton = document.getElementById("upArrow");
    window.addEventListener("scroll", function() {
        if(window.scrollY > 220)
            scrollButton.style.display = "flex";
        else
            scrollButton.style.display = "none";
    })
    scrollButton.addEventListener("click", function() {
        window.scrollTo({top: 0, behavior: "smooth"});
    });
}

function displayNavList() {
    const ham = document.getElementById("ham-svg");
    const cross = document.getElementById("close-svg");
    const nav = document.getElementById("nav-list");

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