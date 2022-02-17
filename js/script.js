$(document).ready(main);

var contador = 1;

function main() {
	$('.menu_bar').click(function () {
		// $('nav').toggle(); 

		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}

	});

};


function paginator(show) {
	numberofpage = document.getElementById(`active`).innerHTML
	document.getElementById(`page${numberofpage}`).style.display = "none"
	document.getElementById(`page${show}`).style.display = "block"
	switch (numberofpage) {
		case "1":
			document.getElementById(`active`).id = "uno";
			break;
		case "2":
			document.getElementById(`active`).id = "dos";
			break;
		case "3":
			document.getElementById(`active`).id = "tres";
			break;
		case "4":
			document.getElementById(`active`).id = "cuatro";
			break;
		case "5":
			document.getElementById(`active`).id = "cinco";
			break;
		case "6":
			document.getElementById(`active`).id = "seis";
			break;
	}

	switch (show) {
		case "1":
			document.getElementById(`uno`).id = "active";
			break;
		case "2":
			document.getElementById(`dos`).id = "active";
			break;
		case "3":
			document.getElementById(`tres`).id = "active";
			break;
		case "4":
			document.getElementById(`cuatro`).id = "active";
			break;
		case "5":
			document.getElementById(`cinco`).id = "active";
			break;
		case "6":
			document.getElementById(`seis`).id = "active";
			break;
	}
}