function enviar(select1, select2) {
	var origem = document.getElementById(select1);
	var destino = document.getElementById(select2);

	if (origem.selectedIndex != -1) {
		var selected = origem.options[origem.selectedIndex];
		destino.appendChild(selected);
	}
}