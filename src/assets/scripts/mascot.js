class Mascot {
    constructor(Element) {
        this.Element = Element
        this.SpeechBubble = Element.querySelector('.speechballoon')
    }

    async SpeechError() {
        this.SpeechBubble.innerHTML = "<a href='/' class='error'>Click here to start.</a>"
        document.querySelector(".questions").innerHTML = ""
    }

    async Speak(Text) {
        this.SpeechBubble.innerText = ''
        let LastChar = ''
        try {
            await speakSound(Text, 2)
        } catch (error) {
            return this.SpeechError()
        }
        for (const Char of Text) {
            this.SpeechBubble.innerText += `${LastChar == " " ? " " : ""}${Char}`
            LastChar = Char
            await new Promise(resolve => setTimeout(resolve, 30))
        }
    }
}

window.mascot = new Mascot(document.querySelector('.mascot'))