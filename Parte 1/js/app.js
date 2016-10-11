// Usando el forEach

var enlaces = document.querySelectorAll("a");

var cargaPagina = function () {
	enlaces.forEach(function(enlace) {
		var linkVideo = enlace.getAttribute("href");
		var linkImagen = youtube.generateThumbnailUrl(linkVideo);
		var img = document.createElement("img");
		img.setAttribute("src", linkImagen);
		enlace.appendChild(img);
	});
};

window.addEventListener("load", cargaPagina);


/*window.addEventListener("load", cargarPagina);

function cargarPagina() {
	var enlace = document.querySelectorAll("a");
	for(var i = 0; i < enlace.length; i++) {
		var atributo = enlace[i].getAttribute("href");
		var src = youtube.generateThumbnailUrl(atributo);
		var image = document.createElement("img");
		image.setAttribute("src", src);
		enlace[i].appendChild(image);
	}
}*/
