import { Component, Input } from '@angular/core';
import { VeiculoDetalhes } from './models/VeiculoDetalhes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flexpag';
  
  valorVeiculo: string = ''
  detalhesDoVeiculo:VeiculoDetalhes[] = []
  results = false
  
  getResults(showResults:boolean){
    this.results = showResults
  }

  getValorVeiculoInfo(valorVeiculoInfo:string){
    this.valorVeiculo = valorVeiculoInfo
  }
  getDetalhesVeiculo(veiculoDetalhes: VeiculoDetalhes[]){
    this.detalhesDoVeiculo = veiculoDetalhes
  }

  

  constructor(){

  }
  
}
