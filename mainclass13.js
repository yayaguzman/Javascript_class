/*
CSS CLASSES WITH JAVASCRIPT
Just like we can set the text with JavaScript, 
we can also change the css classes:

let myDiv = document.createElement('div');
// <div></div>

myDiv.classList.add('firstClass');
// <div class='firstClass'></div>

myDiv.classList.add('secondClass');
// <div class='firstClass secondClass'></div>

myDiv.classList.remove('firstClass');
// <div class='secondClass'></div>

*/
let words = [{
    word: 'Little',
    description: 'Small in size.',
    color: '#FF4081'
}, {
    word: 'Simple',
    description: 'Easily understood or done.',
    color: '#FF5252'
}, {
    word: 'Malicious',
    description: 'Intending to do harm.',
    color: '#FF6E40'
}, {
    word: 'Necessary',
    description: 'Needed to be done.',
    color: '#FFAB40'
}, {
    word: 'Standard',
    description: 'Regularly and widely used.',
    color: '#FFD740'
}];


function createLayerDiv() {
    let layer = document.createElement('div');
    layer.classList.add('fillParent'); // div class
    layer.classList.add('layer'); // div class fillparent layer
    layer.textContent = 'My Layer';  // <div class='fillParent layer'>My Layer</div>
    return layer;
}

function createCoverDiv() {
    let cover = document.createElement('div'); //creates the div
    cover.classList.add('fillparent');
    cover.classList.add('cover');
    cover.textContent = 'My Cover';
    cover.onclick = function () {
        if (cover.style.left === '100%') {
            cover.style.left = '0';
        } else {
            cover.style.left = '100%';
        }
    }
    return cover;
}

function createCardDiv() {
    let card = document.createElement('div');
    card.classList.add('card');
    card.textContent = 'my long text';

    let layer = createLayerDiv();
    card.appendChild(layer);

    let cover = createCoverDiv();
    card.appendChild(cover);

    return card;
}

let options = {
    layerText: 'new Layer Text',
    coverText: 'new Cover Text',
    coverBackgroundColor: '#FFAB40'
};

let list = document.getElementById('wordList');
let card = createCardDiv(); // put the boxes
list.appendChild(card);


function createLayerDiv() {
    let layer = document.createElement('div');  // <div> </div>
    layer.classList.add('fillParent');
    layer.classList.add('layer');
    layer.textContent = 'My Layer';   //<div class="fillParent layer"> </div>

    return layer;
}




/*
let words = [{
   word: 'Little',
   description: 'Small in size.',
   color: '#FF4081'
   */

let arrayObjectValues = Object.values(words);
for (let i = 0; i < arrayObjectValues.length; i++) {
    console.log(arrayObjectValues[i]);
}

