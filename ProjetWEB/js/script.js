function allerjeu(){
    document.location.href ="game.html";
}

function allerdata(){
    document.location.href = "data.html";
}

function allernouveaute(){
    document.location.href = "nouveaute.html";
}

function allerproblematique(){
    document.location.href = "problematique.html";
}

function allerapropos(){
    document.location.href = "apropos.html";
}

function alleraccueil(){
    document.location.href = "accueil.html";
}

function openQ_A1() {
    document.getElementById('A1').style.display = 'flex';
}

function closeQ_A1() {
    const opt1 = document.getElementById('A1option1').checked;
    const opt2 = document.getElementById('A1option2').checked;
    const opt3 = document.getElementById('A1option3').checked;
    if (opt2 == true){
        document.getElementById('bA1').style.visibility = 'hidden';
    }
    document.getElementById('A1').style.display = 'none';
}

function openQ_B1() {
    document.getElementById('B1').style.display = 'flex';
}

function closeQ_B1() {
    const opt1 = document.getElementById('B1option1').value;

    if(opt1 == "Brundtland"){
        document.getElementById('bB1').style.visibility = "hidden";
    }

    document.getElementById('B1').style.display = 'none';
}

function openQ_C1() {
    document.getElementById('C1').style.display = 'flex';
}

function closeQ_C1() {
    const opt2 = document.getElementById('C1option2').checked;

    if(opt2 == true){
        document.getElementById('bC1').style.visibility = 'hidden';
    }

    document.getElementById('C1').style.display = 'none';
}

function openQ_A2() {
    document.getElementById('A2').style.display = 'flex';
}

function closeQ_A2() {
    const opt1 = document.getElementById('A2option1').checked;
    const opt2 = document.getElementById('A2option2').checked;
    const opt3 = document.getElementById('A2option3').checked;
    const opt4 = document.getElementById('A2option4').checked;

    if (opt1 == true && opt4 == true){
        document.getElementById('bA2').style.visibility = 'hidden';
    }

    document.getElementById('A2').style.display = 'none';
}

function openQ_B2() {
    document.getElementById('B2').style.display = 'flex';
}

function closeQ_B2() {
    const opt1 = document.getElementById('B2option1').checked;
    const opt2 = document.getElementById('B2option2').checked;
    const opt3 = document.getElementById('B2option3').checked;
    const opt4 = document.getElementById('B2option4').checked;

    if(opt3 == true){
        document.getElementById('bB2').style.visibility = 'hidden';
    }

    document.getElementById('B2').style.display = 'none';
}

function openQ_C2() {
    document.getElementById('C2').style.display = 'flex';
}

function closeQ_C2() {
    const opt1 = document.getElementById('C2option1').checked;
    const opt2 = document.getElementById('C2option2').checked;
    const opt4 = document.getElementById('C2option4').checked;

    if(opt1 == true && opt2 == true && opt4 == true){
        document.getElementById('bC2').style.visibility = 'hidden';
    }

    document.getElementById('C2').style.display = 'none';
}

function openQ_A3() {
    document.getElementById('A3').style.display = 'flex';
}

function closeQ_A3() {
    const opt1 = document.getElementById('A3option1').value;

    if(opt1 == "Développement durable" || opt1 == "développement durable"){
        document.getElementById('bA3').style.visibility = 'hidden';
    }

    document.getElementById('A3').style.display = 'none';
}

function openQ_B3() {
    document.getElementById('B3').style.display = 'flex';
}

function closeQ_B3() {
    const opt1 = document.getElementById('B3option1').checked;
    const opt2 = document.getElementById('B3option2').checked;
    const opt3 = document.getElementById('B3option3').checked;

    if(opt1 == true && opt3==true){
        document.getElementById('bB3').style.visibility = 'hidden';
    }

    document.getElementById('B3').style.display = 'none';
}

function openQ_C3() {
    document.getElementById('C3').style.display = 'flex';
}

function closeQ_C3() {
    const opt1 = document.getElementById('C3option1').value;

    if(opt1 == "vivable" || opt1 == "inclusif" || opt1 == "résilient"){
        document.getElementById('bC3').style.visibility = 'hidden';
    }

    document.getElementById('C3').style.display = 'none';
}

function openQ_A4() {
    document.getElementById('A4').style.display = 'flex';
}

function closeQ_A4() {
    const opt1 = document.getElementById('A4option1').checked;
    const opt2 = document.getElementById('A4option2').checked;
    const opt3 = document.getElementById('A4option3').checked;

    if (opt2 == true){
        document.getElementById('bA4').style.visibility = 'hidden';
    }

    document.getElementById('A4').style.display = 'none';
}

function openQ_B4() {
    document.getElementById('B4').style.display = 'flex';
}

function closeQ_B4() {
    const opt1 = document.getElementById('B4option1').checked;
    const opt2 = document.getElementById('B4option2').checked;
    const opt3 = document.getElementById('B4option3').checked;

    if(opt1 == true){
        document.getElementById('bB4').style.visibility = 'hidden';
    }

    document.getElementById('B4').style.display = 'none';
}

function openQ_C4() {
    document.getElementById('C4').style.display = 'flex';
}

function closeQ_C4() {
    const opt1 = document.getElementById('C4option1').checked;
    const opt2 = document.getElementById('C4option2').checked;
    const opt3 = document.getElementById('C4option3').checked;

    if (opt2 == true && opt1 == false && opt3 == false){
        document.getElementById('bC4').style.visibility = 'hidden';
    }

    document.getElementById('C4').style.display = 'none';
}

function openQ_A5() {
    document.getElementById('A5').style.display = 'flex';
}

function closeQ_A5() {
    const opt1 = document.getElementById('A5option1').checked;
    const opt2 = document.getElementById('A5option2').checked;
    const opt3 = document.getElementById('A5option3').checked;
    const opt4 = document.getElementById('A5option4').checked;

    if(opt1 == true && opt3 == true && opt4 == true){
        document.getElementById('bA5').style.visibility = 'hidden';
    }

    document.getElementById('A5').style.display = 'none';
}

function openQ_B5() {
    document.getElementById('B5').style.display = 'flex';
}

function closeQ_B5() {
    const opt1 = document.getElementById('B5option1').checked;
    const opt2 = document.getElementById('B5option2').checked;

    if (opt1 == true && opt2 == true){
        document.getElementById('bB5').style.visibility = 'hidden';
    }

    document.getElementById('B5').style.display = 'none';
}

function openQ_C5() {
    document.getElementById('C5').style.display = 'flex';
}

function closeQ_C5() {
    const opt1 = document.getElementById('C5option1').checked;
    const opt2 = document.getElementById('C5option2').checked;
    const opt3 = document.getElementById('C5option3').checked;
    

    if(opt1 == true && opt2 == true && opt3 == true){
        document.getElementById('bC5').style.visibility = 'hidden';
    }

    document.getElementById('C5').style.display = 'none';
}
