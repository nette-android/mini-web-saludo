const hora = new Date().getHours();
let mensaje = "";
if(hora < 12){
    mensaje = "¡Buenos días!";
} else if (hora < 18){
    mensaje = "¡Buenas tardses!";
} else {
    mensaje = "¡Buenas nocheeeeeees!";
}
document.getElementById("mensaje").textContent = mensaje;
