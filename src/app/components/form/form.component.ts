import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Veiculo } from 'src/app/models/Veiculo';
import { VeiculoDetalhes } from 'src/app/models/VeiculoDetalhes';
import { VeiculosService } from 'src/app/services/veiculos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  
  selectedVeiculo:string = "Selecione o veículo";
  selectedMarca:string = "Selecione a marca";
  selectedModelo:string = "Selecione o modelo";
  selectedAno:string = "Selecione o ano";
  valorVeiculo: string = "";

  veiculos:Veiculo[] = []
  veiculoModelos:Array<Veiculo> = []
  veiculoAno:Veiculo[] = []
  veiculoDetalhes:VeiculoDetalhes[] = []

  activeMarca = true
  activeModelo = true
  activeAno = true

  constructor(private veiculosService: VeiculosService) { }
  obterMarcas(){
    this.veiculosService.obterMarcas(this.selectedVeiculo)
    .then(response => {
      if(response != undefined){
        this.veiculos = response
      }
      
    })

    this.activeMarca = false
  }

  obterModelos(){
    this.veiculosService.obterModelo(this.selectedVeiculo, this.selectedMarca)
    .then(response => {
      if(response != undefined){
        this.veiculoModelos = response.modelos
      }
    })
    this.activeModelo = false
    
  }

  obterAno(){
    this.veiculosService.obterAnos(this.selectedVeiculo, this.selectedMarca, this.selectedModelo)
    .then(response => {
      if(response != undefined){
        this.veiculoAno = response
      }
    })
    this.activeAno = false

    
  }

@Output() valorVeiculoInfo = new EventEmitter<string>();
@Output() detalhesDoVeiculo = new EventEmitter<VeiculoDetalhes[]>();
@Output() mostrarResults = new EventEmitter<boolean>();

 enviar(){
  this.veiculosService.obterValor(this.selectedVeiculo, this.selectedMarca, this.selectedModelo, this.selectedAno)
    .then(response => {
      if(response != undefined){
        this.veiculoDetalhes = response
      }
    })
    this.valorVeiculoInfo.emit(this.valorVeiculo)
    this.detalhesDoVeiculo.emit(this.veiculoDetalhes)
    this.mostrarResults.emit(true)
 }
 
 

  ngOnInit(): void {
  }
  

  
}
