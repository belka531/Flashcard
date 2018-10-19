const cards = [
    {
        question: "What does DOM stand for?",
        answer: "Document object Model"
    },
    {
        question: "Why DOM?",
        answer: "To manipulate HTML elements & make the webpage responsive."
    },
    {
        question: "What is developer tools?",
        answer: "Tools built in browser that helps to inspect a page, find and fix issues directly."
    }];

let q = document.getElementById("question");
let a = document.getElementById("answer");
//let chosenCardIndex = 0;

const showCard = function(card) {
    q.innerText = card["question"];
    a.innerText = card["answer"];

    q.style.display = "block";
    a.style.display = "none";

}
showCard(cards[0]);

const turnCard = function() {
    if (q.style.display == "block") {
        q.style.display = "none";
        a.style.display = "block";
    } else {
        q.style.display = "block";
        a.style.display = "none";
    }
}

document.getElementById("card").addEventListener("click",turnCard,false);

const nextCard = function() {
    const i = Math.floor(Math.random() * (cards.length));
    card = cards[i];
    if (q.innerText == card["question"]) {
        card = cards[(i + 1) % cards.length];
    }
        showCard(card);
};

document.getElementById("onclick-button").addEventListener("click", nextCard,false);

const addNewCard = function(){
    cards.push({
        "question": document.getElementById("newQuestion").value,
        "answer": document.getElementById("newAnswer").value,
    });
    showCard(cards[cards.length - 1]);
    console.log(cards);
};
document.getElementById("onclick-button2").addEventListener("click", addNewCard, false);

const deleteCard = function() {
    for (let index=0; index <=cards.length-1; index++) {
        if (q.innerText == cards[index]["question"]&& a.innerText ==cards[index]["answer"]) {
                chosenCardIndex =index;
                cards.splice(chosenCardIndex, 1);
                if (cards.length == 0) {
                    alert("NO CARDS LEFT");
                } else {
                    nextCard();
                }
        }
    }

};


    

document.getElementById("onclick-button3").addEventListener("click",deleteCard,false);





document.addEventListener('DOMContentLoaded', fn, false);
