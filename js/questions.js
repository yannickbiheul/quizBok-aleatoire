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

let randoms = [];

function randomTab() {
    let random1 = Math.floor(Math.random() * 5);
    randoms.push(random1);

    let random2 = Math.floor(Math.random() * 5);
    while (random2 === randoms[0]) {
        random2 = Math.floor(Math.random() * 5);
    }
    randoms.push(random2);

    let random3 = Math.floor(Math.random() * 5);
    while (random3 === randoms[0] || random3 === randoms[1]) {
        random3 = Math.floor(Math.random() * 5);
    }
    randoms.push(random3);

    let random4 = Math.floor(Math.random() * 5);
    while (random4 === randoms[0] || random4 === randoms[1] || random4 === randoms[2]) {
        random4 = Math.floor(Math.random() * 5);
    }
    randoms.push(random4);

    let random5 = Math.floor(Math.random() * 5);
    while (random5 === randoms[0] || random5 === randoms[1] || random5 === randoms[2] || random5 === randoms[3]) {
        random5 = Math.floor(Math.random() * 5);
    }
    randoms.push(random5);

    return randoms;
}

randomTab();

console.log(randoms);

let ib = 0;

for (let i = 0; i < questions.length; i++) {
    blocsQuestions[ib].titre.innerText = questions[randoms[i]].question;
    blocsQuestions[ib].reponse1.innerText = questions[randoms[i]].reponse1;
    blocsQuestions[ib].reponse2.innerText = questions[randoms[i]].reponse2;
    blocsQuestions[ib].reponse3.innerText = questions[randoms[i]].reponse3;
    blocsQuestions[ib].reponse4.innerText = questions[randoms[i]].reponse4;
    ib++;
}