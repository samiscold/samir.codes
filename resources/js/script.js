document.getElementById("result")
    .addEventListener("keyup", function (event) {
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

var counter = 0;

function tabSwitch() {

    //append the cmd icon and x icon
    var img = document.createElement("img");
    img.src = "resources/img/anuloje.svg";

    var img2 = document.createElement("img");
    img2.src = "resources/img/cmd.png";

    img.className = 'anuloje-x';
  
    img.id = "anulojex";
    img.onclick = closeNewTab;

    img2.className = 'cmd-icon2';


    // append the li nav
    var ulLocation = document.getElementsByClassName('abc')[0];
    var whereTab = document.getElementById('listid');

    var addTab = document.createElement('li');
    addTab.className = 'active';

    for(let i =0; i<10; i++) {

        addTab.innerHTML = "github:\samir.starlabs\blank";
        addTab.appendChild(img2);
        ulLocation.appendChild(addTab);
        addTab.appendChild(img);
        addTab.className = 'active ' + i;
        addTab.id = "listid";
        
    }



    // addTab.innerHTML = "github:\samir.starlabs\blank";
    // addTab.appendChild(img2);

    // ulLocation.appendChild(addTab);
    // addTab.appendChild(img);

    

 // onclick counter ++ function
}




// function closeTab(event) {
//     event.target.closest('li.tab').remove();
//  }

// function closeTab() {
//     var whereTab = document.getElementById('listid');
//     var getHeader = document.querySelector('header');
//     if (whereTab.style.display == 'block') {
//         whereTab.style.display = 'none';
//     } else {
//         whereTab.style.display = "none";
//         getHeader.style.display = "none";
//         closeFunction();

//     }

// }

function closeNewTab() {
        var aktiv = document.getElementsByClassName('active')[0];

        // if (aktiv.style.display == 'block') {
        //     aktiv.style.display = 'none';
        // } else {
        //     aktiv.style.display = "none";
        // }
        event.target.closest('li').remove();

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

    if (inputi === "get_blog()") {
        window.open("blog.html", "_self");
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


        var komandat = [' \"cls\" to clear', '\"color a\" to change the color', '\"get_blog()\" to go to blog page'];
        test();
        abc.innerHTML += "<span> '" + inputi + "' </span> is not recognized as an internal <br> or external command, please try: <br> <span>" + komandat[random(0, komandat.length)] + "</span> <br><br>";

    }

}