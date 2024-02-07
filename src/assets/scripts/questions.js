//https://github.com/samayo/country-json/tree/master

const QuestionTypes = {
    BOOL: "BOOL",
    MULTIPLE_CHOICE: "MULTIPLE_CHOICE",
    NUMBER: "NUMBER",
    TEXT: "TEXT",
    NUMBER_RANGE: "NUMBER_RANGE",
}

const Questions = [
    {
        Promt: "Do you want to go to the beach?",
        QuestionType: QuestionTypes.BOOL,
        Filter: async function (Possibilities) {

        }
    },
    { 
        Promt: "Name: ",
        QuestionTypes: QuestionTypes.TEXT,
        Filter: async function (Possibilities){

        }
    },
    {
        Promt: "Gender: ",
        QuestionTypes: QuestionTypes.BOOL,
        Filter: async function (Possibilities){
            
        }
    },
    {
        Promt: "what is for you a comfortable height above sea level? ",
        QuestionTypes: QuestionTypes.TEXT,
        Filter: async function (Possibilities){
            
        }
    },
    {
        Promt: "Do you like to live near the coast ",
        QuestionTypes: QuestionTypes.BOOL,
        Filter: async function (Possibilities){
            
        }
    },
    {
        Promt: "Do you like the sun of something cooler? ",
        QuestionTypes: QuestionTypes.MULTIPLE_CHOICE,
        Filter: async function (Possibilities){
            
        }
    },
    {
        Promt: "What woud you like be the height of your potensal partner: ",
        QuestionTypes: QuestionTypes.NUMBER,
        Filter: async function (Possibilities){
            
        }
    },
    {
        Promt: "Would you like to go to a big country ",
        QuestionTypes: QuestionTypes.MULTIPLE_CHOICE,
        Filter: async function (Possibilities){
            
        }
    },
]