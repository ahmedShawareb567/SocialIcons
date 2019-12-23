
let mainSec = document.querySelector('.socialIcons'),
    ulElem = mainSec.children[0],
    liElements = mainSec.children[0].children,
    backEle = document.getElementById('backEle'),
    i;

    var bgcolor;

    for (i = 0; i < liElements.length; i++) {
        liElements[i].addEventListener('click',moveFunc(i));
    }
    
    bgcolor = [
        '#ff9d76',
        '#51eaea',
        '#fe346e',
        '#ffc55c'
    ];

    mainSec.style.width = `${window.innerWidth}px`;
    mainSec.style.height = `${window.innerHeight}px`;

    window.addEventListener('resize', () => {
        mainSec.style.width = `${window.innerWidth}px`;
        mainSec.style.height = `${window.innerHeight}px`;
    });

function moveFunc(element) {
    return function (e) {
        let g;
        for (g = 0; g < liElements.length; g++){
            backEle.style.animation = 'none';
            backEle.style.backgroundColor = 'transparent';
        }
        if (element == '0') {
            backEle.style.backgroundColor = bgcolor[0];
        } else if (element == '1'){
            backEle.style.backgroundColor = bgcolor[1];
        } else if (element == '2'){
            backEle.style.backgroundColor = bgcolor[2];
        } else {
            backEle.style.backgroundColor = bgcolor[3];
        }
        backEle.style.transition = 'left .3s linear';
        backEle.style.opacity = 1;
        backEle.style.left = `${liElements[element].offsetLeft}px`;
        backEle.style.animation = 'scalXd .3s linear 1';
    }
}