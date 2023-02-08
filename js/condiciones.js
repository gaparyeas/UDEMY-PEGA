window.onload = function () {
	var cajas = document.querySelectorAll("#cajas");
	var caja = document.querySelector("#caja");





	console.log("caja", caja);


	var dia = "Lunes";

	var comentario = "wuajaja"


	/*
	PROTOTIP AUSPICIADO POR SEBITA EL ESCURRIDIZO
	
	let elInput = document.querySelector("#que")
	elInput.addEventListener("submit", function(event) {
		dia = event.target.value
		console.log({dia})
	})
	
	*/

	var diaform = document.querySelector("#diaform")


	function diaselector(dia) {

		const diaLowCase = dia.toLowerCase()

		switch (diaLowCase) {

			case "miercoles":
				console.log("Voy a tener que trabajar: F")
				dia = "miercoles";
				comentario = "Voy a tener que trabajar: F";
				caja.style.width = "200px";
				caja.style.height = "200px";
				caja.style.background = "Orange";
				caja.style.color = "black";
				document.getElementById('caja').textContent = `${dia} \n ${comentario}`;
				break;

			case "jueves":
				console.log("Me voy de vacacione wiiiiiiiii");
				dia = "jueves";
				comentario = "Me voy de vacaciones wiiiiiiiii";
				caja.style.width = "200px";
				caja.style.height = "200px";
				caja.style.background = "green";
				caja.style.color = "blue";
				document.getElementById('caja').textContent = `${dia} \n ${comentario}`;
				break;

			case "viernes":
				console.log("Sigo de vacaciones wuajaaaaaaa :3");
				dia = "viernes";
				comentario = "Se viene se vieneee!!";
				caja.style.width = "200px";
				caja.style.height = "200px";
				caja.style.background = "green";
				caja.style.color = "yellow";
				document.getElementById('caja').textContent = `${dia} \n ${comentario}`;
				break;

			case "sabado":
				console.log("Dia de despertarse a la hora de la cayampa :)");
				dia = "Sabado";
				comentario = "Dia de despertarse a la hora de la cayampa :)";
				caja.style.width = "200px";
				caja.style.height = "200px";
				caja.style.background = "green";
				caja.style.color = "orange";
				document.getElementById('caja').textContent = `${dia} \n ${comentario}`;
				break;

			case "domingo":
				console.log("dia de jugar todo el dia pero acostarse temprano");
				dia = "Domingo";
				comentario = "dia de jugar todo el dia pero acostarse temprano";
				caja.style.width = "200px";
				caja.style.height = "200px";
				caja.style.background = "green";
				caja.style.color = "purple";
				break;

			case "lunes":
				dia = "Lunes";
				comentario = "ODIO LOS LUNE -_-";
				console.log("ODIO LOS LUNE -_-");
				caja.style.width = "200px";
				caja.style.height = "200px";
				caja.style.background = "blue";
				caja.style.color = "red";
				document.getElementById('caja').textContent = `${dia} \n ${comentario}`;
				break;

			default: 
		
				comentario = "F en el chat. Probablemente tengas que trabajar :( ";
				console.log("F en el chat. Probablemente tengas que trabajar :( ");
				caja.style.width = "200px";
				caja.style.height = "200px";
				caja.style.background = "pink";
				caja.style.color = "yellow";
				document.getElementById('caja').textContent = `${dia} \n ${comentario}`;
				break;
			
		}

	}

	diaform.addEventListener("submit", function (event) {

		event.preventDefault()
		event.target[0].value
		console.log(event)
		console.log(event.target[0].value)
		diaselector(event.target[0].value)
	})

}