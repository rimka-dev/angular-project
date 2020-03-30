import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http' ;
import {ArticlesService } from '../../../service/articles.service';
@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
  private  url = 'https://cryptic-hollows-87415.herokuapp.com/articles';
  articles;
  constructor(private service: ArticlesService,
              private router: Router,
              private route: ActivatedRoute, private http: HttpClient ) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const _id = params.get('id');
      this.service.getArticleById(_id).subscribe((res: any) => {
        this.articles = res;
        console.log(this.articles);
      });
    });
  }
  onSubmitArticle(f: NgForm, _id: string) {
    const data = f.value;
    // console.log(_id);
    console.log(data);
    this.http.put(this.url + `/${data._id}`, JSON.stringify(data))
    .subscribe((response: Response) => {
      data._id = response;
      console.log(data);
    });
  }

}


