import { Injectable } from '@angular/core';
import { Noticia } from '../model/noticia';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  private readonly API = "http://localhost:3000/noticias";

  constructor(private http: HttpClient) { }

  retornaNoticias(){
  
    return this.http.get<Noticia[]>(this.API);
  }

  retornaNoticia(id: number){
    return this.http.get<Noticia>(this.API+"?id="+id);
  }



}
