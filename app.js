const correct = document.getElementsByClassName("correct")
console.log(correct)

const wrong = document.getElementsByClassName("wrong")
console.log(wrong)

const startScreenH1 = document.getElementById("start-screen-h1")
const startScreenHoney = document.getElementById("start-screen-honey")
const startScreenStart = document.getElementById("start-screen-start")
const startScreenBear1 = document.getElementById("start-screen-bear1")
const startScreenDiv = document.getElementById("start-screen-div")

const questionContainer = document.getElementById("question-container")
const questionBox = document.getElementById("question-box")
const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-button")


let mixedQuestions, currentQuestionIndex

// console.log(questionElement)
// console.log(questionContainer)

startScreenStart.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame() {
    console.log('Game Start!!!')
    startScreenH1.classList.add('hide')
    startScreenHoney.classList.add('hide')
    startScreenStart.classList.add('hide')
    startScreenBear1.classList.add('hide')
    startScreenDiv.classList.add('hide')

    questionContainer.classList.remove('hide')
    mixedQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
    

}

function setNextQuestion(){
    resetQuestionCard()
    showQuestion(mixedQuestions[currentQuestionIndex])

}


function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtons.appendChild(button)
    })
}


function resetQuestionCard() {
    nextButton.classList.add("hide")
    while (answerButtons.firstChild) {
        console.log(answerButtons.firstChild)
        answerButtons.removeChild
        (answerButtons.firstChild)
    }
}




function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
        
    })
    if(mixedQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    }else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
    
}



function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        // console.log('correct')
        
    }else {
        element.classList.add('wrong')
        // console.log('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}



const questions = [
    {
        question: "How likely is a polar bear successful when it goes hunting for food?",
        answers: [
            {text: "less than 2%", correct:true},
            {text: "15%", correct:false},
            {text: "30%", correct:false},
            {text: "greater than 50%",correct:false}
        ]
    },
    {
        question:"When stumbled upon, which of these bears should you NOT play dead around?",
        answers:[
            {text: "All of these, playing dead doesn't actually work",correct:false},
            {text: "Grizzly Bears", correct:false},
            {text: "Brown Bears", correct:false},
            {text: "North American black bears", correct:true},
        ]
    },
    {
        question:"How many species of bears exists today?",
        answers:[
            {text: "5", correct:false},
            {text: "8", correct:true},
            {text: "18", correct: false},
            {text: "28", correct: false},
        ]
    },
    {
        question:"How much of the Giant Panda's diet is strictly bamboo?",
        answers:[
            {text: "99%", correct:true},
            {text: "75%", correct: false},
            {text: "50%", correct:false},
            {text: "25%", correct:false},
        ]
    },
    {
        question:"Which species is the only bear that routinely carries their young on their backs?",
        answers:[
            {text: "Grizzly Bears", correct:false},
            {text: "Giant Panda",correct:false},
            {text: "Sloth Bear",correct:true},
            {text: "Sun Bear",correct:false},
        ]
    }




        ]

    