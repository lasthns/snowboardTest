
var rightAnswers = [3, 2, 4, 3, 1, 4, 2, 2, 3, 0];
var answers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var k = 0;
var j = 0;

function startTest(button) {
    button.style.display = 'none';
    document.getElementById('finalButton').style.display = 'block';
    document.getElementById('numbersOfQuestions').style.display = 'block';
    var questionButton =  document.getElementById('buttonQuestion1');
    get(1, questionButton);

}

function get(questionNomber, button) {
    for (var i = 1; i <= 10; i++) {
        if (i === questionNomber) {
            document.getElementById('question' + questionNomber).style.display = 'block';
            button.style.backgroundColor = '#ffffff';
        } else {
            document.getElementById('question' + i).style.display = 'none';
            document.getElementById('buttonQuestion' + i).style.backgroundColor = '#d6d6d6';

        }
    }
}

function answer(button) {
    var nomberOfQuestion = parseInt(button.id);
    var valueOfAnswer = document.getElementsByName('answer' + nomberOfQuestion);
    for (var i = 0; i <= 3; i++) {
        if (valueOfAnswer[i].checked) {
            answers[nomberOfQuestion - 1] = parseInt(valueOfAnswer[i].value);
        }
        button.disabled = 'disabled';
        valueOfAnswer[i].disabled = 'disabled';
    }
    if (nomberOfQuestion !== 10){
        get(nomberOfQuestion + 1, document.getElementById('buttonQuestion'+ (nomberOfQuestion + 1)));
    }
}

function theEnd(button) {
    document.getElementById('finalButton').style.display = 'none';
    document.getElementById('numbersOfQuestions').style.display = 'none';
    for (var q = 1; q <= 10; q++) {
        document.getElementById('question' + q).style.display = 'none';
    }

    document.getElementById('finalWindow').style.display = 'block';

    for (var i = 0; i < 10; i++) {
        if (i !== 9) {
            if (rightAnswers[i] === answers[i] && i !== 9) {
                k += 1;
            }
        } else {
            if (answers[i] !== 0)
                k += 1;
        }
        if (answers[i] === 0) {
            j += 1;
        }
    }
    k = k / 10 * 100;
    if (k < 30){
        document.getElementById('resultTitle').innerHTML = "Можно и лучше...\n";
    } else if (k < 60) {
        document.getElementById('resultTitle').innerHTML = "Неплохо!\n";
    } else if (k < 90) {
        document.getElementById('resultTitle').innerHTML = "Почти великолепно!\n";
    } else if (k >= 90) {
        document.getElementById('resultTitle').innerHTML = "Великолепно!\n";
    }
    document.getElementById('resultPercentage').innerHTML = "Вы сноубордист на " + k + "%\n";
    document.getElementById('resultWithoutAnswer').innerHTML = "Вы оставили без ответа " + j + " вопросов.";
}

function returnToMain() {
    window.location.reload(window);
}