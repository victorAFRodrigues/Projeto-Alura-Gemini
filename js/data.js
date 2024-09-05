
let today = new Date();
let compra1 = new Date(today.getFullYear(), today.getMonth(), today.getDate())

export const AppData ={
    compra1: compra1,
    compras:[
        {
            "01-09-2024": [
                {
                    "tipo_da_compra": "Eletrônico",
                    "nome_estabelecimento": "TechStore",
                    "preco": 100
                }
            ]
        },
        {
            "02-09-2024": [
                {
                    "tipo_da_compra": "Vestuário",
                    "nome_estabelecimento": "FashionBoutique",
                    "preco": 80
                }
            ]
        },
        {
            "03-09-2024": [
                {
                    "tipo_da_compra": "Alimentação",
                    "nome_estabelecimento": "Supermercado Central",
                    "preco": 100
                }
            ]
        },
        {
            "04-09-2024": [
                {
                    "tipo_da_compra": "Serviço",
                    "nome_estabelecimento": "Clínica de Saúde",
                    "preco": 50
                }
            ]
        },
        {
            "05-09-2024": [
                {
                    "tipo_da_compra": "Educação",
                    "nome_estabelecimento": "CursosOnline",
                    "preco": 90
                }
            ]
        },
        {
            "06-09-2024": [
                {
                    "tipo_da_compra": "Viagem",
                    "nome_estabelecimento": "Agência Viajar",
                    "preco": 90
                }
            ]
        },
        {
            "07-09-2024": [
                {
                    "tipo_da_compra": "Mobilidade",
                    "nome_estabelecimento": "AutoLocadora",
                    "preco": 170
                }
            ]
        },
        {
            "08-09-2024": [
                {
                    "tipo_da_compra": "Beleza",
                    "nome_estabelecimento": "Salão Estética",
                    "preco": 1000
                }
            ]
        },
        {
            "09-09-2024": [
                {
                    "tipo_da_compra": "Lazer",
                    "nome_estabelecimento": "CinemaTop",
                    "preco": 1300
                }
            ]
        },
        {
            "10-09-2024": [
                {
                    "tipo_da_compra": "Tecnologia",
                    "nome_estabelecimento": "EletroMania",
                    "preco": 200
                }
            ]
        },
        {
            "11-09-2024": [
                {
                    "tipo_da_compra": "Esportes",
                    "nome_estabelecimento": "SportCenter",
                    "preco": 100
                }
            ]
        },
        {
            "12-09-2024": [
                {
                    "tipo_da_compra": "Mercado",
                    "nome_estabelecimento": "HiperMercado",
                    "preco": 1200
                }
            ]
        },
        {
            "13-09-2024": [
                {
                    "tipo_da_compra": "Livraria",
                    "nome_estabelecimento": "BookStore",
                    "preco": 100
                }
            ]
        },
        {
            "14-09-2024": [
                {
                    "tipo_da_compra": "Restaurante",
                    "nome_estabelecimento": "Bistrô Gourmet",
                    "preco": 300
                }
            ]
        },
        {
            "15-09-2024": [
                {
                    "tipo_da_compra": "Farmácia",
                    "nome_estabelecimento": "DrogaMais",
                    "preco": 1000
                }
            ]
        }
        
        
    ],

    get:(quantity="all")=>{

    },

    post:(quantity="all")=>{
        
    }
}