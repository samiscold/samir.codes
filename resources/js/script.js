document.getElementById("result")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("click").click();
    }
});

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


function tabSwitch() {


    var img = document.createElement("img");
    img.src = "resources/img/anuloje.svg";

    var img2 = document.createElement("img");
    img2.src = "resources/img/cmd.png";

    img.className = 'anuloje-x';
    img.id = "anulojex";
    img.onclick =  closeNewTab;

    img2.className = 'cmd-icon2';


    var ulLocation = document.getElementsByClassName('abc')[0];
    var whereTab = document.getElementById('listid');

    var addTab = document.createElement('li');
    addTab.className = 'first-tab';
    addTab.id = "listid";

    addTab.className = 'active';

        
    
    // addTab.style.display = 'block';



    // for (let i = 0; i < ulLocation.length; i++) {
    //     addTab[i].classList.remove("active");
    //   }
    addTab.innerHTML = "github:\samir.starlabs\blank";
    addTab.appendChild(img2);

    ulLocation.appendChild(addTab);
    addTab.appendChild(img);


    // var x = document.getElementById("secondtab");
    // var shto = document.getElementById("shto");
    // if(x.style.display == 'none') {
    //     x.style.display = 'block';
    // }
    // else {
    // x.style.display = "block";
    // }

    
}






function closeTab() {
    var whereTab = document.getElementById('listid');
    var getHeader = document.querySelector('header');
    if (whereTab.style.display == 'block') {
        whereTab.style.display = 'none';
    } else {
        whereTab.style.display = "none";
        getHeader.style.display = "none";
        closeFunction();

    }

}

function showtab() {
    var showElement = document.getElementById("element");
    var getHeader = document.querySelector('header');

   showElement.addEventListener("mouseover", event => {
    getHeader.style.visibility = "visible";


  });
  

  showElement.addEventListener("mouseout", event => {
    getHeader.style.visibility = "invisible";

  });
  

}

function closeNewTab() {
    for (i = 0; i < 100; i++) {
        var aktiv = document.getElementsByClassName('active')[i];

    if (aktiv.style.display == 'block') {
        aktiv.style.display = 'none';
    } else {
        aktiv.style.display = "none";
    }

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