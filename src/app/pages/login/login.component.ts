import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public  email = ''
  public  password = ''

  constructor(private readonly router: Router, private readonly authService: AuthService, private readonly messageService: MessageService) {}

  public login() {
    this.authService.login(this.email, this.password).subscribe(
      {
        next: (res) => {
          if(res.access_token) {
            localStorage.setItem('token', res.access_token)
            this.router.navigate([''])
            return
          }
          this.messageService.add({severity:'error', summary:'Erro', detail:'Erro ao fazer login!'});
        },
        error: (err) => {
          this.messageService.add({severity:'error', summary:'Erro', detail:'Credenciais invalidas!'})
        }
      })
  }
}
