export class Data {
    compras = [
        {
          "01-09-2024": [
            {
              iconcls: "bxs-devices",
              tipo_da_compra: "Eletrônico",
              nome_estabelecimento: "TechStore",
              preco: 100,
            },
          ],
        },
        {
          "02-09-2024": [
            {
              iconcls: "bxs-t-shirt",
              tipo_da_compra: "Vestuário",
              nome_estabelecimento: "FashionBoutique",
              preco: 80,
            },
          ],
        },
        {
          "03-09-2024": [
            {
              iconcls: "bxs-coffee-togo",
              tipo_da_compra: "Alimentação",
              nome_estabelecimento: "Supermercado Central",
              preco: 100,
            },
          ],
        },
        {
          "04-09-2024": [
            {
              iconcls: "bxs-briefcase",
              tipo_da_compra: "Serviço",
              nome_estabelecimento: "Clínica de Saúde",
              preco: 50,
            },
          ],
        },
        {
          "05-09-2024": [
            {
              iconcls: "bxs-book-bookmark",
              tipo_da_compra: "Educação",
              nome_estabelecimento: "CursosOnline",
              preco: 90,
            },
          ],
        },
        {
          "06-09-2024": [
            {
              iconcls: "bxs-plane",
              tipo_da_compra: "Viagem",
              nome_estabelecimento: "Agência Viajar",
              preco: 90,
            },
          ],
        },
        {
          "07-09-2024": [
            {
              iconcls: "bxs-car",
              tipo_da_compra: "Mobilidade",
              nome_estabelecimento: "AutoLocadora",
              preco: 170,
            },
          ],
        },
        {
          "08-09-2024": [
            {
              iconcls: "bxs-spa",
              tipo_da_compra: "Beleza",
              nome_estabelecimento: "Salão Estética",
              preco: 1000,
            },
          ],
        },
        {
          "09-09-2024": [
            {
              iconcls: "bxs-movie-play",
              tipo_da_compra: "Lazer",
              nome_estabelecimento: "CinemaTop",
              preco: 1300,
            },
          ],
        },
        {
          "10-09-2024": [
            {
              iconcls: "bxs-chip",
              tipo_da_compra: "Tecnologia",
              nome_estabelecimento: "EletroMania",
              preco: 200,
            },
          ],
        },
        {
          "11-09-2024": [
            {
              iconcls: "bxs-dumbbell",
              tipo_da_compra: "Esportes",
              nome_estabelecimento: "SportCenter",
              preco: 100,
            },
          ],
        },
        {
          "12-09-2024": [
            {
              iconcls: "bxs-store",
              tipo_da_compra: "Mercado",
              nome_estabelecimento: "HiperMercado",
              preco: 1200,
            },
          ],
        },
        {
          "13-09-2024": [
            {
              iconcls: "bxs-book",
              tipo_da_compra: "Livraria",
              nome_estabelecimento: "BookStore",
              preco: 100,
            },
          ],
        },
        {
          "14-09-2024": [
            {
              iconcls: "bxs-restaurant",
              tipo_da_compra: "Restaurante",
              nome_estabelecimento: "Bistrô Gourmet",
              preco: 300,
            },
          ],
        },
        {
          "15-09-2024": [
            {
              iconcls: "bxs-first-aid",
              tipo_da_compra: "Farmácia",
              nome_estabelecimento: "DrogaMais",
              preco: 1000,
            },
          ],
        },
      ];
      

  atualizarCompra(data, indiceCompra, novasInformacoes) {
    if (!this.compras[data]) {
      console.error(`Data ${data} não encontrada.`);
      return;
    }

    if (indiceCompra < 0 || indiceCompra >= this.compras[data].length) {
      console.error(`Índice da compra inválido para a data ${data}.`);
      return;
    }

    this.compras[data][indiceCompra] = {
      ...this.compras[data][indiceCompra],
      ...novasInformacoes,
    };
  }

  removerCompra(data, indiceCompra) {
    if (!this.compras[data]) {
      console.error(`Data ${data} não encontrada.`);
      return;
    }

    if (indiceCompra < 0 || indiceCompra >= this.compras[data].length) {
      console.error(`Índice da compra inválido para a data ${data}.`);
      return;
    }

    this.compras[data].splice(indiceCompra, 1);
  }

  removerTodasAsComprasDeUmDia(data) {
    delete this.compras[data];
  }

  obterPrecos() {
    let precos = [];
    this.compras.forEach(compra => {
      const data = Object.keys(compra)[0];
      compra[data].forEach(item => {
        precos.push(item.preco); 
      });
    });
    return precos;
  }

  obterDados() {
    let dados = [];
    this.compras.forEach(compra => {
      const data = Object.keys(compra)[0];
      compra[data].forEach(item => {
        dados.push({
            iconcls: item.iconcls,
            tipo_da_compra: item.tipo_da_compra,
            nome_estabelecimento: item.nome_estabelecimento,
            preco: item.preco.toFixed(2),
        }); 
      });
    });
    return dados;
  }
}
