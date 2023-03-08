import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http'
import { API_PATH } from 'src/environments/environment';
import { Veiculo } from '../models/Veiculo';
import { veiculosModelo } from '../models/VeiculoModelo';
import { VeiculoDetalhes } from '../models/VeiculoDetalhes';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  constructor(private httpClient: HttpClient) { }

  obterMarcas(tipoVeiculo:string){
    return this.httpClient.get<Veiculo[]>(`${API_PATH}${tipoVeiculo}/marcas`).toPromise()
  }

  obterModelo(tipoVeiculo:string, codMarca:string){
    return this.httpClient.get<veiculosModelo>(`${API_PATH}${tipoVeiculo}/marcas/${codMarca}/modelos`).toPromise();
  }

  obterAnos(tipoVeiculo:string, codMarca:string, codModelo:string){
    return this.httpClient.get<Veiculo[]>(`${API_PATH}${tipoVeiculo}/marcas/${codMarca}/modelos/${codModelo}/anos`).toPromise();
  }

  obterValor(tipoVeiculo:string, codMarca:string, codModelo:string, codAno:string){
    return this.httpClient.get<VeiculoDetalhes[]>(`${API_PATH}${tipoVeiculo}/marcas/${codMarca}/modelos/${codModelo}/anos/${codAno}`).toPromise();
  }
}
