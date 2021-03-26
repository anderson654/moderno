function exeFundo(){
	divMontanhas();
	divEstrelas();
	divLuas();
	divArvore();
	divMeteoro();
}
function divMontanhas(){
	var div = document.createElement("div");
 	div.setAttribute('class', 'montanhas');
 	div.setAttribute('id', 'montanhas');
 	document.getElementById("fundo").appendChild(div);
 		for(var i = 0; i <= 1; i++){
			var div = document.createElement("div");
 			div.setAttribute('class', 'montanha'); 
 			document.getElementById("montanhas").appendChild(div);
		}
}
function divEstrelas(){
	var div = document.createElement("div");
 	div.setAttribute('class', 'estrelas');
 	div.setAttribute('id', 'estrelas');
 	document.getElementById("fundo").appendChild(div);
		for(var i = 0; i <= 100; i++){
			var div = document.createElement("div");
	 		div.setAttribute('class', 'star');
	 		var hw = Math.floor(Math.random() * 3 + 1) + 'px';
			div.style.height = hw;
			div.style.width = hw;  
			div.style.marginLeft = Math.floor(Math.random() * 100 + 1) + 'vw';
			div.style.marginTop = Math.floor(Math.random() * 40 + 1) + 'vh';
			div.style.animationDelay = Math.random() * 15 + 's';
			document.getElementById("estrelas").appendChild(div);
	}
}
function divLuas(){
	var div = document.createElement("div");
 	div.setAttribute('class', 'luas');
 	div.setAttribute('id', 'luas');
 	document.getElementById("fundo").appendChild(div);
 		for(var i = 0; i <= 1; i++){
			var div = document.createElement("div");
 			div.setAttribute('class', 'lua'); 
 			document.getElementById("luas").appendChild(div);
		}
}
function divArvore(){
	var div = document.createElement("div");
 	div.setAttribute('class', 'arvores');
 	div.setAttribute('id', 'arvores');
 	document.getElementById("fundo").appendChild(div);
 		for(var i = 0; i <= 3; i++){
			var div = document.createElement("div");
 			div.setAttribute('class', 'arvore'); 
 			document.getElementById("arvores").appendChild(div);
		}
}
function divMeteoro(){
	var div = document.createElement("div");
 	div.setAttribute('class', 'meteoro1');
 	div.setAttribute('id', 'meteoro1');
 	document.getElementById("fundo").appendChild(div);
 		var div1 = document.createElement("div"); 
 		document.getElementById("meteoro1").appendChild(div1);
}