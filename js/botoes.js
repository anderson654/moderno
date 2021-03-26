var exeAlteraForm = function(){
	form1 = document.getElementById("form1");
	form2 = document.getElementById("form2");

	var btn1 = document.getElementById("btn1");
	btn1.onclick = mostrarDiv1;

	var btn2 = document.getElementById("btn2");
	btn2.onclick = mostrarDiv2;

	form1.classList.add("escondido");
	form2.classList.add("escondido");
}
function mostrarDiv1(){
	if(x == 0 && y == 1 || x == 0 && y == 0){
		form1.classList.remove("escondido");
		form2.classList.add("escondido");
		x=1;
		y=0;
	}else if(x==1 && y == 0){
		form1.classList.add("escondido");
		form2.classList.add("escondido");
		x=0;
		y=0;
	}
}
function mostrarDiv2(){
	if(x == 1 && y == 0 || x==0 && y == 0){
		form2.classList.remove("escondido");
		form1.classList.add("escondido");
		y=1;
		x=0;
	}else if(x==0 && y == 1){
		form2.classList.add("escondido");
		form1.classList.add("escondido");
		y=0;
		x=0;
	}
}