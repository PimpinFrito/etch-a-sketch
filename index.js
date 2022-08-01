const container = document.createElement('div');
container.classList.add('container');
const body = document.querySelector('body');
body.appendChild(container);

function start(){
    addBoxes(100);
}

function addBoxes(amountOfBoxes){
    buildContainer(amountOfBoxes);
    for(start = 0;start <  amountOfBoxes; start++){
        let box = document.createElement('div');
        box.classList.add('box');
        box.addEventListener('mouseover',(e)=>{colorBox(box,e)});
        container.appendChild(box);
    }    
}

function buildContainer(amountOfBoxes){
    let containerSide = Math.sqrt(amountOfBoxes)*80;
    container.style.width = `${containerSide}px`;
    container.style.height = `${containerSide}px`;
    console.log(containerSide);
}

function colorBox(box, e){
    let isClicked =e.buttons == true;
    if(isClicked){
        box.style.backgroundColor= 'black';
    }
}

start();