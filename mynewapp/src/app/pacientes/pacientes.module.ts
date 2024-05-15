import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesComponent } from './pacientes.component';
import { PacientesListComponent } from './pacientes-list/pacientes-list.component';
import { PacientesDetailComponent } from './pacientes-detail/pacientes-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PacientesListComponent,PacientesDetailComponent],
  exports: [PacientesListComponent,PacientesDetailComponent]
})
export class PacientesModule { }
