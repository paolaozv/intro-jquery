window.addEventListener("load", cargarPagina);

var enlace = document.querySelectorAll("a");

function cargarPagina() {
	for(var i = 0; i < enlace.length; i++) {
		var atributo = enlace[i].getAttribute("href");
		var src = youtube.generateThumbnailUrl(atributo);
		var image = document.createElement("img");
		image.setAttribute("src", src);
		enlace[i].appendChild(image);
	}
}