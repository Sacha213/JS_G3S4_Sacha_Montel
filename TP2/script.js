
window.addEventListener("load", init);

function verification(){
	var valide = true;

	var age = document.getElementById('age').value;
	var prenom = document.getElementById('prenom').value;
	var nom = document.getElementById('nom').value;
	var identifiant = document.getElementById('identifiant').value;
	var motdepasse1 = document.getElementById('motdepasse1').value;
	var motdepasse2 = document.getElementById('motdepasse2').value;
	var cgu = document.getElementById('cgu').checked;
	var submit = document.getElementById('submit');

	var regex = new RegExp("^[a-z]{1,12}$");

	if(age<18) valide=false;

	if (!regex.test(identifiant)) valide=false;

	if(!strongPassword(motdepasse1)) valide=false;
	if(motdepasse1 !== motdepasse2) valide=false;

	if(!cgu) valide=false;

	if(valide) submit.disabled = false;
	else submit.disabled = true;

	//console.log(valide);

}

function init(){
	document.getElementById('age').addEventListener('input', verification);
	document.getElementById('prenom').addEventListener('input', verification);
	document.getElementById('nom').addEventListener('input', verification);
	document.getElementById('identifiant').addEventListener('input', verification);
	document.getElementById('motdepasse1').addEventListener('input', verification);
	document.getElementById('motdepasse2').addEventListener('input', verification);
	document.getElementById('cgu').addEventListener('input', verification);

	//Help
	/*
	document.getElementById('age').addEventListener('mouseover', helpAge);
	document.getElementById('prenom').addEventListener('mouseover', helpPrenom);
	document.getElementById('nom').addEventListener('mouseover', helpNom);
	document.getElementById('identifiant').addEventListener('mouseover', helpIdentifiant);
	document.getElementById('motdepasse1').addEventListener('mouseover', helpMotDePasse1);
	document.getElementById('motdepasse2').addEventListener('mouseover', helpMotDePasse2);
	document.getElementById('cgu').addEventListener('mouseover', helpCgu);
	*/
}

function strongPassword(password){
	var txtPassword = document.getElementsByTagName('label')[4];
	var strong = 0;

	if (password.length>=8) strong+=20;

	var regex1 = new RegExp("[A-Z]");
	if (regex1.test(password)) strong+=20;

	var regex2= new RegExp("[a-z]");
	if (regex2.test(password)) strong+=20;

	var regex3 = new RegExp("[0-9]");
	if (regex3.test(password)) strong+=20;

	var regex4 = new RegExp("[^a-zA-Z0-9]");
	if(regex4.test(password)) strong+=20;

	txtPassword.textContent = "Mot de passe : "+strong+"%";

	return (strong == 100);
}


