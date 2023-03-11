

function getAnimalsFromLocalStorage() {
    const animals = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("animal_")) {
        const data = JSON.parse(localStorage.getItem(key));
        animals.push(data);
      }
    }
    return animals.length > 0 ? animals : null;
}

const animalGrid = document.querySelector('.animals');

function clearGrid(){
    while(animalGrid.childElementCount > 0){
        animalGrid.removeChild(animalGrid.firstChild);
    }
}

function addAnimals(){
    window.location.href = "adopt.html";
}

function releaseAnimals(name){
    localStorage.removeItem('animal_' + name);
    loadGrid();
}

function getElementId(e){
    const elementId = e.target.id;
    releaseAnimals(elementId);
}

function implementRelease(){
    const setFreeButtons = document.querySelectorAll('.remove');
    let buttons = Array.from(setFreeButtons);
    for(const el of buttons){
        el.addEventListener('click', getElementId);
    }
}

function implementAdd(){
    const addAnimalButton = document.querySelector('.addAnimal');
    addAnimalButton.addEventListener('click', addAnimals);
}

function loadGrid(){
    clearGrid();
    const gridData = getanimalsFromLocalStorage();
    if(gridData === null){
    const addAnimal = document.createElement('img');
    addAnimal.classList.add('addAnimal');
    addAnimal.setAttribute('src', 'addAnimal.png');
    animalGrid.appendChild(addAnimal);
    }
    else{
    gridData.forEach(element => {
        const gridPair = document.createElement('div');
        const animal = document.createElement('img');
        animal.classList.add('animal');
        animal.setAttribute('src', element.url);
        const releaseBtn = document.createElement('button');
        releaseBtn.classList.add('release');
        releaseBtn.setAttribute('id', element.name);
        releaseBtn.textContent = 'Release animal';

        gridPair.appendChild(animal);
        gridPair.appendChild(releaseBtn);
        animalGrid.appendChild(gridPair);
    });
    const addanimal = document.createElement('img');
    addanimal.classList.add('addanimal');
    addanimal.setAttribute('src', 'addanimal.png');
    animalGrid.appendChild(addanimal);
    }
    implementRelease();
    implementAdd();
}

loadGrid();