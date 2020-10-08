                                                            /* ---------- VARIABLES ---------- */

const form = document.querySelector(".form-quiz");
let tableauResultats = [];
const emojis = ["✔️", "🌟", "👀", "😭", "👎"];
const titreResultat = document.querySelector("#titreResultat");
const aideResultat = document.querySelector("#aideResultat");
const noteResultat = document.querySelector("#noteResultat");
const boutonValider = document.querySelector("#boutonValider");
let verifTableau = [];

// Tableau Random

let randoms = [];


                                                            /* ---------- GENERATION ALEATOIRE DES QUESTIONS ---------- */

function randomTab() {

    // Boucle pour parcourir les blocs Questions
    for (let i = 0; i < blocsQuestions.length; i++) {
        let random = Math.floor(Math.random() * questions.length);  // Génération d'un nombre aléatoire de 0 à nombre de questions
        // Tant que la valeur "random" se trouve dans le tableau "randoms"
        while (randoms.includes(random)) {
            random = Math.floor(Math.random() * questions.length);  // Génération d'un autre nombre aléatoire de 0 à nombre de questions
        }
        randoms.push(random);   // Ajout de la valeur "random" dans le tableau "randoms"
        // Remplissage des blocs Questions
        blocsQuestions[i].titre.innerText = questions[randoms[i]].question;
        blocsQuestions[i].reponse1.innerText = questions[randoms[i]].reponse1;
        blocsQuestions[i].reponse2.innerText = questions[randoms[i]].reponse2;
        blocsQuestions[i].reponse3.innerText = questions[randoms[i]].reponse3;
        blocsQuestions[i].reponse4.innerText = questions[randoms[i]].reponse4;
    }
    return randoms;
}

randomTab();






