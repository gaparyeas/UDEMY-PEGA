window.onload = function () {
	var cajas = document.querySelectorAll(".cajas");
	var caja = document.querySelector("#caja");

	/* ejemplo de un ciclo */
	for (var i = 0; i<cajas.length; i++){

		console.log("i" , i);
		cajas[i].style.width = "50px";
		cajas[i].style.height = "50px";
		cajas[i].style.background = "blue";
		cajas[i].style.marginTop = "5px";
		cajas[i].style.display = "inline-block";
		cajas[i].style.marginRight = "5px";
	}

	/*TUTORIAL EVENTOS (INTENTADO CAMBIAR COLOR DEL TEXTO QUE DIA ES)*/
	var botonColor = document.querySelector("#botonColor");
	var textoDia = document.querySelector("#textoDia")
	botonColor.addEventListener("click", cambiarColor)

	function cambiarColor(){
		var randomColor = Math.floor(Math.random()*16777215).toString(16);

		textoDia.style.color = `#${randomColor}`;		

		for (var i = 0; i<cajas.length; i++){

			console.log("i" , i);
			cajas[i].style.width = "50px";
			cajas[i].style.height = "50px";
			cajas[i].style.background = `#${randomColor}`;
			cajas[i].style.marginTop = "5px";
			cajas[i].style.display = "inline-block";
			cajas[i].style.marginRight = "5px";
			if (cajas[i].style.width = "50px"){
				cajas[i].style.width = "100px";
				cajas[i].style.transition = "1s width ease";
			}
			else if (cajas[i].style.width = "100px") {
				cajas[i].style.width = "49px";
				cajas[i].style.transition = "1s width ease";
			}
		}

	}
	
	console.log("caja", caja);
	/* caca */

	var dia = "Lunes";

	var comentario = "wuajaja"


	/*
	PROTOTIPo AUSPICIADO POR SEBITA EL ESCURRIDIZO
	
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
				console.log("Vamo chile no queda nada");
				dia = "jueves";
				comentario = "Nada es imposible wn niuna wea";
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
				dia = "sabado";
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
				document.getElementById('caja').textContent = `${dia} \n ${comentario}`;
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