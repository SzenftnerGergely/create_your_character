const characterName = document.getElementById("character-name") as HTMLElement
const inputName = document.getElementById("name-input") as HTMLInputElement

const selectCharacterClass = document.getElementById("character-class-selecet") as HTMLSelectElement
const characterClassImage = document.getElementById("character-class-img") as HTMLImageElement

const selectCharacterGender = document.getElementById("character-gender") as HTMLSelectElement

const selectCharacterRace = document.getElementById("character-race-selecet") as HTMLSelectElement
const characterRaceImage = document.getElementById("character-img") as HTMLImageElement


inputName.addEventListener("input", function(event) {
    let target = event.target as HTMLInputElement
    characterName.innerHTML = target.value
})

const renderClass = () => characterClassImage.src = `./images/${selectCharacterClass.value}.png`

const renderRace = () => characterRaceImage.src = `./images/${selectCharacterRace.value}-${selectCharacterGender.value}.png`

selectCharacterRace.addEventListener("change", renderRace)
selectCharacterGender.addEventListener("change", renderRace)
selectCharacterClass.addEventListener("change", renderClass)