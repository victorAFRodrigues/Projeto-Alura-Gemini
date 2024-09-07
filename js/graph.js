import { Data } from './data.js';

let data = new Data();

let daysLabel = [];

let preco_compras = data.obterPrecos();

for(let d = 0; data.compras.length - 1 >= d; d++){
    daysLabel.push(`${d+1}`)
}

console.log(preco_compras)

export class lineChart{

    constructor(id, context){
        this.id = id;
        this.context = context;
    }

    main(){
        const ctx = document.getElementById(this.id).getContext(this.context);

        const labels = daysLabel;

        const data = {
            labels: labels,
            datasets: [
                {
                label: "Setembro",
                data: preco_compras,
                fill: false,
                borderColor: "#29234c",
                tension: 0.4,
                },
            ],
        };

        const config = {
            type: "line",
            data: data,
        };

        const myChart = new Chart(ctx, config);
    }
}
