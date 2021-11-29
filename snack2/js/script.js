let teamList = [
    { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 }
];

let TeamAndFaul = [];


for (let i = 0; i < teamList.length; i++) {
    let { nome } = teamList[i];

    let singleTeam = teamList[i];
    let punti = randomNumber();
    let falli = randomNumber();

    singleTeam.puntiFatti = punti;
    singleTeam.falliSubiti = falli;

    let falliSubiti = singleTeam.falliSubiti;
    TeamAndFaul.push({ nome, falliSubiti });
}

console.log(teamList);
console.log(TeamAndFaul);





function randomNumber() {
    return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
}