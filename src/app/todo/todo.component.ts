import { Component, OnInit } from '@angular/core';
import { AService } from '../todo';
import { TodoLink } from '../todo.service';


@Component({
  selector: 'app-service',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: AService[]=[]; //criando uma propriedade que pode ou não ser obrigatório que trás a nossa interface

  constructor(private TodoLink: TodoLink) { } //injetando no construtor o nosso serviço

  ngOnInit(): void {
    this.TodoLink.ObserTodos()
      .subscribe(inter => this.todo = inter);
  }
}



