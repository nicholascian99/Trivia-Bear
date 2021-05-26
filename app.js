const startScreenH1 = document.getElementById("start-screen-h1")
const startScreenHoney = document.getElementById("start-screen-honey")
const startScreenStart = document.getElementById("start-screen-start")
const startScreenBear1 = document.getElementById("start-screen-bear1")
const startScreenDiv = document.getElementById("start-screen-div")

const questionContainer = document.getElementById("question-container")
const questionBox = document.getElementById("question-box")
const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')
const nextButton = document.getElementById("next-button")

let mixedQuestions, currentQuestionIndex

// console.log(questionElement)
// console.log(questionContainer)

startScreenStart.addEventListener('click', startGame)


function startGame() {
    console.log('Game Start!!!')
    startScreenH1.classList.add('hide')
    startScreenHoney.classList.add('hide')
    startScreenStart.classList.add('hide')
    startScreenBear1.classList.add('hide')
    startScreenDiv.classList.add('hide')

    questionContainer.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
    

}

function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innterText = question.question
}

function selectAnswer() {

}
let questions = [
    {
        question: "How likely is a polar bear successful when it goes hunting for food?",
        answers: [
            {text: "less than 2%", correct:true},
            {text: "15%", corrent:false},
            {text: "30%", correct:false},
            {text: "greater than 50%",correct:false}
        ]
    },
    {
        question:"When stumbled upon, which of these bears should you NOT play dead around?",
        answers:[
            {text: "North American black bears"},
            {text: "Grizzly Bears"},
            {text: "Brown Bears"},
            {text: "All of these, playing dead doesn't actually work"},
        ]
    },
    {
        question:"How many species of bears exists today?",
        answers:[
            {text: "8"},
            {text: "18"},
            {text: "28"},
            {text: "5"},
        ]
    },
    {
        question:"How much of the Giant Panda's diet is strictly bamboo?",
        answers:[
            {text: "99%"},
            {text: "75%"},
            {text: "50%"},
            {text: "25%"},
        ]
    },
    {
        question:"Which species is the only bear that routines carries their young on their backs?",
        answers:[
            {text: "Grizzly Bears"},
            {text: "Giant Panda"},
            {text: "Sloth Bear"},
            {text: "Sun Bear"},
        ]
    }




        ]

    