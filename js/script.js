import { Data } from './data.js';
import { lineChart } from './graph.js';
import { licompra } from './components/compra.component.js';
let data = new Data

let graph = new lineChart('myChart','2d')

graph.main()

console.log( data.obterDados())

let dados_compra = data.obterDados()

let elementList = '';

for(let i = 0; i <= dados_compra.length; i++){

    if(dados_compra[i]){
        elementList  += licompra(
            dados_compra[i].iconcls,
            dados_compra[i].tipo_da_compra, 
            dados_compra[i].nome_estabelecimento, 
            dados_compra[i].preco
        )
    }
    
}

document.getElementById("lista-de-itens-comprados").innerHTML = elementList;

console.log(data.compras);



