
const adoptButton = document.querySelector('#animalbutton');
const leftButton = document.querySelector('#ptleft');
const rightButton = document.querySelector('#ptright');
const currentImgEl = document.querySelector('#currentImg');

let animalIndex = 0;

function fetchAnimals(){
    const animals = [
        {url: './startup-media/Otter.PNG', name: 'otter'},
        {url: './startup-media/Otter.PNG', name: 'otter'},
        {url: './startup-media/Otter.PNG', name: 'otter'},
    ];
    return animals;
}

function displayCurrentAnimal(){
    currentImgEl.src = fetchAnimals()[animalIndex].url;
}

function leftImage(){
    if(animalIndex === 0){
        animalIndex = fetchAnimals().length - 1;
    }
    else {
        animalIndex--;
    }
    displayCurrentAnimal();
}

function rightImage(){
    if(animalIndex === (fetchAnimals().length - 1)){
        animalIndex = 0;
    }
    else{
        animalIndex++;
    }
    displayCurrentAnimal();
}

function saveAnimal(){
    localStorage.setItem('animal_' + fetchAnimals()[animalIndex].name, JSON.stringify(fetchAnimals()[animalIndex]));
    window.location.href = "conservation.html";
}

displayCurrentAnimal();
leftButton.addEventListener('click', leftImage);
rightButton.addEventListener('click', rightImage);
animalButton.addEventListener('click', saveAnimal);
