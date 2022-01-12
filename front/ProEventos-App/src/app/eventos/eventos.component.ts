import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {
  eventos: any = [];
  eventosFiltrados: any = [];
  isCollapsed = true;
  private _filtroLista = '';

  constructor(private readonly http: HttpClient) {}

  ngOnInit() {
    this.getEventos();
  }

  public get filtroLista(): string {
    return this._filtroLista;
  }

  public set filtroLista(search: string) {
    this._filtroLista = search;
    this.eventosFiltrados = this.filtroLista
      ? this.filtrarEventos(this.filtroLista)
      : this.eventos;
  }

  filtrarEventos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLowerCase();
    return this.eventos.filter(
      (evento: any) =>
        evento.tema.toLowerCase().indexOf(filtrarPor) !== -1 ||
        evento.local.toLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  getEventos() {
    this.http.get('https://localhost:7102/api/Evento').subscribe({
      next: (response) => {
        this.eventos = response;
        this.eventosFiltrados = this.eventos;
      },
      error: (err) => console.error(err),
      complete: () => console.info('getEventos complete'),
    });
  }
}
