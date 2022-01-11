import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {
  public eventos: any;

  constructor(private readonly http: HttpClient) {}

  ngOnInit() {
    this.getEventos();
  }

  getEventos() {
    this.http.get('https://localhost:7102/api/Evento').subscribe({
      next: (response) => this.eventos = response,
      error: (err) => console.error(err),
      complete: () => console.info('getEventos complete')
  })

    this.eventos = [
      {
        tema: 'Angular',
        local: 'Belo Horizonrte',
      },
      {
        tema: 'Node',
        local: 'São Paulo',
      },
      {
        tema: '.NET',
        local: 'Curitiba',
      },
    ];
  }
}
