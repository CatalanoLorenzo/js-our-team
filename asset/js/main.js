/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.  Ogni membro è caratterizzato dalle seguenti informazioni:
nome
ruolo
foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede */
//MILESTONE 0:
//Creare l’array di oggetti con le informazioni fornite.
const teams = [
    {
        nome:"Wayne Barnett",
        ruolo:"Founder & CEO",
        foto:"wayne-barnett-founder-ceo.jpg"
    },
    {
        nome:"Angela Caroll",
        ruolo:"Chief Editor",
        foto:"angela-caroll-chief-editor.jpg"
    },
    {
        nome:"Walter Gordon",
        ruolo:"Office Manager",
        foto:"walter-gordon-office-manager.jpg"
    },
    {
        nome:"Angela Lopez",
        ruolo:"Social Media Manager",
        foto:"angela-lopez-social-media-manager.jpg"
    },
    {
        nome:"Scott Estrada",
        ruolo:"Developer",
        foto:"scott-estrada-developer.jpg"
    },
    {
        nome:"Barbara Ramos",
        ruolo:"Graphic Designer",
        foto:"barbara-ramos-graphic-designer.jpg"
    },
]
const rowEl = document.querySelector(".row")
//MILESTONE 1:
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < teams.length; i++) {
    const membre = teams[i];
    console.log(membre)
    //MILESTONE 2:
    //Stampare le stesse informazioni su DOM sottoforma di stringhe
    rowEl.innerHTML += `
    Nome:  ${membre.nome} <br>
    Ruolo: ${membre.ruolo} <br>
    Foto:  ${membre.foto}`
        
}