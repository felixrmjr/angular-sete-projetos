// O services é o responsável por manter a lógica do negócio 
import { Injectable } from '@angular/core';

// @Injectable() significa que o Angular consegue prover essa classe para outras
// classes de forma automatica, utilizado para criar a injeção de dependencia
@Injectable()
export class CalculadoraService {

  constructor() { }

}
