
function serviceManager() {
    let services = document.querySelectorAll("#service > div > ul > li");

    function closeAll() {
        for (let service of services) {
            service.classList.remove("serviceOpened");
        }
    }

    for (let service of services) {

        if (screen.width > 980) {
            service.addEventListener("mouseover", () => {
                closeAll();
                service.classList.add("serviceOpened");
            });

            service.addEventListener("mouseleave", () => {
                service.classList.remove("serviceOpened");
            });
        }

        service.addEventListener("click", () => {
            if (service.classList.contains("serviceOpened")) {
                service.classList.remove("serviceOpened");
            } else {
                closeAll();
                service.classList.add("serviceOpened");
            }
        });

    }
}
serviceManager();

function scrollPhoto() {
    let photos = document.querySelectorAll("img.break");
    for (let photo of photos) {
        photo.style.transform = "translateY(" + (document.documentElement.scrollTop - photo.offsetTop) * 0.2 + "px)";
    }
}

window.onscroll = function () {
    headerStickyToggle();
    scrollPhoto();
};