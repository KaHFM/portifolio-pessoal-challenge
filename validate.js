//Seu JavaScript de validação aqui

function send()	{
	validate();
}

document.getElementById("form").addEventListener("submit",  function(event){
	event.preventDefault();

	// let validateOk = validate();
	// if
	// 
	validate();
});

function validate() {

	let validateOk = true;

	let nome = document.getElementById("nome").value;

	if(nome.length == 0) {
		alert("Preencha o nome por favor.");
		validateOk = false;
	} else if (nome.length > 50) {
		alert("Nome muito grande.");
		validateOk = false;
	}

	let email = document.getElementById("email").value;

	if(email.length == 0) {
		alert("Preencha o email por favor.");
		validateOk = false;
		let index = email.indexOf("@");
		if (index !== -1) {
			console.log("found @");
			index += 1;
			if(index !== -1) {
				console.log("there is more next to the @");
			} else {
				console.log("there is no more next to the @");
			}
		} else {
			console.log("not found @")
			alert("Preencha com um email possuindo @.")
			validateOk = false;
		}

		index = email.indexOf(".");
		if (index !== -1) {
			console.log("found .");
			index += 1;
			if(index !== -1){
				console.log("there is more next to the .");
			} else {
				console.log("there is no more next to the .");
			}
		} else {
			console.log("not found .")
			alert("Preencha com um email possuindo um domínio.")
			validateOk = false;
		}
	}

	let assunto = document.getElementById("assunto").value;

	if(assunto.length == 0) {
		// alert("não pode assunto vazio");
		alert("Preencha o assunto por favor.");
		validateOk = false;
	} else if (assunto.length > 50) {
		alert("Assunto muito grande.");
		validateOk = false;
	}

	let mensagem = document.getElementById("mensagem").value;

	if(mensagem.length == 0) {
		alert("Preencha a mensagem por favor.");
		validateOk = false;
	} else if (mensagem.length > 300) {
		alert("Mensagem muito grande.");
		validateOk = false;
	}

	return validateOk;
}

function enableButton() {
	let nome = document.getElementById("nome").value;
	let email = document.getElementById("email").value;
	let assunto = document.getElementById("assunto").value;
	let mensagem = document.getElementById("mensagem").value;



	if((nome.length > 0) && (email.length > 0) && (assunto.length > 0) && (mensagem.length > 0)) {
		let button = document.getElementById("enviar");
		button.removeAttribute("disabled");
	}
}

var intervalId = setInterval(enableButton, 1000);

