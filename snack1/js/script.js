let arrayBici =
    [
        {
            nome: "Bmx",
            peso: 8,
        },
        {
            nome: "Pietro",
            peso: 4,
        },
        {
            nome: "Boolean",
            peso: 10,
        },
        {
            nome: "B-twin",
            peso: 6,
        }
    ];



let container = document.querySelector(".container");
console.log(container);


let nuovoArray = [...arrayBici];
console.log(arrayBici);


for (let i = 0; i < arrayBici.length; i++) {

    let bici = arrayBici[i];
    console.log(bici);

    const { nome, peso } = bici;
    console.log(nome, peso);

    nuovoArray.sort((a, b) => a.peso - b.peso);

}

let biciLeggera = nuovoArray[0];
console.log(biciLeggera);

let codiceBici = `  <div>
                        <ul>
                            <li><h3>Bici</h3></li>
                            <li>nome: ${biciLeggera.nome}</li>
                            <li>peso: ${biciLeggera.peso} kg</li>
                        </ul>
                    </div> `;

container.innerHTML += codiceBici;
