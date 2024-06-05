

window.addEventListener('scroll', function () {
    const navHeader = document.querySelector(".nav__header");
    if (window.scrollY > 80) { 
        navHeader.classList.add("scrolled");
    } else {
        navHeader.classList.remove("scrolled");
    }
});

// const openModalButton = document.querySelector("#openModal");
// const closeModalButton = document.querySelector("#closeModal");
// const modal = document.querySelector("#modal");
// const fade = document.querySelector("#fade");

// const toggleModal = ()=>{
//     [modal, fade].forEach((el) => el.classList.toggle("hide"));
// }


// [openModalButton,closeModalButton,fade].forEach((el) =>{
//     el.addEventListener("click", () => toggleModal());
// });

const modals = [
    {
        openButton: document.querySelector("#openModal"),
        closeButton: document.querySelector("#closeModal"),
        modal: document.querySelector("#modal"),
        fade: document.querySelector("#fade"),
    },
    {
        openButton: document.querySelector("#openModal_2"),
        closeButton: document.querySelector("#closeModal_2"),
        modal: document.querySelector("#modal_2"),
        fade: document.querySelector("#fade_2"),
    },
    {
        openButton: document.querySelector("#openModal_3"),
        closeButton: document.querySelector("#closeModal_3"),
        modal: document.querySelector("#modal_3"),
        fade: document.querySelector("#fade_3"),
    }
];

const toggleModal = (modal, fade) => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

modals.forEach(({openButton, closeButton, modal, fade}) => {
    if (openButton && closeButton && modal && fade) {
        [openButton, closeButton, fade].forEach((el) => {
            el.addEventListener("click", () => toggleModal(modal, fade));
        });
    } else {
        console.error('Missing elements for modal:', {openButton, closeButton, modal, fade});
    }
});
