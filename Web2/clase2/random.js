
let NUM = Math.floor(Math.random()*(10-1))+1;
console.log(NUM);
var intento = 3 ;
var GANO=false
while(intento>=1){
var repuesta=parseInt(prompt("adivina el numero del 1 al 10"));
if(repuesta==NUM){
    GANO=true
    intento=0

}else{
    if(intento>=2){ 
        console.log("intenta otra vez");
    }
    intento-- 
}

}
if(GANO==true){
console.log("Ganaste C:");
}else{
console.log("PERDISTE UnU");
}