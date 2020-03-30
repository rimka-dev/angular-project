import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http' ;
@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  constructor(private http: HttpClient) { }
  private  url = 'https://cryptic-hollows-87415.herokuapp.com/articles';
  articles;
  erreur = false;
  success = false;
  error = {
    titre: false,
    contenu: false,
    nom_auteur: false,
    categories: false,
    estPublie : false,
    img: false
  };
  ngOnInit(): void {
    this.http.get(this.url)
    .subscribe( (response: Response) => {
      this.articles = response ;
    });
  }
  onSubmitArticle(f: NgForm) {
   const article = f.value;
   this.http.post(this.url, (article))
      .subscribe((response: Response) => {
        article._id = response;
        console.log(article);
        this.articles.splice(0, 0, article) ;
      });
  }
  onFrmSubmit(f) {
    if (!f.valid) {
      this.erreur = true;
      this.success = false;
      for (const control in f.form.controls) {
        this.error[control] =
          f.form.controls[control].status === 'INVALID' ? true : false;
      }
    } else {
      this.erreur = false;
      this.success = true;
      f.resetForm();
    }
  }
  onChange(f) {
    this.erreur = false;
    this.success = false;
    for (const control in f.form.controls) {
      this.error[control] = false;
    }
  }
  onFrmReset(f) {
    this.erreur = false;
    this.success = false;
    for (const control in f.form.controls) {
      this.error[control] = false;
    }
    f.resetForm();
  }
}
