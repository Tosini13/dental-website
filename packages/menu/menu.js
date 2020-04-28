//screenWidth
var screenWidth = screen.width;
var desktopWidth = 650;

function mobileMenu() {
    let hamburger = document.getElementById("hamburger");
    let menu = document.querySelector("header nav");
    let headers = document.querySelectorAll("header nav > ul > li > a");
    let subMenus = menu.querySelectorAll("header nav > ul > li > ul");

    function closeAllSubMenus() {
        for (let subMenu of subMenus) {
            subMenu.classList.remove("subMenuOpened");
        }
    }


    function menuToggle() {
        if (menu.classList.contains("navOpened")) {
            closeAllSubMenus();
            menu.classList.remove("navOpened");
        } else {
            menu.classList.add("navOpened");
        }
    }

    //Hamburger
    function hamburgerToggle() {
        if (hamburger.classList.contains("hamburgerOpened")) {
            closeAllSubMenus();
            hamburger.classList.remove("hamburgerOpened");
        } else {
            hamburger.classList.add("hamburgerOpened");
        }
    }

    function menuManager() {
        menuToggle();
        hamburgerToggle();
    }

    hamburger.addEventListener("click", () => {
        menuManager();
    });

    for (let header of headers) {
        let subMenu = header.nextElementSibling;
        console.log(headers);
        header.addEventListener("click", () => {
            if (subMenu.classList.contains("subMenuOpened")) {
                subMenu.classList.remove("subMenuOpened");
            } else {
                closeAllSubMenus();
                subMenu.classList.add("subMenuOpened");
            }
        });

        if (screenWidth > desktopWidth) {
            console.log(screenWidth);
            header.addEventListener("mouseenter", () => {
                closeAllSubMenus();
                subMenu.classList.add("subMenuOpened");
            });
            header.parentElement.addEventListener("mouseleave", () => {
                subMenu.classList.remove("subMenuOpened");
            });
        }
    }

    var subBtns = document.querySelectorAll('nav.menu > ul > li > ul > li > a');
    for (let subBtn of subBtns) {
        subBtn.addEventListener("click", scrollMenuTo);
    }

    //MENU SCROLL
    var menuHeight = document.getElementsByTagName('nav')[0].offsetHeight;
    function scrollMenuTo() {
        if (this.getAttribute('data-section')) {
            let section = document.getElementById(this.getAttribute('data-section'));
            let addHeight = 0;
            if (screenWidth < desktopWidth) {
                menuManager();
            }
            window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
        }
    }
}
mobileMenu();

window.addEventListener("resize", function () {
    screenWidth = screen.width;
    console.log("resize");
    mobileMenu();//make a class!
});