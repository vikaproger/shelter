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


const contentItems = document.querySelector('.pets__slider');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const startBtn = document.querySelector('.start');
const endBtn = document.querySelector('.end');
const button  = document.querySelector('.page');

let currPage = 1;
let pagesCount;
let array = [];
let newArray = [];

pets.map(element => {
    let item = document.createElement('div');
    let img = document.createElement('img');
    let p = document.createElement('p');
    let button = document.createElement('button');

    item.className = 'card1';
    p.className = 'card1.p';
    button.className = 'pets-slider-btn';
    
    contentItems.appendChild(item);
    item.appendChild(img);
    item.appendChild(p);
    item.appendChild(button);

    img.setAttribute('src',`${element.img}`);
    // item.setAttribute('alt','image');
    p.innerText = `${element.name}`;
    button.innerText = 'Learn more';
});

if(document.documentElement.clientWidth >= 1280){
    pagesCount = 6;

}
if(document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 1280){
    pagesCount = 8;
}
if(document.documentElement.clientWidth < 768){
    pagesCount = 16;
}
function getNewArray(maxPages){
    for(let i = 0; i < 6; i++){
        newArray.push(...contentItems.children);
    }
    let count = newArray.length/maxPages;
    for(let i = 0; i < maxPages; i++){
        let a = newArray.splice(0, count);
        if(i===0){
            array.push(randomArray(a))
        }else{
            array.push(randomArray(a));
        }
    }
}


getNewArray(pagesCount);
contentItems.innerHTML = '';
contentItems.append(...array[currPage-1]);


function opacity(){
    contentItems.style.opacity = '0';
    contentItems.style.transition = 'opacity 0.7s';
}

nextBtn.addEventListener('click', ()=>{
    // opacity();
    
        contentItems.style.opacity = '0';
    setTimeout(()=>{        contentItems.style.transition = 'opacity 0.7s';
    ++currPage;
    if(currPage > 1){
        prevBtn.disabled = false;
        startBtn.disabled = false;
    }
    if(pagesCount === currPage){
        nextBtn.disabled = true;
        endBtn.disabled = true;
    }
    button.textContent = `${currPage}`;
    contentItems.innerHTML = '';
    
    contentItems.append(...array[currPage-1]);
    contentItems.style.opacity = '1';
},500)
});

prevBtn.addEventListener('click', ()=>{
    contentItems.style.opacity = '0';
    setTimeout(()=>{        contentItems.style.transition = 'opacity 0.7s';
    --currPage;
    if(currPage < 2){
        prevBtn.disabled = true;
        startBtn.disabled = true;
    }
    if(pagesCount -1 === currPage){
        nextBtn.disabled = false;
        endBtn.disabled = false;
    }
    button.textContent = `${currPage}`;
    contentItems.innerHTML = '';
    contentItems.append(...array[currPage-1]);
    contentItems.style.opacity = '1';
},500)
});

endBtn.addEventListener('click', ()=>{
    // opacity();
    
        contentItems.style.opacity = '0';
    setTimeout(()=>{        contentItems.style.transition = 'opacity 0.7s';
    currPage = pagesCount;
    
        prevBtn.disabled = false;
        startBtn.disabled = false;
    
        nextBtn.disabled = true;
        endBtn.disabled = true;
    
    button.textContent = `${currPage}`;
    contentItems.innerHTML = '';
    
    contentItems.append(...array[currPage-1]);
    contentItems.style.opacity = '1';
},500)
});

startBtn.addEventListener('click', ()=>{
    contentItems.style.opacity = '0';
    setTimeout(()=>{        contentItems.style.transition = 'opacity 0.7s';
    currPage = 1;
        prevBtn.disabled = true;
        startBtn.disabled = true;
    
    
        nextBtn.disabled = false;
        endBtn.disabled = false;
    
    button.textContent = `${currPage}`;
    contentItems.innerHTML = '';
    contentItems.append(...array[currPage-1]);
    contentItems.style.opacity = '1';
},500)
});




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

const petsCards = document.querySelectorAll('.card1');
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
    if (event.target.classList.contains('.popup') || event.target.classList.contains('.popup__wrapper')
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


// random
// let pets = [];
// const request = new XMLHttpRequest();
// request.open('GET', '/pages/main/pets.json');

// request.onload = () => {
//     pets = JSON.parse(request.response);
//     createPets();

// }

// const createPets = () => {
//     const elem = document.querySelector('.slider__cards');
//     elem.innerHTML += createElements();
// }

// createElements = () => {
//     let str
//     for (let i = 0; i < pets.length; i++) {

//     }
// }


// request.send();