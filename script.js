let galleryImages = document.querySelectorAll('.gallery-pics .img');
let getLatestOpenedImg;
let windowWidth = window.innerWidth;


  
const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
const exit = document.getElementById('exit');
const links = document.querySelectorAll('.nav-links li a');

menu.addEventListener('click', (e) => {
    nav.classList.toggle('hide-mobile');
    e.preventDefault();
});
exit.addEventListener( 'click', (e) => {
    nav.classList.add('hide-mobile');
    e.preventDefault();
} )



if(galleryImages) {
    galleryImages.forEach(function(image,index) {
        image.addEventListener('click', () => {
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue('background-image');
            let getImgUrlPos = getFullImgUrl.split('IMG/thumb');
            let setNewImgUrl = getImgUrlPos[1].replace('")', '');

            getLatestOpenedImg = index + 1;

            let container = document.body;
            let newImgWindow = document.createElement('div');
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute('class', 'img-window');
            newImgWindow.setAttribute('onclick', 'closeImg()' );

            let newImg = document.createElement('img');
            newImgWindow.appendChild(newImg); 
            newImg.setAttribute('src', 'IMG/gallery' + setNewImgUrl);
            newImg.setAttribute('id', 'current-img');

            newImg.onload = function() {
                let imgWidth = this.width;
                let calcImgToEdge = ((windowWidth -imgWidth) / 2) - 80;

                let newPrevBtn = document.createElement('a');
                let btnPrevText = document.createTextNode('Prev');
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute('class', 'img-btn-prev');
                newPrevBtn.setAttribute('onclick', 'changeImg(0)');
                newPrevBtn.style.cssText = 'left: '+ calcImgToEdge + 'px;';
    
                let newNextBtn = document.createElement('a');
                let btnNextText = document.createTextNode('Next');
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute('class', 'img-btn-next');
                newNextBtn.setAttribute('onclick', 'changeImg(1)');
                newNextBtn.style.cssText = 'right: '+ calcImgToEdge + 'px;';
            };
 
        });
    });
}

function closeImg() {
    document.querySelector('.img-window').remove();
    document.querySelector('.img-btn-next').remove();
    document.querySelector('.img-btn-prev').remove();

}
function changeImg(changeDir) {
    document.querySelector('#current-img').remove();

    let getImgWindow = document.querySelector('.img-window');
    let newImg = document.createElement('img');
    getImgWindow.appendChild(newImg);

    let calcNewImg;
    if(changeDir === 1) {
        calcNewImg = getLatestOpenedImg + 1;
        if(calcNewImg > galleryImages.length) {
            calcNewImg = 1;
        }
    }
    else if (changeDir === 0) {
        calcNewImg = getLatestOpenedImg - 1;
        if(calcNewImg < 1) {
            calcNewImg = galleryImages.length;
        }
    }
    newImg.setAttribute('src', 'IMG/gallery/img' + calcNewImg + '.png');
    newImg.setAttribute('id', 'current-img');

    getLatestOpenedImg = calcNewImg;



}