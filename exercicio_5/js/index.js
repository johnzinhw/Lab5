start();
var atual = 0;

var src = ["images/one.jpg", "images/two.jpg", "images/three.jpg", "images/four.jpg"]
var imagem = document.getElementsByClassName("img-responsive")[0];

function start() {
    var btnPrev = document.getElementsByClassName("glyphicon-chevron-left")[0];
    btnPrev.onclick = function () {
        atual--;
        if(atual<0){
            atual = 3;
            imagem.src = src[atual];
        }else{
            imagem.src = src[atual];
        }
         

    }

    var btnNext = document.getElementsByClassName("glyphicon-chevron-right")[0];
    btnNext.onclick = function () {
        
        atual++;
        if(atual>3){
            atual = 0;
            imagem.src = src[atual];
        }else{
            imagem.src = src[atual];
        }
    }



}