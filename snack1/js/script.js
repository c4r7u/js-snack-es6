let biciclette =
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



    for(let i = 0; i < biciclette.length; i++) {
        const thisBicicletta = biciclette[i];
        

        if(thisBicicletta.peso < biciLeggera.peso) {
            biciLeggera = thisBicicletta;
        }
    }
    
    console.log(biciLeggera);


    
    const {nome, peso} = biciLeggera;
    
    const biciclettaHTML = `
    <p>La bicicletta più leggera è ${nome} il cui peso è di ${peso} kg</p>
    `;
    document.getElementById('container').innerHTML = biciclettaHTML;