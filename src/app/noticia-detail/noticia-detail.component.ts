import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Noticia } from '../model/noticia';
import { NoticiaService } from '../services/noticia.service';

@Component({
  selector: 'app-noticia-detail',
  templateUrl: './noticia-detail.component.html',
  styleUrls: ['./noticia-detail.component.css']
})
export class NoticiaDetailComponent implements OnInit {

  public noticia: Noticia;

  constructor(private route: ActivatedRoute, private noticias: NoticiaService) { 
    let id:number;
    this.route.params.subscribe( params =>  id = params['id']);
    this.noticias.retornaNoticia(id).subscribe(
      response => this.noticia = new Noticia(response[0].titulo, response[0].imagem, response[0].texto, response[0].id)
      
    )
  }

  ngOnInit() {
    
    
  }

}
