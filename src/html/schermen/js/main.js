function check() {

    var vraag1 = document.quiz.vraag1.value;
    var vraag2 = document.quiz.vraag2.value;
    var vraag3 = document.quiz.vraag3.value;
    var vraag4 = document.quiz.vraag4.value;
    var vraag5 = document.quiz.vraag5.value;
    var vraag6 = document.quiz.vraag6.value;
    var vraag7 = document.quiz.vraag7.value;
    var correct = 0;


    if (vraag1 == "b") {
        correct++;
    }
    if (vraag2 == "c") {
        correct ++;
    }
    if (vraag3 == "d") {
        correct++;
    }
    if (vraag4 == "c") {
        correct++;
    }
    if (vraag5 == "b") {
        correct++;
    }
    if (vraag6 == "d") {
        correct++;
    }
    if (vraag7 == "a") {
        correct++;
    }

    var berichten = ["Ultimate hero", "Good Job", "Het begin is er", "Nait zo best"];

    var antwoord = ["Je hebt " + correct + " vraag goed!", "Je hebt " + correct + " vragen goed!"];
    var pictures = ["img/win.gif", "img/mid.gif", "img/meh.gif", "img/loser.gif"];
    var badges = ["img/labmaster.png", "img/laborant.png", "img/labassistent.png", "img/labveger.png"];
    var status = ["LABMASTER", "LABORANT", "LABASSISTENT", "LABVEGER"];
    var sc = [ "<a class=\"btn btn--primary\" onclick=\"uportAttest(" + 0 + "," + 0 + "," + correct + ")\">Claim je badge</a>",
    "<a class=\"btn btn--primary\" onclick=\"uportAttest(" + 1 + "," + 1 + "," + correct + ")\">Claim je badge</a>",
    "<a class=\"btn btn--primary\" onclick=\"uportAttest(" + 2 + "," + 2 + "," + correct + ")\">Claim je badge</a>",
    "<a class=\"btn btn--primary\" onclick=\"uportAttest(" + 3 + "," + 3 + "," + correct + ")\">Claim je badge</a>"
    ]
    // var sc = [ "<a class=\"btn btn--primary\" onclick=\"uportAttest(" + 0 + "," + 1 + ")\">Claim je badge</a>",
    // "<a class=\"btn btn--primary\" onclick=\"uportAttest(" + correct + "," + correct++ + ")\">Claim je badge</a>",
    // "<a class=\"btn btn--primary\" onclick=\"uportAttest(" + correct + "," + correct++ + ")\">Claim je badge</a>",
    // "<a class=\"btn btn--primary\" onclick=\"uportAttest(" + correct + "," + correct++ + ")\">Claim je badge</a>"
    //    ];
    console.log("Sc: ", sc)
    var knop = [ sc[0], sc[1], sc[2], sc[3] ]
    var reject = ["<a class=\"btn btn--primary\" onclick=\"redirect\" style=\"background-color:Tomato;\">Weiger je badge</a>", "<a class=\"btn btn--primary\" onclick=\"redirect()\" style=\"background-color:Tomato;\">Weiger je badge</a>", "<a class=\"btn btn--primary\" onclick=\"redirect()\" style=\"background-color:Tomato;\">Weiger je badge</a>", "<a class=\"btn btn--primary\" onclick=\"redirect()\" style=\"background-color:Tomato;\">Weiger je badge</a>"];

    var range;
    if (correct < 2) {
        range = 3;
        updateLoserCounter();

    }
    if (correct > 1 && correct < 4) {
        range = 2;
        updateMatigCounter();
    }
    if (correct > 3 && correct < 7) {
        range = 1;
        updateGemiddeldCounter();
    }
    if (correct > 6) {
        range = 0;
        updateHeldCounter();
    }


    var optie;
    if (correct == 1) {
        optie = 0;
    }
    else {
        optie = 1;
    }

    document.getElementById("after_login").style.display = "inline";
    document.getElementById("after_submit").style.display = "inline";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("bericht").innerHTML = berichten[range];
    document.getElementById("status").innerHTML = status[range];
    document.getElementById("number_correct").innerHTML = antwoord[optie];
    document.getElementById("picture").src = pictures[range];
    document.getElementById("badge").src = badges[range];
    document.getElementById("knop").innerHTML = knop[range];
    document.getElementById("reject").innerHTML = reject[range];
    console.log(correct)
    console.log(status[range])
    set_score(correct, status[range]);

}

function readCounter() {
    document.getElementById("LABVEGER").innerHTML = localStorage.losercount;
    document.getElementById("LABASSISTENT").innerHTML = localStorage.matigcount;
    document.getElementById("LABORANT").innerHTML = localStorage.gemiddeldcount;
    document.getElementById("LABMASTER").innerHTML = localStorage.heldcount;
}


function readCounter2() {
    document.getElementById("LABVEGER2").innerHTML = localStorage.losercount;
    document.getElementById("LABASSISTENT2").innerHTML = localStorage.matigcount;
    document.getElementById("LABORANT2").innerHTML = localStorage.gemiddeldcount;
    document.getElementById("LABMASTER2").innerHTML = localStorage.heldcount;
}


function updateLoserCounter() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.losercount) {
            localStorage.losercount = Number(localStorage.losercount) + 1;
        } else {
            localStorage.losercount = 0;
        }
    }
}

function updateMatigCounter() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.matigcount) {
            localStorage.matigcount = Number(localStorage.matigcount) + 1;
        } else {
            localStorage.matigcount = 0;
        }
    }
}

function updateGemiddeldCounter() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.gemiddeldcount) {
            localStorage.gemiddeldcount = Number(localStorage.gemiddeldcount) + 1;
        } else {
            localStorage.gemiddeldcount = 0;
        }
    }
}

function updateHeldCounter() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.heldcount) {
            localStorage.heldcount = Number(localStorage.heldcount) + 1;
        } else {
            localStorage.heldcount = 0;
        }
    }
}

function redirect() {
    location.reload();

}

function scoreBoard() {

    document.getElementById("login").style.display = "none";
    document.getElementById("header").style.display = "none";
    document.getElementById("scoreboard2").style.display = "inline";
    readCounter2();
}
