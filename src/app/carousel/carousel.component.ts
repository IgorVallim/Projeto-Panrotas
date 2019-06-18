import { Component, OnInit } from '@angular/core';
import { Noticia } from '../model/noticia';
import { NoticiaService } from '../services/noticia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  public lista: Array<Noticia>;

  constructor(private noticias:NoticiaService, private router: Router) { }

  ngOnInit() {
    this.noticias.retornaNoticias().subscribe(
      response => this.lista = response
    )
  }

  abreNoticia(id:number){
    this.router.navigate(['noticias/'+id]);
  }

}
