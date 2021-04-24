const openModalTriggerEl = document.querySelector(".trigger");
const closeModalTriggerEl = document.querySelector(".close");
const modalEl = document.querySelector(".modal");


const main = () => {
  openAndCloseModal();
};

const openAndCloseModal = () => {
  openModalTriggerEl.addEventListener("click", () => {
    modalEl.classList.add("open");
  });

  closeModalTriggerEl.addEventListener("click", () => {
    modalEl.classList.remove("open");
  });


  //if window is clicked, we remove open from modal 
  window.addEventListener('click', (e) => {

    // if e.target is modal, we remove the class open from it. 
    if(e.target === modalEl) {
        modalEl.classList.remove('open')
    }
  })
};

main();

/* it becomes as a toggle */

/*   if(isOpen === true) {
        modalEl.classList.add('open')
        modalEl.classList.remove('close')
    } else {
        modalEl.classList.add('close')
        modalEl.classList.remove('open')
    }

     isOpen = !isOpen// toggle true or false
 */
