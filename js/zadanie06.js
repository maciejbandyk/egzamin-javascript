window.addEventListener("DOMContentLoaded", () => {
    var buttons = document.getElementById("buttons");
    var list = document.getElementById("shopping-list");

    buttons.addEventListener("click", (e) => {
        if (e.target.id == "button-1") {
            var node = document.createElement("LI"); 
            var textnode =  
                document.createTextNode("Chlyb"); 
            node.appendChild(textnode);
            list.appendChild(node);
        }
        if (e.target.id == "button-2") {
            list.removeChild(list.lastChild);
        }
        if (e.target.id == "button-3") {
            var node2 = document.createElement("LI");
            node2.appendChild(list.children[1].innerText);
            list.appendChild(node2);
        }
    });
});