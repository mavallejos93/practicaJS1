//Ejercicio del dia
// ||

let dia = prompt("Ingresa un dia de la semana");
//convertir lo que escriba el usuario en minusculas
//dia=dia.toLowerCase();
dia=dia.toLowerCase();
//validamos el dia si es entre semana o fin de semana
if (dia== "lunes" || dia== "martes" || dia== "miercoles"  || dia== "miércoles"|| dia== "jueves" || dia== "viernes" ) {
    alert("es un dia entre semana");
} else {
    if (dia== "sabado" || dia== "sábado" || dia== "domingo") {
        alert("Es un fin de semana");
    } else {
        alert("porfavor ingresar un dia de la semana");
    }
    
}


/* 
* 1 -Que pasa si no escriben nada
* 2 -Que pasa si usan mayusculas
* 3 -si escribe otra cosa que no sea lo solicitado
*/