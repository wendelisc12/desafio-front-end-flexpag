import { Component, OnInit, Input } from '@angular/core';
import { VeiculoDetalhes } from 'src/app/models/VeiculoDetalhes';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() valorDoVeiculo!:string;
  @Input() veiculoDetalhes!:VeiculoDetalhes[];

  percentualResults = ( parseFloat(this.valorDoVeiculo.replace(',', '.')) -  parseFloat(this.veiculoDetalhes[0].valor.replace(',', '.'))) / parseFloat(this.veiculoDetalhes[0].valor.replace(',', '.')) *100

  textoResults:string = 'valor na tabela FIPE'

  constructor() { }

  ngOnInit(): void {
  }

}
