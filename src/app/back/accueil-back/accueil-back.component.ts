import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../../service/articles.service';
@Component({
  selector: 'app-accueil-back',
  templateUrl: './accueil-back.component.html',
  styleUrls: ['./accueil-back.component.css']
})
export class AccueilBackComponent implements OnInit {
  articles;
  utilisateurs;
  comentaires;
  constructor(private service: ArticlesService) { }
  ngOnInit(): void {
    this.service.getAllArticles()
    .subscribe((response: Response) => {
      this.articles = response;
    }
    ),
    this.service.getAllUser()
    .subscribe((response: Response) => {
      this.utilisateurs = response;
    }
    ),
    this.service.getAllcommentaires()
    .subscribe((response: Response) => {
      this.comentaires = response;
    }
    );
  }
}

