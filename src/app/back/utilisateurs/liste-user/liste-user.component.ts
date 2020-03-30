import { Component, OnInit } from '@angular/core';
import {ArticlesService } from '../../../service/articles.service';
import { HttpClient } from '@angular/common/http' ;
import {Router}  from '@angular/router';
@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.css']
})
export class ListeUserComponent implements OnInit {
  utilisateurs;
  url_user = 'https://cryptic-hollows-87415.herokuapp.com/utilisateurs';
  constructor(private http: HttpClient, private service: ArticlesService, private route: Router) { }
  ngOnInit(): void {
    this.service.getAllUser()
    .subscribe((response: Response) => {
      this.utilisateurs = response;
    }
    ); }
    onDeleteUser(user): void {
      this.http.delete(this.url_user + `/${user._id}`)
        .subscribe((response: Response) => {
          console.log(response);
          const index = this.utilisateurs.indexOf(user);
          this.utilisateurs.splice(index, 1) ;
        });
    }
  onUpdateUser(user) {
    this.route.navigate(['/admin/utilisateur/update-user/' + user._id]);
      }
}
