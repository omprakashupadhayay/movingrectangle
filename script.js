var a=0;
var clear=setInterval(move,100);
function move(){
    a+=10;
    if(a==410){
        clearInterval(clear);
        location.reload(1000);
    }else{
    var innerdiv=document.getElementById("innerdiv");
    innerdiv.style.marginLeft=a+"px";
}
}