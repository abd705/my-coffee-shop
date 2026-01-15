//Get Elements from the DOM
const q = document.querySelectorAll('.q');
const a = document.querySelectorAll('.a');
const arr = document.querySelectorAll('.arrow');
//Select All 'q' elements
for (let i = 0; i < q.length; i++) {
    //Add Click Event to All 'q' Elements
    q[i].addEventListener('click', () => {
        a[i].classList.toggle('a-opened');
        arr[i].classList.toggle(arrow - rotated);
    });
}
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    //Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
})
menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});