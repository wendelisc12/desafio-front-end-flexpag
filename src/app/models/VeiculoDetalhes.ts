export class VeiculoDetalhes {
    valor: string;
    marca: string;
    modelo: string;
    anoModelo: string;
    combustivel: string;
    codigoFipe: string;
    mesReferencia: string;
    TipoVeiculo: string;
    SiglaCombustivel: string;

    constructor(
        valor: string,
        marca: string,
        modelo: string,
        anoModelo: string,
        combustivel: string,
        codigoFipe: string,
        mesReferencia: string,
        TipoVeiculo: string,
        SiglaCombustivel: string
    ) { 
        this.valor = valor;
        this.marca = marca;
        this.modelo = modelo;
        this.anoModelo = anoModelo;
        this.combustivel = combustivel;
        this.codigoFipe = codigoFipe 
        this.mesReferencia = mesReferencia
        this.TipoVeiculo = TipoVeiculo
        this.SiglaCombustivel = SiglaCombustivel
    }
}
