'use strict'; 

const btnShowModal = document.querySelectorAll('.show-modal'); // Selecting all the buttons with the class show-modal and storing them in a variable

const modal = document.querySelector('.modal'); // Selecting the modal element and storing it in a variable

const closeModalBtn = document.querySelector('.close-modal'); // Selecting the close-modal element and storing it in a variable

const overlay = document.querySelector('.overlay'); // Selecting the overlay element and storing it in a variable 

const openModal = function() { // Function to open the modal
    modal.classList.remove('hidden'); // Removing the hidden class from the modal element when the button is clicked

    overlay.classList.remove('hidden'); // Removing the hidden class from the overlay element when the button is clicked
}

const closeModal = function(){
    modal.classList.add('hidden'); // Adding the hidden class to the modal element when the close button is clicked

    overlay.classList.add('hidden'); // Adding the hidden class to the overlay element when the close button is clicked
}

for(let i = 0; i < btnShowModal.length; i++)
    
btnShowModal[i].addEventListener('click', openModal); // Adding an event listener to the button to open the modal when clicked 

closeModalBtn.addEventListener('click', closeModal); // Adding an event listener to the close button to close the modal when clicked

overlay.addEventListener('click', closeModal); // Adding an event listener to the overlay to close the modal when clicked

document.addEventListener('keydown', function(e){ // Adding an event listener to the document to close the modal when the escape key is pressed
    console.log(e.key);

    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal(); 

    }
})