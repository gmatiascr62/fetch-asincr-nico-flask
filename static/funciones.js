

async function enviarDatos(datos){
	var mensaje = {
        	texto: datos
        };
        var priReps = await fetch(`${window.origin}/api`, {
        	method: "POST",
		credentials: "include",
		body: JSON.stringify(mensaje),
		cache: "no-cache",
		headers: new Headers({
			"content-type": "application/json"
		})
        });
	var segRes = await priReps.json();
	return segRes[0].respuesta;
};
