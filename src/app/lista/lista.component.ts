import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from '../model/noticia';
import { NoticiaService } from '../services/noticia.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public lista: Array<Noticia>;
  @Input() control: string;

  constructor(private noticias: NoticiaService) { }

  ngOnInit() {
    switch (this.control) {
      case '0':
        this.noticias.retornaNoticias().subscribe(
          response => this.lista = response.slice(0, 3)
        )
        break;
      case '1':
        this.noticias.retornaNoticias().subscribe(
          response => this.lista = response.slice(0, response.length/2)
        )
        break;
      case '2':
          this.noticias.retornaNoticias().subscribe(
            response => this.lista = response.slice(response.length/2, response.length)
          ) 
          break;
    }
  }

}
