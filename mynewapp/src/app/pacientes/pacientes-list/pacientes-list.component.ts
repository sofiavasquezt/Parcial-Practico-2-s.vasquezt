import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../pacientes.service';
import { Paciente } from '../paciente';

@Component({
  selector: 'app-pacientes-list',
  templateUrl: './pacientes-list.component.html',
  styleUrls: ['./pacientes-list.component.css']
})
export class PacientesListComponent implements OnInit {
  pacientes: Paciente[] = [];
  totalMenores: number = 0;
  selectedPaciente: Paciente | null = null;

  constructor(private pacientesService: PacientesService) {}

  ngOnInit() {
    this.pacientesService.getPacientes().subscribe((data: Paciente[]) => {
      this.pacientes = data;
      this.numeroMenores();
    });
  }

  numeroMenores(): void {
    let totalMenores = 0;
    for (let i = 0; i < this.pacientes.length; i++) {
      if (this.pacientes[i].edad < 18) {
        totalMenores++;
      }
    }
    this.totalMenores = totalMenores;
  }

  selectPaciente(paciente: Paciente): void {
    this.selectedPaciente = paciente;
  }
}
