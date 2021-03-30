export class User {
    sumAnswer = 0;
    constructor() {
        let answerChecked = false;
        let lastQuestion = false;
        document.addEventListener('my-event', (event) => {
            answerChecked = event.detail.userAnswerChecked;
            lastQuestion = event.detail.userNumberAnswerChecked;
            if (answerChecked === true) {
                this.sumAnswer += 1;
            }
            if (lastQuestion === true) {
                this.createSumAnswer();
                document.querySelector('.question').innerHTML = '';
                document.querySelector('.allAnswer').innerHTML = '';
                document.querySelector('.acceptButton').innerHTML = '';
            }
        });
    }
    createNode(element, attributes) {
        const elem = document.createElement(element);
        Object.assign(elem, attributes);
        return elem;
    }
    createSumAnswer() {
        const divSumAnswer = this.createNode('div', {
            className: 'sumAnswer',
            textContent: `Правильных ответов: ` + this.sumAnswer,
        });
        document.querySelector('.nameGame').append(divSumAnswer);
    }
}
