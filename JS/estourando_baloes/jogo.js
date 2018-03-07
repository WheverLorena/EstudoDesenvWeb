var timer = null;
function iniciaGame(){
var url = window.location.search;
var nivel_do_jogo = url.replace("?","");
var tempo_segundo = 0;
if(nivel_do_jogo == 1){
  tempo_segundo = 120;
}
if(nivel_do_jogo == 2){
	tempo_segundo = 60;
}
if(nivel_do_jogo == 3){
	tempo_segundo = 30;
}
//inserindo segundos na tag span
document.getElementById('cronometro').innerHTML = tempo_segundo;
var qtd_baloes = 80;
createBaloon(qtd_baloes);

//imprimir valores dos baloes
document.getElementById('baloes_inteiros').innerHTML = qtd_baloes;
document.getElementById('baloes_estourados').innerHTML = 0;

contagem_tempo(tempo_segundo);

}

function contagem_tempo(segundos){
segundos = segundos - 1;
if(segundos == -1){
	clearTimeout(timer);
	game_over();
	return false;
}
document.getElementById('cronometro').innerHTML = segundos;
timer =	setTimeout("contagem_tempo("+segundos+")", 1000);

}

function game_over(){
	alert('Fim de Jogo! Você perdeu');
}


function createBaloon(qtd_baloes){
	for(var i = 1; i<=qtd_baloes; i++){
		var balao = document.createElement("img");
		balao.src='imagens/balao_azul_pequeno.png';
		balao.style.margin = '10px';
		balao.id = 'balao: ' + i;
		balao.onclick = function(){estourar(this);};
		document.getElementById('cenario').appendChild(balao);
	}
}

function estourar(e){
	var balao_id = e.id;
	document.getElementById(balao_id).setAttribute("onclick","");
	document.getElementById(balao_id).src = 'imagens/balao_azul_pequeno_estourado.png';
	pontuacao(-1);


}

function pontuacao(acao){
	var ballInter = document.getElementById('baloes_inteiros').innerHTML;
	var ballEst = document.getElementById('baloes_estourados').innerHTML;
	ballInter = parseInt(ballInter);
	ballEst = parseInt(ballEst);

	ballInter = ballInter+acao;
	ballEst = ballEst - acao;

	document.getElementById('baloes_inteiros').innerHTML = ballInter;
	document.getElementById('baloes_estourados').innerHTML = ballEst;

	situacao_jogo(ballInter);

}

function situacao_jogo(BalaoInteiro){
	if(BalaoInteiro == 0){
		alert('Parabens voce voce venceu');
		pararJogo();	
	}
}

function pararJogo(){
	clearTimeout(timer);
}