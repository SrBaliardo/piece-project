const buttons = document.querySelectorAll('.button');
const character = document.querySelectorAll('.character');

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        unselectButton();
        unselectCharacter();

        button.classList.add('selected');
        character[index].classList.add('selected');
    });
});

function unselectCharacter() {
    const characterSelected = document.querySelector('.character.selected');
    characterSelected.classList.remove('selected');
}

function unselectButton() {
    const buttonSelected = document.querySelector('.button.selected');
    buttonSelected.classList.remove('selected');
}