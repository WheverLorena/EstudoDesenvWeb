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
var qtd_baloes;


}