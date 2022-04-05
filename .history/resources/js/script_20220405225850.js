
particlesJS('particles-js',
  
{
	"particles": {
	  "number": {
		"value": 40,
		"density": {
		  "enable": true,
		  "value_area": 1736.2070190114673
		}
	  },
	  "color": {
		"value": "#00ff5a"
	  },
	  "shape": {
		"type": "edge",
		"stroke": {
		  "width": 0,
		  "color": "#000000"
		},
		"polygon": {
		  "nb_sides": 5
		},
		"image": {
		  "src": "img/github.svg",
		  "width": 100,
		  "height": 100
		}
	  },
	  "opacity": {
		"value": 1,
		"random": true,
		"anim": {
		  "enable": true,
		  "speed": 1,
		  "opacity_min": 0,
		  "sync": false
		}
	  },
	  "size": {
		"value": 3,
		"random": true,
		"anim": {
		  "enable": false,
		  "speed": 4,
		  "size_min": 0.3,
		  "sync": false
		}
	  },
	  "line_linked": {
		"enable": false,
		"distance": 150,
		"color": "#ffffff",
		"opacity": 0.4,
		"width": 1
	  },
	  "move": {
		"enable": true,
		"speed": 1,
		"direction": "none",
		"random": true,
		"straight": false,
		"out_mode": "out",
		"bounce": false,
		"attract": {
		  "enable": false,
		  "rotateX": 600,
		  "rotateY": 600
		}
	  }
	},
	"interactivity": {
	  "detect_on": "canvas",
	  "events": {
		"onhover": {
		  "enable": true,
		  "mode": "bubble"
		},
		"onclick": {
		  "enable": true,
		  "mode": "remove"
		},
		"resize": true
	  },
	  "modes": {
		"grab": {
		  "distance": 400,
		  "line_linked": {
			"opacity": 1
		  }
		},
		"bubble": {
		  "distance": 250,
		  "size": 0,
		  "duration": 2,
		  "opacity": 0,
		  "speed": 3
		},
		"repulse": {
		  "distance": 400,
		  "duration": 0.4
		},
		"push": {
		  "particles_nb": 4
		},
		"remove": {
		  "particles_nb": 2
		}
	  }
	},
	"retina_detect": true
  }
  
);
  
  // smooth 



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


	// var c = document.getElementById("wronginput");
	const pjat = document.querySelectorAll('.ggg');
	

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