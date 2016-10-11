// Optimización de código (forEach)

var cargar = function() {
	var $enlaces = $("a");
	$enlaces.each(iterar);
};

var iterar = function(index, element) {
	var $enlace = $(element);
	var linkVideo = $enlace.attr("href");
	var linkImagen = youtube.generateThumbnailUrl(linkVideo);
	var $img = $("<img>");
	$img.attr("src", linkImagen);
	$enlace.append($img);
};

$(document).ready(cargar);

/*var cargarPagina = function() {
	var enlaces = $("a");
	for(var i = 0, l = enlaces.length; i < l; i++) {
		var $enlace = $(enlaces[i]);
		var atributo = $enlace.attr("href");
		var src = youtube.generateThumbnailUrl(atributo);
		var $image = $("<img>");
		$image.attr("src", src);
		$enlace.append($image);
	}
};

$(document).ready(cargarPagina);*/