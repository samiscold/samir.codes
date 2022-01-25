// if () {}
const pjat = document.querySelectorAll('p') // i merr i shtin array

function myFunction() {
    let inputi = document.getElementById('result').value;
    console.log(inputi);

 

var abc = document.getElementById("wronginput");
if (inputi === "color a"){
for (let i = 0; i < pjat.length; i++) {
    pjat[i].style.color = 'lime' // ja qet krejtve emrin 1 ka 1 loop
}
return;
}

// if (inputi === "cls"){
//     if(abc.style.display  === "none") {
//         abc.style.display = 'block'; // ja qet krejtve emrin 1 ka 1 loop
//     }
//     else {abc.style.display  = "none"}
// }

var fixappend = document.getElementsByClassName('second-text');


if(inputi === "cls") {
        abc.parentNode.removeChild(abc);
        const paragraph = document.createElement('p');
        paragraph.id = "wronginput";
        fixappend.appendChild(paragraph);
}

else {
    

    abc.innerHTML += "'" + inputi + "' is not recognized as an internal <br> or external command, p.s try <br>";
}

}

// if cls i = 0