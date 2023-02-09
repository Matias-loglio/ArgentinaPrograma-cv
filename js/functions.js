
document.getElementById("botonB").onclick = function (){
    console.log("capuramos el evento click");
    document.getElementById("demo").innerHTML = "WhatsAap: 3451456215"
}

document.getElementById("botonA").onclick = function (){
    console.log("capuramos el evento click");
    document.getElementById("demo").innerHTML = "E-mail: Edgar.G@developers.com" ;
}

document.getElementById("botonC").addEventListener("click", function() {
    console.log("capuramos el evento click");
    document.getElementById("demo").innerHTML = "Direccion: Calle falsa 123"
})