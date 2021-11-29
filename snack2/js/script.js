const footballTeams = [
    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Juventus',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Palermo',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Ascoli',
        puntiFatti: 0,
        falliSubiti: 0
    },
];



const newTeamsArray = [];
for(let i = 0; i < footballTeams.length; i++) {
    const thisTeam = footballTeams[i];

    const randomFalliSubiti = getRndInteger(0, 100);
    const randomPuntiFatti = getRndInteger(0, 100);

    thisTeam.puntiFatti = randomPuntiFatti;
    thisTeam.falliSubiti = randomFalliSubiti;

    const {nome, falliSubiti} = thisTeam;

    const newTeam = {
        nome,
        falliSubiti
    };

    newTeamsArray.push(newTeam);
}


console.log(newTeamsArray);

