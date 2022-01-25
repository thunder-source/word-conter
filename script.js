let textarea = document.getElementById("textarea");
let character = document.getElementById("character");
let content = document.getElementById("word");


textarea.addEventListener("input", function(elm){
    let text = this.value;
    // for character
    character.innerHTML = text.length;

    //for words

    text = text.trim();
    let word = text.split(" ");

    let cleanList = word.filter(function (elm) {
       return elm != ""; 
    });

    content.innerHTML = cleanList.length

    
})