import { Component } from '@angular/core';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Usuario = {
    aceitaTermosDeCondicao: true,
    email:'',
    genero:'',
    nome:'',
    senha:'',
    username:''
  }

  salvarUsuario(){
    alert('Salvo com Sucesso!')
    console.log(this.user)
  }

}
