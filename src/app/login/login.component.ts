import { Component, OnInit } from '@angular/core';
import { Usuario } from '../clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public title = 'Nueva Aplicación';
  public name: string = "";
  public usuario: Usuario = new Usuario();

  ngOnInit(): void {
  }

  ingresar(): void {

  }
}
