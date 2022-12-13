import { Component, OnInit } from '@angular/core';
import { AService } from '../service';
import { ServiceLink } from './../service.service';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  todo: AService[]=[]; //criando uma propriedade que pode ou não ser obrigatório que trás a nossa interface

  constructor(private serviceLink: ServiceLink) { } //injetando no construtor o nosso serviço

  ngOnInit(): void {
    this.serviceLink.ObserTodos()
      .subscribe(inter => this.todo = inter);
  }
}



