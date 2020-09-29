/* Declarar una variable para almacenar el sueldo (asignar un sueldo en la declaración), para posteriormente aplicar un aumento y obtener el nuevo sueldo considerando que se debe aplicar un aumento sobre la misma variable declarada al inicio (no importa si usan o no variables adicionales), debemos mostrar en la consola el nuevo sueldo */

/* Tabla de aumento
rango sueldo  :: aumento
0 a 1000      :: 15%
1001 a 1200   ::  12%
1201 a 1400   ::  10%
1401 a 1500   ::   8%
mas de 1500   ::  5% */

//Declarar sueldo
var sueldo = 1501;
//Mostrar sueldo inicial
console.log(`El sueldo inicial es de $${sueldo}`);
//Con un ciclo se puede aumentar el sueldo inicial varias veces hasta pasar de 1500 si se desea
//do {
    if (sueldo > 0 && sueldo <= 1000) {
        sueldo += (sueldo * .15);
        console.log(`El sueldo con 15% de aumento: $${sueldo}`);
    } else if (sueldo >= 1001 && sueldo <= 1200) {
        sueldo += (sueldo * .12);
        console.log(`El sueldo con 12% de aumento: $${sueldo}`);
    } else if (sueldo >= 1201 && sueldo <= 1400) {
        sueldo += (sueldo * .10);
        console.log(`El sueldo con 10% de aumento: $${sueldo}`);
    } else if (sueldo >= 1401 && sueldo <= 1500) {
        sueldo += (sueldo * .08);
        console.log(`El sueldo con 8% de aumento: $${sueldo}`);
    } else if (sueldo > 1500) {
        sueldo += (sueldo * .05);
        console.log(`El sueldo con 5% de aumento: $${sueldo}`);
    }
//} while (sueldo < 1500);