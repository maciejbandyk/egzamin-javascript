const box = document.querySelector('#container');
const buttons = document.querySelectorAll('button');
const showText = function(text) { 
    box.textContent = text;
};

Array.from(buttons).forEach(button => {
  button.addEventListener('click', () => showText(button.getAttribute('data-text')));
});