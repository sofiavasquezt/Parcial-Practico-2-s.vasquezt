import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from './paciente';
@Injectable({
  providedIn: 'root'
})
export class PacientesService {
private apiUrl = 'https://gist.githubusercontent.com/k-garces/17c74c4ce5f6b09583fd9fcd941a7b68/raw/d9119d1d89f6fe4dea0250754baf11ea9dad1457/pacients.json'
constructor(private http: HttpClient) {}

getPacientes(): Observable<Paciente[]> {
  return this.http.get<Paciente[]>(this.apiUrl);
}

}
