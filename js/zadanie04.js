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