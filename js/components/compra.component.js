export const licompra = (iconeclass, tipo_da_compra, nome_estabelecimento, preco) => {
    let price = preco.toString();
    price.replace('.',',');
    return `
        <li>
            <div>
                <i class="bx ${iconeclass}"></i>
                <span>${tipo_da_compra} | ${nome_estabelecimento}</span>
            </div>
            <span class="value">
                <strong>R$ ${price.replace('.',',')}</strong>
            </span>
        </li>
    `;
};


{/* <i class='bx bxs-book' ></i> */}