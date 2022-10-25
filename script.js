'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); // querySelectorAll - "All" for all 3 modal window
console.log(btnsOpenModal);
const openModal = function () {
  modal.classList.remove('hidden');
  // "hidden" - without dot, because dot is only for selector. ClassList.remove('hidden') - remove class 'hidden', this will show a modal window on the page
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  // without curly braces because we need only one line of block (that will be iterated over and over again
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal); // closeModal without () becuase it will immediately called a function, we don't need it

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // if the modal does not a hidden class, then close the modal
    closeModal();
    // here braces do not interfere, the function will still not be executed immediately
  }
});
