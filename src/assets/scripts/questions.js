//https://github.com/samayo/country-json/tree/master

const QuestionTypes = {
    BOOL: "BOOL",
    MULTIPLE_CHOICE: "MULTIPLE_CHOICE",
    NUMBER: "NUMBER",
    TEXT: "TEXT",
    NUMBER_RANGE: "NUMBER_RANGE",
    CONTINUE: "CONTINUE"
}

const Questions = [
    {
        Prompt: "Hi, I'm Pinido your love finder. I will help you find your place for true love. Just help me with some questions and you surely fall in love.",
        QuestionType: QuestionTypes.CONTINUE,
        Filter: async function (Possibilities) {
            return Possibilities
        }
    },
    { 
        Prompt: "What is your name?",
        QuestionType: QuestionTypes.TEXT,
        Filter: async function (Possibilities){
            return Possibilities
        }
    },
    {
        Prompt: "What is your gender?",
        QuestionType: QuestionTypes.TEXT,
        Options: {Male: true, Female: false},
        Filter: async function (Possibilities){
            return Possibilities
        }
    },
    {
        Prompt: "Do you want to go to the beach?",
        QuestionType: QuestionTypes.BOOL,
        Filter: async function (Possibilities) {
            return Possibilities
        }
    },
    {
        Prompt: "What is for you a comfortable height above sea level?",
        QuestionType: QuestionTypes.NUMBER,
        Filter: async function (Possibilities){
            return Possibilities
        }
    },
    {
        Prompt: "Do you like to live near the coast?",
        QuestionType: QuestionTypes.BOOL,
        Filter: async function (Possibilities){
            return Possibilities
        }
    },
    {
        Prompt: "Do you like the sun or not?",
        QuestionType: QuestionTypes.BOOL,
        Filter: async function (Possibilities){
            return Possibilities
        }
    },
    {
        Prompt: "What would you like be the height of your potential partner?",
        QuestionType: QuestionTypes.NUMBER,
        Filter: async function (Possibilities){
            return Possibilities
        }
    },
    {
        Prompt: "Would you like to go to a big country?",
        QuestionType: QuestionTypes.BOOL,
        Options: {Yes: true, No: false},
        Filter: async function (Possibilities){
            return Possibilities
        }
    },
]

export { Questions, QuestionTypes }