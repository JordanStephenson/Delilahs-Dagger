let galleryImages = document.querySelectorAll('.gallery-pics .img');
let getLatestOpenedImg;
let windowWidth = window.innerWidth;


  
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const socialLinks = document.querySelector('.social-links');
//Toggle nav

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        //Animate links

    navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
        socialLinks.style.animation = 'navLinkFade 0.5s ease forwards 1.2s';
    });
    //Burger animation
    burger.classList.toggle('toggle');

});

}
navSlide();

/* Parallax */

const parallax = document.querySelectorAll('.slide');

window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    parallax.forEach((slide, index) => {
        slide.style.backgroundPositionY = offset * 0.7 + 'px';
    });
});

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;



const nextSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for next slide
    if(current.nextElementSibling) {
        //Add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        //Add current to start
        slides[0].classList.add('current');
    }     
    setTimeout(() => current.classList.remove('current')); 
    
}

const prevSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for previous slide
    if(current.previousElementSibling) {
        //Add current to previous sibling
        current.previousElementSibling.classList.add('current');
    } else {
        //Add current to last
        slides[slides.length -1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
    nextSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});
prev.addEventListener('click', e => {
    prevSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// Auto slide
if(auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}

/* Timeline animations*/

var tl = new TimelineMax();

tl.from('.landing-page', 2, {
    opacity: 0,
    y: 20,
    ease: Power2.easeOut
}, 0);
tl.from('.landing-page h2', 2, {
    opacity: 0,
    y: 10,
    ease: Power2.easeOut
}, .5) ;
tl.from('.button', 2, {
    opacity: 0,
    y: 10,
    ease: Power2.easeOut
}, 1);
tl.from('.artists .container', 2, {
    opacity: 0,
    y: 10,
    ease: Power2.easeOut
}, 0.2);
tl.from('.gallery', 2, {
    opacity: 0,
    y: 10,
    ease: Power2.easeOut
}, 0.2);




/* JQuery smooth scrolling */
$('.nav-links a').on('click', function(e) {
    if(this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top 
        }, 1500)
    }
})
$('.dagger-img a').on('click', function(e) {
    if(this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top 
        }, 1500)
    }
})



/* View gallery image */

if(galleryImages) {
    galleryImages.forEach(function(image,index) {
        image.addEventListener('click', () => {
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue('background-image');
            let getImgUrlPos = getFullImgUrl.split('IMG/');
            let setNewImgUrl = getImgUrlPos[1].replace('")', '');

            getLatestOpenedImg = index + 1;
            let container = document.body;
            let newImgWindow = document.createElement('div');
            
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute('class', 'img-window');
            newImgWindow.setAttribute('onclick', 'closeImg()' );
            let newImg = document.createElement('img');
            newImgWindow.appendChild(newImg); 
            newImg.setAttribute('src', 'IMG/' + setNewImgUrl);
            newImg.setAttribute('id', 'current-img');

            newImg.onload = function() {
                let imgWidth = this.width;
                let calcImgToEdge = ((windowWidth -imgWidth) / 2) - 80;

                newImg.style.animation = `navLinkFade 0.7s ease forwards`;
                let newPrevBtn = document.createElement('a');
                let btnPrevText = document.createTextNode('Prev');
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute('class', 'img-btn-prev');
                newPrevBtn.setAttribute('onclick', 'changeImg(0)');
                newPrevBtn.style.cssText = 'left: '+ calcImgToEdge + 'px;';
    
                let newNextBtn = document.createElement('a');
                let btnNextText = document.createTextNode('Next');
       
                newPrevBtn.style.animation = `navLinkFade 0.7s ease forwards`;
 
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute('class', 'img-btn-next');
                newNextBtn.setAttribute('onclick', 'changeImg(1)');
                newNextBtn.style.cssText = 'right: '+ calcImgToEdge + 'px;';
                newNextBtn.style.animation = `navLinkFade 0.7s ease forwards`;
            };
 
        });
    });
}

/* Animate images */

/* Close gallery image */

function closeImg() {
    document.querySelector('.img-window').remove();
    document.querySelector('.img-btn-next').remove();
    document.querySelector('.img-btn-prev').remove();
    

}
/* Change gallery image */

function changeImg(changeDir) {
    document.querySelector('#current-img').remove();

    let getImgWindow = document.querySelector('.img-window');
    let newImg = document.createElement('img');
    getImgWindow.appendChild(newImg);
    newImg.style.animation = `navLinkFade 0.7s ease forwards`;

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
    newImg.setAttribute('src', 'IMG/img' + calcNewImg + '.png');
    newImg.setAttribute('id', 'current-img');

    getLatestOpenedImg = calcNewImg;

}
