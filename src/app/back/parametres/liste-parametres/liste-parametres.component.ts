import { Component, OnInit } from '@angular/core';
import {ArticlesService } from '../../../service/articles.service';
@Component({
  selector: 'app-liste-parametres',
  templateUrl: './liste-parametres.component.html',
  styleUrls: ['./liste-parametres.component.css']
})
export class ListeParametresComponent implements OnInit {
  parametres;
  constructor(private service: ArticlesService) { }
  ngOnInit(): void {
    this.service.getAllParam()
    .subscribe((response: Response) => {
      this.parametres = response;
    }
    ); }
}
