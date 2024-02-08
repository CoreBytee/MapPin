import { QuestionTypes, Questions } from "./questions.js"

class QuestionManager {
    constructor() {
        this.Questions = Questions
        this.CurrentQuestionIndex = 0
        this.QuestionsHolder = document.querySelector(".questions")
    }

    Build() {
        this.QuestionsHolder.innerHTML = ""
        for (const Question of this.Questions) {
            let QuestionElement = document.createElement("div")
            QuestionElement.classList.add("question")
            this.QuestionsHolder.appendChild(QuestionElement)

            console.log(Question.Prompt, Question.QuestionType)

            if (Question.QuestionType == QuestionTypes.CONTINUE) {
                const ButtonElement = document.createElement("button")
                ButtonElement.innerText = "Continue"
                ButtonElement.addEventListener("click", () => {
                    this.Show(this.CurrentQuestionIndex + 1)
                })

                QuestionElement.appendChild(ButtonElement)
            } else if (Question.QuestionType == QuestionTypes.BOOL) {
                const YesButton = document.createElement("button")
                YesButton.innerText = "Yes"
                YesButton.addEventListener("click", () => {
                    this.Show(this.CurrentQuestionIndex + 1)
                })

                const NoButton = document.createElement("button")
                NoButton.innerText = "No"
                NoButton.addEventListener("click", () => {
                    this.Show(this.CurrentQuestionIndex + 1)
                })

                QuestionElement.appendChild(YesButton)
                QuestionElement.appendChild(NoButton)
            } else if (Question.QuestionType == QuestionTypes.TEXT) {
                const InputElement = document.createElement("input")
                InputElement.type = "text"
                QuestionElement.appendChild(InputElement)

                const ButtonElement = document.createElement("button")
                ButtonElement.innerText = "Submit"
                ButtonElement.addEventListener("click", () => {
                    this.Show(this.CurrentQuestionIndex + 1)
                })

                QuestionElement.appendChild(ButtonElement)
            } else if (Question.QuestionType == QuestionTypes.MULTIPLE_CHOICE) {
                for (const Option in Question.Options) {
                    const ButtonElement = document.createElement("button")
                    ButtonElement.innerText = Option
                    ButtonElement.addEventListener("click", () => {
                        this.Show(this.CurrentQuestionIndex + 1)
                    })

                    QuestionElement.appendChild(ButtonElement)
                }
            } else if (Question.QuestionType == QuestionTypes.NUMBER) {
                const InputElement = document.createElement("input")
                InputElement.type = "number"
                QuestionElement.appendChild(InputElement)

                const ButtonElement = document.createElement("button")
                ButtonElement.innerText = "Submit"
                ButtonElement.addEventListener("click", () => {
                    this.Show(this.CurrentQuestionIndex + 1)
                })

                QuestionElement.appendChild(ButtonElement)
            }
        }
    }

    async Finish() {
        this.QuestionsHolder.innerText = ""
        this.QuestionsHolder.style.transform = null

        const ResultElement = document.createElement("div")
        ResultElement.classList.add("question")
        ResultElement.innerText = "Calculating your result..."
        await mascot.Speak("Thanks for answering the questions!")
        await sleep(1000)
        this.QuestionsHolder.appendChild(ResultElement)
        
        const Countries = await fetch("/assets/data/countries.json").then(response => response.json())

        console.log(Countries)

        await mascot.Speak("Your country of choice is...")
        await sleep(1000)
        await mascot.Speak("Drumroll please...")
        await sleep(1000)

        const Country = Countries[Math.floor(Math.random() * Countries.length)]
        const A = new Audio(`/assets/sounds/tada.mp3`)
        A.play()
        await mascot.Speak(Country.country)
        ResultElement.innerText = `Congratulations! You should move to ${Country.country}!`
    }

    async Show(Index) {
        if (mascot.Speaking) { return }
        this.CurrentQuestionIndex = Index
        if (Index >= this.Questions.length) {
            return this.Finish()
        }
        await mascot.Speak(this.Questions[Index].Prompt)
        this.QuestionsHolder.style.display = null
        this.QuestionsHolder.style.transform = `translateX(${Index * -100}vw)`
    }
}

window.questionsManager = new QuestionManager()