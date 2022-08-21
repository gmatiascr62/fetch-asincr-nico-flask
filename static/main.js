var texto = document.getElementById('texto');
const enviar = document.getElementById('enviar');
const leer = document.getElementById('leer');
var res = "vacia";


enviar.addEventListener('click', async ()=>{
	res = await enviarDatos(texto.value);
});

leer.addEventListener('click', () => {
	console.log(res);
});
