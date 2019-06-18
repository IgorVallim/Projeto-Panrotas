import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() titulo: string;
  @Input() imagem: string;
  @Input() id: number;


  constructor(private router: Router) { }

  ngOnInit() {
  }

  abreNoticia(){
    this.router.navigate(['noticias/'+this.id]);
  }

}
