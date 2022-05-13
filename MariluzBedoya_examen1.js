let valor_hora_ordinaria = 265;
let valor_hora_extra = 350;
let hora_trabajador = 53;
let salario_laboral_normal;
let salario_horas_extras;
let horas_extras=0;

if (hora_trabajador <= 40) {

    salario_laboral_normal = 40 * valor_hora_ordinaria;
    salario_horas_extras=0;

} else if (hora_trabajador > 40) {

    horas_extras = hora_trabajador - 40;
    salario_laboral_normal = 40 * valor_hora_ordinaria;
    salario_horas_extras = horas_extras * valor_hora_extra;

}

console.log("El total a pagar por horas laborales normal (40 horas) es de : "+salario_laboral_normal );
console.log("El total a pagar por horas Extras "+ horas_extras + " horas es de: "+ salario_horas_extras);