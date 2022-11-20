import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  public user: User = new User("","")
  public showErrorMessage: boolean = false;
  constructor() {}
  ngOnInit(): void {
    console.log('UserFormComponent@ngOnInit');
  }

  public submit(form: NgForm): void{
    alert(`フォームの入力値 ：${JSON.stringify(form.value)}`)

    if(form.invalid){
      this.showErrorMessage = true;
      return;
    }

    form.reset()
    this.showErrorMessage = false;
  }
}
