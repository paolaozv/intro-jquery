var enlaces = $("a");

var cargarPagina = function() {
	for(var i = 0; i < enlaces.length; i++) {
		var element = enlaces[i];
		var enlace = $(element);
		var atributo = enlace.attr("href");
		var src = youtube.generateThumbnailUrl(atributo);
		var image = $("<img>");
		image.attr("src", src);
		enlace.append(image);
	}
}

$(document).ready(cargarPagina);