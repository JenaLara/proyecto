function escribir (){
    var parrafo2 = document.getElementById("Parrafo2");
    parrafo2.innerHTML="Texto enviado desde javascript a la etiqueta parrafo2";
}



var seleccionParrafo=document.getElementById("Parrafo3");
seleccionParrafo.innerHTML="Texto enviado desde javascript a la etiqueta parrafo3";


document.write("Arreglo sin ordenar: ","<br>");
var arregloNombres=["Lucia","Ana","Juan","Ximena","Carlos"];
document.write(arregloNombres.join(" "));
document.write("<br>","Arreglo ordenado mediante el metodo sort(): ","<br>");
arregloNombres.sort();
document.write(arregloNombres.join(" "));


var arregloNum=[2,4,6,7,8,9]
document.write(arregloNum.join(" "));
document.write("Primera version: ")

var cuadrado=arregloNum.map((elem)=>elem*elem);
document.write(cuadrado);
document.write("Segunda version: ")

var cuadradoPow=arregloNum.map((elem)=>Math.pow(elem,2))
document.write(cuadradoPow)