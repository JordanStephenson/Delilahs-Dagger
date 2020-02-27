let galleryImages = document.querySelectorAll('.gallery-pics .img');
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if(galleryImages) {
    galleryImages.forEach(function(image) {
        image.addEventListener('click', () => {
            let getElementCss = window.getComputedStyle(image);
            letFullImgUrl = getElementCss.getPropertyValue();
        });
    });
}