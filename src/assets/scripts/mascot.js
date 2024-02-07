class Mascot {
    constructor(Element) {
        this.Element = Element
        this.SpeechBubble = Element.querySelector('.speechballoon')
        this.SpeakSound = new Audio('/assets/sounds/speak.mp3')
    }

    async Speak(Text) {
        this.SpeechBubble.innerText = ''
        let LastChar = ''
        speakSound(Text, 2)
        for (const Char of Text) {
            this.SpeechBubble.innerText += `${LastChar == " " ? " " : ""}${Char}`
            LastChar = Char
            await new Promise(resolve => setTimeout(resolve, 30))
        }
    }
}

window.mascot = new Mascot(document.querySelector('.mascot'))