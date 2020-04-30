//screenWidth
var screenWidth = screen.width;
var desktopWidth = 800;


function mobileMenu() {

    let hamburger = document.getElementById("hamburger");
    let header = document.querySelector("header");
    let menu = document.querySelector("header nav");
    let headers = document.querySelectorAll("header nav > ul > li > a");
    let subMenus = menu.querySelectorAll("header nav > ul > li > ul");

    function headerToggle() {
        if (header.classList.contains("headerOpened")) {
            header.classList.remove("headerOpened");
        } else {
            header.classList.add("headerOpened");
        }
    }

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
        headerToggle();
    }

    hamburger.addEventListener("click", () => {
        menuManager();
    });

    for (let header of headers) {
        let subMenu = header.nextElementSibling;
        header.addEventListener("click", () => {
            if (subMenu.classList.contains("subMenuOpened")) {
                subMenu.classList.remove("subMenuOpened");
            } else {
                closeAllSubMenus();
                subMenu.classList.add("subMenuOpened");
            }
        });

        if (screenWidth > desktopWidth) {
            header.addEventListener("mouseenter", () => {
                closeAllSubMenus();
                subMenu.classList.add("subMenuOpened");
            });
            header.parentElement.addEventListener("mouseleave", () => {
                subMenu.classList.remove("subMenuOpened");
            });
        }
    }

    //SCROLL MENU
    let subBtns = document.querySelectorAll('header > div nav > ul > li > ul > li a');
    console.log(subBtns);
    for (let subMenu of subBtns) {
        subMenu.addEventListener("click", scrollMenuTo);
    }


    function scrollMenuTo() {
        let menuHeight = document.getElementsByTagName('header')[0].offsetHeight;
        let addHeight = 0;
        if (screenWidth > 800) {
            addHeight = menuHeight;
        } else {
            addHeight = menuHeight;
        }
        if (this.getAttribute('data-section')) {
            let section = document.getElementById(this.getAttribute('data-section'));
            window.scrollTo({ top: (section.offsetTop - addHeight), behavior: 'smooth' });
            menuManager();
        }
        //  else if (this.getAttribute('data-popup')) {
        //     console.log(this.getAttribute('data-popup'));
        //     document.getElementById(this.getAttribute('data-popup')).classList.add("bigPopupsOpen");
        // }
    }
}
mobileMenu();


window.addEventListener("resize", function () {
    screenWidth = screen.width;
    console.log("resize");
    mobileMenu();//make a class!
});

function headerStickyToggle() {
    let header = document.querySelector("header");
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        header.classList.add("headerSticky");
    } else {
        header.classList.remove("headerSticky");
    }
}
