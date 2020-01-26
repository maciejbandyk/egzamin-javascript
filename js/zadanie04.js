//1
window.addEventListener('DOMContentLoaded', () => {
    var elements = document.getElementsByClassName("sample_class");
    
    console.log(getTagsOfElements(elements));
});

function getTagsOfElements(elements) {
    var array = [];
    for (let i = 0; i < elements.length; i++) {
        array.push(elements[i].tagName);
    }
    return array;
}

//2
window.addEventListener('DOMContentLoaded', () => {
    var idElement = document.getElementById("sample_id");
    
    console.log(getClassesOfElement(idElement));
});

function getClassesOfElement(element) {
    const array = [];
    element.classList.forEach(classEl => {
        array.push(classEl);
    });
    return array;
}

//3
window.addEventListener('DOMContentLoaded', () => {
    var items = document.querySelectorAll('.sample_class_2 li');
    console.log(getInnerTextsOfElements(items));
});

function getInnerTextsOfElements(elements) {
    const array = [];
    elements.forEach(el => {
        array.push(el.innerText);
    });
    return array;
}

//4
window.addEventListener('DOMContentLoaded', () => {
    var items = document.querySelectorAll('a');
    console.log(getAddressesOfElements(items));
});

function getAddressesOfElements(elements) {
    const array = [];
    elements.forEach(el => {
        array.push(el.getAttribute("href"));
    });
    return array;
}

//5
window.addEventListener('DOMContentLoaded', () => {
    var items = document.querySelector('.sample_class_3');
    items = items.children;
    console.log(getTagsOfElements(items));
});