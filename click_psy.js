// alert("Je suis dans le document JavaScript pour activer le bouton!");
var bouton = document.getElementById('butt');
var body = document.querySelector('body');
var tabPara = document.querySelectorAll('p');

var selectHeading = document.querySelector('header');
var childsHeading = selectHeading.childNodes;


bouton.onclick = function(){
	bouton.className = "bouton_Psy";
	if(bouton.innerText === "GO NORMAL"){
		bouton.innerText = "GO PSYCHEDELIQUE";
		bouton.style.backgroundColor = "white";
		body.style.backgroundColor = "white";
		bouton.style.color = "black";
//BONUS
		for(var i=0; i<tabPara.length; i++){
			tabPara[i].style.color = "black";
		}
	}
	else{
		bouton.innerText = "GO NORMAL";
		bouton.style.backgroundColor = "magenta";
		body.style.backgroundColor = "magenta";

//BONUS
		for(var i=0; i<tabPara.length; i++){
			tabPara[i].style.color = "blue";
		}
		bouton.style.color = "white";
		heading.style.color = "white";
	}

};

