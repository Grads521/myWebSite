export class Game {
    myQuestions = [
        {
            question: 'Мой вопрос 1',
            answer: ['Нет', 'Да', 'Может быть', 'Конечно'],
            rightAnswer: 3,
        },
        {
            question: 'Мой вопрос 2',
            answer: ['Да', 'Нет', 'Может быть', 'Много'],
            rightAnswer: 3,
        },
        {
            question: 'Мой вопрос 3',
            answer: ['ывфыв', '1', '2', '3'],
            rightAnswer: 3,
        },
        {
            question: 'Мой вопрос 4',
            answer: ['0', 'ыфв1', '2', '3'],
            rightAnswer: 3,
        },
        {
            question: 'Мой вопрос 5',
            answer: ['0', '1', '2ыфвф', '3'],
            rightAnswer: 3,
        },
    ]

    questionNumber = 0;

    constructor() {
        this.renderStartButton();
    }

    renderStartButton() {
        const startButton = document.createElement('button');
        startButton.setAttribute('class', 'startButton');
        startButton.innerText = 'Старт';
        startButton.addEventListener('click', () => {
            this.start();
        });
        document.querySelector('.wrapper').append(startButton);
    }

    start() {
        // const createDiv = document.createElement('div');
        // createDiv.setAttribute('class', 'createDiv');
        // document.querySelector('.wrapper').append(createDiv);
1
        document.querySelector('.startButton').hidden = true;

        const showQuestion = document.createElement('div');
        showQuestion.setAttribute('class', 'showQuestion');
        showQuestion.innerText = this.myQuestions[this.questionNumber].question;

        const allAnswer = document.createElement('div');
        allAnswer.setAttribute('class', 'allAnswer');

        const createDivAcceptButton = document.createElement('div');
        createDivAcceptButton.setAttribute('class', 'acceptButton');

        const acceptButton = document.createElement('button');
        acceptButton.setAttribute('type', 'submit');
        acceptButton.innerText = 'Подтвердить';

        acceptButton.addEventListener('click', () => {
            this.accept();
        });

        const info = document.querySelector('.wrapper');

        info.append(showQuestion);

        info.append(allAnswer);

        info.append(createDivAcceptButton);

        document.querySelector('.acceptButton').append(acceptButton);

        this.myQuestions[this.questionNumber].answer.forEach((value, i) => {
            const createButtonAnswer = document.createElement('input');
            createButtonAnswer.setAttribute('type', 'radio');
            createButtonAnswer.setAttribute('id', `answer${i + 1}`);
            createButtonAnswer.setAttribute('value', `value${i + 1}`);
            createButtonAnswer.setAttribute('name', 'contact');

            const showTextAnswer = document.createElement('label');
            showTextAnswer.setAttribute('for', `answer${i + 1}`);
            showTextAnswer.innerText = value;

            document.querySelector('.allAnswer').append(createButtonAnswer);

            document.querySelector('.allAnswer').append(showTextAnswer);
        });
    }

    nextQuestion() {
        const nextQuestion = document.createElement('div');
        nextQuestion.innerText = this.myQuestions[this.questionNumber].question;
        document.querySelector('.showQuestion').append(nextQuestion);
    }

    nextAnswer() {
        this.myQuestions[this.questionNumber].answer.forEach((value, i) => {
            const createButtonAnswer = document.createElement('input');
            createButtonAnswer.setAttribute('type', 'radio');
            createButtonAnswer.setAttribute('id', `answer${i + 1}`);
            createButtonAnswer.setAttribute('value', `${i + 1}`);
            createButtonAnswer.setAttribute('name', 'contact');

            const showTextAnswer = document.createElement('label');
            showTextAnswer.innerText = value;
            showTextAnswer.setAttribute('for', `answer${i + 1}`);

            document.querySelector('.allAnswer').append(createButtonAnswer);

            document.querySelector('.allAnswer').append(showTextAnswer);
        });
    }

    accept() {

        this.questionNumber += 1;
        document.querySelector('.showQuestion').innerHTML = '';
        document.querySelector('.allAnswer').innerHTML = '';
        this.nextQuestion();
        this.nextAnswer();
    }
}
