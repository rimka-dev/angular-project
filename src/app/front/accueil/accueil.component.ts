import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../../service/articles.service';
import { ActivatedRoute , Router } from '@angular/router';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  articles;
  p = 1;
  constructor(private service: ArticlesService, private route: ActivatedRoute , private router: Router) {}
  ngOnInit(): void {
    this.service.getAllArticles()
    .subscribe( (response: Response) => {
      this.articles = response;
      console.log(this.articles);
    });
}
}
