const question1 = {
    question: "Combien y'a t-il d'habitants en France (environ) ?",
    reponse1: "57 Millions",
    reponse2: "67 Millions",
    reponse3: "77 Millions",
    reponse4: "87 Millions",
    bonneReponse: "67 Millions"
}

const question2 = {
    question: "Quel président ne fait pas partie de la cinquième république ?",
    reponse1: "Alain Poher",
    reponse2: "François Mitterand",
    reponse3: "François Hollande",
    reponse4: "René Coty",
    bonneReponse: "René Coty"
}

const question3 = {
    question: "À quel département correspond le code 41 ?",
    reponse1: "Jura",
    reponse2: "Landes",
    reponse3: "Loire-et-Cher",
    reponse4: "Loire",
    bonneReponse: "Loire-et-Cher"
}

const question4 = {
    question: "À quel peintre français doit-on le tableau \"Le radeau de la Méduse\" ?",
    reponse1: "Claude Monet",
    reponse2: "Paul Cezanne",
    reponse3: "Jean Louis Théodore Géricault",
    reponse4: "Jean Baptiste Corot",
    bonneReponse: "Jean Louis Théodore Géricault"
}

const question5 = {
    question: "Quel est le plus long fleuve français ?",
    reponse1: "Le Rhône",
    reponse2: "La Loire",
    reponse3: "La Seine",
    reponse4: "L' Odet",
    bonneReponse: "La Loire"
}

let questions = [question1, question2, question3, question4, question5];

const blocQuestion1 = {
    titre: document.querySelector("#titreQuestion1"),
    reponse1: document.querySelector("#labelq1r1"),
    reponse2: document.querySelector("#labelq1r2"),
    reponse3: document.querySelector("#labelq1r3"),
    reponse4: document.querySelector("#labelq1r4")
}

const blocQuestion2 = {
    titre: document.querySelector("#titreQuestion2"),
    reponse1: document.querySelector("#labelq2r1"),
    reponse2: document.querySelector("#labelq2r2"),
    reponse3: document.querySelector("#labelq2r3"),
    reponse4: document.querySelector("#labelq2r4")
}

const blocQuestion3 = {
    titre: document.querySelector("#titreQuestion3"),
    reponse1: document.querySelector("#labelq3r1"),
    reponse2: document.querySelector("#labelq3r2"),
    reponse3: document.querySelector("#labelq3r3"),
    reponse4: document.querySelector("#labelq3r4")
}

const blocQuestion4 = {
    titre: document.querySelector("#titreQuestion4"),
    reponse1: document.querySelector("#labelq4r1"),
    reponse2: document.querySelector("#labelq4r2"),
    reponse3: document.querySelector("#labelq4r3"),
    reponse4: document.querySelector("#labelq4r4")
}

const blocQuestion5 = {
    titre: document.querySelector("#titreQuestion5"),
    reponse1: document.querySelector("#labelq5r1"),
    reponse2: document.querySelector("#labelq5r2"),
    reponse3: document.querySelector("#labelq5r3"),
    reponse4: document.querySelector("#labelq5r4")
}

let blocsQuestions = [blocQuestion1, blocQuestion2, blocQuestion3, blocQuestion4, blocQuestion5];

let ib = 0;

// for (let i = 0; i < questions.length; i++) {
//     blocsQuestions[ib].titre.innerText = questions[random].question;
//     blocsQuestions[ib].reponse1.innerText = questions[random].reponse1;
//     blocsQuestions[ib].reponse2.innerText = questions[random].reponse2;
//     blocsQuestions[ib].reponse3.innerText = questions[random].reponse3;
//     blocsQuestions[ib].reponse4.innerText = questions[random].reponse4;
//     ib++;
//     console.log(randoms);
// }

let randoms = [];

let random1 = Math.floor(Math.random() * questions.length);
console.log(random1);
randoms.push(random1);
console.log(randoms);

let random2 = Math.floor(Math.random() * questions.length);
console.log(random2);
if (random2 !== randoms[0]) {
    randoms.push(random2);
} else {
    random2 = Math.floor(Math.random() * questions.length);
}
console.log(randoms);