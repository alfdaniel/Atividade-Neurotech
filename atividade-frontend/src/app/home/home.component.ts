import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MensagemService } from './../mensagem.service';
import { Mensagem } from './../model';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  msg: Mensagem = null;
  msgForm = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl('', [Validators.required]),
    fone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    mensagem: new FormControl('', [Validators.required])
  });


  constructor(private mensagemService: MensagemService, private router: Router) { }

  ngOnInit(): void {
    document.querySelector('html').style.background = '#eedd82'
  }

  createMsg(): void {
    if (this.msgForm.valid) {
      this.msg = this.msgForm.value;
      this.mensagemService.create(this.msg).subscribe(
        data => {
          
          Swal.fire({
            title: 'Tudo certo!',
            text: 'Mensagem enviada com sucesso',
            icon: 'success',
            confirmButtonText: 'Okay'
          });
          this.msgForm.reset();
        },
        error => {
          Swal.fire({
            title: 'Ooops!',
            text: 'Erro ao enviar mensagem',
            icon: 'error',
            confirmButtonText: 'Okay'
          });
        }
      );
    } else {
      Swal.fire({
        title: 'Ooops!',
        text: 'Preencha todos os campos',
        icon: 'error',
        confirmButtonText: 'Okay'
      });
      
    }
  }

  cancelarMsg(){
    this.msgForm.reset();
  }

}
