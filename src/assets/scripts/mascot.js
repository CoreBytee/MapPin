class Mascot {
    constructor(Element) {
        this.Element = Element
        this.SpeechBubble = Element.querySelector('.speechballoon')
    }

    async SpeechError() {
        this.SpeechBubble.innerHTML = "<a href='/' class='error'>Click here to start.</a>"
        document.querySelector(".questions").innerHTML = ""
    }

    async SpeakAnimation(State) {
        this.Speaking = State
        if (State) {
            this.Element.classList.add('speaking')
        } else {
            this.Element.classList.remove('speaking')
        }
    }

    async Speak(Text) {
        this.SpeakAnimation(true)
        this.SpeechBubble.innerText = ''
        let LastChar = ''
        try {
            await speakSound(Text, 2)
        } catch (error) {
            console.log(error)
            return this.SpeechError()
        }
        for (const Char of Text) {
            this.SpeechBubble.innerText += `${LastChar == " " ? " " : ""}${Char}`
            LastChar = Char
            await sleep(30)
        }
        this.SpeakAnimation(false)
    }
}

window.mascot = new Mascot(document.querySelector('.mascot'))