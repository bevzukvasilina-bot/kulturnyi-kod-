 function showChinaFacts() {
    const main = document.querySelector("main");
    const chinaFactsPage = document.querySelector("#china-facts-page");

    const homeContent = Array.from(main.children).filter(
        element => element !== chinaFactsPage
    );

    homeContent.forEach(element => {
        element.style.display = "none";
    });

    chinaFactsPage.style.display = "block";
}


function showHome() {
    const main = document.querySelector("main");
    const chinaFactsPage = document.querySelector("#china-facts-page");

    const homeContent = Array.from(main.children).filter(
        element => element !== chinaFactsPage
    );

    homeContent.forEach(element => {
        element.style.display = "";
    });

    chinaFactsPage.style.display = "none";
}


const factsButton = document.querySelector('nav a[href="#facts"]');

factsButton.addEventListener("click", function(event) {
    event.preventDefault();
    showChinaFacts();
});