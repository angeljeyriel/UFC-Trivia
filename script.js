const quizData = [
    {
        question: "Which amongst these UFC legends have the least amount of title fight victories?",
        a: "Georges Saint-Pierre",
        b: "Jon Jones",
        c: "Demetrious Johnson",
        d: "Anderson Silva",
        correct: "d",
    },
    {
        question: "Who has the record for the most fight finishes in the UFC?",
        a: "Jon Jones",
        b: "Khabib Nurmagomedov",
        c: "Charles Oliviera",
        d: "Ronda Rousey",
        correct: "c",
    },
    {
        question: "Which Heavyweight fighter has the most knockouts in the UFC?",
        a: "Francis Ngannou",
        b: "Derrick Lewis",
        c: "Cain Velasquez",
        d: "Mark Hunt",
        correct: "b",
    },
    {
        question: "Who amongst these fighters never attained 'Champ-Champ' status in the UFC?",
        a: "Conor McGregor",
        b: "Daniel Cormier",
        c: "Henry Cejudo",
        d: "Khabib Nurmagomedov",
        correct: "d",
    },
    {
        question: "Who has the most title fight victories in the UFC Women's division?",
        a: "Joanna Jędrzejczyk",
        b: "Ronda Rousey",
        c: "Amanda Nunes",
        d: "Valentina Shevchenko",
        correct: "c",
    },
    {
        question: "Which of the following is the current record fo the fastest knockout ever in a UFC fight?",
        a: "Jorge Masvidal, 5s",
        b: "Chan Sung Jung, 7s",
        c: "Leon Edwards, 8s",
        d: "Mark Weir, 10s",
        correct: "a",
    },
]

const answerEls = document.querySelectorAll('.answer')
const quiz = document.getElementById('quiz')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `                                      
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
                `
        }


    }



})