// if () {}
const pjat = document.querySelectorAll('p'); // i merr i shtin array

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


function closeFunction() {
    var r = confirm("https://www.youtube.com/watch?v=kaFTnw0xUq8");
    if (r == true) {
        x = window.close();

    } else {
        x = "Cancel was pressed";
    }

}


function test() {
    var fixappend = document.getElementsByClassName('second-text')[0];
    var paragraph = document.createElement('p');
    paragraph.id = "wronginput";
    fixappend.appendChild(paragraph);
}


function myFunction() {
    let inputi = document.getElementById('result').value;
    console.log(inputi);


    var c = document.getElementById("wronginput");

    if (inputi === "color a") {
        for (let i = 0; i < pjat.length; i++) {
            pjat[i].style.color = 'lime'; // ja qet krejtve emrin 1 ka 1 loop
        }

        return;
    }



    // if (inputi === "cls"){
    //     if(abc.style.display  === "none") {
    //         abc.style.display = 'block'; // ja qet krejtve emrin 1 ka 1 loop
    //     }
    //     else {abc.style.display  = "none"}
    // }


    var abc = document.getElementById("wronginput");

    if (inputi === "cls") {
        abc.parentNode.removeChild(abc);
        for (let i = 0; i < pjat.length; i++) {
            pjat[i].style.color = 'white'; // ja qet krejtve emrin 1 ka 1 loop
        }

    } else {


        var komandat = [' \"cls\" to clear', '\"color a\" to change the color']
        test();
        abc.innerHTML += "<span> '" + inputi + "' </span> is not recognized as an internal <br> or external command, please try: <br> <span>" + komandat[random(0, komandat.length)] + "</span> <br><br>";

    }

}