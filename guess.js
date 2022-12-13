const classmates = [
    { id: 0, name: 'Andreas Xu', image: './photos/andreas_xu.jpg' },
    { id: 1, name: 'Abdi Ali', image: './photos/abdi_ali.png' },
    { id: 2, name: 'Albin Lindeborg', image: './photos/albin_lindeborg.jpg' },
    { id: 3, name: 'Alexander Olsson', image: './photos/alexander_olsson.jpg' },
    { id: 4, name: 'Andre Lang', image: './photos/andre_lang.jpg' },
    { id: 5, name: 'Andreas Gustafsson', image: './photos/andreas_gustafsson.JPG' },
    { id: 6, name: 'Arden Haldorson', image: './photos/arden_haldorson.jpg' },
    { id: 7, name: 'Astrid Lindfors', image: './photos/astrid_lindfors.jpg' },
    { id: 8, name: 'Bob Oskar Kindgren', image: './photos/bob_oskar_kindgren.jpg' },
    { id: 9, name: 'Christine Nilsson', image: './photos/christine_nilsson.jpg' },
    { id: 10, name: 'Daniella Dam', image: './photos/daniella_dam.jpg' },
    { id: 11, name: 'Eli Ennab', image: './photos/eli_ennab.jpg' },
    { id: 12, name: 'Felicia Gartz Levin', image: './photos/felicia_gartz_levin.jpg' },
    { id: 13, name: 'Hanna Bjorling', image: './photos/hanna_bjorling.PNG' },
    { id: 14, name: 'Harald Henriksson', image: './photos/harald_henriksson.jpg' },
    { id: 15, name: 'Helga Borjesson', image: './photos/helga_borjesson.png' },
    { id: 16, name: 'Isak Westerberg', image: './photos/isak_westerberg.jpg' },
    { id: 17, name: 'Jimmy Nguyen', image: './photos/Jimmy_nguyen.jpg' },
    { id: 18, name: 'Joakim Ottosson', image: './photos/joakim_ottosson.jpg' },
    { id: 19, name: 'Jonas Nilsson', image: './photos/jonas_nilsson.jpg' },
    { id: 20, name: 'Kristopher Gray', image: './photos/kristopher_gray.jpg' },
    { id: 21, name: 'Linnea Saxvik', image: './photos/linnea_saxvik.png' },
    { id: 22, name: 'Linus Ohlander', image: './photos/linus_ohlander.JPG' },
    { id: 23, name: 'Louise Keinström', image: './photos/louise_keinström.jpg' },
    { id: 24, name: 'Louise Murray', image: './photos/louise_murray.jpg' },
    { id: 25, name: 'Ludvig Lundberg', image: './photos/ludvig_lundberg.jpg' },
    { id: 26, name: 'Malin Kytta', image: './photos/malin_kytta.jpg' },
    { id: 27, name: 'Mans Edenfalk', image: './photos/mans_edenfalk.jpg' },
    { id: 28, name: 'Marcus Birgersson', image: './photos/marcus_birgersson.png' },
    { id: 29, name: 'Maryia Tamasheuskaya', image: './photos/maryia_tamasheuskaya.jpg' },
    { id: 30, name: 'Michelle Klemendz', image: './photos/michelle_klemendz.jpg' },
    { id: 31, name: 'Mohammad Mzien', image: './photos/mohammad_mzien.jpg' },
    { id: 32, name: 'Nastassia Martin', image: './photos/nastassia_martin.jpg' },
    { id: 33, name: 'Patrik He', image: './photos/patrik_he.png' },
    { id: 34, name: 'Philippe Legall', image: './photos/philippe_legall.jpg.jpg' },
    { id: 35, name: 'Sandra Vidalin', image: './photos/Sandra_vidalin.png.jpg' },
    { id: 36, name: 'Simon Bengtsson', image: './photos/simon_bengtsson.png' },
    { id: 37, name: 'Sofia Travnicek Mattiasson', image: './photos/sofia_travnicek_mattiasson.jpg' },
    { id: 38, name: 'Sonja Sviden', image: './photos/sonja_sviden.jpg' },
    { id: 39, name: 'Tanja Soderholm', image: './photos/Tanja_soderholm.jpg' },
    { id: 40, name: 'Viktor Pettersson', image: './photos/viktor_pettersson.jpeg' },
];

let arrayOfClassmates = [];
let question = {
    id: '',
    image: '',
    names: [
        '', '', '', ''
    ]
};
let correctAnswers = 0;
let selectedNum = 0;
let numOfQuestions = 0;

function selectHowMany(num, id) {
    selectedNum = num;
    console.log(classmates);
    document.getElementsByClassName('personsnum')[id].classList.add('selectedButton');
    for (let i = 0; i < document.getElementsByClassName('personsnum').length; i++) {
        document.getElementsByClassName('personsnum')[i].disabled = true;
        if (i != id) {
            document.getElementsByClassName('personsnum')[i].classList.remove('selectedButton');
        }
    }

    loadArray(num);
}

function selectNameOption(id) {
    document.getElementsByClassName('nameOption')[id].classList.add('selectedButton');
    for (let i = 0; i < document.getElementsByClassName('nameOption').length; i++) {
        if (i != id) {
            document.getElementsByClassName('nameOption')[i].classList.remove('selectedButton');
        }
    }

    document.querySelector('.check').disabled = false;
}

function loadArray(num) {
    let k = 0;
    let j = [];
    while (k < num) {
        let randomPerson = Math.floor(Math.random() * classmates.length);
        if (!j.includes(classmates[randomPerson].id)) {
            arrayOfClassmates.push(Object.assign({}, classmates[randomPerson]));
            j.push(classmates[randomPerson].id);
            k++;
        }
    }
    console.log(arrayOfClassmates);
    console.log(classmates);

    startGame();
}


function startGame() {

    for (let i = 0; i < document.getElementsByClassName('nameOption').length; i++) {
        document.getElementsByClassName('nameOption')[i].disabled = false;
        document.getElementsByClassName('nameOption')[i].style.display = 'block';
    }


    document.getElementsByClassName('check')[0].style.display = 'flex';
    document.getElementsByClassName('next')[0].style.display = 'flex';

    loadNext();
}

function loadNext() {
    numOfQuestions++;
    console.log(numOfQuestions);
    console.log(arrayOfClassmates);
    if (numOfQuestions <= selectedNum) {

        question = {
            id: '',
            image: '',
            names: [
                '', '', '', ''
            ]
        };

        document.querySelector('.check').disabled = true;
        document.querySelector('.next').disabled = true;

        for (let i = 0; i < document.getElementsByClassName('nameOption').length; i++) {
            document.getElementsByClassName('nameOption')[i].disabled = false;
            document.getElementsByClassName('nameOption')[i].classList.remove('selectedButton');
            document.getElementsByClassName('nameOption')[i].classList.remove('correct-answer');
        }

        loadQuestion();
    }
    else {
        console.log('end');
        endOfTheGame();
    }
}

function endOfTheGame() {

    showResult();

    correctAnswers = 0;
    numOfQuestions = 0;
    arrayOfClassmates = [];


    document.getElementsByClassName('check')[0].style.display = 'none';
    document.getElementsByClassName('next')[0].style.display = 'none';

    document.querySelector('.imageBoxText').style.display = 'none';
    document.querySelector('.restart').style.display = 'flex';
    document.querySelector('.imageBoxImg').style.display = 'none';

    for (let i = 0; i < document.getElementsByClassName('personsnum').length; i++) {
        //  document.getElementsByClassName('personsnum')[i].disabled = true;
        document.getElementsByClassName('personsnum')[i].classList.remove('selectedButton');
    }

    for (let i = 0; i < document.getElementsByClassName('nameOption').length; i++) {
        document.getElementsByClassName('nameOption')[i].classList.remove('selectedButton');
        document.getElementsByClassName('nameOption')[i].classList.remove('correct-answer');
        document.getElementsByClassName('nameOption')[i].disabled = true;
        document.getElementsByClassName('nameOption')[i].style.display = 'none';
    }

    document.querySelector('.check').disabled = true;
    document.querySelector('.next').disabled = true;

}

function restartGame() {
    document.querySelector('.imageBoxText').style.display = 'block';
    document.querySelector('.restart').style.display = 'none';
    document.querySelector('.result').innerHTML = '';

    document.getElementsByClassName('personsnum')[0].disabled = false;
    document.getElementsByClassName('personsnum')[1].disabled = false;
    document.getElementsByClassName('personsnum')[2].disabled = false;
    for (let i = 0; i < document.getElementsByClassName('personsnum').length; i++) {
        document.getElementsByClassName('personsnum')[i].disabled = false;
    }

}

function loadQuestion() {
    loadPhoto();
    document.querySelector('.next').disabled = true;
}

function loadPhoto() {
    while (question.image == '') {
        question.id = Math.floor(Math.random() * arrayOfClassmates.length);
        console.log(question.id + '  ' + arrayOfClassmates.length);
        if (arrayOfClassmates[question.id].image != '') {
            question.image = arrayOfClassmates[question.id].image;
            arrayOfClassmates[question.id].image = '';
            console.log(question.image);
        }
    }


    document.querySelector('.imageBoxText').style.display = 'none';
    document.querySelector('.imageBoxImg').style.display = 'inline-block';
    document.querySelector('.imageBoxImg').src = question.image;
    loadNameOptions();
}

function loadNameOptions() {
    question.names[Math.floor(Math.random() * 4)] = arrayOfClassmates[question.id].name;
    while (question.names.includes('')) {
        let randomPlace = Math.floor(Math.random() * 4);
        let randomName = classmates[Math.floor(Math.random() * 41)].name;
        console.log(randomPlace, randomName);
        if (question.names[randomPlace] == '' && !question.names.includes(randomName)) {
            question.names[randomPlace] = randomName;
        }
    }

    fillNameOptions();
}

function fillNameOptions() {
    for (let i = 0; i < 4; i++) {
        document.getElementsByClassName('nameOption')[i].innerHTML = question.names[i];
    }
}

function checkAnswer() {
    for (let i = 0; i < document.getElementsByClassName('nameOption').length; i++) {
        document.getElementsByClassName('nameOption')[i].disabled = true;
        console.log(arrayOfClassmates[question.id].name);
        if (document.getElementsByClassName('nameOption')[i].innerHTML == arrayOfClassmates[question.id].name) {
            document.getElementsByClassName('nameOption')[i].classList.add('correct-answer');
            if (document.getElementsByClassName('nameOption')[i].classList.contains('selectedButton')) {
                correctAnswers++;
            }
        }

        document.querySelector('.next').disabled = false;
    }
}

function showResult() {
    document.querySelector('.result').innerHTML = correctAnswers + ' / ' + arrayOfClassmates.length;
}  
