
function checkanswer(){
let name = document.getElementById('JS-name');

let value = name.value.replace(/\s/g, "");

if (value === "ECMAScript"){
    document.getElementById('answer').innerHTML = "Right!"
} else {
    document.getElementById('answer').innerHTML = "Didn't know?ECMAScript!"
};

};

