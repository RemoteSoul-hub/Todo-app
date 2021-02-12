let submit = document.getElementById('submit');
let clear = document.getElementById('clear');
let form = document.getElementById('item');
let itemList = document.getElementById('itemList');

/// Script that creates the UL / adds Li's after detecting a click on submit 

function addItem(e) {
    e.preventDefault();
// Get Value of input 
    let newItem = document.getElementById('task').value;
    console.log(newItem);
    // Now I need to create a new Li element with the newItem
    let li = document.createElement('li');
    console.log(li);
    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li);
}

// script that detects a click on submit 
form.addEventListener('submit', addItem);


// Script that clears the whole list (clear all button)

function clearAll(e) {
    e.preventDefault();
    // Resets list
   itemList.innerHTML = "";
}
//Listen to event of click then proceed.
clear.addEventListener('click', clearAll);




