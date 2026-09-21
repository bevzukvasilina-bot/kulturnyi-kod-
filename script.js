/* ==========================================
   КУЛЬТУРНИЙ КОД — JAVASCRIPT
   ========================================== */


/* ==========================================
   ПЕРЕХІД МІЖ РОЗДІЛАМИ
   ========================================== */

window.openPage = function(pageId) {

    const pages = document.querySelectorAll("main > section");

    pages.forEach(function(page) {
        page.style.display = "none";
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.style.display = "block";
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};


/* ==========================================
   ГОЛОВНА
   ========================================== */

window.showHome = function() {

    const pages = document.querySelectorAll("main > section");

    pages.forEach(function(page) {
        page.style.display = "none";
    });

    const homePage = document.getElementById("home-page");

    if (homePage) {
        homePage.style.display = "block";
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};


/* ==========================================
   ПОШУК
   ========================================== */

window.toggleSearch = function() {

    const searchBox = document.getElementById("searchBox");

    if (!searchBox) {
        console.log("Не знайдено searchBox");
        return;
    }

    if (
        searchBox.style.display === "flex" ||
        searchBox.style.display === "block"
    ) {
        searchBox.style.display = "none";
    } else {
        searchBox.style.display = "flex";

        const input = document.getElementById("siteSearch");

        if (input) {
            setTimeout(function() {
                input.focus();
            }, 100);
        }
    }
};


/* ==========================================
   ЗАКРИТИ ПОШУК
   ========================================== */

window.closeSearch = function() {

    const searchBox = document.getElementById("searchBox");

    if (searchBox) {
        searchBox.style.display = "none";
    }
};


/* ==========================================
   ПОШУК ПО САЙТУ
   ========================================== */

window.performSearch = function() {

    const input = document.getElementById("siteSearch");

    if (!input) {
        return;
    }

    const query = input.value.trim().toLowerCase();

    if (!query) {
        return;
    }

    const pages = document.querySelectorAll("main > section");

    let foundPage = null;

    pages.forEach(function(page) {

        if (foundPage) {
            return;
        }

        const text = page.innerText.toLowerCase();

        if (text.includes(query)) {
            foundPage = page;
        }
    });

    if (foundPage) {

        window.openPage(foundPage.id);

        window.closeSearch();

    } else {

        alert("Нічого не знайдено 🔎");

    }
};


/* ==========================================
   ТЕМА — ДЕНЬ / НІЧ
   ========================================== */

window.toggleTheme = function() {

    document.body.classList.toggle("dark-mode");

    const isDark =
        document.body.classList.contains("dark-mode");

    localStorage.setItem(
        "culturalCodeDarkMode",
        isDark ? "on" : "off"
    );
};


/* ==========================================
   ЗАПУСК
   ========================================== */

document.addEventListener("DOMContentLoaded", function() {

    window.showHome();


    /* Повертаємо збережену тему */

    const savedTheme =
        localStorage.getItem("culturalCodeDarkMode");

    if (savedTheme === "on") {
        document.body.classList.add("dark-mode");
    }


    /* Пошук через Enter */

    const searchInput =
        document.getElementById("siteSearch");

    if (searchInput) {

        searchInput.addEventListener(
            "keydown",
            function(event) {

                if (event.key === "Enter") {
                    window.performSearch();
                }

            }
        );
    }

});