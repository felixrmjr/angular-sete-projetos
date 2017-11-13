// O compoment é o responsável pela comunicação entre a view e a 
// regra de negocio. Fazendo uma analogia com ol MVC ele seria um 
// equivalente do controler
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CalculadoraComponent implements OnInit {

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit() {
    //this.calculadoraService.
  }

}
