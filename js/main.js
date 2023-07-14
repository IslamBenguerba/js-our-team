/**
 * @type {HTMLDivElement}
 */
const boxcard = document.getElementById('cards')
const btn = document.getElementById('btn-add')
const gruppoUtenti = []
const listaNomi = ['Wayne', 'Angela', 'Walter', 'Angela', 'Scott', 'Barbara']
const listaCognomi = ['Barnett', 'Caroll', 'Gordon', 'Lopez', 'Estrada', 'Ramos']
const listaRuoli = ['Founder & CEO', 'Chief Editor', 'Office Manager', 'Social Media Manager', 'Developer', 'Graphic Designer']
const listaImg = ['wayne-barnett-founder-ceo.jpg', 'angela-caroll-chief-editor.jpg', 'walter-gordon-office-manager.jpg', 'angela-lopez-social-media-manager.jpg', 'scott-estrada-developer.jpg', 'barbara-ramos-graphic-designer.jpg']
let utente;
console.log(utente)
let inputUtente;
btn.addEventListener('click', insert)
function insert() {
        inputUtente = {
        nome: inputName = document.querySelector('[name=nome]').value,
        cognome: document.querySelector('[name=cognome').value,
        ruolo: document.querySelector('[name=ruolo]').value,
        immagine: document.querySelector('[name=immagine]').value,
    }
    const card = document.createElement('div')
    card.classList.add('card')
    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    let nomeUser = `<p class="card-text text-center">${inputUtente['nome']} ${inputUtente['cognome']}</p>`
    let RuoloUser = `<p class="card-text text-center">${inputUtente['ruolo']}</p>`
    let img = `<img src="img/${inputUtente['immagine']}">` 
    card.innerHTML = img
    cardBody.innerHTML = nomeUser
    cardBody.innerHTML += RuoloUser
    card.append(cardBody)
    boxcard.append(card)
    gruppoUtenti.push(inputUtente)
    // console.log(inputName)
    // console.log(inputCognome)
}
for (let i = 0; i < listaNomi.length; i++) {
    utente = {
        nome: listaNomi[i],
        cognome: listaCognomi[i],
        ruolo: listaRuoli[i],
        immagine: listaImg[i]
    }
    gruppoUtenti.push(utente)
}
for (let i = 0; i < gruppoUtenti.length; i++) {
    //creo la card
    const card = document.createElement('div')
    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    let nomeUser = `<p class="card-text text-center">${gruppoUtenti[i]['nome']} ${gruppoUtenti[i]['cognome']} </p>`
    let RuoloUser = `<p class="card-text text-center">${gruppoUtenti[i]['ruolo']}</p>`
    card.classList.add('card')

    let img = `<img src="img/${gruppoUtenti[i]['immagine']}">`
    card.innerHTML = img
    cardBody.innerHTML = nomeUser
    cardBody.innerHTML += RuoloUser
    card.append(cardBody)
    boxcard.append(card)
}