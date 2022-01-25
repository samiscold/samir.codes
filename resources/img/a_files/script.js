// if () {}
const pjat = document.querySelectorAll('p') // i merr i shtin array
function test() {
    var fixappend = document.getElementsByClassName('second-text')[0];
    const paragraph = document.createElement('p');
    paragraph.id = "wronginput";
    fixappend.appendChild(paragraph);
    pharagraph.style.color = 'lime';
    }


function myFunction() {
    let inputi = document.getElementById('result').value;
    console.log(inputi);

 

if (inputi === "color a"){
for (let i = 0; i < pjat.length; i++) {
    pjat[i].style.color = 'lime'; // ja qet krejtve emrin 1 ka 1 loop
}
pharagraph.style.color = 'lime';
return;
}

// if (inputi === "cls"){
//     if(abc.style.display  === "none") {
//         abc.style.display = 'block'; // ja qet krejtve emrin 1 ka 1 loop
//     }
//     else {abc.style.display  = "none"}
// }


var abc = document.getElementById("wronginput");

if(inputi === "cls") {
        abc.parentNode.removeChild(abc);
        for (let i = 0; i < pjat.length; i++) {
            pjat[i].style.color = 'white'; // ja qet krejtve emrin 1 ka 1 loop
        }
}

else {
    test();
    abc.innerHTML += "'" + inputi + "' is not recognized as an internal <br> or external command, p.s try <br>";
}

}


// if cls i = 0