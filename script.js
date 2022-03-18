//console.log(2)
const API = "https://chat2022.marijagrigorjev.repl.co/"

let zina = document.querySelector('.manaZina');
let zinas = document.querySelector('.chataZinas');

function sutitZinu()
{
    console.log('sutitZinu() darbojas');

    zinas.innerHTML = zinas.innerHTML + '<br />' + zina.value;
    fetch(API + '/sutit/' + vards.value + '/' + zina.value)
}

async function ieladetChataZinas()
{
    let datiNoServera = await fetch(API + '/lasit');
    let dati = await datiNoServera.text();
    zinas.innerHTML = dati;
}

async function ieladetChataZinasJson()
{
    let datiNoServera = await fetch(API + '/lasit');
    let dati = await datiNoServera.json();
    console.log (await dati)
}
setInterval(ieladetChataZinas, 1000)