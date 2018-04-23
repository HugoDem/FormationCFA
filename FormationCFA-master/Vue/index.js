
if (navigator.appVersion.indexOf("Mac")!=-1){
	alert("vous etes sur mac");
}else if (navigator.appVersion.indexOf("Win")!=-1){
	alert("vous etes sur windows");
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function verifyMail(){
	var mail = document.getElementById("mail").value;
	var alert2 = document.getElementById("alert");
	if (!validateEmail(mail)){
		alert2.innerHTML="incorrect email";
		alert2.style.color="red";
	}else {
		alert2.innerHTML="";
		document.getElementById("form").submit();
	}
}
function inMethod(){
	document.getElementById("message").innerHTML="Vous êtes dans le formulaire";
}
function out(){
	document.getElementById("message").innerHTML="Vous êtes en dehors du formulaire";
}
function changeName(){
	var name = document.getElementById("n").value;
	document.getElementById("name").innerHTML="Nom : "+name;
}