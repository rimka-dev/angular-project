import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({providedIn: 'root'})
export class ArticlesService {
  url = 'https://cryptic-hollows-87415.herokuapp.com/articles';
  url_user = 'https://cryptic-hollows-87415.herokuapp.com/utilisateurs';
  url_params = 'https://cryptic-hollows-87415.herokuapp.com/parametres';
  url_commentaire = 'https://cryptic-hollows-87415.herokuapp.com/commentaires';
  constructor(private http: HttpClient) { }
getAllArticles() {
  return this.http.get(this.url);
}
getArticleById(id) {
  return this.http.get(this.url + '/' + id);
}
updateArticles(_id: string, data) {
  return this.http.put(this.url + '/' + _id, data);
}
getAllUser() {
  return this.http.get(this.url_user);
}
getUserById(id) {
  return this.http.get(this.url_user + '/' + id);
}
updateUser(user) {
  return this.http.put(this.url_user + '/' + user._id , JSON.stringify(user)) ;
}
getAllParam() {
  return this.http.get(this.url_params);
}
getParamById(id) {
  return this.http.get(this.url_params + '/' + id);
}
getAllcommentaires() {
  return this.http.get(this.url_commentaire);
}
getCommentById(id) {
  return this.http.get(this.url_commentaire + '/' + id);
}
}

