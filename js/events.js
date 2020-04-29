
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