import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-ajouter-user',
  templateUrl: './ajouter-user.component.html',
  styleUrls: ['./ajouter-user.component.css']
})
export class AjouterUserComponent implements OnInit {
  constructor(private http: HttpClient) { }
  private  url = 'https://cryptic-hollows-87415.herokuapp.com/utilisateurs';
  private utilisateurs;
erreur = false;
success = false;
error = {
  nom: false,
  prenom: false,
  email: false,
  password: false,
  role : false,
  estActif: false
};
  ngOnInit(): void {
    this.http.get(this.url)
    .subscribe( (response: Response) => {
     console.log(response);
     this.utilisateurs = response ;
    });
  }
  onSubmitUser(f: NgForm) {
   console.log(f.value);
   const user = f.value;
   this.http.post(this.url, (user))
      .subscribe((response: Response) => {
        user._id = response;
        console.log(user);
        this.utilisateurs.splice(0, 0, user) ;
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
