// if () {}
const pjat = document.querySelectorAll('p') // i merr i shtin array
const inputi = document.querySelector('input').value;



if (inputi === "color a")
{
for (let i = 0; i < pjat.length; i++) {
    pjat[i].style.color = 'lime' // ja qet krejtve emrin 1 ka 1 loop
}
}