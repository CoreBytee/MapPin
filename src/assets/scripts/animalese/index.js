let Loaded = false

const Synth = new Animalese(
    "./assets/sounds/animalese.wav",
    () => { Loaded = true }
)

window.speakSound = async function(Text, Pitch) {
    if (!Loaded) {
        await new Promise(resolve => setTimeout(resolve, 10))
        return speakSound(Text, Pitch)
    }
    const AudioFile = new Audio()
    AudioFile.src = Synth.Animalese(Text, true, Pitch).dataURI
    return AudioFile.play()
}