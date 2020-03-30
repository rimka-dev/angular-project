import { Component, OnInit } from '@angular/core';
import {ArticlesService } from '../../../service/articles.service';
import { HttpClient } from '@angular/common/http' ;
import {Router}  from '@angular/router';
@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  articles;
  url = 'https://cryptic-hollows-87415.herokuapp.com/articles';
  constructor(private http: HttpClient, private service: ArticlesService, private route: Router) { }
  ngOnInit(): void {
    this.service.getAllArticles()
    .subscribe((response: Response) => {
      this.articles = response;
    }
    ); }
    onDeleteArticle(article) {
    this.http.delete(this.url + `/${article._id}`)
      .subscribe((response: Response) => {
        console.log(response);
        const index = this.articles.indexOf(article);
        this.articles.splice(index, 1) ;
      });
  }
  onUpdateArticle(article) {
      this.route.navigate(['/admin/article/update-article/' + article._id]);

        }


}
