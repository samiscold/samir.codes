// track the submit button with enter
document.getElementById("result").addEventListener("keyup", function (event) {
	event.preventDefault();
	if (event.keyCode === 13) {
		document.getElementById("click").click();
	}
});

function random(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}


function closeFunction() {
	var r = confirm("👨‍💻bye");
	if (r == true) {
		x = window.close();
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


	addTab.innerHTML = "github:\samir.codes\\blank";
	addTab.appendChild(img2);
	ulLocation.appendChild(addTab);
	addTab.appendChild(img);
	addTab.id = "listid";
}




function closeTab(event) {
	event.target.closest('li.tab').remove();
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

function closeNewTab() {
	var aktiv = document.getElementsByClassName('active')[0];
	event.target.closest('li').remove();
}

function test() {
	var abc = document.getElementById("wronginput");


	var fixappend = document.getElementsByClassName('print-here')[0];
	var paragraph = document.createElement('p');
	paragraph.id = "wronginput";
	fixappend.appendChild(paragraph);

}


function myFunction() {
	let inputi = document.getElementById('result').value;
	console.log(inputi);


	var c = document.getElementById("wronginput");
	const pjat = document.querySelectorAll('p');


	if (inputi === "color a") {
		for (let i = 0; i < pjat.length; i++) {
			pjat[i].style.color = 'lime';
		}

		return;
	}

	if (inputi === "get_blog()") {
		window.open("blog.html", "_self");
		return;
	}

	if (inputi === "get_index()") {
		window.open("index.html", "_self");
		return;
	}

	if (inputi === "get_skills()") {
		var testtest = document.getElementsByClassName("skillss")[0];
		testtest.style.display = "block";
		return;
	}

	var abc = document.getElementById("wronginput");
	var testtest = document.getElementsByClassName("skillss")[0];
	var fixappend = document.getElementsByClassName('print-here')[0];

	if (inputi === "cls") {
		abc.parentNode.removeChild(abc);

		testtest.style.display = "none";
		for (let i = 0; i < pjat.length; i++) {
			pjat[i].style.color = 'white';
		}

	} else {

		test();
		var komandat = [' \"cls\" to clear', '\"color a\" to change the color', '\"get_blog()\" to go to blog page', "\"get_index()\" to go to home page"];
		abc.innerHTML += "<span> '" + inputi + "' </span> is not recognized as an internal <br> or external command, please try: <br> <span>" + komandat[random(0, komandat.length)] + "</span> <br><br>";
	}

}

function displayCommands() {
	var getdisplay = document.getElementsByClassName('overlay')[0];
	getdisplay.style.display = "block";

	window.onclick = function (event) {
		if (event.target == getdisplay) {
			getdisplay.style.display = "none";
		}
	}
}

function goTop() {
	window.scrollTo(0,0);
}