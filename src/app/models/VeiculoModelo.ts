import { Veiculo } from "./Veiculo"

export class veiculosModelo{
    modelos:Array<Veiculo>
    anos:Array<Veiculo>

    constructor(modelos:Array<Veiculo>, anos:Array<Veiculo>){
        this.anos = anos,
        this.modelos = modelos
    }
}