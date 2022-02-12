// JavaScript source code
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = "black"

pincel.font = "20px Arial";

jogadorI = {
	x:100,
	y:150,
	tx:50,
	ty:220,

	pts:0,

	dir:0,
};

jogadorII = {
	x:1120,
	y:150,
	tx:50,
	ty:220,

	pts:0,
	
	dir:0,
};

bolinha = {
	x:615,
	y:235,
	t:50,

	dir:8,
};

function desenha(){
	pincel.fillRect(jogadorI.x,jogadorI.y,jogadorI.tx,jogadorI.ty);
	pincel.fillRect(jogadorII.x,jogadorII.y,jogadorII.tx,jogadorII.ty);
	pincel.fillRect(bolinha.x,bolinha.y,bolinha.t,bolinha.t);
}

function score(){
	pincel.fillText("Score : "+ jogadorI.pts ,200,50);
	pincel.fillText("Score: "+ jogadorII.pts, 980,50);
}

function movBolinha(){
	bolinha.x += bolinha.dir;

	if(bolinha.x< -100){
		bolinha.x = 615;
		bolinha.y = 235;
		bolinha.dir*= -1;

		jogadorII.pts++;

	}if(bolinha.x >1380){
		bolinha.x = 615;
		bolinha.y = 235;

		jogadorI.pts++;
	}
}

function colisaoBolinha(){
	
	if(bolinha.x <= jogadorI.x + jogadorI.tx){

			bolinha.dir *= -1;

		if(bolinha.y + bolinha.ty >= jogadorI.y){

			bolinha.dir *= -1;
		}else if(bolinha.y >= jogadorI.y + jogadorI.ty){

			bolinha.dir *= -1;
		}

	}else if(bolinha.x >= jogadorII.x - jogadorII.tx){

			bolinha.dir *= -1;

		if(bolinha.y + bolinha.ty >= jogadorII.y){

			bolinha.dir *= -1;
		}else if(bolinha.y >= jogadorII.y + jogadorII.ty){

			bolinha.dir *= -1;
		}

	}


}

function movPlayer(){

	if(jogadorI.y <0){

		jogadorI.y = 0;

	}else if(jogadorI.y > 300){
		
		jogadorI.y = 300;
	}

	if(jogadorII.y <0){

		jogadorII.y = 0;

	}else if(jogadorII.y > 300){
		
		jogadorII.y = 300;

	}

	jogadorI.y += jogadorI.dir;
	jogadorII.y += jogadorII.dir;
}

document.addEventListener("keydown", function (e){
	if(e.keyCode === 87){
		jogadorI.dir = -8;
	}else if(e.keyCode === 83){
		jogadorI.dir = +8;
	}
	
	if(e.keyCode === 38){
		jogadorII.dir = -8;
	}else if(e.keyCode === 40){
		jogadorII.dir = +8;
	}

});

/*
document.addEventListener("keydown", tecla);

function tecla(e){
	if(e.keyCode === 87){
		jogadorII.dir = -8;
	}else if(e.keyCode === 83){
		jogadorII.dir = +8;
	}
	
	if(e.keyCode === 38){
		jogadorII.dir = -8;
	}else if(e.keyCode === 40){
		jogadorII.dir = +8;
	}
}
*/

/*
document.addEventListener("keydown", function (e){
	if(e.keyCode === 38){

		jogadorII.dir = -8;

	}else if(e.keyCode === 40){

		jogadorII.dir = +8;
	}
});
*/

document.addEventListener("keyup", function(e){
	if(e.keyCode === 87){
		jogadorI.dir = 0;

	}else if(e.keyCode === 83){
		jogadorI.dir = 0;
	}
	
	if(e.keyCode === 38){

		jogadorII.dir = 0;

	}else if(e.keyCode === 40){

		jogadorII.dir = 0;
	}
});

function Main(){

	pincel.clearRect(0,0,1280,520);

	desenha();
	score();
	movBolinha();
	movPlayer();
	colisaoBolinha();
}

setInterval(Main,20);