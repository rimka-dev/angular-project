import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';
import {ArticlesService } from '../../../service/articles.service';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  utilisateurs = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl(''),
    estActif: new FormControl('')
  });
  user;
  constructor(
    private service: ArticlesService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe( (params) => {
       const _id = params.get('id');
       console.log(_id);
       this.service.getUserById(_id)
       .subscribe( (response: Response) => {
         this.user = response;
         console.log(this.user);
       });
     });
  }
  onUpdateUser(user: any) {
    this.service.updateUser(user)
      .subscribe((response: Response) => {
        console.log(response);
      });
  }
  updateUtilisateurs() {
    this.user.patchValue({
      nom: '',
      prenom : '',
      email : '',
      password: '',
      role: '',
      estActif: ''
    });
  }
}
