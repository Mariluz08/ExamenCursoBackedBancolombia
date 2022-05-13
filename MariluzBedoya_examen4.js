class Persona {

    nombre;
    apellido;
    edad;

    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;

    }

    getDetalles() {
        console.log("Nombre: " + nombre);
        console.log("Apellido: " + apellido);
        console.log("Edad: " + edad);
    }


    setEdad(edad) {
        this.edad = edad;
    }

}

class Empleado extends Persona {

    tipo;

    constructor(nombre, apellido, tipo) {
        super();
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipo = tipo;
    }

    getDetalles() {
        console.log(this.nombre + " " + this.apellido + " de: " + this.edad + " años - Tipo: " + this.tipo);
    }

}
class Nomina {

    empleados;

    constructor(empleados) {
        this.empleados = empleados;
    }

    calcularPago(tipo) {
        let dias_laborados = Math.floor(Math.random() * (15 - 5) + 5);
        let mensaje = "";
        if (tipo === "S") {
            let pago = dias_laborados * 350;
            let descuento = pago * (0.10);
            pago -= descuento;
            mensaje = "Pertenece a  Sindicato con un sueldo de " + pago + " por " + dias_laborados + " dias trabajados";
        } else if (tipo === "C") {
            let pago = dias_laborados * 500;
            let descuento = pago * (0.13);
            pago -= descuento;
            mensaje = "Pertenece a empleado de Confianza con un sueldo de " + pago + " por " + dias_laborados + " dias trabajados";
        }
        return mensaje;

    }

    calcularNomina() {
        for (let i = 0; i < this.empleados.length; i++) {
            console.log(this.empleados[i].getDetalles()+ " " + this.calcularPago(empleados[i].tipo));
        }
    }
}

let empleado1 = new Empleado("Maria", "Carvajal", "C");
empleado1.setEdad(33);

let empleado2 = new Empleado("Juan", "Almeira", "C");
empleado2.setEdad(23);

let empleado3 = new Empleado("Dulce", "Salguero", "S");
empleado3.setEdad(42);

let empleados = new Array(empleado1, empleado2, empleado3);
let nomina = new Nomina(empleados);
nomina.calcularNomina();