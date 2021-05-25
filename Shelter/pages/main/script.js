// Burger Menu
const burgerImg  = document.querySelector('.burger__img');
const burgerLogo = document.querySelector('.burger-menu__logo');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuBurger = document.querySelector('.burger-menu__header-burger');
const burgerMenuWrapper = document.querySelector('.burger-menu__wrapper');

burgerImg.addEventListener('click', () => {
    burgerImg.style.transition = '1s';
    burgerImg.style.transform = 'rotate(90deg)';
    document.body.style.overflow = 'hidden';
    burgerMenu.style.display = 'flex';
    setTimeout(()=>{
        burgerMenuBurger.style.transform = 'rotate(90deg)';
        burgerMenu.children[0].style.left = '0';
    }, 100);

});

burgerMenuBurger.addEventListener('click', () => {
    burgerMenuBurger.style.transform = 'rotate(0)';
    burgerMenu.children[0].style.left = '320px';
    document.body.style.overflow = 'auto';
    burgerImg.style.transform = 'rotate(0)';
        burgerImg.style.transition = '1s';
    setTimeout(()=>{        
        burgerMenu.style.display = 'none';
    }, 700);   
});

burgerMenu.addEventListener('click', function(e) {
    if ( e.target.className !== "burger-menu__wrapper" && !burgerMenuWrapper.contains(e.target)) {
        burgerMenuBurger.style.transform = 'rotate(0)';
        burgerMenu.children[0].style.left = '320px';
        document.body.style.overflow = 'auto';
        burgerImg.style.transform = 'rotate(0)';
            burgerImg.style.transition = '1s';
        setTimeout(()=>{        
            burgerMenu.style.display = 'none';
        }, 700); 
    }
});

burgerLogo.addEventListener('click', () => {
    document.location.href = "../main/";
})



// let pets = [];
// const request = new XMLHttpRequest();
// request.open('GET', 'pets.js');

// request.onload = () => {
//     pets = JSON.parse(request.response);
//     // createPets();

// }


//Popup
// const popup = document.querySelector('.popup');
// const popupWrapper = document.querySelector('.popup__wrapper');
// const card = document.querySelector('.card1');
// // card.addEventListener('click', () => {

// // })

const slider = document.querySelector('.slider__cards');
const leftBtn = document.querySelector('.arr-btn.left');
const rightBtn = document.querySelector('.arr-btn.right');
const leftBtn2 = document.querySelector('.arr-btn.left2');
const rightBtn2 = document.querySelector('.arr-btn.right2');

// if(document.documentElement.clientWidth > 1279){
//     slider.style.columnGap = '90px';
// }

slider.style.overflow =  'hidden';

pets.map(element => {
    let item = document.createElement('div');
    let img = document.createElement('img');
    let p = document.createElement('p');
    let button = document.createElement('button');

    item.className = 'card1';
    p.className = 'card1.p';
    button.className = 'pets-slider-btn';
    
    slider.appendChild(item);
    item.appendChild(img);
    item.appendChild(p);
    item.appendChild(button);

    img.setAttribute('src',`${element.img}`);
    // item.setAttribute('alt','image');
    p.innerText = `${element.name}`;
    button.innerText = 'Learn more';
});

const petsCards = document.querySelectorAll('.card1');
let count;
if(document.documentElement.clientWidth >= 1280){
    count = 3;
}

if(document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 1280){
    count = 2;
}
if(document.documentElement.clientWidth < 768){
    count = 1;
}


leftBtn.addEventListener('click', ()=>{
    getItems(count);
});

rightBtn.addEventListener('click', ()=>{
    getItems(count);
});

leftBtn2.addEventListener('click', ()=>{
    getItems(count);
});

rightBtn2.addEventListener('click', ()=>{
    getItems(count);
});

let itemSlider;
let arrSlider = [...slider.children];
arrSlider = randomArray([...arrSlider]);
let firstItems = arrSlider.splice(0,count);
let arrayItemsSlider = randomArray([...arrSlider]);
slider.innerHTML = '';
// for(let i = 0; i < count; i++){
//     slider.append(firstItems[i]);
// }
slider.append(...firstItems);

function opacity(){
    slider.style.opacity = '0';
    slider.style.transition = 'opacity 0.7s';
}

function getItems(count){
    opacity();
    setTimeout(()=>{
        slider.innerHTML = '';
        slider.style.opacity = '1';
        arrayItemsSlider.push(...firstItems);
        firstItems = [];
        itemSlider = arrayItemsSlider.splice(0,count);
        for(let i = 0; i < count; i++){
            slider.append(itemSlider[i]);
        }
        randomArray(arrayItemsSlider);
        arrayItemsSlider.push(...itemSlider);   
    },700)
        
}

function randomArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
window.onresize = function() {
    document.location.reload();
};

// getItems(count);




const popupCloseButton = document.querySelector('.popup__btn');
const popup = document.querySelector('.popup');

class Popup{
    constructor(namePet){
       this.block =  document.querySelector('.popup');
       this.namePet = namePet;
    }

    addBlock(){
       pets.forEach(element => {
           if(element.name === this.namePet){
                this.block.style.display = 'flex';
                document.querySelector('body').style.overflow = 'hidden';
                document.querySelector('.popup__content-name').textContent = `${element.name}`;
                document.querySelector('.popup__content-animal').textContent = `${element.type} - ${element.breed}`;
                document.querySelector('.popup__content-description').textContent = `${element.description}`;
                document.querySelector('.Age').textContent = `${element.age}`;
                document.querySelector('.Inoculations').textContent = `${element.inoculations}`;
                document.querySelector('.Diseases').textContent = `${element.diseases}`;
                document.querySelector('.Parasites').textContent = `${element.parasites}`;
                if(document.documentElement.clientWidth > 767){
                    document.querySelector('.popup__window-img').setAttribute('src',`../../pets-${element.img}`);
                 } // }else{
                //     let t = document.querySelector('.popup__window-img');
                //     if(t!==null){
                //         t.remove();
                //     }
                // }
            }
       })
    }
    removeBlock(){
        document.querySelector('body').style.overflow = 'auto';
        this.block.style.display = 'none';
    }
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup') || event.target.classList.contains('popup__wrapper')
      || event.target.closest('.popup__btn')){
        new Popup().removeBlock();
    }
});

document.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('popup') || event.target.classList.contains('popup__wrapper')
    || event.target.closest('.popup__btn')){
        let button = document.querySelector('.popup__btn');
        button.style.background = '#F1CDB3';
        button.style.border = '2px solid #F1CDB3';
  }
});

document.addEventListener('mouseout', (event) => {
    if (event.target.classList.contains('popup') || event.target.classList.contains('popup__content')
    || event.target.closest('.popup__btn')){
        let button = document.querySelector('.popup__btn');
        button.style.background = '';
        button.style.border = '';
  }
});

petsCards.forEach(element=>{
    element.addEventListener('click',()=>{
        let block = element.closest('.card1');
        new Popup(block.children[1].textContent).addBlock();
    })
});
