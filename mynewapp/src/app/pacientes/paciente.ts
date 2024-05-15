export class Paciente {
    nombre: string;
    edad:number;
    diagnostico:string;
    historial:string;

    constructor(nombre: string, edad:number, diagnostico:string, historial:string) {
        this.nombre = nombre;
        this.edad = edad;
        this.diagnostico = diagnostico;
        this.historial = historial;
    }

}

